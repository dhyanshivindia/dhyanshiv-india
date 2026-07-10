'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type SignupStep = 1 | 2 | 3 | 4

export default function AgentSignUp() {
  const [step, setStep] = useState<SignupStep>(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agentCode, setAgentCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  // Step 1: Send OTP
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to send OTP')
        return
      }

      setStep(2)
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Step 2: Verify OTP
  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Invalid OTP')
        return
      }

      setStep(3)
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Step 3: Create Agent Account
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/agent-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          fullName,
          phone,
          companyName,
          password,
          otp,
          step: 2,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Account creation failed')
        return
      }

      setAgentCode(data.agent.userCode)
      setStep(4)
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Step 4: Success & Copy Code
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(agentCode)
      alert('Agent ID copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleGoToDashboard = () => {
    localStorage.setItem(
      'agentAuth',
      JSON.stringify({
        agentId: email, // Placeholder
        email,
        userCode: agentCode,
        role: 'agent',
      })
    )
    router.push('/agent/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mb-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-green-600 rounded-full">
              <span className="text-3xl">🤖</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
            Join as Agent
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Create your agent account in {4 - step + 1} easy steps
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  s <= step
                    ? 'bg-gradient-to-r from-teal-600 to-green-600 text-white'
                    : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`h-1 w-full mt-2 ${
                    s < step ? 'bg-teal-600' : 'bg-zinc-200 dark:bg-zinc-700'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl p-8 mb-6">
          {/* Step 1: Email & OTP Request */}
          {step === 1 && (
            <form onSubmit={handleSendOTP} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 disabled:from-zinc-400 disabled:to-zinc-400 text-white font-bold py-3 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                {loading ? '🔄 Sending...' : '📧 Send OTP'}
              </button>
            </form>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Enter the OTP sent to <strong>{email}</strong>
                </p>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  OTP Code
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.toUpperCase())}
                  placeholder="000000"
                  maxLength={6}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all text-center text-2xl tracking-widest"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 disabled:from-zinc-400 disabled:to-zinc-400 text-white font-bold py-3 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                {loading ? '🔄 Verifying...' : '✅ Verify OTP'}
              </button>
            </form>
          )}

          {/* Step 3: Profile Information */}
          {step === 3 && (
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                    disabled={loading}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 disabled:from-zinc-400 disabled:to-zinc-400 text-white font-bold py-3 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                {loading ? '🔄 Creating Account...' : '🚀 Create Account'}
              </button>
            </form>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl p-8 border border-green-300 dark:border-green-800">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
                  Welcome Agent!
                </h2>
                <p className="text-green-600 dark:text-green-300 text-sm">
                  Your account has been created successfully
                </p>
              </div>

              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 border-2 border-zinc-300 dark:border-zinc-700">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Your Agent ID</p>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 font-mono">
                    {agentCode}
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
                  >
                    📋 Copy
                  </button>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4">
                  ⚠️ Save this ID securely. You'll need it for verification and reference.
                </p>
              </div>

              <button
                onClick={handleGoToDashboard}
                className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-bold py-3 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                → Go to Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="text-center space-y-4">
          {step !== 4 && (
            <>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Already have an account?{' '}
                <Link
                  href="/agent/signin"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Not an agent?{' '}
                <Link
                  href="/signup"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  User Signup
                </Link>
              </p>
            </>
          )}
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <Link
              href="/"
              className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
            >
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
