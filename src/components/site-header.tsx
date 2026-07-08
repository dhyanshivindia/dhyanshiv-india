'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import dynamic from 'next/dynamic'
import ThemeToggle from '@/components/theme-toggle'

const LayoutModeToggle = dynamic(() => import('@/components/layout-mode-toggle').then(m => ({ default: m.LayoutModeToggle })), { ssr: false })

export default function SiteHeader() {
  const { data: session } = useSession()

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/55">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="DHYANSHIV INDIA logo"
            width={160}
            height={50}
            className="h-auto w-[120px] sm:w-[160px] object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">DHYANSHIV INDIA</span>
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-3 min-w-0">
          <nav className="flex flex-1 flex-wrap items-center justify-end gap-2 text-sm text-slate-700 sm:gap-3 dark:text-zinc-300" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-cyan transition tracking-wide whitespace-nowrap hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LayoutModeToggle />
          {session?.user ? (
            <>
              <Link
                href="/dashboard"
                className="rounded-full border border-zinc-200 bg-white/5 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-cyan/40 hover:bg-cyan/10 whitespace-nowrap shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="rounded-full border border-zinc-200 bg-white/5 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-cyan/40 hover:bg-cyan/10 whitespace-nowrap shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn(undefined, { callbackUrl: '/services' })}
                className="rounded-full border border-transparent bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 hover:shadow-[0_0_26px_rgba(0,255,255,0.25)] whitespace-nowrap"
            >
              Sign in
            </button>
          )}

          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

