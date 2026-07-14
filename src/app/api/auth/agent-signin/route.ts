import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const url = new URL('/api/v1/auth/admin/login?role=agent&legacy=agent', request.url)
  const body = await request.text()

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': request.headers.get('content-type') ?? 'application/json',
      cookie: request.headers.get('cookie') ?? '',
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
