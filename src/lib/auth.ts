import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { verifyStoredPassword } from '@/lib/password'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth'

const adminEmail = process.env.ADMIN_EMAIL
const adminHash = process.env.ADMIN_PASSWORD_HASH

const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build'

export type AppRole = 'admin' | 'manager' | 'agent' | 'user'

type AuthUser = {
  id: string
  email: string
  name?: string | null
  role: AppRole
}

if (!process.env.NEXTAUTH_SECRET && !isBuildTime) {
  // Fail fast only at runtime (auth requests), not during `next build` compilation.
  throw new Error('Missing NEXTAUTH_SECRET')
}

// IMPORTANT: Do not validate admin credentials at module-load time.
// Next.js may evaluate this file during `next build`, which would crash the build.

function normalizeRole(role?: string | null): AppRole {
  if (role === 'admin' || role === 'manager' || role === 'agent') return role
  return 'user'
}

async function getCanonicalAuthUser(params: {
  id?: string | null
  email?: string | null
}): Promise<AuthUser | null> {
  const normalizedEmail = params.email?.trim().toLowerCase()
  const where = params.id ? { id: params.id } : normalizedEmail ? { email: normalizedEmail } : null
  if (!where) return null

  const user = await prisma.user.findUnique({
    where,
    select: {
      id: true,
      email: true,
      name: true,
      fullName: true,
      role: true,
      isActive: true,
    },
  })

  if (!user || !user.isActive) return null

  return {
    id: user.id,
    email: user.email,
    name: user.fullName || user.name || user.email,
    role: normalizeRole(user.role),
  }
}

async function authorizeCredentials(email: string, password: string): Promise<AuthUser | null> {
  const normalizedEmail = email.trim().toLowerCase()
  const canonicalUser = await getCanonicalAuthUser({ email })

  if (canonicalUser) {
    const dbUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        password: true,
      },
    })

    if (verifyStoredPassword(password, dbUser?.password)) {
      return canonicalUser
    }
  }

  if (!adminEmail || !adminHash) return null
  if (normalizedEmail !== adminEmail.trim().toLowerCase()) return null
  if (!verifyStoredPassword(password, adminHash)) return null

  return {
    id: adminEmail,
    email: adminEmail,
    name: 'Dhyanshiv Admin',
    role: 'admin',
  }
}


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER_SMTP || '',
      from: process.env.EMAIL_FROM || 'support@dhyanshivindia.in',
    }),
    CredentialsProvider({
      name: 'Admin Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        return authorizeCredentials(credentials.email, credentials.password)
      },
    }),
  ],
  pages: { signIn: '/signin' },
  session: { strategy: 'jwt' },
  jwt: { secret: process.env.NEXTAUTH_SECRET },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).id = token.sub
        ;(session.user as any).role = normalizeRole(token.role as string | undefined)
        ;(session.user as any).admin = token.role === 'admin'

        if (token.name) {
          session.user.name = token.name
        }

        if (token.email) {
          session.user.email = token.email
        }
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        const canonicalUser = await getCanonicalAuthUser({
          id: user.id,
          email: user.email,
        })

        token.sub = canonicalUser?.id ?? token.sub
        token.email = canonicalUser?.email ?? token.email
        token.name = canonicalUser?.name ?? user.name ?? token.name
        token.role = canonicalUser?.role ?? normalizeRole((user as any).role)
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
