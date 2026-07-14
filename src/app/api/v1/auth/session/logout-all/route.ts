import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

import { auditEmitter } from '@/lib/audit/emitter'
import { registerPrismaAuditStore } from '@/lib/audit/store'
import { prisma } from '@/lib/prisma'
import { getClientIpFromHeaders } from '@/lib/security/rate-limit'

export const dynamic = 'force-dynamic'

function getTokenSubject(token: Awaited<ReturnType<typeof getToken>>): string | null {
  const sub = token && typeof token === 'object' && 'sub' in token ? (token as { sub?: unknown }).sub : undefined
  return typeof sub === 'string' ? sub : null
}

function getTokenRole(token: Awaited<ReturnType<typeof getToken>>): string | null {
  const role = token && typeof token === 'object' && 'role' in token ? (token as { role?: unknown }).role : undefined
  return typeof role === 'string' ? role : null
}

export async function POST(request: NextRequest) {
  try {
    registerPrismaAuditStore()

    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    const userId = getTokenSubject(token)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const now = new Date()
    const result = await prisma.session.updateMany({
      where: {
        userId,
        revokedAt: null,
      },
      data: {
        revokedAt: now,
      },
    })

    await auditEmitter.emit(
      {
        eventType: 'auth.session.logout_all',
        entityType: 'user',
        entityId: userId,
        metadata: {
          revokedCount: result.count,
        },
      },
      {
        userId,
        role: getTokenRole(token),
        ipAddress: getClientIpFromHeaders(request.headers),
        userAgent: request.headers.get('user-agent') ?? null,
      }
    )

    return NextResponse.json({ success: true, revokedSessions: result.count }, { status: 200 })
  } catch (error) {
    console.error('v1 logout-all error:', error)
    return NextResponse.json({ error: 'Failed to logout from all devices' }, { status: 500 })
  }
}
