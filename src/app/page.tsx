import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 mb-6">Govt-Registered Enterprise Solutions</p>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Growth, Trust & Compliance</h1>
            <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-slate-600 sm:text-lg dark:text-zinc-300">
              Enterprise-grade compliance automation, secure payment infrastructure, and corporate tech delivery. Built for regulated enterprises, MSMEs, and startups scaling with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link href="/services" className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-700">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-950 dark:to-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">Verified Capabilities</h2>
            <p className="mt-2 text-slate-600 dark:text-zinc-300">Trusted by enterprises for reliable, secure, and compliant operations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Compliance Automation', desc: 'Turn regulatory workflows into predictable, auditable systems with automated filing, deadline tracking, and audit-ready reporting.' },
              { title: 'Corporate Tech Delivery', desc: 'Enterprise-grade infrastructure for onboarding, secure access flows, and reliable operations built for scale.' },
              { title: 'Automated Payments', desc: 'Seamless, secure payment processing powered by Razorpay with transaction tracking, reconciliation, and service continuity.' },
            ].map(service => (
              <div key={service.title} className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-white/5 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">{service.title}</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-12 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold">Ready to Scale Securely?</h2>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-zinc-300">Discover how our compliance-ready solutions help enterprises reduce operational friction and scale with confidence. Browse our complete service catalog.</p>
            <Link href="/services" className="mt-8 inline-flex items-center rounded-3xl bg-cyan-600 px-8 py-4 font-semibold text-white hover:bg-cyan-700 transition-all shadow-[0_0_20px_rgba(0,255,255,0.15)]">Browse Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}