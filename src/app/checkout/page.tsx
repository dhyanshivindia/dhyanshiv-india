'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const TIER_PRICING = {
  pro: { name: 'Pro', price: 59900, displayPrice: '₹599', period: '/month', features: 100 },
  premium: { name: 'Premium', price: 249900, displayPrice: '₹2499', period: '/month', features: 'Unlimited' },
}

declare global {
  interface Window {
    Razorpay?: any
  }
}

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: session, status } = useSession()
  const tier = (searchParams.get('tier') || 'pro') as 'pro' | 'premium'
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const pricing = TIER_PRICING[tier]
  const gst = Math.round(pricing.price * 0.18) // 18% GST
  const total = pricing.price + gst

  const handlePayment = async () => {
    if (status !== 'authenticated' || !session?.user?.email) {
      router.push(`/signin?tier=${tier}`)
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Create Razorpay order
      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total, // in paise
          tier,
          email: session.user.email,
          name: session.user.name || 'User',
        }),
      })

      if (!orderResponse.ok) {
        throw new Error('Failed to create payment order')
      }

      const { orderId, razorpayKey } = await orderResponse.json()

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        script.onload = () => openRazorpayCheckout(orderId, razorpayKey)
        script.onerror = () => setError('Failed to load payment gateway')
        document.body.appendChild(script)
      } else {
        openRazorpayCheckout(orderId, razorpayKey)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const openRazorpayCheckout = (orderId: string, razorpayKey: string) => {
    const options = {
      key: razorpayKey,
      order_id: orderId,
      name: 'DHYANSHIV INDIA',
      description: `${pricing.name} Plan Subscription`,
      prefill: {
        email: session?.user?.email,
        contact: '',
      },
      handler: (response: any) => {
        // Payment successful - verify and save to database
        verifyPayment(response)
      },
      modal: {
        ondismiss: () => {
          setError('Payment cancelled')
        },
      },
      theme: {
        color: '#0891b2',
      },
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  const verifyPayment = async (paymentData: any) => {
    try {
      setIsLoading(true)

      const verifyResponse = await fetch('/api/payment/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: paymentData.razorpay_order_id,
          paymentId: paymentData.razorpay_payment_id,
          signature: paymentData.razorpay_signature,
          tier,
        }),
      })

      if (!verifyResponse.ok) {
        throw new Error('Payment verification failed')
      }

      // Payment successful - redirect to onboarding
      router.push(`/onboarding?tier=${tier}`)
    } catch (err) {
      setError('Payment verification failed. Please contact support.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 animate-pulse mb-4">
            <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">Loading checkout...</p>
        </div>
      </main>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Sign in required</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">Please sign in to proceed with payment</p>
          <Link
            href={`/signin?tier=${tier}`}
            className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700"
          >
            Sign In
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href={`/signup?tier=${tier}`} className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">
            ← Back to tier selection
          </Link>
          <h1 className="mt-4 text-4xl font-bold text-zinc-900 dark:text-white">Complete Your Purchase</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Secure payment powered by Razorpay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Order Summary</h2>

              {/* Plan Details */}
              <div className="rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{pricing.name} Plan</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Billed monthly</p>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {pricing.displayPrice}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Monthly Requests:</strong> {pricing.features}
                  </p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Billing Cycle:</strong> Monthly recurring
                  </p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <strong>Auto-renewal:</strong> Yes (can be cancelled anytime)
                  </p>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 border-t border-zinc-200 dark:border-zinc-700 pt-6 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600 dark:text-zinc-400">Plan Price</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">₹{(pricing.price / 100).toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600 dark:text-zinc-400">GST (18%)</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">₹{(gst / 100).toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-zinc-200 dark:border-zinc-700 pt-4">
                  <span className="text-zinc-900 dark:text-white">Total Due</span>
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                    ₹{(total / 100).toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Terms */}
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 mb-6">
                <p className="text-xs text-blue-800 dark:text-blue-300">
                  <strong>By proceeding:</strong> You agree to the recurring monthly charge of {pricing.displayPrice} {pricing.period}. 
                  You can cancel anytime from your account settings. No refunds for partial months.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={isLoading}
                className="w-full rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 transition-all hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Processing...' : `Pay ₹${(total / 100).toFixed(0)} Now`}
              </button>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center mt-4">
                Secure payment powered by Razorpay • PCI DSS Level 1 Certified
              </p>
            </div>
          </div>

          {/* Sidebar - Plan Comparison */}
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 shadow-lg sticky top-4">
              <h3 className="font-bold text-zinc-900 dark:text-white mb-4">What's Included</h3>
              
              <div className="space-y-3">
                {tier === 'pro' ? (
                  <>
                    <div className="flex gap-2 text-sm">
                      <span className="text-cyan-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">100 requests/month</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-cyan-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">Full dashboard</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-cyan-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">API access (100/day)</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-cyan-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">Custom reports</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-cyan-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">WhatsApp support (24hr)</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">Unlimited requests</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">Priority dashboard</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">Unlimited API calls</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">Advanced analytics</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">Dedicated manager (4hr)</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span className="text-zinc-700 dark:text-zinc-300">99.9% SLA guarantee</span>
                    </div>
                  </>
                )}
              </div>

              {/* Help */}
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-3">Questions?</p>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/919173011851"
                    className="block text-xs text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    WhatsApp support
                  </a>
                  <a
                    href="mailto:support@dhyanshivindia.in"
                    className="block text-xs text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Email support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
