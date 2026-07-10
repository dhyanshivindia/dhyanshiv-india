import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from '@/lib/password'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      )
    }

    // Find agent by email
    const agent = await prisma.user.findUnique({
      where: { email },
    })

    if (!agent || agent.role !== 'agent') {
      return NextResponse.json(
        { error: 'Invalid agent credentials' },
        { status: 401 }
      )
    }

    // Check if agent is active
    if (!agent.isActive) {
      return NextResponse.json(
        { error: 'Agent account is inactive' },
        { status: 401 }
      )
    }

    // Verify password
    if (!agent.password) {
      return NextResponse.json(
        { error: 'Invalid agent credentials' },
        { status: 401 }
      )
    }

    const [storedHash, storedSalt] = agent.password.split(':')
    if (!verifyPassword(password, storedHash, storedSalt)) {
      return NextResponse.json(
        { error: 'Invalid agent credentials' },
        { status: 401 }
      )
    }

    // Return agent info
    return NextResponse.json(
      {
        success: true,
        agent: {
          id: agent.id,
          email: agent.email,
          userCode: agent.userCode,
          role: agent.role,
          name: agent.name,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Agent signin error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
