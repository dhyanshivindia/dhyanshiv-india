import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// POST /api/subscription/upgrade - Upgrade to a higher tier
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { newTier, razorpayPlanId, razorpaySubId } = await request.json()

    if (!newTier || !['normal', 'pro', 'premium'].includes(newTier)) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { subscription: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const tierPricing = {
      normal: 0,
      pro: 59900,
      premium: 249900,
    }

    const oldTier = user.tier
    const newPrice = tierPricing[newTier as keyof typeof tierPricing]

    // Update subscription
    const subscription = await prisma.subscription.update({
      where: { userId: user.id },
      data: {
        tier: newTier,
        price: newPrice,
        razorpayPlanId: razorpayPlanId || undefined,
        razorpaySubId: razorpaySubId || undefined,
      },
    })

    // Update user tier
    await prisma.user.update({
      where: { id: user.id },
      data: { tier: newTier },
    })

    // Update quota limits
    const quotaLimits = {
      normal: 10,
      pro: 100,
      premium: 9999,
    }

    await prisma.quota.update({
      where: { userId: user.id },
      data: {
        requestsLimit: quotaLimits[newTier as keyof typeof quotaLimits] || 100,
      },
    })

    // Record history
    await prisma.subscriptionHistory.create({
      data: {
        userId: user.id,
        fromTier: oldTier,
        toTier: newTier,
        reason: 'upgrade',
      },
    })

    return NextResponse.json({
      success: true,
      message: `Upgraded from ${oldTier} to ${newTier}`,
      subscription,
    })
  } catch (error) {
    console.error('Error upgrading subscription:', error)
    return NextResponse.json(
      { error: 'Failed to upgrade subscription' },
      { status: 500 }
    )
  }
}
