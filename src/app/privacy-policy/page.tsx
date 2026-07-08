'use client'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 dark:bg-zinc-950 dark:text-slate-100 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <header className="rounded-[28px] border border-zinc-200/50 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/60">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
            Corporate Privacy
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-200">
            DHYANSHIV INDIA PRIVATE LIMITED is committed to protecting your privacy. We collect only the information required to provide our services,
            secure transactions, and communicate professionally.
          </p>
        </header>

        <section className="mt-6 grid gap-5">
          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Data collection</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              We collect user profile information only when you sign in via Google or email login. This includes name, email, and session metadata required for
              authentication and service delivery.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Payment processing</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Transactions are processed securely through Razorpay. We do not store card data on our systems. Razorpay handles payment authorization and capture.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Email communication</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              We send transactional emails using SMTP. Your email address is used for login links, receipts, and support messages only.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Data retention</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Account and order data are retained for corporate record-keeping and compliance. You may request updates or deletion by contacting
              support@dhyanshivindia.in.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}


