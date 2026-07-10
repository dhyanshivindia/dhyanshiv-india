'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [step, setStep] = useState<'email' | 'success'>('email')

  const handleSendReset = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')
    setStatus('')

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('✓ Password reset link sent to your email')
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950">
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 shadow-xl">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                {step === 'email' ? 'Reset Password' : 'Check Your Email'}
              </h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {step === 'email' 
                  ? 'Enter your email address and we\'ll send you a link to reset your password'
                  : 'We\'ve sent a password reset link to your email. Check your inbox and follow the instructions.'}
              </p>
            </div>

            {step === 'email' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all disabled:opacity-60"
                  />
                </div>

                <button
                  onClick={handleSendReset}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                >
                  {isLoading ? '✓ Sending...' : '✓ Send Reset Link'}
                </button>
              </div>
            )}

            {step === 'success' && (
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Password reset link sent to<br />
                  <span className="font-semibold">{email}</span>
                </p>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-300">
                  ⚠️ Link expires in 24 hours. Check spam folder if you don't see it.
                </div>

                <Link href="/signin" className="w-full block">
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all">
                    ← Return to Sign In
                  </button>
                </Link>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 text-sm text-red-700 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Links */}
            {step === 'email' && (
              <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                  Remember your password?{' '}
                  <Link href="/signin" className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold">
                    Sign In
                  </Link>
                </p>
                <p className="mt-3">
                  Forgot your Account ID?{' '}
                  <Link href="/forgot-id" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                    Find it here
                  </Link>
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-500">
            <p>Need immediate help? Contact us 24/7</p>
            <p className="mt-1"><a href="https://wa.me/919173011851" className="text-cyan-600 dark:text-cyan-400 hover:underline">WhatsApp Support</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
