'use client'

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 dark:bg-zinc-950 dark:text-slate-100 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <header className="rounded-[28px] border border-zinc-200/50 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/60">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
            Refund & Cancellation
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Refund Policy</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-200">
            At DHYANSHIV INDIA PRIVATE LIMITED, we strive to provide exceptional IT and compliance services. This Refund & Cancellation Policy explains how we
            handle requests for cancellations, refunds, and payment reversals.
          </p>
        </header>

        <section className="mt-6 grid gap-5">
          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Service eligibility</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Services purchased through our website are subject to review and approval. Once payment is captured through Razorpay, service delivery begins
              immediately unless otherwise agreed.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Cancellation requests</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Cancellation requests must be submitted in writing to support@dhyanshivindia.in. We evaluate each request based on service stage, work completed,
              and contractual obligations.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Refund policy</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Refunds are considered on a case-by-case basis. If approved, refunds are issued in accordance with Razorpay settlement timelines and the specific
              service agreement.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Service delivery & exceptions</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Refunds are not guaranteed. Services that have already begun or require non-recoverable preparation may be partially or fully non-refundable.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Contact information</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Questions about purchases, cancellations, or refunds can be sent to support@dhyanshivindia.in. We respond promptly and professionally.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}


