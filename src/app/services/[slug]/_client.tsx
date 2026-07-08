'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export type ServiceDetail = {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  accent: 'cyan' | 'purple'
  highlights: string[]
  features: {
    title: string
    description: string
  }[]
  useCases: {
    title: string
    description: string
  }[]
  pricing: {
    tier: string
    price: string
    description: string
  }
  cta: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

type Props = {
  service: ServiceDetail
}

export function ServiceDetailClient({ service }: Props) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const accentClasses = {
    cyan: {
      bg: 'bg-cyan-50 dark:bg-cyan-500/10',
      text: 'text-cyan-700 dark:text-cyan-400',
      border: 'border-cyan-200 dark:border-cyan-500/30',
      button: 'bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600',
      accent: 'bg-cyan-100 dark:bg-cyan-500/20',
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-500/10',
      text: 'text-purple-700 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-500/30',
      button: 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600',
      accent: 'bg-purple-100 dark:bg-purple-500/20',
    },
  }

  const colors = accentClasses[service.accent]

  const handleCTA = async () => {
    setIsSubmitting(true)
    try {
      router.push(`/checkout?serviceId=${encodeURIComponent(service.id)}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-shell space-y-24">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <span>←</span> Back to services
          </Link>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">{service.subtitle}</p>
          <p className="mt-6 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">{service.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {service.highlights.map((highlight) => (
            <div
              key={highlight}
              className={`rounded-2xl border ${colors.border} ${colors.bg} p-6`}
            >
              <p className={`text-sm font-semibold ${colors.text}`}>{highlight}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleCTA}
          disabled={isSubmitting}
          className={`inline-flex items-center rounded-3xl px-8 py-4 text-lg font-semibold text-white transition disabled:opacity-60 ${colors.button}`}
        >
          {isSubmitting ? 'Loading…' : service.cta}
        </button>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">Core Features</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {service.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white/70 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">Real-world Use Cases</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {service.useCases.map((useCase) => (
            <div
              key={useCase.title}
              className={`rounded-2xl border ${colors.border} ${colors.accent} p-8`}
            >
              <h3 className="text-lg font-semibold">{useCase.title}</h3>
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">Pricing</h2>
        <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-12`}>
          <div className="max-w-2xl">
            <p className={`text-sm font-semibold uppercase tracking-widest ${colors.text}`}>
              {service.pricing.tier}
            </p>
            <p className="mt-4 text-5xl font-bold">{service.pricing.price}</p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{service.pricing.description}</p>
            <button
              onClick={handleCTA}
              disabled={isSubmitting}
              className={`mt-8 inline-flex items-center rounded-3xl px-8 py-4 font-semibold text-white transition disabled:opacity-60 ${colors.button}`}
            >
              {isSubmitting ? 'Loading…' : 'Get started'}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {service.testimonial && (
        <section className="space-y-8">
          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-12 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <blockquote>
              <p className="text-2xl font-semibold italic">"{service.testimonial.quote}"</p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                <div>
                  <p className="font-semibold">{service.testimonial.author}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{service.testimonial.role}</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">Questions?</h2>
        <div className="space-y-4">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Our team is ready to discuss how {service.title.toLowerCase()} fits your compliance and
            delivery roadmap.
          </p>
          <Link
            href="/contact"
            className={`inline-flex items-center rounded-3xl px-8 py-4 font-semibold text-white transition ${colors.button}`}
          >
            Contact our team
          </Link>
        </div>
      </section>
    </div>
  )
}
