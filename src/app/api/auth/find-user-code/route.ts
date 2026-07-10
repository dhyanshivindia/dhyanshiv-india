import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      select: { userCode: true },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'No account found with this email address' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      userCode: user.userCode,
    })
  } catch (err) {
    console.error('Find user code error:', err)
    return NextResponse.json(
      { error: 'Failed to find account' },
      { status: 500 }
    )
  }
}
