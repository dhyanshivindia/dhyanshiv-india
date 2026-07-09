import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json()

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP required' }, { status: 400 })
    }

    const record = await prisma.emailOTP.findUnique({
      where: { email },
    })

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
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 })
    }

    // OTP verified - delete the record
    await prisma.emailOTP.delete({ where: { email } })

    // Update user's emailVerified if they exist
    await prisma.user.updateMany({
      where: { email },
      data: { emailVerified: new Date() },
    })

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully',
    })
  } catch (error) {
    console.error('Verify OTP error:', error)
    return NextResponse.json({ error: 'Failed to verify OTP' }, { status: 500 })
  }
}
