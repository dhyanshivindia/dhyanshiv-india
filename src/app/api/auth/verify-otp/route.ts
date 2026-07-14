import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const url = new URL('/api/v1/auth/challenge/email-otp/verify?legacy=1', req.url)
  const body = await req.text()

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': req.headers.get('content-type') ?? 'application/json',
      cookie: req.headers.get('cookie') ?? '',
    },
    body,
    cache: 'no-store',
  })

  const text = await response.text()
  return new NextResponse(text, {
    status: response.status,
    headers: {
      'content-type': response.headers.get('content-type') ?? 'application/json',
    },
  })
}
