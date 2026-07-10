'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Separator } from '@/components/ui/separator'

export default function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-foreground">DHYANSHIV INDIA PRIVATE LIMITED</p>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-sm">Government of India Registered Company providing compliance automation, secure payment solutions, and business software to startups and MSMEs.</p>
            <div className="mt-4 space-y-1">
              <p className="text-xs text-muted-foreground">📧 <a href="mailto:support@dhyanshivindia.in" className="hover:text-foreground transition-colors">support@dhyanshivindia.in</a></p>
              <p className="text-xs text-muted-foreground">📱 <a href="https://wa.me/919173011851" className="hover:text-foreground transition-colors">WhatsApp: +91 9173011851</a></p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Services</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Compliance Automation</li>
              <li>Secure Payment Processing</li>
              <li>Business Software</li>
              <li>Data Security & Backup</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Legal</p>
            <nav className="space-y-2">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-of-service', label: 'Terms of Service' },
                { href: '/refund-policy', label: 'Refund Policy' },
                { href: '/copyright', label: 'Copyright & IP' },
              ].map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">© {currentYear} DHYANSHIV INDIA PRIVATE LIMITED. All Rights Reserved.</p>
          <p className="text-xs text-muted-foreground">Built with security and compliance as foundation.</p>
        </div>
        <p className="mt-4 text-xs text-muted-foreground/70 leading-relaxed border-t border-border pt-4">
          <strong>Disclaimer:</strong> DHYANSHIV INDIA PRIVATE LIMITED is a registered company in India. All services are provided in compliance with applicable laws and regulations. We do not offer financial, legal, or investment advice. Payment processing is done through Razorpay, a licensed payment aggregator.
        </p>
      </div>
    </footer>
  )
}
