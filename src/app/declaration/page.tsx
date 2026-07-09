'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DeclarationPage() {
  const router = useRouter()
  const [agreed, setAgreed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleContinue = () => {
    if (!agreed) {
      alert('Please agree to the declaration to continue')
      return
    }

    setIsLoading(true)
    // Store consent in localStorage
    localStorage.setItem('declaration_consent', 'true')
    localStorage.setItem('declaration_timestamp', new Date().toISOString())
    
    // Redirect to signup
    router.push('/signup')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-2xl font-bold mb-6">
            ⚖️
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Legal Declaration & Consent
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Before proceeding, please read and agree to our terms
          </p>
        </div>

        {/* Main Content */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xl p-8 sm:p-12 mb-8">
          {/* Declaration Content */}
          <div className="prose dark:prose-invert max-w-none mb-8">
            <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
              <section>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  📋 What You Need to Know
                </h2>
                <p>
                  <strong>DHYANSHIV INDIA PRIVATE LIMITED</strong> (hereinafter referred to as "We" or "Company") 
                  provides enterprise compliance, tech solutions, and document management services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  📄 About Your Documents
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will provide your personal/business documents for compliance and services</li>
                  <li>All documents shared by you will be handled with utmost confidentiality</li>
                  <li>We follow ISO 27001 and industry-standard security protocols</li>
                  <li>Your data is encrypted and stored securely on our infrastructure</li>
                  <li>You retain complete ownership and control of your documents</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  🔒 Privacy & Data Protection
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We comply with GDPR, CCPA, and Indian data protection laws</li>
                  <li>Your personal information will not be shared with third parties without consent</li>
                  <li>You can request data deletion at any time</li>
                  <li>We conduct regular security audits and updates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  ✅ Your Consent & Agreement
                </h2>
                <p>
                  By checking the box below, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>You are providing documents voluntarily for compliance services</li>
                  <li>You understand the services offered by DHYANSHIV INDIA</li>
                  <li>You agree to our Privacy Policy and Terms of Service</li>
                  <li>You authorize us to process your documents as per your requirements</li>
                  <li>You are aware this platform operates on app.dhyanshivindia.in subdomain</li>
                  <li>You consent to using our platform for legal compliance purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  📱 Platform & Terms
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>This platform (app.dhyanshivindia.in) is exclusively for our compliance services</li>
                  <li>By proceeding, you agree to comply with our Terms of Service</li>
                  <li>You must be 18+ to use our services</li>
                  <li>Unauthorized access or misuse is prohibited</li>
                </ul>
              </section>

              <section className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                  💡 For more details, please review our 
                  <Link href="/privacy-policy" className="underline ml-1 hover:text-blue-700 dark:hover:text-blue-200">
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link href="/terms-of-service" className="underline hover:text-blue-700 dark:hover:text-blue-200">
                    Terms of Service
                  </Link>
                </p>
              </section>
            </div>
          </div>

          {/* Checkbox */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6 mb-8">
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-6 h-6 mt-1 rounded border-2 border-cyan-500 accent-cyan-600 cursor-pointer"
              />
              <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                <strong>I understand and agree</strong> that I am providing my documents voluntarily for compliance 
                and services by DHYANSHIV INDIA PRIVATE LIMITED. I acknowledge that my data will be processed securely, 
                and I have read and accept the Privacy Policy and Terms of Service. I consent to proceed on the 
                app.dhyanshivindia.in platform.
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleContinue}
              disabled={!agreed || isLoading}
              className="flex-1 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 transition-all hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processing...' : 'I Agree & Continue'}
            </button>
            <Link
              href="/"
              className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold py-3 px-6 text-center hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
            >
              Go Back
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Last Updated: January 2025 | 
            <Link href="/contact" className="text-cyan-600 dark:text-cyan-400 hover:underline ml-1">
              Contact Support
            </Link>
            {' '}for questions
          </p>
        </div>
      </div>
    </div>
  )
}
