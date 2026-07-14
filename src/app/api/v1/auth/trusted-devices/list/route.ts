import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

function getTokenSubject(token: Awaited<ReturnType<typeof getToken>>): string | null {
  const sub = token && typeof token === 'object' && 'sub' in token ? (token as { sub?: unknown }).sub : undefined
  return typeof sub === 'string' ? sub : null
}

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    const userId = getTokenSubject(token)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const devices = await prisma.trustedDevice.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        deviceId: true,
        deviceName: true,
        ipAddress: true,
        userAgent: true,
        lastUsedAt: true,
        expiresAt: true,
        revokedAt: true,
        createdAt: true,
      },
    })

    return NextResponse.json({ success: true, devices }, { status: 200 })
  } catch (error) {
    console.error('v1 trusted devices list error:', error)
    return NextResponse.json({ error: 'Failed to list trusted devices' }, { status: 500 })
  }
}
