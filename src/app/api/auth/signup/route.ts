import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateUserCode } from '@/lib/user-code'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { email, fullName, phone, companyName } = await req.json()

    if (!email || !fullName || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }

    // Generate unique user code
    let userCode: string
    let isUnique = false
    let attempts = 0

    while (!isUnique && attempts < 10) {
      userCode = generateUserCode('user')
      const existingCode = await prisma.user.findUnique({
        where: { userCode },
      })
      if (!existingCode) {
        isUnique = true
      }
      attempts++
    }

    if (!isUnique) {
      return NextResponse.json(
        { error: 'Failed to generate unique code' },
        { status: 500 }
      )
    }

    // Create user with verified email
    const user = await prisma.user.create({
      data: {
        email,
        userCode: userCode!,
        fullName,
        phone,
        companyName: companyName || '',
        emailVerified: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      userCode: user.userCode,
      message: 'Account created successfully',
    })
  } catch (err) {
    console.error('Signup error:', err)
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    )
  }
}
