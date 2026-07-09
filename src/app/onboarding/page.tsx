'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

type OnboardingStep = 'email' | 'otp' | 'personal' | 'legal'

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState<OnboardingStep>('email')
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    mobile: '',
    aadhaarNumber: '',
    panNumber: '',
  })

  useEffect(() => {
    const consent = localStorage.getItem('declaration_consent')
    if (!consent) {
      router.push('/declaration')
    }
  }, [router])

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (err) {
      setError('Google sign-in failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendOTP = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter valid email')
      return
    }

    setIsLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setOtpSent(true)
        setSuccess('OTP sent to your email!')
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to send OTP')
      }
    } catch (err) {
      setError('Error sending OTP')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError('OTP must be 6 digits')
      return
    }

    setIsLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })

      if (res.ok) {
        setStep('personal')
        setSuccess('Email verified!')
        setOtp('')
      } else {
        const data = await res.json()
        setError(data.error || 'Invalid OTP')
      }
    } catch (err) {
      setError('OTP verification failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitPersonal = () => {
    if (!formData.fullName || !formData.dob || !formData.mobile) {
      setError('Please fill all fields')
      return
    }
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      setError('Mobile must be 10 digits')
      return
    }
    setError('')
    setStep('legal')
  }

  const handleSubmitLegal = async () => {
    if (!formData.aadhaarNumber && !formData.panNumber) {
      setError('Please provide Aadhaar or PAN')
      return
    }

    setIsLoading(true)
    setError('')
    try {
      const res = await fetch('/api/user/complete-onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, ...formData }),
      })

      if (res.ok) {
        setSuccess('Profile completed!')
        setTimeout(() => router.push('/signup'), 1500)
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to complete onboarding')
      }
    } catch (err) {
      setError('Error saving profile')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Complete Your Profile
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Step {step === 'email' || step === 'otp' ? '1' : step === 'personal' ? '2' : '3'} of 3
          </p>
        </div>

        <div className="flex gap-2 mb-8">
          {['email', 'personal', 'legal'].map((s, i) => (
            <div
              key={s}
              className={`flex-1 h-1 rounded-full ${
                step === 'otp'
                  ? i === 0
                    ? 'bg-cyan-500'
                    : 'bg-zinc-300'
                  : ['email', 'personal', 'legal'].indexOf(step) >= i
                  ? 'bg-cyan-500'
                  : 'bg-zinc-300'
              }`}
            />
          ))}
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xl p-8 backdrop-blur">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm">
              ✓ {success}
            </div>
          )}

          {step === 'email' && !otpSent && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              <button
                onClick={handleSendOTP}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all disabled:opacity-60"
              >
                {isLoading ? 'Sending...' : 'Send OTP'}
              </button>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-300 dark:border-zinc-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400">or</span>
                </div>
              </div>
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold py-3 px-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                </svg>
                Continue with Google
              </button>
            </div>
          )}

          {step === 'email' && otpSent && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  6-digit OTP sent to <strong>{email}</strong>
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  One-Time Password
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                  placeholder="000000"
                  maxLength={6}
                  className="w-full px-4 py-3 text-center text-2xl tracking-widest rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none font-mono"
                />
              </div>
              <button
                onClick={handleVerifyOTP}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all disabled:opacity-60"
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <button
                onClick={() => setOtpSent(false)}
                className="w-full text-cyan-600 dark:text-cyan-400 text-sm hover:underline"
              >
                Try different email
              </button>
            </div>
          )}

          {step === 'personal' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  Full Name (as per Aadhaar)
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value.slice(0, 10) })}
                  placeholder="9876543210"
                  maxLength={10}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>
              <button
                onClick={handleSubmitPersonal}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all"
              >
                Continue
              </button>
            </div>
          )}

          {step === 'legal' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  Aadhaar Number (12-digit)
                </label>
                <input
                  type="text"
                  value={formData.aadhaarNumber}
                  onChange={(e) => setFormData({ ...formData, aadhaarNumber: e.target.value.slice(0, 12) })}
                  placeholder="1234 5678 9012"
                  maxLength={12}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none font-mono"
                />
              </div>
              <div className="text-center text-zinc-500 text-sm">or</div>
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  PAN Number (10-digit)
                </label>
                <input
                  type="text"
                  value={formData.panNumber}
                  onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase().slice(0, 10) })}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none font-mono"
                />
              </div>
              <button
                onClick={handleSubmitLegal}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all disabled:opacity-60"
              >
                {isLoading ? 'Completing...' : 'Complete Onboarding'}
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-6 text-xs text-zinc-600 dark:text-zinc-400">
          <p>Your data is encrypted and secure</p>
          <p>
            <Link href="/privacy-policy" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Privacy
            </Link>
            {' '}&{' '}
            <Link href="/terms-of-service" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
