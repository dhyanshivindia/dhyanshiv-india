import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import crypto from 'crypto'

export const dynamic = 'force-dynamic'

const TIER_PRICING: Record<string, number> = {
  pro: 59900,
  premium: 249900,
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { orderId, paymentId, signature, tier } = await request.json()

    if (!orderId || !paymentId || !signature || !tier) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Verify Razorpay signature
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
    hmac.update(orderId + '|' + paymentId)
    const computedSignature = hmac.digest('hex')

    if (computedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 })
    }

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const priceInPaise = TIER_PRICING[tier]
    if (!priceInPaise) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
    }

    // Calculate GST (18%)
    const gst = Math.round(priceInPaise * 0.18)
    const totalAmount = priceInPaise + gst

    // Update user tier
    await prisma.user.update({
      where: { id: user.id },
      data: { tier },
    })

    // Create or update subscription
    const subscription = await prisma.subscription.upsert({
      where: { userId: user.id },
      create: {
        userId: user.id,
        tier,
        status: 'active',
        price: totalAmount,
        razorpayOrderId: orderId,
        razorpayPaymentId: paymentId,
        razorpayPlanId: `plan_${tier}_${Date.now()}`,
        razorpaySubId: `sub_${Date.now()}`,
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      update: {
        tier,
        status: 'active',
        price: totalAmount,
        razorpayOrderId: orderId,
        razorpayPaymentId: paymentId,
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    })

    // Update or create quota based on tier
    const quotaLimits: Record<string, number> = {
      normal: 10,
      pro: 100,
      premium: 999999,
    }

    await prisma.quota.upsert({
      where: { userId: user.id },
      create: {
        userId: user.id,
        requestsUsed: 0,
        requestsLimit: quotaLimits[tier] || 10,
        resetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      update: {
        requestsLimit: quotaLimits[tier] || 10,
        resetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    })

    // Record subscription history
    await prisma.subscriptionHistory.create({
      data: {
        userId: user.id,
        fromTier: user.tier,
        toTier: tier,
        reason: 'upgrade',
        timestamp: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      subscriptionId: subscription.id,
      message: 'Payment verified and subscription activated',
    })
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    )
  }
}
