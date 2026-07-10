'use client'

import Link from 'next/link'
import { useState } from 'react'

type SignUpStep = 'email' | 'otp' | 'details' | 'success'

export default function SignUpPage() {
  const [step, setStep] = useState<SignUpStep>('email')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [userCode, setUserCode] = useState('')

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    companyName: '',
  })

  // Step 1: Send OTP
  const handleSendOTP = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')
    setStatus('')

    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('✓ OTP sent to your email')
        setStep('otp')
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to send OTP')
      }
    } catch (err) {
      setError('Error sending OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Step 2: Verify OTP
  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError('OTP must be 6 digits')
      return
    }

    setIsLoading(true)
    setError('')
    setStatus('')

    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })

      if (res.ok) {
        setStatus('✓ Email verified')
        setStep('details')
      } else {
        const data = await res.json()
        setError(data.error || 'Invalid OTP')
      }
    } catch (err) {
      setError('Error verifying OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Step 3: Complete profile and create account
  const handleCreateAccount = async () => {
    if (!formData.fullName.trim()) {
      setError('Full name is required')
      return
    }
    if (!formData.phone || formData.phone.length < 10) {
      setError('Valid phone number is required')
      return
    }

    setIsLoading(true)
    setError('')
    setStatus('')

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          fullName: formData.fullName,
          phone: formData.phone,
          companyName: formData.companyName,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        setUserCode(data.userCode)
        setStatus('✓ Account created successfully')
        setStep('success')
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to create account')
      }
    } catch (err) {
      setError('Error creating account. Please try again.')
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
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className={`text-xs font-bold uppercase tracking-wider ${step === 'email' || step === 'otp' || step === 'details' || step === 'success' ? 'text-cyan-600 dark:text-cyan-400' : 'text-zinc-400 dark:text-zinc-600'}`}>
                  Step {step === 'email' ? '1' : step === 'otp' ? '2' : step === 'details' ? '3' : '4'} of 4
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                {step === 'email' && 'Create Account'}
                {step === 'otp' && 'Verify Email'}
                {step === 'details' && 'Complete Profile'}
                {step === 'success' && 'Welcome!'}
              </h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {step === 'email' && 'Get started with DHYANSHIV in seconds'}
                {step === 'otp' && 'Enter the OTP sent to your email'}
                {step === 'details' && 'Tell us a bit about yourself'}
                {step === 'success' && 'Your account is ready'}
              </p>
            </div>

            {/* Email Step */}
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
                  onClick={handleSendOTP}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                >
                  {isLoading ? '✓ Sending OTP...' : '✓ Send OTP'}
                </button>
              </div>
            )}

            {/* OTP Verification Step */}
            {step === 'otp' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Enter OTP (6 digits)
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                    placeholder="000000"
                    maxLength={6}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all disabled:opacity-60 text-center text-2xl tracking-widest"
                  />
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
                    Check your email at {email}
                  </p>
                </div>

                <button
                  onClick={handleVerifyOTP}
                  disabled={isLoading || otp.length !== 6}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                >
                  {isLoading ? '✓ Verifying...' : '✓ Verify OTP'}
                </button>

                <button
                  onClick={() => { setStep('email'); setOtp(''); }}
                  className="w-full text-cyan-600 dark:text-cyan-400 font-semibold py-2 hover:underline"
                >
                  Use different email
                </button>
              </div>
            )}

            {/* Details Step */}
            {step === 'details' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Your Company"
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all disabled:opacity-60"
                  />
                </div>

                <button
                  onClick={handleCreateAccount}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                >
                  {isLoading ? '✓ Creating Account...' : '✓ Create Account'}
                </button>
              </div>
            )}

            {/* Success Step */}
            {step === 'success' && (
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Your unique Account ID:</p>
                  <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 border border-cyan-200 dark:border-cyan-800 rounded-xl p-4">
                    <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 font-mono">{userCode}</p>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">Save this ID - you'll need it for login</p>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  ✓ Account created successfully for<br />
                  <span className="font-semibold">{email}</span>
                </p>

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

            {/* Status Message */}
            {status && step !== 'success' && (
              <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 text-sm text-green-700 dark:text-green-400">
                {status}
              </div>
            )}

            {/* Sign In Link */}
            {step !== 'success' && (
              <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
                Already have an account?{' '}
                <Link href="/signin" className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold">
                  Sign In
                </Link>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-500">
            <p>By signing up, you agree to our <Link href="/terms-of-service" className="text-cyan-600 dark:text-cyan-400 hover:underline">Terms of Service</Link> and <Link href="/privacy-policy" className="text-cyan-600 dark:text-cyan-400 hover:underline">Privacy Policy</Link></p>
            <p className="mt-2">24/7 Support: <a href="https://wa.me/919173011851" className="text-cyan-600 dark:text-cyan-400 hover:underline">WhatsApp</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
