'use client'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 py-12 text-slate-900 dark:bg-gradient-to-br dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 dark:text-slate-100 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-[28px] border border-zinc-200/50 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/60 mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
            Data Protection & Privacy
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-200">
            Last updated: July 2026. DHYANSHIV INDIA PRIVATE LIMITED ("we," "us," or "Company") is committed to protecting your personal data and privacy. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>

        <section className="mt-6 grid gap-5">
          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              <strong>Authentication Data:</strong> When you sign in via Google OAuth or email, we collect your name, email address, and session metadata required for account creation and security.
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Transaction Data:</strong> For service purchases, we collect order details, payment method information (processed securely by Razorpay), and service delivery preferences.
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Communication Data:</strong> We collect your preferences for transactional emails, support tickets, and service updates.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
              <li>• Service delivery and account management</li>
              <li>• Payment processing and transaction verification</li>
              <li>• Compliance with legal and regulatory obligations</li>
              <li>• Security monitoring and fraud prevention</li>
              <li>• Transactional communication (receipts, confirmations, support)</li>
              <li>• Service improvement and operational analytics</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">3. Payment Processing</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Transactions are processed securely through Razorpay Payment Gateway. <strong>We do not store, process, or retain credit card data, bank account details, or other payment credentials on our servers.</strong> Razorpay is PCI DSS compliant and handles all payment security protocols. Your payment information is encrypted and transmitted directly to Razorpay's secure servers.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">4. Data Retention</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              <strong>Account Data:</strong> Retained for the duration of your active account and for 3 years after account closure for legal, tax, and compliance purposes.
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Transaction Records:</strong> Maintained in accordance with Indian tax law (GST and Income Tax requirements).
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Transactional Emails:</strong> Deleted after service completion unless legally required for record-keeping.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">5. Data Security</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              We implement industry-standard security measures including HTTPS encryption, session management with secure cookies, and regular security audits. However, no online transmission is completely secure; you use our services at your own risk.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">6. Your Rights & Choices</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              <strong>Access & Correction:</strong> You can access and update your account information anytime by logging in.
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Data Deletion:</strong> You may request deletion of your account and associated data by emailing support@dhyanshivindia.in. We will comply within 30 days unless retention is required by law.
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Email Preferences:</strong> You can unsubscribe from promotional emails anytime, though transactional messages cannot be disabled.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">7. Third-Party Services</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              We use <strong>Razorpay</strong> (payment processing), <strong>Supabase/PostgreSQL</strong> (data storage), and <strong>Google OAuth</strong> (authentication). Each service operates under their own privacy policies, which we encourage you to review.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">8. Contact Us</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              For privacy concerns, data access requests, or inquiries about this policy, contact us at:
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <strong>Email:</strong> support@dhyanshivindia.in
            </p>
            <p className="mt-1 text-slate-700 dark:text-slate-300">
              <strong>Response Time:</strong> We aim to respond to privacy requests within 7 business days.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}


