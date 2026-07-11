'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [debugResetUrl, setDebugResetUrl] = useState('')
  const [step, setStep] = useState<'email' | 'success'>('email')

  const handleSendReset = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')
    setStatus('')
    setDebugResetUrl('')

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        const data = await res.json()
        setStatus('Password reset link sent to your email')
        setDebugResetUrl(data.debugResetUrl || '')
        setStep('success')
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to send reset link')
      }
    } catch (err) {
      setError('Error sending reset link. Please try again.')
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {step === 'email' ? 'Reset your password' : 'Check your email'}
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {step === 'email'
              ? "Enter your email and we'll send a reset link"
              : 'A password reset link has been sent to your email'}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-card p-6">
          {step === 'email' ? (
            <div className="space-y-3">
              <div>
                <label htmlFor="reset-email" className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendReset()}
                  placeholder="you@company.com"
                  disabled={isLoading}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              {error && <div className="rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 text-xs text-destructive">{error}</div>}
              <button onClick={handleSendReset} disabled={isLoading} className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors">
                {isLoading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">{status}</p>
              {debugResetUrl && (
                <p className="text-xs text-muted-foreground">
                  Development link:{' '}
                  <Link href={debugResetUrl} className="text-primary hover:underline underline-offset-4">
                    Open reset page
                  </Link>
                </p>
              )}
              <button onClick={() => { setStep('email'); setEmail(''); setStatus(''); setDebugResetUrl(''); }} className="inline-flex h-9 w-full items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
                Try a different email
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Remember your password? <Link href="/signin" className="text-primary hover:underline underline-offset-4">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
