'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface SubscriptionData {
  tier: string
  subscription?: {
    tier: string
    status: string
    nextBillingDate: string
    price: number
  }
  quota?: {
    requestsUsed: number
    requestsLimit: number
  }
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      window.location.href = '/signin'
      return
    }

    if (status === 'authenticated') {
      fetchSubscriptionData()
    }
  }, [status])

  const fetchSubscriptionData = async () => {
    try {
      const response = await fetch('/api/subscription')
      if (!response.ok) throw new Error('Failed to fetch subscription data')
      const data = await response.json()
      setSubscriptionData(data)
    } catch (err) {
      setError('Failed to load subscription data')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 animate-pulse mb-4">
            <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  const tierColors = {
    normal: 'from-slate-500 to-slate-600',
    pro: 'from-cyan-500 to-blue-600',
    premium: 'from-purple-500 to-pink-600',
  }

  const tierInfo = {
    normal: { name: 'Normal', price: 'Free', features: 10 },
    pro: { name: 'Pro', price: '₹599/month', features: 100 },
    premium: { name: 'Premium', price: '₹2499/month', features: 'Unlimited' },
  }

  const currentTier = subscriptionData?.tier || 'normal'
  const info = tierInfo[currentTier as keyof typeof tierInfo]
  const usage = subscriptionData?.quota
  const usagePercent = usage ? Math.round((usage.requestsUsed / usage.requestsLimit) * 100) : 0

  return (
    <div className="space-y-8">
      {error && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Current Plan Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`rounded-2xl bg-gradient-to-br ${tierColors[currentTier as keyof typeof tierColors]} p-8 text-white shadow-lg`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Current Plan</h3>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <p className="text-3xl font-bold mb-2">{info.name}</p>
          <p className="text-white/80">{info.price}</p>
          <button className="mt-6 w-full rounded-lg bg-white/20 hover:bg-white/30 px-4 py-2 font-semibold transition-all">
            View All Plans
          </button>
        </div>

        {/* Usage Card */}
        <div className="rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 p-8 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Monthly Usage</h3>
            <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            {usage?.requestsUsed || 0} / {usage?.requestsLimit || 0}
          </p>
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all"
              style={{ width: `${Math.min(usagePercent, 100)}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            {usagePercent}% of your monthly quota used
          </p>
        </div>

        {/* Next Billing */}
        <div className="rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 p-8 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Billing</h3>
            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
          </div>
          {currentTier !== 'normal' && subscriptionData?.subscription?.nextBillingDate ? (
            <>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Next billing date</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {new Date(subscriptionData.subscription.nextBillingDate).toLocaleDateString()}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Status</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">Free Plan</p>
            </>
          )}
          <button className="mt-6 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all">
            Manage Billing
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Settings Card */}
        <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-800/50 p-8 shadow-lg">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Plan Management</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {currentTier === 'normal'
              ? 'Upgrade to Pro or Premium to unlock advanced features'
              : 'Modify your subscription, upgrade, downgrade, or cancel'}
          </p>
          <div className="flex gap-3">
            {currentTier === 'normal' ? (
              <Link
                href="/signup"
                className="flex-1 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 text-center text-white font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all"
              >
                Explore Plans
              </Link>
            ) : (
              <>
                <button className="flex-1 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 text-white font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all">
                  Upgrade
                </button>
                <button className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all">
                  Downgrade
                </button>
                <button className="flex-1 rounded-lg border border-red-300 dark:border-red-900 px-4 py-3 text-red-700 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Support Card */}
        <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-800/50 p-8 shadow-lg">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Need Help?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {currentTier === 'premium'
              ? 'You have priority support access. Contact your dedicated account manager.'
              : 'Contact our support team via WhatsApp or email'}
          </p>
          <div className="flex gap-3">
            <a
              href="https://wa.me/919173011851"
              className="flex-1 rounded-lg bg-green-600 hover:bg-green-700 px-4 py-3 text-center text-white font-semibold transition-all"
            >
              WhatsApp Support
            </a>
            <a
              href="mailto:support@dhyanshivindia.in"
              className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-center text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-zinc-800/50">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Quick Actions
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-700">
            New Service Request
          </button>
          <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-white/20 dark:text-white dark:hover:bg-zinc-800">
            View Compliance Status
          </button>
          {isAdmin && (
            <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-white/20 dark:text-white dark:hover:bg-zinc-800">
              View Analytics
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
