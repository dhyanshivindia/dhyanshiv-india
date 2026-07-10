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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950">
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 shadow-xl">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                {step === 'email' ? 'Find Your Account ID' : 'Account Found'}
              </h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {step === 'email' 
                  ? 'Enter the email associated with your DHYANSHIV account to retrieve your Account ID (U-XXXXXXXX)'
                  : 'Here\'s your unique Account ID. Keep it safe for future logins and support requests.'}
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
                  onClick={handleFindID}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                >
                  {isLoading ? '🔍 Searching...' : '🔍 Find My Account ID'}
                </button>
              </div>
            )}

            {step === 'success' && (
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Your Account ID:</p>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 font-mono">{userCode}</p>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-3">
                    Associated with: <span className="font-semibold">{email}</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(userCode)
                  }}
                  className="w-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-semibold py-3 px-4 rounded-xl transition-all"
                >
                  📋 Copy Account ID
                </button>

                <Link href="/signin" className="w-full block">
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all">
                    ✓ Continue to Sign In
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
                  Remember your Account ID?{' '}
                  <Link href="/signin" className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold">
                    Sign In
                  </Link>
                </p>
                <p className="mt-3">
                  Forgot your password?{' '}
                  <Link href="/forgot-password" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                    Reset it here
                  </Link>
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-500">
            <p>Still need help? Contact our support team</p>
            <p className="mt-1"><a href="https://wa.me/919173011851" className="text-cyan-600 dark:text-cyan-400 hover:underline">💬 WhatsApp 24/7</a> • <a href="mailto:support@dhyanshivindia.in" className="text-cyan-600 dark:text-cyan-400 hover:underline">📧 Email Support</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
