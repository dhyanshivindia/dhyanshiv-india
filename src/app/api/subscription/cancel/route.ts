import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// POST /api/subscription/cancel - Cancel subscription
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { reason } = await request.json()

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { subscription: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (!user.subscription) {
      return NextResponse.json(
        { error: 'No active subscription' },
        { status: 404 }
      )
    }

    // Downgrade to normal (free) tier
    const subscription = await prisma.subscription.update({
      where: { userId: user.id },
      data: {
        status: 'cancelled',
        tier: 'normal',
        price: 0,
        cancellationDate: new Date(),
        cancellationReason: reason || 'User requested',
      },
    })

    // Update user tier to normal
    await prisma.user.update({
      where: { id: user.id },
      data: { tier: 'normal' },
    })

    // Update quota to normal limits
    await prisma.quota.update({
      where: { userId: user.id },
      data: {
        requestsLimit: 10,
        requestsUsed: 0,
      },
    })

    // Record history
    await prisma.subscriptionHistory.create({
      data: {
        userId: user.id,
        fromTier: user.tier,
        toTier: 'normal',
        reason: 'cancelled',
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Subscription cancelled successfully. You have been downgraded to the free tier.',
      subscription,
    })
  } catch (error) {
    console.error('Error cancelling subscription:', error)
    return NextResponse.json(
      { error: 'Failed to cancel subscription' },
      { status: 500 }
    )
  }
}
