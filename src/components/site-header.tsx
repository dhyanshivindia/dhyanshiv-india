'use client'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function SiteHeader() {
  // Public website navigation - cleaned up for clarity
  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Why Trust Us', href: '/why-trust-us' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/55">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="DHYANSHIV INDIA logo"
            width={160}
            height={50}
            className="h-auto w-[140px] sm:w-[180px] object-contain"
            priority
          />
        </Link>

        {/* Navigation and Theme */}
        <nav className="flex flex-1 flex-wrap items-center justify-end gap-3 text-sm text-slate-700 sm:gap-4 dark:text-zinc-300" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition tracking-wide whitespace-nowrap hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Get Connected CTA */}
          <Link
            href="/get-connected"
            className="ml-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-white font-semibold text-sm whitespace-nowrap hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105"
          >
            Get Connected
          </Link>
          
          {/* Theme Toggle */}
          <div className="shrink-0 ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

