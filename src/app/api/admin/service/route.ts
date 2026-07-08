import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

const serviceSchema = z
  .object({
    // New required UI fields
    title: z.string().min(1),
    description: z.string().min(1),
    badgeText: z.string().min(1),

    // Backward-compatible optional fields (existing DB / admin payloads)
    itemName: z.string().min(1).optional(),
    hsnSac: z.string().min(1).optional(),
    rate: z.number().nonnegative().optional(),
    gst: z.number().nonnegative().optional(),
    status: z.string().min(1).optional(),
  })
  .transform((v) => ({
    ...v,
    // Ensure old required fields are not accidentally undefined
    itemName: v.itemName ?? v.title,
    hsnSac: v.hsnSac ?? 'NA',
    rate: v.rate ?? 0,
    gst: v.gst ?? 0,
    status: v.status ?? 'Active',
  }))

type Role = 'admin' | 'user'

type SessionWithRole = {
  user?: {
    role?: Role
  }
}

function isAdminSession(session: unknown): session is SessionWithRole {
  const s = session as SessionWithRole | null | undefined
  return s?.user?.role === 'admin'
}

async function requireAdmin() {
  const session = await getServerSession(authOptions)
  return isAdminSession(session)
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const payload = serviceSchema.parse(await request.json())
  const service = await prisma.service.create({ data: payload })
  return NextResponse.json({ service })
}

export async function PUT(request: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = request.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing service id' }, { status: 400 })

  const payload = serviceSchema.parse(await request.json())
  const service = await prisma.service.update({ where: { id }, data: payload })
  return NextResponse.json({ service })
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = request.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing service id' }, { status: 400 })

  await prisma.service.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
