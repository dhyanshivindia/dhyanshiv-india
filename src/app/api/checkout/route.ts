import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import Razorpay from 'razorpay'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Sign in required' }, { status: 401 })
  }

  const { serviceId } = await request.json()
  if (!serviceId) return NextResponse.json({ error: 'Missing service id' }, { status: 400 })

  const service = await prisma.service.findUnique({ where: { id: serviceId } })
  if (!service) return NextResponse.json({ error: 'Service not found' }, { status: 404 })

  const keyId = process.env.RAZORPAY_KEY_ID
  const keySecret = process.env.RAZORPAY_KEY_SECRET
  if (!keyId || !keySecret) {
    return NextResponse.json({ error: 'Razorpay is not configured' }, { status: 500 })
  }

  const amount = Math.round((service.rate ?? 0) * (1 + (service.gst ?? 0) / 100) * 100)
  const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret })
  const order = await razorpay.orders.create({
    amount,
    currency: 'INR',
    receipt: `svc_${service.id}_${Date.now()}`.slice(0, 40),
    notes: { serviceId: service.id, email: session.user.email },
  })

  const user = await prisma.user.upsert({
    where: { email: session.user.email },
    create: { email: session.user.email, name: session.user.name },
    update: { name: session.user.name },
  })

  await prisma.order.create({
    data: {
      userId: user.id,
      serviceId: service.id,
      razorpayOrderId: order.id,
    },
  })

  return NextResponse.json({
    key: keyId,
    orderId: order.id,
    amount,
    currency: 'INR',
    itemName: service.itemName ?? service.id,
  })
}
