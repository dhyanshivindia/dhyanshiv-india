import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/password'

export const dynamic = 'force-dynamic'

function hashToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex')
}

export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get('token')
    if (!token) {
      return NextResponse.json({ valid: false, error: 'Token is required' }, { status: 400 })
    }

    const hashedToken = hashToken(token)
    const record = await prisma.verificationToken.findUnique({
      where: { token: hashedToken },
    })

    if (!record || record.expires < new Date()) {
      return NextResponse.json({ valid: false, error: 'Reset token is invalid or expired' }, { status: 400 })
    }

    return NextResponse.json({ valid: true }, { status: 200 })
  } catch (error) {
    console.error('Reset token verify error:', error)
    return NextResponse.json({ valid: false, error: 'Unable to verify token' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json()

    if (!token || !password) {
      return NextResponse.json({ error: 'Token and password are required' }, { status: 400 })
    }

    if (typeof password !== 'string' || password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const hashedToken = hashToken(token)
    const tokenRecord = await prisma.verificationToken.findUnique({
      where: { token: hashedToken },
    })

    if (!tokenRecord || tokenRecord.expires < new Date()) {
      return NextResponse.json({ error: 'Reset token is invalid or expired' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email: tokenRecord.identifier },
      select: { id: true },
    })

    if (!user) {
      await prisma.verificationToken.delete({
        where: {
          identifier_token: {
            identifier: tokenRecord.identifier,
            token: tokenRecord.token,
          },
        },
      })
      return NextResponse.json({ error: 'User account not found' }, { status: 400 })
    }

    const { hash, salt } = hashPassword(password)

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: `${hash}:${salt}`,
      },
    })

    await prisma.verificationToken.delete({
      where: {
        identifier_token: {
          identifier: tokenRecord.identifier,
          token: tokenRecord.token,
        },
      },
    })

    return NextResponse.json({ success: true, message: 'Password reset successful' }, { status: 200 })
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json({ error: 'Unable to reset password' }, { status: 500 })
  }
}
