'use client'

export default function CopyrightPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 dark:bg-zinc-950 dark:text-slate-100 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <header className="rounded-[28px] border border-zinc-200/50 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/60">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">Intellectual Property</p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Copyright</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-200">
            All content, design, and intellectual property on this website are owned by DHYANSHIV INDIA PRIVATE LIMITED. Unauthorized reproduction or reuse is prohibited.
          </p>
        </header>

        <section className="mt-6 grid gap-5">
          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Ownership</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Trademarks, logos, photographs, and written materials displayed are the exclusive property of DHYANSHIV INDIA PRIVATE LIMITED or our licensed partners.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Usage terms</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              You may not reproduce, distribute, or exploit content from this website without our express written permission.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200/50 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl font-semibold">DMCA</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              If you believe your copyrighted work has been used improperly, contact support@dhyanshivindia.in so we can promptly review and resolve the issue.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}


