import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword, verifyPassword } from '@/lib/password'

const HARDCODED_ADMINS = [
  {
    email: 'yash@dhyanshivindia.in',
    userCode: 'A1',
    defaultPassword: 'Udawn@6596',
  },
  {
    email: 'hirva@dhyanshivindia.in',
    userCode: 'A2',
    defaultPassword: 'Udawn@6596',
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      )
    }

    // Check if email is a valid admin
    const adminConfig = HARDCODED_ADMINS.find(
      (admin) => admin.email.toLowerCase() === email.toLowerCase()
    )

    if (!adminConfig) {
      return NextResponse.json(
        { error: 'Invalid admin credentials' },
        { status: 401 }
      )
    }

    // Verify password against default password
    if (password !== adminConfig.defaultPassword) {
      return NextResponse.json(
        { error: 'Invalid admin credentials' },
        { status: 401 }
      )
    }

    // Find or create admin user in database
    let admin = await prisma.user.findUnique({
      where: { email: adminConfig.email },
    })

    if (!admin) {
      // Create admin account on first login
      const { hash, salt } = hashPassword(password)
      admin = await prisma.user.create({
        data: {
          email: adminConfig.email,
          userCode: adminConfig.userCode,
          role: 'admin',
          password: `${hash}:${salt}`, // Store as hash:salt
          emailVerified: new Date(),
          name: adminConfig.email.split('@')[0],
          profileComplete: true,
        },
      })
    } else {
      // Verify stored password
      if (admin.password) {
        const [storedHash, storedSalt] = admin.password.split(':')
        if (!verifyPassword(password, storedHash, storedSalt)) {
          return NextResponse.json(
            { error: 'Invalid admin credentials' },
            { status: 401 }
          )
        }
      } else {
        // No password stored, create one
        const { hash, salt } = hashPassword(password)
        admin = await prisma.user.update({
          where: { id: admin.id },
          data: { password: `${hash}:${salt}` },
        })
      }
    }

    // Return admin info
    return NextResponse.json(
      {
        success: true,
        admin: {
          id: admin.id,
          email: admin.email,
          userCode: admin.userCode,
          role: admin.role,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Admin signin error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
