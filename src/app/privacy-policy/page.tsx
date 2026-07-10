'use client'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-zinc-50 dark:bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-lg border border-border bg-card shadow-card p-6 sm:p-8 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
            Data Protection & Privacy
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: July 2026. DHYANSHIV INDIA PRIVATE LIMITED ("we," "us," or "Company") is committed to protecting your personal data and privacy.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">1. Information We Collect</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Authentication Data:</strong> When you sign in via Google OAuth or email, we collect your name, email address, and session metadata required for account creation and security.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Transaction Data:</strong> For service purchases, we collect order details, payment method information (processed securely by Razorpay), and service delivery preferences.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Communication Data:</strong> We collect your preferences for transactional emails, support tickets, and service updates.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">2. How We Use Your Information</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>â€¢ Service delivery and account management</li>
              <li>â€¢ Payment processing and transaction verification</li>
              <li>â€¢ Compliance with legal and regulatory obligations</li>
              <li>â€¢ Security monitoring and fraud prevention</li>
              <li>â€¢ Transactional communication (receipts, confirmations, support)</li>
              <li>â€¢ Service improvement and operational analytics</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">3. Payment Processing</h2>
            <p className="mt-3 text-muted-foreground">
              Transactions are processed securely through Razorpay Payment Gateway. <strong>We do not store, process, or retain credit card data, bank account details, or other payment credentials on our servers.</strong> Razorpay is PCI DSS compliant and handles all payment security protocols. Your payment information is encrypted and transmitted directly to Razorpay's secure servers.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">4. Data Retention</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Account Data:</strong> Retained for the duration of your active account and for 3 years after account closure for legal, tax, and compliance purposes.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Transaction Records:</strong> Maintained in accordance with Indian tax law (GST and Income Tax requirements).
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Transactional Emails:</strong> Deleted after service completion unless legally required for record-keeping.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">5. Data Security</h2>
            <p className="mt-3 text-muted-foreground">
              We implement industry-standard security measures including HTTPS encryption, session management with secure cookies, and regular security audits. However, no online transmission is completely secure; you use our services at your own risk.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">6. Your Rights & Choices</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Access & Correction:</strong> You can access and update your account information anytime by logging in.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Data Deletion:</strong> You may request deletion of your account and associated data by emailing support@dhyanshivindia.in. We will comply within 30 days unless retention is required by law.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Email Preferences:</strong> You can unsubscribe from promotional emails anytime, though transactional messages cannot be disabled.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">7. Third-Party Services</h2>
            <p className="mt-3 text-muted-foreground">
              We use <strong>Razorpay</strong> (payment processing), <strong>Supabase/PostgreSQL</strong> (data storage), and <strong>Google OAuth</strong> (authentication). Each service operates under their own privacy policies, which we encourage you to review.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">8. Contact Us</h2>
            <p className="mt-3 text-muted-foreground">
              For privacy concerns, data access requests, or inquiries about this policy, contact us at:
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Email:</strong> support@dhyanshivindia.in
            </p>
            <p className="mt-1 text-muted-foreground">
              <strong>Response Time:</strong> We aim to respond to privacy requests within 7 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



