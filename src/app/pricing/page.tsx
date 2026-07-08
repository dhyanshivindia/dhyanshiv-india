"use client"

import { useState } from "react"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for early-stage founders handling basic compliance",
      monthlyPrice: 9999,
      annualPrice: 7999,
      features: [
        "Private Limited Incorporation",
        "PAN, TAN & GST Registration",
        "Monthly GST Return Filing (GSTR-1/3B)",
        "Quarterly TDS Returns",
        "Annual ROC Compliance (MGT-7, AOC-4)",
        "Dedicated Compliance Manager",
        "Email & Chat Support",
        "Document Vault Access",
      ],
      cta: "Get Started",
      popular: false,
      accent: "slate",
    },
    {
      name: "Growth",
      description: "For scaling startups needing automation & advisory",
      monthlyPrice: 24999,
      annualPrice: 19999,
      features: [
        "Everything in Starter",
        "Automated Compliance Calendar",
        "GST/TDS Health Dashboard",
        "Payroll & ESIC/PF Compliance",
        "ESOP Policy & Grant Management",
        "Board Meeting & Secretarial Support",
        "Investor-Ready Data Room",
        "Priority Support (4hr SLA)",
        "Quarterly CFO Advisory Call",
      ],
      cta: "Start Free Trial",
      popular: true,
      accent: "cyan",
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations & regulated entities",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Everything in Growth",
        "Multi-Entity Consolidation",
        "Transfer Pricing Documentation",
        "FEMA & Cross-Border Compliance",
        "SOC 2 / ISO 27001 Readiness",
        "Custom Workflow Automation",
        "Dedicated Compliance Team",
        "24/7 Phone & Slack Support",
        "Monthly Board-Level Reporting",
        "Regulatory Liaison Services",
      ],
      cta: "Contact Sales",
      popular: false,
      accent: "purple",
    },
  ]

  const faqs = [
    {
      q: "Can I switch plans later?",
      a: "Yes, you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle. Upgrades are prorated, and downgrades apply from the next cycle."
    },
    {
      q: "What's included in the free trial for Growth plan?",
      a: "The 14-day free trial gives you full access to all Growth plan features including the compliance dashboard, automated filings, and advisory calls. No credit card required to start."
    },
    {
      q: "Are government fees included in the pricing?",
      a: "Government fees (MCA, GST, stamp duty, etc.) are separate and charged at actuals. Our pricing covers professional fees, technology platform access, and advisory services only."
    },
    {
      q: "Do you offer custom packages for specific needs?",
      a: "Absolutely. The Enterprise plan is fully customizable. We also offer à la carte services for specific filings, advisory projects, or one-time compliance audits."
    },
    {
      q: "What happens if I miss a filing deadline?",
      a: "Our automated calendar and proactive alerts are designed to prevent this. In the rare event of a missed deadline due to our error, we cover the penalty fees and expedite remediation."
    },
    {
      q: "Is my data secure and confidential?",
      a: "Yes. We use bank-grade encryption (AES-256 at rest, TLS 1.3 in transit), SOC 2 compliant infrastructure, and strict access controls. Your data never leaves India without explicit consent."
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
              Pricing
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">
              No hidden fees. No surprise invoices. Choose the plan that matches your stage —
              upgrade anytime as you grow.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-4 rounded-xl border border-zinc-200 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  billingCycle === "monthly"
                    ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(0,255,255,0.20)]"
                    : "text-slate-700 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  billingCycle === "annual"
                    ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(0,255,255,0.20)]"
                    : "text-slate-700 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white"
                }`}
              >
                Annual
                <span className="ml-2 inline-flex items-center justify-center rounded-full bg-cyan-100 px-2 py-0.5 text-[10px] font-semibold text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-[28px] border p-7 shadow-xl ${
                  plan.popular
                    ? "border-cyan-300 bg-white/80 dark:border-cyan-700 dark:bg-white/5 ring-2 ring-cyan-200 dark:ring-cyan-800"
                    : "border-zinc-200 bg-white/70 dark:border-white/10 dark:bg-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-600 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.annualPrice === 0 ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-semibold text-slate-900 dark:text-white">Custom</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-semibold text-slate-900 dark:text-white">
                        ₹{billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-slate-500 dark:text-zinc-400">/month</span>
                      {billingCycle === "annual" && (
                        <span className="ml-2 text-sm text-emerald-600 dark:text-emerald-400">
                          Billed annually ₹{plan.annualPrice * 12}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                          plan.accent === "cyan"
                            ? "border-cyan-500 text-cyan-500"
                            : plan.accent === "purple"
                            ? "border-purple-500 text-purple-500"
                            : "border-slate-400 text-slate-400"
                        }`}
                      >
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-3xl px-5 py-3 text-sm font-semibold transition ${
                    plan.accent === "cyan"
                      ? "bg-cyan-600 text-white hover:bg-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.20)]"
                      : plan.accent === "purple"
                      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.20)]"
                      : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-white/50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold text-slate-900 dark:text-white">
                  {faq.q}
                  <svg
                    className="h-5 w-5 shrink-0 ml-4 text-slate-400 transition-transform group-open:rotate-180 dark:text-zinc-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-600 dark:text-zinc-300">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl sm:p-12 dark:border-white/10 dark:bg-white/5 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">Need a Custom Plan?</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Let's Design Your Compliance Stack
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-zinc-300">
              Enterprise requirements? Multi-jurisdiction operations? Unique regulatory needs?
              Our solutions team will architect a custom package.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.20)]"
              >
                Talk to Solutions Team
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-3xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50 dark:hover:bg-white/10"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}