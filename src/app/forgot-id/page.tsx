'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ForgotIDPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [userCode, setUserCode] = useState('')
  const [step, setStep] = useState<'email' | 'success'>('email')

  const handleFindID = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/find-user-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        const data = await res.json()
        setUserCode(data.userCode)
        setStep('success')
      } else {
        const data = await res.json()
        setError(data.error || 'Account not found with this email')
      }
    } catch (err) {
      setError('Error finding account. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-4">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {step === 'email' ? 'Find your Account ID' : 'Account found'}
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {step === 'email'
              ? 'Enter your email to retrieve your Account ID'
              : 'Your unique Account ID is shown below'}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-card p-6">
          {step === 'email' ? (
            <div className="space-y-3">
              <div>
                <label htmlFor="find-email" className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
                <input
                  id="find-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleFindID()}
                  placeholder="you@company.com"
                  disabled={isLoading}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              {error && <div className="rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 text-xs text-destructive">{error}</div>}
              <button onClick={handleFindID} disabled={isLoading} className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors">
                {isLoading ? 'Looking up...' : 'Find my Account ID'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">Your Account ID</p>
                <p className="text-xl font-mono font-semibold text-foreground tracking-wider">{userCode}</p>
              </div>
              <p className="text-xs text-muted-foreground text-center">Keep this ID safe. You&apos;ll need it for sign in and support requests.</p>
              <Link href="/signin">
                <button className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                  Sign in now
                </button>
              </Link>
              <button onClick={() => { setStep('email'); setEmail(''); setUserCode(''); }} className="inline-flex h-9 w-full items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
                Try a different email
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            <Link href="/signin" className="text-primary hover:underline underline-offset-4">← Back to sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
