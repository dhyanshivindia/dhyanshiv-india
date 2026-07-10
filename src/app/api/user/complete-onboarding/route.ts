import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateUserCode } from '@/lib/user-code'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { email, fullName, dob, mobile, aadhaarNumber, panNumber } = await req.json()

    if (!email || !fullName || !dob || !mobile) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!aadhaarNumber && !panNumber) {
      return NextResponse.json({ error: 'Aadhaar or PAN required' }, { status: 400 })
    }

    // Check if user exists or create
    let user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
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

      user = await prisma.user.create({
        data: {
          email,
          userCode: userCode!,
          name: fullName,
          fullName,
          dob: new Date(dob),
          phone: mobile,
          aadhaarNumber: aadhaarNumber || null,
          panNumber: panNumber || null,
          emailVerified: new Date(),
          profileComplete: true,
        },
      })
    } else {
      user = await prisma.user.update({
        where: { email },
        data: {
          name: fullName,
          fullName,
          dob: new Date(dob),
          phone: mobile,
          aadhaarNumber: aadhaarNumber || user.aadhaarNumber,
          panNumber: panNumber || user.panNumber,
          emailVerified: new Date(),
          profileComplete: true,
        },
      })
    }

    // Create Free subscription
    const now = new Date()
    const nextMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
    
    await prisma.subscription.create({
      data: {
        userId: user.id,
        tier: 'normal',
        status: 'active',
        billingCycle: 'monthly',
        price: 0,
        currentPeriodStart: now,
        currentPeriodEnd: nextMonth,
        nextBillingDate: nextMonth,
      },
    })

    // Create default quota
    await prisma.quota.create({
      data: {
        userId: user.id,
        requestsLimit: 10,
        requestsUsed: 0,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Onboarding completed',
      userId: user.id,
    })
  } catch (error) {
    console.error('Complete onboarding error:', error)
    return NextResponse.json({ error: 'Failed to complete onboarding' }, { status: 500 })
  }
}
