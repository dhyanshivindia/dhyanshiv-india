import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth'

const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD
const adminHash = process.env.ADMIN_PASSWORD_HASH

const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build'

if (!process.env.NEXTAUTH_SECRET && !isBuildTime) {
  // Fail fast only at runtime (auth requests), not during `next build` compilation.
  throw new Error('Missing NEXTAUTH_SECRET')
}

// IMPORTANT: Do not validate admin credentials at module-load time.
// Next.js may evaluate this file during `next build`, which would crash the build.


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

        // Runtime validation only (prevents build-time crash).
        if (!adminEmail || !adminPassword || !adminHash) return null


        if (credentials.email !== adminEmail) return null

        const valid = await compare(credentials.password, adminHash)
        if (!valid) return null

        return { id: adminEmail, name: 'Dhyanshiv Admin', email: adminEmail, role: 'admin' }
      },
    }),
  ],
  pages: { signIn: '/signin' },
  session: { strategy: 'jwt' },
  jwt: { secret: process.env.NEXTAUTH_SECRET },
  callbacks: {
    async session({ session, token }) {
      if (token?.role && session.user) {
        // Keep runtime shape minimal and safe; avoid assuming session.user.role is present.
        ;(session.user as any).role = token.role
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role ?? 'user'
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
