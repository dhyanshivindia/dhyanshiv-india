import { NextRequest, NextResponse } from 'next/server'

import { auditEmitter } from '@/lib/audit/emitter'
import { registerPrismaAuditStore } from '@/lib/audit/store'
import { prisma } from '@/lib/prisma'
import { applyRateLimit, getClientIpFromHeaders } from '@/lib/security/rate-limit'

export const dynamic = 'force-dynamic'

function isLegacyRequest(request: NextRequest): boolean {
  return request.nextUrl.searchParams.get('legacy') === '1'
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase()
}

async function verifyEmailOtpChallenge(request: NextRequest): Promise<NextResponse> {
  try {
    registerPrismaAuditStore()
    const legacy = isLegacyRequest(request)

    const body = await request.json()
    const email = typeof body?.email === 'string' ? normalizeEmail(body.email) : ''
    const otp = typeof body?.otp === 'string' ? body.otp.trim() : ''

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP required' }, { status: 400 })
    }

    const ipAddress = getClientIpFromHeaders(request.headers)
    const decision = applyRateLimit(`v1-email-otp-verify:${email}:${ipAddress}`, 10, 300)
    if (!decision.allowed) {
      return NextResponse.json({ error: 'Too many requests', retryAfterMs: decision.retryAfterMs }, { status: 429 })
    }

    const record = await prisma.emailOTP.findUnique({ where: { email } })
    if (!record) {
      return NextResponse.json({ error: 'OTP not found' }, { status: 400 })
    }

    if (new Date() > record.expires) {
      return NextResponse.json({ error: 'OTP expired' }, { status: 400 })
    }

    if (record.attempts >= 3) {
      await prisma.emailOTP.delete({ where: { email } })
      return NextResponse.json({ error: 'Too many attempts. Request new OTP' }, { status: 400 })
    }

    if (record.otp !== otp) {
      await prisma.emailOTP.update({
        where: { email },
        data: { attempts: record.attempts + 1 },
      })

      await auditEmitter.emit(
        {
          eventType: 'auth.challenge.email_otp.failed',
          entityType: 'email',
          entityId: email,
          metadata: { reason: 'otp_mismatch' },
        },
        {
          ipAddress,
          userAgent: request.headers.get('user-agent') ?? null,
        }
      )

      const status = legacy ? 401 : 400
      return NextResponse.json({ error: 'Invalid OTP' }, { status })
    }

    await prisma.emailOTP.delete({ where: { email } })
    await prisma.user.updateMany({ where: { email }, data: { emailVerified: new Date() } })

    await auditEmitter.emit(
      {
        eventType: 'auth.challenge.email_otp.verified',
        entityType: 'email',
        entityId: email,
      },
      {
        ipAddress,
        userAgent: request.headers.get('user-agent') ?? null,
      }
    )

    return NextResponse.json({ success: true, message: 'Email verified successfully' }, { status: 200 })
  } catch (error) {
    console.error('v1 verify email otp error:', error)
    return NextResponse.json({ error: 'Failed to verify OTP' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  return verifyEmailOtpChallenge(request)
}
