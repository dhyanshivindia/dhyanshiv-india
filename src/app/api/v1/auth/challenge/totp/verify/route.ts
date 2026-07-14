import { NextRequest, NextResponse } from 'next/server'

import { auditEmitter } from '@/lib/audit/emitter'
import { registerPrismaAuditStore } from '@/lib/audit/store'
import { applyRateLimit, getClientIpFromHeaders } from '@/lib/security/rate-limit'
import { verifyTotpCode } from '@/lib/security/totp'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    registerPrismaAuditStore()

    const body = await request.json()
    const totpSecret = typeof body?.totpSecret === 'string' ? body.totpSecret : ''
    const code = typeof body?.code === 'string' ? body.code : ''
    const actorUserId = typeof body?.userId === 'string' ? body.userId : null
    const actorRole = typeof body?.role === 'string' ? body.role : null

    if (!totpSecret || !code) {
      return NextResponse.json({ error: 'totpSecret and code are required' }, { status: 400 })
    }

    const ipAddress = getClientIpFromHeaders(request.headers)
    const decision = applyRateLimit(`v1-totp-verify:${actorUserId ?? 'anonymous'}:${ipAddress}`, 10, 300)
    if (!decision.allowed) {
      return NextResponse.json({ error: 'Too many requests', retryAfterMs: decision.retryAfterMs }, { status: 429 })
    }

    const valid = verifyTotpCode(totpSecret, code)

    await auditEmitter.emit(
      {
        eventType: valid ? 'auth.challenge.totp.verified' : 'auth.challenge.totp.failed',
        entityType: 'user',
        entityId: actorUserId,
      },
      {
        userId: actorUserId,
        role: actorRole,
        ipAddress,
        userAgent: request.headers.get('user-agent') ?? null,
      }
    )

    if (!valid) {
      return NextResponse.json({ error: 'Invalid TOTP code' }, { status: 400 })
    }

    return NextResponse.json({ success: true, message: 'TOTP verified successfully' }, { status: 200 })
  } catch (error) {
    console.error('v1 verify totp error:', error)
    return NextResponse.json({ error: 'Failed to verify TOTP' }, { status: 500 })
  }
}
