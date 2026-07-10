'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isAppSubdomain, setIsAppSubdomain] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const isApp = window.location.hostname.includes('app.dhyanshivindia.in')
      setIsAppSubdomain(isApp)
    }
  }, [])

  // Show landing page for app subdomain
  if (mounted && isAppSubdomain) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">DHYANSHIV</h1>
            <Link href="/signin" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Already have an account? Sign In
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Floating background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl dark:bg-cyan-900/20"></div>
              <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-900/20"></div>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400 mb-6 font-bold">✨ Secure Portal for Enterprises</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Welcome to DHYANSHIV
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-4 max-w-2xl mx-auto">
                Enterprise-grade compliance automation and secure services. Access your account to manage compliance, payments, and corporate workflows.
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Government of India Registered | Secure & Compliant | 24/7 Support</p>
            </div>

            {/* User Auth Section */}
            <div className="mb-16">
              <p className="text-center text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-6">👥 USER PORTAL</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/signin" className="group">
                  <button className="relative px-10 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                    <span className="relative z-10 flex items-center gap-2">
                      🔐 Sign In
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>

                <Link href="/signup" className="group">
                  <button className="relative px-10 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                    <span className="relative z-10 flex items-center gap-2">
                      ✨ Create Account
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Admin & Agent Auth Section */}
            <div className="mb-20 py-12 border-t-2 border-zinc-200 dark:border-zinc-800">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Admin Portal */}
                <div className="text-center">
                  <p className="text-center text-sm font-semibold text-amber-700 dark:text-amber-400 mb-6">👨‍💼 ADMIN PORTAL</p>
                  <Link href="/admin/signin" className="group inline-block">
                    <button className="relative px-10 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white w-full sm:w-auto">
                      <span className="relative z-10 flex items-center gap-2 justify-center">
                        🔑 Admin Sign In
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>

                {/* Agent Portal */}
                <div className="text-center">
                  <p className="text-center text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-6">🤖 AGENT PORTAL</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/agent/signin" className="group flex-1">
                      <button className="relative px-10 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full">
                        <span className="relative z-10 flex items-center gap-2 justify-center">
                          🔐 Sign In
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </Link>
                    <Link href="/agent/signup" className="group flex-1">
                      <button className="relative px-10 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white w-full">
                        <span className="relative z-10 flex items-center gap-2 justify-center">
                          ✨ Join as Agent
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/30 backdrop-blur hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">Enterprise Security</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Bank-level encryption and compliance standards for your data protection.</p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/30 backdrop-blur hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">Fast & Reliable</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Lightning-fast compliance checks and payment processing with 99.9% uptime.</p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/30 backdrop-blur hover:border-purple-300 dark:hover:border-purple-600 transition-colors">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">24/7 Support</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Round-the-clock assistance via WhatsApp, email, and dedicated support channels.</p>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 mb-12">
              <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Need Help?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/forgot-password" className="flex items-center gap-3 p-4 rounded-lg hover:bg-cyan-50 dark:hover:bg-zinc-800/50 transition-colors text-cyan-600 dark:text-cyan-400 font-semibold">
                  <span>🔑</span>
                  <span>Forgot Password?</span>
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/forgot-id" className="flex items-center gap-3 p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-800/50 transition-colors text-blue-600 dark:text-blue-400 font-semibold">
                  <span>👤</span>
                  <span>Forgot Account ID?</span>
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mb-8">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Need assistance?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <a href="mailto:support@dhyanshivindia.in" className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline">
                  📧 support@dhyanshivindia.in
                </a>
                <a href="https://wa.me/919173011851" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                  💬 WhatsApp: +91 9173011851
                </a>
                <span className="text-zinc-500 dark:text-zinc-500">🕐 24/7 Available</span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-8 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur">
          <div className="max-w-7xl mx-auto text-center text-sm text-zinc-600 dark:text-zinc-400">
            <p>© 2026 DHYANSHIV INDIA PRIVATE LIMITED. All Rights Reserved.</p>
            <div className="mt-2 flex justify-center gap-6">
              <Link href="/privacy-policy" className="hover:text-cyan-600 dark:hover:text-cyan-400">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-cyan-600 dark:hover:text-cyan-400">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-cyan-600 dark:hover:text-cyan-400">Refund Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // Show main website for primary domain
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl dark:bg-cyan-900/20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-900/20"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400 mb-6 font-bold">🚀 Govt-Registered Enterprise Solutions</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Growth, Trust & Compliance</h1>
            <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 sm:text-xl dark:text-zinc-300">
              Enterprise-grade compliance automation, secure payment infrastructure, and corporate tech delivery for regulated enterprises, MSMEs, and startups.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="https://app.dhyanshivindia.in" className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-4 font-semibold text-white rounded-xl hover:shadow-lg transition-all hover:scale-105">
                <span>Get Started Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 border-2 border-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 px-8 py-4 font-semibold rounded-xl transition-all hover:scale-105">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
