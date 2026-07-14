import crypto from 'crypto'

const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

export type TotpVerifyOptions = {
  stepSeconds?: number
  digits?: number
  window?: number
  timestampMs?: number
}

function normalizeBase32Secret(secret: string): string {
  return secret.toUpperCase().replace(/=+$/g, '').replace(/\s+/g, '')
}

function decodeBase32(secret: string): Buffer {
  const normalized = normalizeBase32Secret(secret)
  let bits = 0
  let value = 0
  const bytes: number[] = []

  for (const ch of normalized) {
    const idx = BASE32_ALPHABET.indexOf(ch)
    if (idx === -1) {
      throw new Error('Invalid base32 secret')
    }

    value = (value << 5) | idx
    bits += 5

    if (bits >= 8) {
      bytes.push((value >>> (bits - 8)) & 0xff)
      bits -= 8
    }
  }

  return Buffer.from(bytes)
}

function encodeBase32(input: Buffer): string {
  let output = ''
  let bits = 0
  let value = 0

  for (let i = 0; i < input.length; i += 1) {
    const byte = input[i]
    value = (value << 8) | byte
    bits += 8

    while (bits >= 5) {
      output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31]
      bits -= 5
    }
  }

  if (bits > 0) {
    output += BASE32_ALPHABET[(value << (5 - bits)) & 31]
  }

  return output
}

function hotp(secret: Buffer, counter: number, digits: number): string {
  const counterBuffer = Buffer.alloc(8)
  counterBuffer.writeUInt32BE(Math.floor(counter / 0x100000000), 0)
  counterBuffer.writeUInt32BE(counter >>> 0, 4)

  const digest = crypto.createHmac('sha1', secret).update(counterBuffer).digest()
  const offset = digest[digest.length - 1] & 0x0f

  const code =
    ((digest[offset] & 0x7f) << 24) |
    ((digest[offset + 1] & 0xff) << 16) |
    ((digest[offset + 2] & 0xff) << 8) |
    (digest[offset + 3] & 0xff)

  const modulo = 10 ** digits
  return String(code % modulo).padStart(digits, '0')
}

export function generateTotpSecret(length = 20): string {
  const safeLength = Math.max(10, Math.floor(length))
  return encodeBase32(crypto.randomBytes(safeLength))
}

export function generateTotpCode(secretBase32: string, timestampMs = Date.now(), stepSeconds = 30, digits = 6): string {
  const secret = decodeBase32(secretBase32)
  const counter = Math.floor(timestampMs / 1000 / Math.max(1, Math.floor(stepSeconds)))
  const safeDigits = Math.min(10, Math.max(6, Math.floor(digits)))
  return hotp(secret, counter, safeDigits)
}

export function verifyTotpCode(secretBase32: string, token: string, options: TotpVerifyOptions = {}): boolean {
  const stepSeconds = options.stepSeconds ?? 30
  const digits = options.digits ?? 6
  const window = options.window ?? 1
  const timestampMs = options.timestampMs ?? Date.now()

  const sanitizedToken = token.trim().replace(/\s+/g, '')
  if (!/^\d+$/.test(sanitizedToken)) return false

  const safeWindow = Math.max(0, Math.floor(window))
  const safeStep = Math.max(1, Math.floor(stepSeconds))
  const safeDigits = Math.min(10, Math.max(6, Math.floor(digits)))

  for (let offset = -safeWindow; offset <= safeWindow; offset += 1) {
    const codeTime = timestampMs + offset * safeStep * 1000
    const candidate = generateTotpCode(secretBase32, codeTime, safeStep, safeDigits)
    if (candidate === sanitizedToken) {
      return true
    }
  }

  return false
}

export function getTotpProvisioningUri(params: {
  secret: string
  accountName: string
  issuer: string
  digits?: number
  period?: number
}): string {
  const digits = params.digits ?? 6
  const period = params.period ?? 30
  const label = `${params.issuer}:${params.accountName}`

  const query = new URLSearchParams({
    secret: normalizeBase32Secret(params.secret),
    issuer: params.issuer,
    digits: String(Math.min(10, Math.max(6, Math.floor(digits)))),
    period: String(Math.max(1, Math.floor(period))),
    algorithm: 'SHA1',
  })

  return `otpauth://totp/${encodeURIComponent(label)}?${query.toString()}`
}
