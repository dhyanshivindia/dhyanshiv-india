import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 mb-6">Govt-registered corporate infrastructure</p>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Growth, Trust & Compliance</h1>
            <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-slate-600 sm:text-lg dark:text-zinc-300">
              DHYANSHIV INDIA PRIVATE LIMITED designs premium, end-to-end corporate legal frameworks — incorporation, taxation architecture, recurring filings, and advisory workflows.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Instant Business Onboarding</Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-950 dark:to-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Compliance Automation', desc: 'Automate recurring filings and compliance workflows' },
              { title: 'Corporate Tech Delivery', desc: 'Enterprise-grade systems built for reliability' },
              { title: 'Automated Payments', desc: 'Razorpay-powered checkout and service continuity' },
            ].map(service => (
              <div key={service.title} className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-12 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold">Get Your Compliance Roadmap</h2>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-zinc-300">Book a free 30-minute advisory session. Clear action plan with timelines, costs, and next steps.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center rounded-3xl bg-cyan-600 px-8 py-4 font-semibold text-white hover:bg-cyan-700">Schedule Free Advisory</Link>
          </div>
        </div>
      </section>
    </div>
  )
}