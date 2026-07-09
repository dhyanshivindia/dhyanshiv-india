import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// POST /api/subscription/downgrade - Downgrade to a lower tier
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { newTier } = await request.json()

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

    // Validate downgrade (can't downgrade from lower to higher)
    const tierOrder = { normal: 0, pro: 1, premium: 2 }
    if (tierOrder[newTier as keyof typeof tierOrder] > tierOrder[user.tier as keyof typeof tierOrder]) {
      return NextResponse.json(
        { error: 'Cannot downgrade to a higher tier' },
        { status: 400 }
      )
    }

    const tierPricing = {
      normal: 0,
      pro: 59900,
      premium: 249900,
    }

    const oldTier = user.tier
    const newPrice = tierPricing[newTier as keyof typeof tierPricing]

    // Calculate refund (prorated)
    const refundAmount = user.subscription
      ? Math.round(
          (user.subscription.price * (user.subscription.currentPeriodEnd.getTime() - Date.now())) /
          (user.subscription.currentPeriodEnd.getTime() - user.subscription.currentPeriodStart.getTime())
        )
      : 0

    // Update subscription
    const subscription = await prisma.subscription.update({
      where: { userId: user.id },
      data: {
        tier: newTier,
        price: newPrice,
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
        requestsUsed: 0, // Reset usage on downgrade
      },
    })

    // Record history
    await prisma.subscriptionHistory.create({
      data: {
        userId: user.id,
        fromTier: oldTier,
        toTier: newTier,
        reason: 'downgrade',
      },
    })

    return NextResponse.json({
      success: true,
      message: `Downgraded from ${oldTier} to ${newTier}`,
      refundAmount,
      subscription,
    })
  } catch (error) {
    console.error('Error downgrading subscription:', error)
    return NextResponse.json(
      { error: 'Failed to downgrade subscription' },
      { status: 500 }
    )
  }
}
