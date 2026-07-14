type RateLimitStoreEntry = {
  count: number
  resetAt: number
}

export type RateLimitDecision = {
  allowed: boolean
  limit: number
  remaining: number
  resetAt: number
  retryAfterMs: number
}

const rateLimitStore = new Map<string, RateLimitStoreEntry>()

function nowMs(): number {
  return Date.now()
}

function toWindowMs(windowSeconds: number): number {
  return Math.max(1, Math.floor(windowSeconds)) * 1000
}

export function applyRateLimit(key: string, limit: number, windowSeconds: number): RateLimitDecision {
  const safeKey = key.trim().toLowerCase()
  const safeLimit = Math.max(1, Math.floor(limit))
  const windowMs = toWindowMs(windowSeconds)
  const currentNow = nowMs()

  const current = rateLimitStore.get(safeKey)
  if (!current || current.resetAt <= currentNow) {
    const nextEntry: RateLimitStoreEntry = {
      count: 1,
      resetAt: currentNow + windowMs,
    }
    rateLimitStore.set(safeKey, nextEntry)

    return {
      allowed: true,
      limit: safeLimit,
      remaining: Math.max(0, safeLimit - 1),
      resetAt: nextEntry.resetAt,
      retryAfterMs: 0,
    }
  }

  const nextCount = current.count + 1
  current.count = nextCount
  rateLimitStore.set(safeKey, current)

  const remaining = Math.max(0, safeLimit - nextCount)
  const allowed = nextCount <= safeLimit
  const retryAfterMs = allowed ? 0 : Math.max(1, current.resetAt - currentNow)

  return {
    allowed,
    limit: safeLimit,
    remaining,
    resetAt: current.resetAt,
    retryAfterMs,
  }
}

export function clearRateLimit(key: string): void {
  rateLimitStore.delete(key.trim().toLowerCase())
}

export function clearAllRateLimits(): void {
  rateLimitStore.clear()
}

export function getClientIpFromHeaders(headers: Headers): string {
  const forwardedFor = headers.get('x-forwarded-for')
  if (forwardedFor) {
    const first = forwardedFor.split(',')[0]?.trim()
    if (first) return first
  }

  const realIp = headers.get('x-real-ip')
  if (realIp) return realIp.trim()

  return 'unknown'
}
