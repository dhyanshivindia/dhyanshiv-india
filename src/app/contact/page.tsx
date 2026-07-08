"use client"

import { useState } from "react"

type FormState = {
  fullName: string
  email: string
  company: string
  service: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("submitting")
    try {
      await new Promise((r) => setTimeout(r, 1000))
      setStatus("success")
      setForm({ fullName: "", email: "", company: "", service: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const services = [
    { value: "", label: "Select a service" },
    { value: "incorporation", label: "Company Incorporation" },
    { value: "gst", label: "GST Registration & Filing" },
    { value: "tax", label: "Tax Advisory & Filing" },
    { value: "compliance", label: "Annual Compliance" },
    { value: "payroll", label: "Payroll & Statutory Compliance" },
    { value: "advisory", label: "CFO Advisory" },
    { value: "other", label: "Other" },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
              Contact
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Let's Start the Conversation
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Have a compliance challenge? Need a custom solution? Book a free 30-minute advisory call
              or send us a message — we typically respond within 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Book a Free Advisory Call</h2>
                <p className="text-slate-600 dark:text-zinc-300 mb-6">
                  No sales pitch. Just a clear compliance roadmap with timelines, costs, and next steps.
                </p>
                <a
                  href="https://calendly.com/dhyanshivindia/30min-advisory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.20)]"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule on Calendly
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Email", value: "hello@dhyanshivindia.in", href: "mailto:hello@dhyanshivindia.in" },
                  { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", title: "Phone", value: "+91 80 6789 1234", href: "tel:+918067891234" },
                  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", title: "Office", value: "Bangalore, Karnataka", href: "#" },
                  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Hours", value: "Mon–Fri, 9AM–6PM IST", href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-white dark:text-zinc-950 shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400">{item.title}</p>
                      <p className="text-slate-900 dark:text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Send a Message</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    >
                      {services.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white resize-y"
                    placeholder="Describe your compliance challenge, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.20)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                    Thank you! Your message has been sent. We'll respond within 2 hours.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-xl bg-rose-50 p-4 text-sm text-rose-800 dark:bg-rose-900/30 dark:text-rose-200">
                    Something went wrong. Please try again or email us directly at hello@dhyanshivindia.in
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
