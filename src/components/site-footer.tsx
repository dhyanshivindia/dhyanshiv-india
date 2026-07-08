'use client'

import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-10 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:px-12 xl:flex-row xl:items-center xl:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan">DHYANSHIV INDIA PRIVATE LIMITED</p>
          <p className="max-w-xl text-sm text-slate-400">
            Trusted digital services, compliance-ready automation, and secure payment experiences for startups and MSMEs.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <Link href="/privacy-policy" className="hover:text-cyan transition tracking-wide">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-cyan transition tracking-wide">
            Terms
          </Link>
          <Link href="/refund-policy" className="hover:text-cyan transition tracking-wide">
            Refund Policy
          </Link>
          <Link href="/copyright" className="hover:text-cyan transition tracking-wide">
            Copyright
          </Link>
        </nav>
      </div>
    </footer>
  )
}

