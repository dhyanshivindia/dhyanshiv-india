import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Middleware can stay simple - page.tsx handles subdomain detection
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|public).*)'],
}
