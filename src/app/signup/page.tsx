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
        setStatus('âœ“ OTP sent to your email')
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
        setStatus('âœ“ Email verified')
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
        setStatus('âœ“ Account created successfully')
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
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-xl border border-border bg-card shadow-card p-6">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Step {step === 'email' ? '1' : step === 'otp' ? '2' : step === 'details' ? '3' : '4'} of 4
              </span>
              <div className="flex gap-1">
                {(['email', 'otp', 'details', 'success'] as SignUpStep[]).map((s, i) => (
                  <div key={s} className={`h-1 w-6 rounded-full transition-colors ${(['email', 'otp', 'details', 'success'] as SignUpStep[]).indexOf(step) >= i ? 'bg-primary' : 'bg-muted'}`} />
                ))}
              </div>
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              {step === 'email' && 'Create your account'}
              {step === 'otp' && 'Verify your email'}
              {step === 'details' && 'Complete your profile'}
              {step === 'success' && 'Account created!'}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {step === 'email' && 'Get started with DHYANSHIV in seconds'}
              {step === 'otp' && 'Enter the OTP sent to your email'}
              {step === 'details' && 'Tell us a bit about yourself'}
              {step === 'success' && 'Your account is ready'}
            </p>
          </div>

          {/* Email Step */}
          {step === 'email' && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendOTP()} placeholder="you@company.com" disabled={isLoading} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <button onClick={handleSendOTP} disabled={isLoading} className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors">
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </div>
          )}

          {/* OTP Step */}
          {step === 'otp' && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Enter OTP (6 digits)</label>
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value.slice(0, 6))} placeholder="000000" maxLength={6} disabled={isLoading} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-center tracking-widest font-mono" />
                <p className="text-xs text-muted-foreground mt-1.5">Check your email at {email}</p>
              </div>
              <button onClick={handleVerifyOTP} disabled={isLoading || otp.length !== 6} className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors">
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <button onClick={() => { setStep('email'); setOtp(''); }} className="inline-flex h-8 w-full items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                Use different email
              </button>
            </div>
          )}

          {/* Details Step */}
          {step === 'details' && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="John Doe" disabled={isLoading} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" disabled={isLoading} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Company Name (Optional)</label>
                <input type="text" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} placeholder="Your Company" disabled={isLoading} className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <button onClick={handleCreateAccount} disabled={isLoading} className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors">
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          )}

          {/* Success Step */}
          {step === 'success' && (
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Your unique Account ID</p>
                <div className="rounded-lg bg-muted px-4 py-3">
                  <p className="text-2xl font-mono font-semibold text-foreground tracking-wider">{userCode}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Save this ID — you will need it for sign in and support</p>
              </div>
              <p className="text-sm text-muted-foreground">Account created for <strong className="text-foreground">{email}</strong></p>
              <Link href="/signin" className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Sign in now
              </Link>
            </div>
          )}

          {/* Error/Status Messages */}
          {error && (
            <div className="mt-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 text-xs text-destructive">{error}</div>
          )}
          {status && step !== 'success' && (
            <div className="mt-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 text-xs text-green-700 dark:text-green-400">{status}</div>
          )}
          {step !== 'success' && (
            <div className="mt-5 text-center text-xs text-muted-foreground">
              Already have an account?{' '}
              <Link href="/signin" className="text-primary hover:underline underline-offset-4">Sign in</Link>
            </div>
          )}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          By signing up, you agree to our{' '}
          <Link href="/terms-of-service" className="text-primary hover:underline underline-offset-4">Terms</Link> and{' '}
          <Link href="/privacy-policy" className="text-primary hover:underline underline-offset-4">Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}
