const COMMON_DISPOSABLE_DOMAINS = new Set([
  '10minutemail.com',
  'guerrillamail.com',
  'maildrop.cc',
  'temp-mail.org',
  'tempmail.dev',
  'yopmail.com',
  'sharklasers.com',
  'dispostable.com',
  'throwawaymail.com',
  'getnada.com',
])

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

export function getEmailDomain(email: string): string | null {
  const normalized = normalizeEmail(email)
  const at = normalized.lastIndexOf('@')
  if (at <= 0 || at === normalized.length - 1) return null
  return normalized.slice(at + 1)
}

export function isDisposableEmail(email: string, extraBlockedDomains: readonly string[] = []): boolean {
  const domain = getEmailDomain(email)
  if (!domain) return true

  if (COMMON_DISPOSABLE_DOMAINS.has(domain)) return true

  for (const blocked of extraBlockedDomains) {
    if (domain === blocked.trim().toLowerCase()) {
      return true
    }
  }

  return false
}

export function getDisposableDomainList(): string[] {
  return Array.from(COMMON_DISPOSABLE_DOMAINS).sort()
}
