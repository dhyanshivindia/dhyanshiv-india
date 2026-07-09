'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  const searchParams = useSearchParams()
  const tier = searchParams.get('tier') || 'pro'
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const callbackUrl = `/onboarding?tier=${tier}`

  const onGoogle = async () => {
    setStatus('')
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl })
    } finally {
      setIsLoading(false)
    }
  }

  const onMagicLink = async () => {
    setStatus('')
    setIsLoading(true)
    try {
      await signIn('email', { email, callbackUrl })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-zinc-950">
      {/* LEFT: Auth Section (5 columns) */}
      <section className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-white dark:bg-zinc-950">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <header className="flex items-start justify-between gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              ← Return home
            </Link>

            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400">
                DHYANSHIV INDIA
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Secure access to compliance-ready services.
              </p>
            </div>
          </header>

          {/* Form Container */}
          <div className="max-w-md w-full mx-auto my-auto flex flex-col justify-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Sign in
              </h1>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                Choose your preferred sign-in method. Authentication unlocks secure checkout and managed compliance workflows.
              </p>
            </div>

            {/* Google */}
            <div className="mt-8">
              <button
                type="button"
                onClick={onGoogle}
                disabled={isLoading}
                className="w-full rounded-xl bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 px-4 py-3 text-sm font-semibold shadow-sm transition disabled:opacity-60 dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800"
              >
                {isLoading ? 'Redirecting…' : 'Continue with Google'}
              </button>
            </div>

            {/* Divider */}
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Or continue with email</p>
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            {/* Email Input */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@company.com"
                disabled={isLoading}
                className="mt-2 w-full rounded-xl bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-blue-600/20 border transition dark:bg-zinc-900 dark:border-zinc-800 dark:text-white dark:placeholder-zinc-500"
              />
            </div>

            {/* Magic Link CTA */}
            <div className="mt-5">
              <button
                type="button"
                onClick={onMagicLink}
                disabled={isLoading}
                className="w-full rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 px-4 py-3 text-sm font-semibold transition disabled:opacity-60 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                {isLoading ? 'Sending magic link…' : 'Send Magic Link'}
              </button>
            </div>

            {status ? <p className="mt-4 text-sm text-cyan-700 dark:text-cyan-400">{status}</p> : null}

            {isLoading ? (
              <div className="mt-5 rounded-xl border border-zinc-200/70 bg-white/70 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/70">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-cyan-500/70 border-t-transparent" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Working securely…</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Footer note */}
        <div className="pt-8 text-center md:text-left">
          <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            Secure corporate sign-in for DHYANSHIV INDIA services.
          </p>
        </div>
      </section>

      {/* RIGHT: Branding Showcase (7 columns) */}
      <aside className="hidden lg:flex lg:col-span-7 relative bg-zinc-50 dark:bg-zinc-900 border-l border-zinc-200/60 dark:border-zinc-800/60">
        <div className="absolute inset-0 bg-grid-zinc-200/50 dark:bg-grid-zinc-800/30" />

        {/* Cinematic bento overlay */}
        <div className="relative w-full h-full p-10 sm:p-14 md:p-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="h-full flex flex-col justify-center">
            <div className="max-w-xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400">
                Corporate Trust
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Elite access. Compliance-first delivery.
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Sign-in unlocks a secure service journey—compliance management, corporate tech delivery, and automated payment workflows.
              </p>

              {/* Feature list */}
              <div className="mt-10 space-y-4">
                <div className="rounded-2xl border border-zinc-200/70 bg-white/70 backdrop-blur-md p-5 dark:border-zinc-800/70 dark:bg-zinc-950/40">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">Compliance Automation</p>
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-400">
                      Auditable
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                    Governed workflows for filings, documentation pipeline, and deadline-aware dashboards.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200/70 bg-white/70 backdrop-blur-md p-5 dark:border-zinc-800/70 dark:bg-zinc-950/40">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">Corporate Tech Delivery</p>
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-400">
                      Enterprise
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                    Secure implementation with reliable onboarding and operational execution.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200/70 bg-white/70 backdrop-blur-md p-5 dark:border-zinc-800/70 dark:bg-zinc-950/40">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">Automated Payments</p>
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-400">
                      Razorpay-ready
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                    Order lifecycle tracking, webhook reconciliation, and receipt continuity.
                  </p>
                </div>

                {/* Verified Access Pill (isolated, no border overlap glitch) */}
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    Verified access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  )
}

