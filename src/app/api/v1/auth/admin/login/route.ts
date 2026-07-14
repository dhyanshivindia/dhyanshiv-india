import { NextRequest, NextResponse } from 'next/server'

import { auditEmitter } from '@/lib/audit/emitter'
import { registerPrismaAuditStore } from '@/lib/audit/store'
import { verifyStoredPassword } from '@/lib/password'
import { prisma } from '@/lib/prisma'
import { applyRateLimit, getClientIpFromHeaders } from '@/lib/security/rate-limit'

type FallbackAdminConfig = {
  email: string
  userCode: string
  passwordHash: string
}

const FALLBACK_ADMINS: FallbackAdminConfig[] = [
  {
    email: process.env.ADMIN_EMAIL ?? '',
    userCode: 'A1',
    passwordHash: process.env.ADMIN_PASSWORD_HASH ?? '',
  },
  {
    email: process.env.SECONDARY_ADMIN_EMAIL ?? '',
    userCode: 'A2',
    passwordHash: process.env.SECONDARY_ADMIN_PASSWORD_HASH ?? '',
  },
].filter((entry) => entry.email && entry.passwordHash)

type PrivilegedRole = 'admin' | 'manager' | 'agent'

type LoginOptions = {
  allowedRoles: readonly PrivilegedRole[]
  legacyResponseKey?: 'admin' | 'agent'
}

function invalidCredentialsMessage(legacyResponseKey?: 'admin' | 'agent'): string {
  if (legacyResponseKey === 'admin') return 'Invalid admin credentials'
  if (legacyResponseKey === 'agent') return 'Invalid agent credentials'
  return 'Invalid credentials'
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase()
}

function isAllowedRole(role: string, allowedRoles: readonly PrivilegedRole[]): role is PrivilegedRole {
  return allowedRoles.includes(role as PrivilegedRole)
}

async function findOrCreateHardcodedAdmin(email: string, password: string) {
  const adminConfig = FALLBACK_ADMINS.find((admin) => normalizeEmail(admin.email) === normalizeEmail(email))
  if (!adminConfig) return null
  if (!verifyStoredPassword(password, adminConfig.passwordHash)) return null

  let user = await prisma.user.findUnique({ where: { email: adminConfig.email } })
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: adminConfig.email,
        userCode: adminConfig.userCode,
        role: 'admin',
        password: null,
        emailVerified: new Date(),
        name: adminConfig.email.split('@')[0],
        profileComplete: true,
      },
    })
  }

  return user
}

function isHardcodedAdminPassword(email: string, password: string): boolean {
  const adminConfig = FALLBACK_ADMINS.find((admin) => normalizeEmail(admin.email) === normalizeEmail(email))
  if (!adminConfig) return false
  return verifyStoredPassword(password, adminConfig.passwordHash)
}

async function handlePrivilegedLogin(request: NextRequest, options: LoginOptions): Promise<NextResponse> {
  try {
    registerPrismaAuditStore()

    const body = await request.json()
    const email = typeof body?.email === 'string' ? body.email : ''
    const password = typeof body?.password === 'string' ? body.password : ''

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const ipAddress = getClientIpFromHeaders(request.headers)
    const rateKey = `v1-auth-login:${normalizeEmail(email)}:${ipAddress}`
    const rateDecision = applyRateLimit(rateKey, 10, 60)
    if (!rateDecision.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          retryAfterMs: rateDecision.retryAfterMs,
        },
        { status: 429 }
      )
    }

    let user = await prisma.user.findUnique({
      where: { email: normalizeEmail(email) },
    })

    if (!user && options.allowedRoles.includes('admin')) {
      user = await findOrCreateHardcodedAdmin(email, password)
    }

    if (user && options.legacyResponseKey === 'agent' && user.role === 'agent' && !user.isActive) {
      return NextResponse.json({ error: 'Agent account is inactive' }, { status: 401 })
    }

    if (!user || !isAllowedRole(user.role, options.allowedRoles) || !user.isActive) {
      await auditEmitter.emit(
        {
          eventType: 'auth.login.failed',
          entityType: 'user',
          entityId: user?.id ?? null,
          metadata: {
            email: normalizeEmail(email),
            allowedRoles: options.allowedRoles,
            reason: 'user_missing_or_role_mismatch',
          },
        },
        {
          userId: user?.id ?? null,
          role: user?.role ?? null,
          ipAddress,
          userAgent: request.headers.get('user-agent') ?? null,
        }
      )

      return NextResponse.json({ error: invalidCredentialsMessage(options.legacyResponseKey) }, { status: 401 })
    }

    const hardcodedAdminPasswordValid =
      options.allowedRoles.includes('admin') && user.role === 'admin' && isHardcodedAdminPassword(user.email, password)
    const storedPasswordValid = !!user.password && verifyStoredPassword(password, user.password)

    if (!storedPasswordValid && !hardcodedAdminPasswordValid) {
      await auditEmitter.emit(
        {
          eventType: 'auth.login.failed',
          entityType: 'user',
          entityId: user.id,
          metadata: {
            email: user.email,
            reason: 'password_mismatch',
          },
        },
        {
          userId: user.id,
          role: user.role,
          ipAddress,
          userAgent: request.headers.get('user-agent') ?? null,
        }
      )

      return NextResponse.json({ error: invalidCredentialsMessage(options.legacyResponseKey) }, { status: 401 })
    }

    await auditEmitter.emit(
      {
        eventType: 'auth.login.success',
        entityType: 'user',
        entityId: user.id,
        metadata: {
          role: user.role,
          route: request.nextUrl.pathname,
        },
      },
      {
        userId: user.id,
        role: user.role,
        ipAddress,
        userAgent: request.headers.get('user-agent') ?? null,
      }
    )

    if (options.legacyResponseKey === 'admin') {
      return NextResponse.json(
        {
          success: true,
          admin: {
            id: user.id,
            email: user.email,
            userCode: user.userCode,
            role: user.role,
          },
        },
        { status: 200 }
      )
    }

    if (options.legacyResponseKey === 'agent') {
      return NextResponse.json(
        {
          success: true,
          agent: {
            id: user.id,
            email: user.email,
            userCode: user.userCode,
            role: user.role,
            name: user.name,
          },
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          userCode: user.userCode,
          role: user.role,
          name: user.name,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('v1 privileged login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const roleParam = request.nextUrl.searchParams.get('role')
  const legacyParam = request.nextUrl.searchParams.get('legacy')

  const role =
    roleParam === 'manager' || roleParam === 'agent' || roleParam === 'admin'
      ? roleParam
      : 'admin'
  const legacyResponseKey = legacyParam === 'agent' || legacyParam === 'admin' ? legacyParam : undefined

  return handlePrivilegedLogin(request, {
    allowedRoles: [role],
    legacyResponseKey,
  })
}
