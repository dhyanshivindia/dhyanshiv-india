'use client'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 dark:bg-zinc-950 dark:text-slate-100 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <header className="rounded-[28px] border border-zinc-200/50 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/60">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
            Corporate Terms
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-200">
            Welcome to DHYANSHIV INDIA PRIVATE LIMITED. By using our website and services, you agree to these terms and conditions.
          </p>
        </header>

        <section className="mt-6 grid gap-5">
          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Scope of services</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              We provide digital transformation, compliance-ready services, and secure checkout functionality. All offerings are subject to availability and
              corporate review.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">User responsibilities</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Users must provide accurate information for authentication and billing. Unauthorized use of admin controls is prohibited.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Payment terms</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Payments are processed via Razorpay. Once payment is captured, the service delivery process begins. Refund terms are subject to separate agreements.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Limitation of liability</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              DHYANSHIV INDIA PRIVATE LIMITED is not liable for indirect damages or losses resulting from use of the website. Our liability is limited to the value
              of the service purchased.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}


