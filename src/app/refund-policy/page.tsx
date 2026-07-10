'use client'

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 py-12 text-slate-900 dark:bg-gradient-to-br dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 dark:text-slate-100 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-[28px] border border-zinc-200/50 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/60 mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
            Refund & Cancellation
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Refund Policy</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-200">
            Last updated: July 2026. At DHYANSHIV INDIA PRIVATE LIMITED, we strive for customer satisfaction. This policy outlines our refund and cancellation procedures for services purchased through our platform.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">1. Service Eligibility</h2>
            <p className="mt-3 text-muted-foreground">
              All services purchased through our platform are subject to:
            </p>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>â€¢ Initial review and approval by our team</li>
              <li>â€¢ Payment verification through Razorpay</li>
              <li>â€¢ Verification of customer eligibility and jurisdiction</li>
              <li>â€¢ Compliance with our Terms of Service</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              Once payment is captured and verified, service delivery begins immediately unless otherwise agreed in writing.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">2. Cancellation Process</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>How to Request:</strong> Submit cancellation requests in writing (email) to support@dhyanshivindia.in with:
            </p>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>â€¢ Your account email and order ID</li>
              <li>â€¢ Reason for cancellation</li>
              <li>â€¢ Any supporting documentation</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              <strong>Response Time:</strong> We review cancellation requests within 5-7 business days.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">3. Refund Eligibility & Timeline</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Eligible for Full Refund:</strong>
            </p>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>â€¢ Cancellation requested within 24 hours of purchase (if service not yet started)</li>
              <li>â€¢ Technical failure or service unavailability on our end</li>
              <li>â€¢ Duplicate/erroneous charges</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              <strong>Partial Refund (Case-by-case):</strong>
            </p>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>â€¢ Service partially delivered or customization work started</li>
              <li>â€¢ Administrative or setup costs incurred</li>
              <li>â€¢ Non-recoverable resources consumed</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              <strong>Not Eligible for Refund:</strong>
            </p>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>â€¢ Service fully delivered and accepted by customer</li>
              <li>â€¢ Cancellation requested after service commencement</li>
              <li>â€¢ Non-refundable services clearly marked at purchase</li>
              <li>â€¢ Customer changes mind after delivery</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">4. Refund Processing</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Approval & Issuance:</strong> If refund is approved, we initiate the reversal through Razorpay within 3-5 business days.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Settlement Timeline:</strong> The refund will appear in your original payment method within 5-10 business days (varies by bank/payment provider).
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Processing Fees:</strong> Razorpay processing fees are non-refundable, per Razorpay's standard policy.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">5. Special Cases & Exceptions</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Technical Issues:</strong> If service is unavailable due to our technical failure, we offer full refund or service credit.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Fraudulent Transactions:</strong> Fraudulent or unauthorized charges are refunded in full after investigation.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Dispute Resolution:</strong> Disputes not resolved amicably may be escalated through Razorpay's dispute resolution process.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-card p-5 sm:p-6">
            <h2 className="text-base font-semibold text-foreground">6. Contact & Support</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Email:</strong> support@dhyanshivindia.in
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>Response Time:</strong> We aim to respond within 24-48 business hours.
            </p>
            <p className="mt-2 text-muted-foreground">
              Questions about your purchase, refund status, or payment issues can be addressed through our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

