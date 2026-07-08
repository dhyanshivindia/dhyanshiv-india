'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin?callbackUrl=/dashboard')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-zinc-600 dark:text-zinc-400">
          Loading dashboard...
        </div>
      </div>
    )
  }

  if (!session?.user) {
    return null
  }

  const isAdmin = (session.user as any).admin === true

  const navItems = [
    { label: 'Overview', href: '/dashboard', icon: '📊' },
    { label: 'My Orders', href: '/dashboard/orders', icon: '📋' },
    ...(isAdmin ? [{ label: 'Analytics', href: '/dashboard/admin', icon: '📈' }] : []),
  ]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <aside className="w-48 shrink-0">
            <nav className="space-y-2 sticky top-24">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-white hover:text-cyan-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-cyan-400"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <hr className="my-4 dark:border-zinc-800" />
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-white hover:text-cyan-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-cyan-400"
              >
                <span>⚙️</span>
                Settings
              </Link>
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Dashboard
              </h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Welcome, {session.user.name || session.user.email}
              </p>
            </div>

            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
