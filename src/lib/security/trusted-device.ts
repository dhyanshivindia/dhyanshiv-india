import crypto from 'crypto'

const TRUSTED_DEVICE_SECRET_ENV = 'TRUSTED_DEVICE_SECRET'

export type TrustedDeviceTokenPayload = {
  userId: string
  fingerprint: string
  expiresAt: number
}

export function buildDeviceFingerprint(params: {
  userAgent?: string | null
  ipAddress?: string | null
  acceptLanguage?: string | null
}): string {
  const raw = [
    params.userAgent ?? '',
    params.ipAddress ?? '',
    params.acceptLanguage ?? '',
  ]
    .map((value) => value.trim().toLowerCase())
    .join('|')

  return crypto.createHash('sha256').update(raw).digest('hex')
}

function getSigningSecret(): string {
  const secret = process.env[TRUSTED_DEVICE_SECRET_ENV]?.trim()
  if (!secret) {
    throw new Error(`${TRUSTED_DEVICE_SECRET_ENV} is not configured`)
  }
  return secret
}

function signPayload(payloadBase64: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(payloadBase64).digest('base64url')
}

export function createTrustedDeviceToken(payload: TrustedDeviceTokenPayload): string {
  const serialized = JSON.stringify(payload)
  const payloadBase64 = Buffer.from(serialized, 'utf8').toString('base64url')
  const signature = signPayload(payloadBase64, getSigningSecret())
  return `${payloadBase64}.${signature}`
}

export function parseTrustedDeviceToken(token: string): TrustedDeviceTokenPayload | null {
  const [payloadBase64, signature] = token.split('.')
  if (!payloadBase64 || !signature) return null

  const expectedSig = signPayload(payloadBase64, getSigningSecret())
  const expectedBuffer = Buffer.from(expectedSig)
  const providedBuffer = Buffer.from(signature)

  if (expectedBuffer.length !== providedBuffer.length) return null
  if (!crypto.timingSafeEqual(expectedBuffer, providedBuffer)) return null

  const decoded = Buffer.from(payloadBase64, 'base64url').toString('utf8')
  const parsed = JSON.parse(decoded) as TrustedDeviceTokenPayload

  if (!parsed.userId || !parsed.fingerprint || !parsed.expiresAt) return null
  if (Date.now() > parsed.expiresAt) return null

  return parsed
}

export function createTrustedDevicePayload(params: {
  userId: string
  fingerprint: string
  ttlDays?: number
}): TrustedDeviceTokenPayload {
  const ttlDays = Math.max(1, Math.floor(params.ttlDays ?? 30))
  return {
    userId: params.userId,
    fingerprint: params.fingerprint,
    expiresAt: Date.now() + ttlDays * 24 * 60 * 60 * 1000,
  }
}
