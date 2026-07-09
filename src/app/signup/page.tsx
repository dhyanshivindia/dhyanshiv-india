'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type SubscriptionTier = 'normal' | 'pro' | 'premium'

const TIER_DETAILS = {
  normal: {
    name: 'Normal',
    price: 'Free',
    description: 'For getting started',
    features: [
      '✓ Basic compliance checking',
      '✓ Manual service requests',
      '✓ Email support (48hr)',
      '✓ Up to 10 requests/month',
      '✗ No dashboard',
      '✗ No API access',
    ],
    color: 'from-slate-500 to-slate-600',
  },
  pro: {
    name: 'Pro',
    price: '₹599',
    period: '/month',
    description: 'For growing businesses',
    features: [
      '✓ Full dashboard with stats',
      '✓ Automated compliance checks',
      '✓ WhatsApp support (24hr)',
      '✓ API access (100 req/day)',
      '✓ Custom reports',
      '✓ 100 requests/month',
    ],
    color: 'from-cyan-500 to-blue-600',
    recommended: true,
  },
  premium: {
    name: 'Premium',
    price: '₹2499',
    period: '/month',
    description: 'For enterprises',
    features: [
      '✓ Priority support (4hr)',
      '✓ Dedicated account manager',
      '✓ Unlimited API requests',
      '✓ Advanced analytics',
      '✓ Custom integrations',
      '✓ SLA guarantee (99.9%)',
    ],
    color: 'from-purple-500 to-pink-600',
  },
}

export default function SignUpPage() {
  const [selectedTier, setSelectedTier] = useState<SubscriptionTier>('pro')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has given consent
    const consent = localStorage.getItem('declaration_consent')
    if (!consent) {
      router.push('/declaration')
    }
  }, [router])

  const handleContinue = async () => {
    setIsLoading(true)
    try {
      // Redirect to signin with tier info
      // Then from signin → checkout/onboarding
      router.push(`/signin?tier=${selectedTier}`)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 mb-8"
          >
            ← Back to home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Select the perfect plan for your business. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {(['normal', 'pro', 'premium'] as const).map((tier) => {
            const details = TIER_DETAILS[tier]
            const isSelected = selectedTier === tier

            return (
              <div
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`relative rounded-2xl border-2 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20 scale-105'
                    : 'border-zinc-200 dark:border-zinc-800 hover:border-cyan-300'
                } bg-white dark:bg-zinc-900/50 p-8 backdrop-blur`}
              >
                {/* Recommended Badge */}
                {'recommended' in details && details.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    {details.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {details.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {details.price}
                  </span>
                  {('period' in details && details.period) && (
                    <span className="text-zinc-600 dark:text-zinc-400 ml-2">
                      {details.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`text-sm ${
                        feature.startsWith('✓')
                          ? 'text-zinc-700 dark:text-zinc-300'
                          : 'text-zinc-500 dark:text-zinc-500 line-through'
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Selection Indicator */}
                <div
                  className={`h-1 rounded-full transition-all ${
                    isSelected
                      ? `bg-gradient-to-r ${details.color}`
                      : 'bg-zinc-200 dark:bg-zinc-700'
                  }`}
                />
              </div>
            )
          })}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            disabled={isLoading}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-60"
          >
            {isLoading ? 'Loading...' : `Continue with ${TIER_DETAILS[selectedTier].name}`}
          </button>
        </div>

        {/* Info */}
        <div className="mt-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Already have an account?{' '}
            <Link href="/signin" className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold">
              Sign in here
            </Link>
          </p>
          <p className="mt-2">
            All plans include 14-day free trial. No credit card required initially.
          </p>
        </div>
      </div>
    </main>
  )
}
