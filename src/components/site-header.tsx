'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'
import { cn } from '@/lib/cn'

export default function SiteHeader() {
  const pathname = usePathname()

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Why Trust Us', href: '/why-trust-us' },
  ]

  return (
    <header className="sticky top-0 z-40 h-14 border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="DHYANSHIV INDIA logo"
            width={160}
            height={50}
            className="h-auto w-[130px] sm:w-[160px] object-contain"
            priority
          />
        </Link>

        {/* Navigation and Theme */}
        <nav className="flex flex-1 items-center justify-end gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'hidden sm:flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-2 h-4 w-px bg-border hidden sm:block" />

          {/* Get Connected CTA */}
          <Link
            href="/get-connected"
            className="ml-2 hidden sm:inline-flex items-center rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
          >
            Get Connected
          </Link>

          {/* Theme Toggle */}
          <div className="shrink-0 ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

