'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function OnboardingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: session } = useSession()
  const tier = searchParams.get('tier') || 'pro'
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    companyName: '',
    phone: '',
    industry: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleComplete = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/user/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tier,
        }),
      })

      if (!response.ok) throw new Error('Onboarding failed')

      const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.dhyanshivindia.in'
      window.location.href = `${appUrl}/dashboard`
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 p-4">
        <div className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Please sign in first
          </p>
          <Link
            href="/signin"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-2xl font-bold mb-4">
              ✓
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              Welcome to DHYANSHIV INDIA!
            </h1>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {tier === 'normal'
                ? 'Let us get you started with the free plan'
                : `You have selected the ${tier.charAt(0).toUpperCase() + tier.slice(1)} plan`}
            </p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              Step 2 of 3
            </span>
            <div className="flex-1 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xl p-8 sm:p-12 backdrop-blur">
          <form onSubmit={handleComplete} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g., Acme Corporation"
                required
                className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9173011851"
                required
                className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="">Select your industry</option>
                <option value="fintech">Fintech</option>
                <option value="ecommerce">E-commerce</option>
                <option value="consulting">Consulting</option>
                <option value="saas">SaaS</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 p-4 mb-6">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong>Plan:</strong>{' '}
                {tier === 'normal'
                  ? 'Normal (Free)'
                  : tier === 'pro'
                  ? 'Pro (₹599/month)'
                  : 'Premium (₹2499/month)'}
              </p>
              {tier !== 'normal' && (
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                  Payment will be processed after this setup. You will get 3 days free trial first.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.companyName || !formData.phone || !formData.industry}
              className="w-full rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 transition-all hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Setting up your account...' : 'Complete Setup & Enter Dashboard'}
            </button>

            {tier === 'normal' && (
              <button
                type="button"
                onClick={() => {
                  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.dhyanshivindia.in'
                  window.location.href = `${appUrl}/dashboard`
                }}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold py-3 px-6 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
              >
                Skip for now
              </button>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center">
              We are committed to your privacy. Your data is encrypted and secure.
              <br />
              <Link href="/privacy-policy" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
