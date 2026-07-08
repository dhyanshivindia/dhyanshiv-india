"use client"

import Link from "next/link"

export default function PortfolioPage() {
  const caseStudies = [
    {
      id: "fintech-startup",
      title: "FinTech Startup — Series A Compliance",
      category: "Corporate Setup",
      description: "End-to-end incorporation, cap table structuring, and regulatory approvals for a $12M Series A.",
      results: ["Incorporated in 7 days", "RBI compliance ready", "ESOP pool structured"],
      logo: "🏦",
      accent: "cyan",
    },
    {
      id: "healthtech-scaleup",
      title: "HealthTech Scale-up — GST & TDS Automation",
      category: "Tax Compliance",
      description: "Automated monthly GST returns and TDS workflows across 4 states for 200+ vendors.",
      results: ["Zero late filings in 18 months", "40% reduction in manual effort", "Audit-ready dashboards"],
      logo: "🏥",
      accent: "purple",
    },
    {
      id: "edtech-expansion",
      title: "EdTech Expansion — Global Licensing",
      category: "International",
      description: "Structured Singapore subsidiary, FEMA compliance, and cross-border payment rails for Southeast Asia launch.",
      results: ["3-country launch in 60 days", "FEMA compliant from Day 1", "Automated treasury ops"],
      logo: "📚",
      accent: "cyan",
    },
    {
      id: "manufacturing-msme",
      title: "Manufacturing MSME — Turnaround Advisory",
      category: "Advisory",
      description: "Restructured debt, optimized tax positions, and implemented governance framework for a ₹50Cr manufacturer.",
      results: ["₹2.3Cr tax savings annually", "Debt reduced 35%", "Board governance established"],
      logo: "🏭",
      accent: "purple",
    },
    {
      id: "saas-compliance",
      title: "SaaS Platform — SOC 2 & Data Privacy",
      category: "Security & Trust",
      description: "Achieved SOC 2 Type II, implemented DPDP Act compliance, and built customer trust center.",
      results: ["SOC 2 Type II in 4 months", "DPDP Act ready", "Enterprise deals unlocked"],
      logo: "☁️",
      accent: "cyan",
    },
    {
      id: "ecommerce-marketplace",
      title: "E-commerce Marketplace — Vendor Compliance",
      category: "Operations",
      description: "Built automated vendor onboarding, KYC, and payout compliance for 5,000+ sellers.",
      results: ["99.2% vendor KYC completion", "Automated TDS/TCS", "RBI PG compliance"],
      logo: "🛒",
      accent: "purple",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
              Portfolio
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Compliance Delivered at Scale
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Real outcomes for founders, finance teams, and boards across industries. Every case study represents
              a compliance challenge solved — measurably, audibly, and sustainably.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <article
                key={c.id}
                className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white/70 p-7 shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div
                  className={
                    c.accent === "cyan"
                      ? "pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-200/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      : "pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-200/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  }
                />

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl shrink-0">{c.logo}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={
                            c.accent === "cyan"
                              ? "rounded-2xl bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200"
                              : "rounded-2xl bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-purple-800 dark:bg-purple-900/30 dark:text-purple-200"
                          }
                        >
                          {c.category}
                        </span>
                      </div>
                      <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{c.title}</h2>
                      <p className="mt-3 text-slate-600 dark:text-zinc-300">{c.description}</p>

                      <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-zinc-300">
                        {c.results.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <span
                              className={
                                c.accent === "cyan"
                                  ? "mt-1 h-2 w-2 rounded-full bg-cyan-500"
                                  : "mt-1 h-2 w-2 rounded-full bg-purple-500"
                              }
                            />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.20)]"
            >
              Discuss Your Project
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-white/50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Trusted by Founders & Finance Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "DHYANSHIV turned our Series A compliance from a 3-month nightmare into a 7-day sprint. Their automation-first approach saved us weeks of legal back-and-forth.",
                author: "Priya Sharma",
                role: "Co-founder, FinFlow Technologies",
                company: "Series A — $12M",
              },
              {
                quote: "The GST automation they built handles 200+ vendors across 4 states with zero late filings in 18 months. It's the kind of infrastructure that lets you sleep at night.",
                author: "Rajesh Kumar",
                role: "CFO, MedTech Solutions",
                company: "HealthTech — 500+ employees",
              },
              {
                quote: "Expanding to Southeast Asia meant navigating FEMA, transfer pricing, and local incorporation simultaneously. They made it look easy — 3 countries in 60 days.",
                author: "Amit Singh",
                role: "VP Finance, LearnGlobal",
                company: "EdTech — International Expansion",
              },
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="text-slate-700 dark:text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-zinc-700" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{t.author}</p>
                    <p className="text-sm text-slate-500 dark:text-zinc-400">{t.role}</p>
                    <p className="text-xs text-cyan-700 dark:text-cyan-300">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}