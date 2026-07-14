import crypto from 'crypto'
import { compareSync } from 'bcryptjs'

/**
 * Hash password using PBKDF2 with SHA-256
 */
export function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const saltValue = salt || crypto.randomBytes(32).toString('hex')
  const iterations = 100000
  const keylen = 32
  const digest = 'sha256'

  const hash = crypto.pbkdf2Sync(password, saltValue, iterations, keylen, digest).toString('hex')

  return { hash, salt: saltValue }
}

/**
 * Verify password against hash
 */
export function verifyPassword(password: string, hash: string, salt: string): boolean {
  const passwordHash = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256').toString('hex')
  return passwordHash === hash
}

/**
 * Verify a stored password record.
 * Supports the project's `hash:salt` format and legacy bcrypt hashes.
 */
export function verifyStoredPassword(password: string, storedPassword?: string | null): boolean {
  if (!storedPassword) return false

  const parts = storedPassword.split(':')
  if (parts.length === 2) {
    const [storedHash, storedSalt] = parts
    return verifyPassword(password, storedHash, storedSalt)
  }

  return compareSync(password, storedPassword)
}
