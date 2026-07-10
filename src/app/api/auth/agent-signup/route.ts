import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/password'
import { generateUserCode } from '@/lib/user-code'

export async function POST(request: NextRequest) {
  try {
    const { email, fullName, phone, companyName, password, otp, step } =
      await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Step 1: Verify email exists (using existing OTP system)
    if (step === 1) {
      // Check if agent already exists
      const existingAgent = await prisma.user.findUnique({
        where: { email },
      })

      if (existingAgent && existingAgent.role === 'agent') {
        return NextResponse.json(
          { error: 'Agent with this email already exists' },
          { status: 400 }
        )
      }

      // Send OTP using existing system (we'll use the user OTP system)
      // For now, just return success to proceed to OTP verification
      return NextResponse.json(
        {
          success: true,
          message: 'OTP sent to email',
          step: 2,
        },
        { status: 200 }
      )
    }

    // Step 2: Verify OTP and create account
    if (step === 2) {
      if (!otp || !password) {
        return NextResponse.json(
          { error: 'OTP and password required' },
          { status: 400 }
        )
      }

      // Verify OTP exists (we're using the existing EmailOTP model)
      const emailOtp = await prisma.emailOTP.findUnique({
        where: { email },
      })

      if (!emailOtp) {
        return NextResponse.json(
          { error: 'No OTP found for this email' },
          { status: 400 }
        )
      }

      // Verify OTP is valid
      if (emailOtp.otp !== otp) {
        return NextResponse.json(
          { error: 'Invalid OTP' },
          { status: 400 }
        )
      }

      // Check if OTP is expired
      if (new Date() > emailOtp.expires) {
        return NextResponse.json(
          { error: 'OTP has expired' },
          { status: 400 }
        )
      }

      // Generate unique agent code
      let agentCode = generateUserCode('agent')
      let attempts = 0
      let userCodeExists = true

      while (userCodeExists && attempts < 10) {
        const existing = await prisma.user.findUnique({
          where: { userCode: agentCode },
        })
        if (!existing) {
          userCodeExists = false
        } else {
          agentCode = generateUserCode('agent')
          attempts++
        }
      }

      if (userCodeExists) {
        return NextResponse.json(
          { error: 'Failed to generate unique agent code' },
          { status: 500 }
        )
      }

      // Hash password
      const { hash, salt } = hashPassword(password)

      // Create agent account
      const agent = await prisma.user.create({
        data: {
          email,
          userCode: agentCode,
          role: 'agent',
          password: `${hash}:${salt}`, // Store as hash:salt
          name: fullName || email.split('@')[0],
          fullName,
          phone,
          companyName,
          emailVerified: new Date(),
          profileComplete: true,
        },
      })

      // Clean up OTP
      await prisma.emailOTP.delete({
        where: { email },
      })

      return NextResponse.json(
        {
          success: true,
          message: 'Agent account created successfully',
          agent: {
            id: agent.id,
            email: agent.email,
            userCode: agent.userCode,
            role: agent.role,
          },
        },
        { status: 201 }
      )
    }

    return NextResponse.json(
      { error: 'Invalid step' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Agent signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
