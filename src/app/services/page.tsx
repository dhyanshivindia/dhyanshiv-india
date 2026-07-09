'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

type ServiceCard = {
  id: string
  title: string
  description: string
  bullets: string[]
  accent: 'cyan' | 'purple'
}

export default function ServicesPage() {
  const router = useRouter()
  const { data: session } = useSession()
  const role = (session?.user as any)?.role as string | undefined
  const isAdmin = role === 'admin'

  const services: ServiceCard[] = [
    {
      id: 'compliance-automation',
      title: 'Compliance Automation',
      description: 'Automate your tax filings and regulatory requirements. Never miss a deadline again with our compliance-ready system.',
      bullets: ['GST & Tax Filing Ready', 'Automatic Deadline Reminders', 'Audit-Ready Reports'],
      accent: 'cyan',
    },
    {
      id: 'corporate-tech',
      title: 'Business Software Solutions',
      description: 'Custom software built for your business needs. Secure, fast, and built to grow with you.',
      bullets: ['Custom Development', 'Secure & Reliable', 'Easy to Use'],
      accent: 'purple',
    },
    {
      id: 'automated-payments',
      title: 'Secure Payment Processing',
      description: 'Accept payments safely from your customers. Powered by India\'s most trusted payment gateway.',
      bullets: ['Instant Payment Processing', 'Automatic Invoices & Receipts', 'Transparent Pricing'],
      accent: 'cyan',
    },
    {
      id: 'security-trust-ops',
      title: 'Data Security & Protection',
      description: 'Your business data is secure with us. Enterprise-grade security and 24/7 monitoring.',
      bullets: ['Bank-Level Encryption', 'Secure Data Backup', '24/7 Security Monitoring'],
      accent: 'purple',
    },
    {
      id: 'workflow-automation',
      title: 'Smart Automation',
      description: 'Reduce manual work. Automate repetitive tasks and focus on growing your business.',
      bullets: ['Automated Alerts & Notifications', 'Smart Workflows', 'Complete Audit Trail'],
      accent: 'cyan',
    },
    {
      id: 'support-service-ops',
      title: 'Expert Support & Training',
      description: 'Get help when you need it. Our team is here to ensure your success with quick responses.',
      bullets: ['30-Min WhatsApp Support', '24-Hour Email Support', 'Complete Documentation'],
      accent: 'purple',
    },
  ]

  const [isDeletingId, setIsDeletingId] = useState<string | null>(null)

  const onViewDetails = (serviceId: string) => {
    // Redirect to service detail page
    router.push(`/services/${serviceId}`)
  }

  const onDelete = async (serviceId: string) => {
    if (!isAdmin) return
    try {
      setIsDeletingId(serviceId)
      const res = await fetch(`/api/admin/service?id=${encodeURIComponent(serviceId)}`, {
        method: 'DELETE',
      })
      if (!res.ok) {
        // eslint-disable-next-line no-console
        console.error('Failed to delete service', await res.text())
        return
      }
      // For now, refresh the page state to reflect deletion
      router.refresh()
    } finally {
      setIsDeletingId(null)
    }
  }

  return (
    <div className="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        {isAdmin ? (
          <div className="mb-10 rounded-[32px] border border-zinc-200 bg-white/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-700">Admin Console</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Manage Enterprise Services</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Add or remove services. Regular users and guests see View Only.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                Admin: {String(session?.user?.email ?? '')}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6">
              <p className="text-sm font-semibold text-slate-900">Add New Service</p>
              <AddServiceForm />
            </div>
          </div>
        ) : (
          <div className="mb-10 rounded-[32px] border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-700">What We Offer</p>
                <h1 className="mt-4 text-4xl font-semibold text-slate-900">Our Services for Your Business Growth</h1>
                <p className="mt-4 max-w-2xl text-slate-600">
                  Choose the services you need to automate compliance, secure payments, protect your data, and focus on what matters most—growing your business.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center rounded-3xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm text-cyan-800 transition hover:bg-cyan-100"
              >
                Back to home
              </Link>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white/70 p-7 shadow-xl"
            >
              <div
                className={
                  s.accent === 'cyan'
                    ? 'pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-200/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity'
                    : 'pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-200/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity'
                }
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">{s.title}</h2>
                    <p className="mt-3 text-slate-600">{s.description}</p>
                  </div>
                  <span
                    className={
                      s.accent === 'cyan'
                        ? 'rounded-2xl bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-800'
                        : 'rounded-2xl bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-purple-800'
                    }
                  >
                    Verified
                  </span>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className={
                          s.accent === 'cyan'
                            ? 'mt-1 h-2 w-2 rounded-full bg-cyan-500'
                            : 'mt-1 h-2 w-2 rounded-full bg-purple-500'
                        }
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => onViewDetails(s.id)}
                    className="inline-flex w-full items-center justify-center rounded-3xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.20)]"
                  >
                    View details
                  </button>
                </div>

                {isAdmin ? (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => onDelete(s.id)}
                      disabled={isDeletingId === s.id}
                      className="inline-flex w-full items-center justify-center rounded-3xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-800 transition hover:bg-rose-100 disabled:opacity-60"
                    >
                      {isDeletingId === s.id ? 'Deleting…' : 'Delete service'}
                    </button>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function AddServiceForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [badgeText, setBadgeText] = useState('Verified')
  const [rate, setRate] = useState<number>(0)
  const [gst, setGst] = useState<number>(0)
  const [hsnSac, setHsnSac] = useState('NA')
  const [itemName, setItemName] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !description.trim() || !badgeText.trim()) return

    setIsSubmitting(true)
    try {
      await fetch('/api/admin/service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          badgeText,
          itemName: itemName.trim() || title,
          hsnSac,
          rate,
          gst,
          status: 'Active',
        }),
      })
    } finally {
      setIsSubmitting(false)
    }

    // Keep it simple: reload after submit
    window.location.reload()
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
      <label className="grid gap-1">
        <span className="text-xs font-semibold text-slate-700">Title</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-300"
          placeholder="Compliance Automation"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-xs font-semibold text-slate-700">Badge text</span>
        <input
          value={badgeText}
          onChange={(e) => setBadgeText(e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-300"
          placeholder="Verified"
        />
      </label>

      <label className="grid gap-1 sm:col-span-2">
        <span className="text-xs font-semibold text-slate-700">Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[96px] resize-y rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-300"
          placeholder="Turn recurring filings into governed, auditable workflows…"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-xs font-semibold text-slate-700">Item name (optional)</span>
        <input
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-300"
          placeholder="(auto)"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-xs font-semibold text-slate-700">HSN/SAC (optional)</span>
        <input
          value={hsnSac}
          onChange={(e) => setHsnSac(e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-300"
          placeholder="NA"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-xs font-semibold text-slate-700">Rate</span>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-300"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-xs font-semibold text-slate-700">GST %</span>
        <input
          type="number"
          value={gst}
          onChange={(e) => setGst(Number(e.target.value))}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-300"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-3xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-60"
        >
          {isSubmitting ? 'Adding…' : 'Add Service'}
        </button>
      </div>
    </form>
  )
}

