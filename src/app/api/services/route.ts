import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const revalidate = 300

export async function GET() {
  const services = await prisma.service.findMany({
    where: { status: 'Active' },
    orderBy: { itemName: 'asc' },
  })

  return NextResponse.json({ services })
}
