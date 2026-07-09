import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { companyName, phone, industry, tier } = await request.json()

    if (!companyName || !phone || !industry || !tier) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Update user with company details
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        companyName,
        phone,
        tier: tier === 'normal' ? 'normal' : tier === 'pro' ? 'pro' : 'premium',
      },
    })

    // Create subscription record
    const tierPricing = {
      normal: 0,
      pro: 599,
      premium: 2499,
    }

    const price = tierPricing[tier as keyof typeof tierPricing] || 0

    await prisma.subscription.upsert({
      where: { userId: user.id },
      create: {
        userId: user.id,
        tier: tier as string,
        price,
        status: 'active',
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      update: {
        tier: tier as string,
        price,
        status: 'active',
      },
    })

    // Initialize quota based on tier
    const quotaLimits = {
      normal: 10,
      pro: 100,
      premium: 9999,
    }

    await prisma.quota.upsert({
      where: { userId: user.id },
      create: {
        userId: user.id,
        requestsLimit: quotaLimits[tier as keyof typeof quotaLimits] || 100,
        resetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      update: {
        requestsLimit: quotaLimits[tier as keyof typeof quotaLimits] || 100,
      },
    })

    // Record subscription history
    await prisma.subscriptionHistory.create({
      data: {
        userId: user.id,
        fromTier: 'normal',
        toTier: tier as string,
        reason: 'signup',
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Onboarding completed successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        tier: user.tier,
      },
    })
  } catch (error) {
    console.error('Onboarding error:', error)
    return NextResponse.json(
      { error: 'Onboarding failed' },
      { status: 500 }
    )
  }
}
