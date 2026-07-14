import { NextRequest, NextResponse } from 'next/server'

import { auditEmitter } from '@/lib/audit/emitter'
import { registerPrismaAuditStore } from '@/lib/audit/store'
import { sendEmail } from '@/lib/mail'
import { prisma } from '@/lib/prisma'
import { applyRateLimit, getClientIpFromHeaders } from '@/lib/security/rate-limit'
import { isDisposableEmail } from '@/lib/security/disposable-email'

export const dynamic = 'force-dynamic'

function isLegacyRequest(request: NextRequest): boolean {
  return request.nextUrl.searchParams.get('legacy') === '1'
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase()
}

async function sendEmailOtpChallenge(request: NextRequest): Promise<NextResponse> {
  try {
    registerPrismaAuditStore()

    const body = await request.json()
    const email = typeof body?.email === 'string' ? normalizeEmail(body.email) : ''

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (isDisposableEmail(email)) {
      return NextResponse.json({ error: 'Disposable email not allowed' }, { status: 400 })
    }

    const ipAddress = getClientIpFromHeaders(request.headers)
    const decision = applyRateLimit(`v1-email-otp-send:${email}:${ipAddress}`, 5, 300)
    if (!decision.allowed) {
      return NextResponse.json({ error: 'Too many requests', retryAfterMs: decision.retryAfterMs }, { status: 429 })
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

    const existing = await prisma.emailOTP.findUnique({ where: { email } })
    if (existing) {
      await prisma.emailOTP.update({
        where: { email },
        data: {
          otp,
          expires: expiresAt,
          attempts: 0,
        },
      })
    } else {
      await prisma.emailOTP.create({
        data: {
          email,
          otp,
          expires: expiresAt,
        },
      })
    }

    await sendEmail(
      email,
      `Verification Code: ${otp}`,
      `<p>Your verification code is <strong>${otp}</strong>. It is valid for 10 minutes.</p>`
    )

    await auditEmitter.emit(
      {
        eventType: 'auth.challenge.email_otp.sent',
        entityType: 'email',
        entityId: email,
        metadata: {
          route: request.nextUrl.pathname,
        },
      },
      {
        ipAddress,
        userAgent: request.headers.get('user-agent') ?? null,
      }
    )

    return NextResponse.json({ success: true, message: 'OTP sent to email' }, { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('v1 send email otp error:', message)
    if (isLegacyRequest(request)) {
      return NextResponse.json(
        {
          error: 'Failed to send OTP',
          details: process.env.NODE_ENV === 'development' ? message : undefined,
        },
        { status: 500 }
      )
    }
    return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  return sendEmailOtpChallenge(request)
}
