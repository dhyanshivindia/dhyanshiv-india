/**
 * Generate user codes in different formats based on user type
 */

export type UserType = 'user' | 'admin' | 'agent'

/**
 * Generate a unique user code
 * - Users: U-XXXXXXXX (8 random alphanumeric)
 * - Admins: A1, A2 (hardcoded)
 * - Agents: A-XXXXX (5 random alphanumeric)
 */
export function generateUserCode(type: UserType, adminEmail?: string): string {
  // Special handling for hardcoded admin accounts
  if (type === 'admin' && adminEmail) {
    if (adminEmail === 'yash@dhyanshivindia.in') return 'A1'
    if (adminEmail === 'hirva@dhyanshivindia.in') return 'A2'
  }

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  if (type === 'user') {
    // User: U-XXXXXXXX (8 characters)
    let code = 'U-'
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return code
  } else if (type === 'agent') {
    // Agent: A-XXXXX (5 characters)
    let code = 'A-'
    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return code
  }

  throw new Error(`Unknown user type: ${type}`)
}

