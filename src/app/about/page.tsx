"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
              About Us
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Building Compliance Infrastructure for Digital India
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">
              DHYANSHIV INDIA PRIVATE LIMITED is a government-recognized compliance technology company
              dedicated to simplifying corporate governance for startups, MSMEs, and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-zinc-300">
                <p>
                  We believe compliance shouldn't be a barrier to growth. Our mission is to transform
                  complex regulatory requirements into streamlined, automated workflows that empower
                  businesses to focus on what matters most — building great products and services.
                </p>
                <p>
                  Founded with the vision of enabling Digital Bharat, we combine deep domain expertise
                  in corporate law, taxation, and technology to deliver solutions that are both
                  legally robust and technically elegant.
                </p>
                <p>
                  From incorporation to ongoing compliance, from tax optimization to audit readiness —
                  we're your partners in navigating India's regulatory landscape with confidence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Verified", desc: "MCA & Startup India recognized" },
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Secure", desc: "Bank-grade encryption & compliance" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Fast", desc: "SLA-driven delivery timelines" },
                { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m-4 0h-2m4 0a2 2 0 01-2 2h-2a2 2 0 01-2-2m-4 0v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h4", title: "Scale", desc: "Built for growth-stage companies" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-white dark:text-zinc-950 shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-slate-600 dark:text-zinc-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-white/50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
              Our Values
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Principles That Guide Every Decision
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity First", desc: "We do what's right, not what's easy. Every filing, every advisory, every interaction." },
              { title: "Precision Engineering", desc: "Compliance is code. We apply software rigor to legal workflows — tested, auditable, reliable." },
              { title: "Client Obsession", desc: "Your success metrics are our KPIs. We measure ourselves by your outcomes, not our outputs." },
              { title: "Continuous Evolution", desc: "Regulations change. Technology evolves. We stay ahead so you don't have to." },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{value.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-zinc-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl sm:p-12 dark:border-white/10 dark:bg-white/5 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">Ready to Begin?</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Let's Build Your Compliance Roadmap
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-zinc-300">
              Book a free 30-minute advisory session. No sales pitch — just a clear action plan with timelines, costs, and next steps.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.20)]"
              >
                Schedule Free Advisory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}