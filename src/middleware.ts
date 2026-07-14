import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

import { hasRole, isAppRole } from '@/lib/rbac/evaluator'

const PUBLIC_PATHS = new Set([
  '/',
  '/signin',
  '/signup',
  '/forgot-id',
  '/forgot-password',
  '/reset-password',
  '/admin/signin',
  '/agent/signin',
  '/agent/signup',
  '/manager/signin',
  '/privacy-policy',
  '/terms-of-service',
  '/refund-policy',
  '/copyright',
  '/services',
  '/why-trust-us',
  '/get-connected',
])

function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.has(pathname)
}

function roleFromToken(token: Awaited<ReturnType<typeof getToken>>): string {
  const raw =
    token && typeof token === 'object' && 'role' in token
      ? (token as { role?: unknown }).role
      : undefined
  return typeof raw === 'string' ? raw : 'user'
}

function redirectTo(request: NextRequest, path: string, includeCallback = false): NextResponse {
  const url = new URL(path, request.url)

  if (includeCallback) {
    url.searchParams.set('callbackUrl', request.nextUrl.pathname)
  }

  return NextResponse.redirect(url)
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (isPublicPath(pathname)) {
    return NextResponse.next()
  }

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const role = roleFromToken(token)
  const appRole = isAppRole(role) ? role : 'user'

  if (pathname.startsWith('/admin/dashboard') || pathname.startsWith('/dashboard/admin')) {
    if (!token) {
      return redirectTo(request, '/admin/signin')
    }
    if (!hasRole(appRole, ['admin'])) {
      return redirectTo(request, '/signin')
    }
  }

  if (pathname.startsWith('/agent/dashboard')) {
    if (!token) {
      return redirectTo(request, '/agent/signin')
    }
    if (!hasRole(appRole, ['agent', 'admin'])) {
      return redirectTo(request, '/signin')
    }
  }

  if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
    if (!token) {
      return redirectTo(request, '/signin', true)
    }
  }

  if (pathname === '/settings') {
    if (!token) {
      return redirectTo(request, '/signin', true)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|public).*)'],
}
