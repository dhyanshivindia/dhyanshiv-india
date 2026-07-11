import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      // Don't reveal if email exists (security best practice)
      return NextResponse.json({
        success: true,
        message: 'If an account exists, reset link has been sent',
      })
    }

    // Generate reset token (valid for 1 hour)
    const token = crypto.randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 60 * 60 * 1000)

    // Keep only the latest valid reset token for this identifier.
    await prisma.verificationToken.deleteMany({
      where: { identifier: email },
    })

    // Store token in VerificationToken
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: crypto.createHash('sha256').update(token).digest('hex'),
        expires,
      },
    })

    const resetPath = `/reset-password?token=${token}`
    const resetUrl = `${req.nextUrl.origin}${resetPath}`

    // TODO: Integrate email provider and send resetUrl to the user email.
    console.log(`Password reset link for ${email}: ${resetUrl}`)

    const response: {
      success: boolean
      message: string
      debugResetUrl?: string
    } = {
      success: true,
      message: 'Password reset link sent',
    }

    if (process.env.NODE_ENV !== 'production') {
      response.debugResetUrl = resetPath
    }

    return NextResponse.json(response)
  } catch (err) {
    console.error('Forgot password error:', err)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
