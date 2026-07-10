'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ShieldCheck, Users, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Home() {
  const [isAppSubdomain, setIsAppSubdomain] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const isApp = window.location.hostname.includes('app.dhyanshivindia.in')
      setIsAppSubdomain(isApp)
    }
  }, [])

  // App subdomain: show portal selection
  if (mounted && isAppSubdomain) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Secure Enterprise Portal
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
              Welcome to DHYANSHIV
            </h1>
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              Enterprise-grade compliance automation and secure services. Select your portal to continue.
            </p>
          </div>

          {/* Portal Cards */}
          <div className="space-y-3">
            {/* User Portal */}
            <div className="rounded-lg border border-border bg-card shadow-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-semibold text-foreground">User Portal</h2>
                  <p className="mt-1 text-xs text-muted-foreground">Access compliance services, manage subscriptions, view orders</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link href="/signin" className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                      Sign In <ArrowRight className="h-3 w-3" />
                    </Link>
                    <Link href="/signup" className="inline-flex h-8 items-center rounded-md border border-input bg-background px-4 text-xs font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
                      Create Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin & Agent Portals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Admin */}
              <div className="rounded-lg border border-amber-200/70 dark:border-amber-900/40 bg-card shadow-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-amber-100 dark:bg-amber-900/30">
                    <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-semibold text-foreground">Admin Portal</h2>
                    <p className="mt-1 text-xs text-muted-foreground">System administration and user management</p>
                    <Link href="/admin/signin" className="mt-4 inline-flex h-8 items-center gap-1.5 rounded-md bg-amber-600 px-4 text-xs font-medium text-white shadow hover:bg-amber-700 transition-colors">
                      Admin Sign In <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Agent */}
              <div className="rounded-lg border border-emerald-200/70 dark:border-emerald-900/40 bg-card shadow-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-100 dark:bg-emerald-900/30">
                    <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-semibold text-foreground">Agent Portal</h2>
                    <p className="mt-1 text-xs text-muted-foreground">Service delivery and client management</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href="/agent/signin" className="inline-flex h-8 items-center gap-1.5 rounded-md bg-emerald-600 px-4 text-xs font-medium text-white shadow hover:bg-emerald-700 transition-colors">
                        Sign In <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link href="/agent/signup" className="inline-flex h-8 items-center rounded-md border border-emerald-300 dark:border-emerald-700 bg-background px-3 text-xs font-medium text-emerald-700 dark:text-emerald-400 shadow-xs hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" />GoI Registered</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" />Razorpay Payments</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" />24/7 Support</span>
          </div>
        </div>
      </div>
    )
  }

  // Main website (dhyanshivindia.in)
  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      {/* Hero Section */}
      <section className="relative bg-zinc-50 dark:bg-zinc-950 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Government of India Registered Company
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
              Enterprise Compliance<br />
              <span className="text-primary">& Tech Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Compliance automation, secure payment solutions, and business software for startups and MSMEs. Professional, reliable, and fully compliant with Indian regulations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-connected" className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="inline-flex h-10 items-center rounded-md border border-input bg-background px-5 text-sm font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What We Offer</h2>
          <p className="mt-3 text-muted-foreground">End-to-end enterprise services built for the Indian business ecosystem</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, title: 'Compliance Automation', description: 'GST, ROC filings, and regulatory compliance automated for your business', color: 'text-primary', bg: 'bg-primary/10' },
            { icon: CheckCircle2, title: 'Secure Payments', description: 'Razorpay-powered payment processing with full audit trails', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20' },
            { icon: Briefcase, title: 'Business Software', description: 'Custom software solutions for SMEs and enterprise clients', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
            { icon: Users, title: 'Data Security', description: 'Enterprise-grade data protection and backup solutions', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
          ].map((feature) => (
            <div key={feature.title} className="rounded-lg border border-border bg-card shadow-card p-5 hover:shadow-card-hover transition-shadow">
              <div className={`inline-flex rounded-md ${feature.bg} p-2 mb-4`}>
                <feature.icon className={`h-5 w-5 ${feature.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">Ready to streamline your compliance?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Join hundreds of Indian businesses that trust DHYANSHIV for their compliance and technology needs.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/get-connected" className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Get Connected <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/919173011851" className="inline-flex h-10 items-center rounded-md border border-input bg-background px-6 text-sm font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
