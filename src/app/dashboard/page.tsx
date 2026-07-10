'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Zap, BarChart2, CreditCard, MessageCircle, Mail, ArrowRight } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

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
      <div className="min-h-[calc(100vh-3.5rem)] bg-zinc-50 dark:bg-zinc-950 p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <Skeleton className="h-7 w-48" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1,2,3].map((i) => <Skeleton key={i} className="h-36 rounded-lg" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1,2].map((i) => <Skeleton key={i} className="h-48 rounded-lg" />)}
          </div>
        </div>
      </div>
    )
  }

  const tierBadge: Record<string, { label: string; color: string }> = {
    normal: { label: 'Free', color: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300' },
    pro: { label: 'Pro', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
    premium: { label: 'Premium', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
  }

  const tierInfo = {
    normal: { name: 'Free Plan', price: 'Free', features: 10 },
    pro: { name: 'Pro Plan', price: '₹599/month', features: 100 },
    premium: { name: 'Premium Plan', price: '₹2499/month', features: 'Unlimited' },
  }

  const currentTier = subscriptionData?.tier || 'normal'
  const info = tierInfo[currentTier as keyof typeof tierInfo]
  const badge = tierBadge[currentTier as keyof typeof tierBadge]
  const usage = subscriptionData?.quota
  const usagePercent = usage ? Math.round((usage.requestsUsed / usage.requestsLimit) * 100) : 0

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Page header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Welcome back, {session?.user?.name || session?.user?.email?.split('@')[0]}
            </p>
          </div>
          <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${badge.color}`}>
            {badge.label}
          </span>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Plan */}
          <div className="rounded-lg border border-border bg-card shadow-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Current Plan</p>
                <p className="mt-2 text-xl font-semibold text-foreground">{info.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{info.price}</p>
              </div>
              <div className="rounded-md bg-primary/10 p-2">
                <Zap className="h-4 w-4 text-primary" />
              </div>
            </div>
            <button className="mt-4 inline-flex h-7 items-center gap-1.5 rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
              View plans <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Usage */}
          <div className="rounded-lg border border-border bg-card shadow-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Monthly Usage</p>
                <p className="mt-2 text-xl font-semibold text-foreground">
                  {usage?.requestsUsed || 0} <span className="text-sm text-muted-foreground">/ {usage?.requestsLimit || 0}</span>
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{usagePercent}% used</p>
              </div>
              <div className="rounded-md bg-blue-50 dark:bg-blue-900/20 p-2">
                <BarChart2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary transition-all rounded-full"
                style={{ width: `${Math.min(usagePercent, 100)}%` }}
              />
            </div>
          </div>

          {/* Billing */}
          <div className="rounded-lg border border-border bg-card shadow-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Billing</p>
                {currentTier !== 'normal' && subscriptionData?.subscription?.nextBillingDate ? (
                  <>
                    <p className="mt-2 text-xl font-semibold text-foreground">
                      {new Date(subscriptionData.subscription.nextBillingDate).toLocaleDateString()}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">Next billing date</p>
                  </>
                ) : (
                  <>
                    <p className="mt-2 text-xl font-semibold text-green-600 dark:text-green-400">Free Plan</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">No billing required</p>
                  </>
                )}
              </div>
              <div className="rounded-md bg-purple-50 dark:bg-purple-900/20 p-2">
                <CreditCard className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <button className="mt-4 inline-flex h-7 items-center rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
              Manage billing
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Plan Management */}
          <div className="rounded-lg border border-border bg-card shadow-card p-6">
            <h2 className="text-sm font-semibold text-foreground">Plan Management</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {currentTier === 'normal'
                ? 'Upgrade to Pro or Premium to unlock advanced features and higher quotas.'
                : 'Modify your subscription, upgrade, downgrade, or cancel at any time.'}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentTier === 'normal' ? (
                <Link href="/signup" className="inline-flex h-8 items-center rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                  Explore Plans
                </Link>
              ) : (
                <>
                  <button className="inline-flex h-8 items-center rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">Upgrade</button>
                  <button className="inline-flex h-8 items-center rounded-md border border-input bg-background px-4 text-xs font-medium text-foreground shadow-xs hover:bg-accent transition-colors">Downgrade</button>
                  <button className="inline-flex h-8 items-center rounded-md border border-destructive bg-background px-4 text-xs font-medium text-destructive shadow-xs hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">Cancel</button>
                </>
              )}
            </div>
          </div>

          {/* Support */}
          <div className="rounded-lg border border-border bg-card shadow-card p-6">
            <h2 className="text-sm font-semibold text-foreground">Need Help?</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {currentTier === 'premium'
                ? 'You have priority support. Contact your dedicated account manager.'
                : 'Contact our support team via WhatsApp or email for assistance.'}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://wa.me/919173011851" className="inline-flex h-8 items-center gap-1.5 rounded-md bg-green-600 px-4 text-xs font-medium text-white shadow hover:bg-green-700 transition-colors">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a href="mailto:support@dhyanshivindia.in" className="inline-flex h-8 items-center gap-1.5 rounded-md border border-input bg-background px-4 text-xs font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
