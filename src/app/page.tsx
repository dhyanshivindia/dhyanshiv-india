import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950"></div>
        
        {/* Floating shapes background */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl dark:bg-cyan-900/20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-200/15 rounded-full blur-3xl dark:bg-purple-900/15"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-400 mb-6 font-bold">🚀 Govt-Registered Enterprise Solutions</p>
            <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Growth, Trust & Compliance</h1>
            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-600 sm:text-xl dark:text-zinc-300">
              Enterprise-grade compliance automation, secure payment infrastructure, and corporate tech delivery. <span className="font-semibold text-cyan-700 dark:text-cyan-300">Built for regulated enterprises, MSMEs, and startups scaling with confidence.</span>
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link href="/services" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-4 text-lg font-semibold text-white hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-105">
                <span>Explore Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/get-connected" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-cyan-600 hover:border-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 font-semibold px-8 py-4 text-lg transition-all hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171l-.546.327-.565-.098c-1.888-.33-3.477-.996-4.778-1.98L2.114 2 3.39 5.26c-.576 1.577-.876 3.289-.876 5.023 0 4.368 1.577 8.464 4.922 11.584 1.327 1.187 2.983 2.14 4.827 2.81.181.087.362.17.543.248 1.91.88 3.666 1.332 5.392 1.332 4.367 0 8.464-1.577 11.584-4.922 3.12-3.345 4.697-7.441 4.697-11.808 0-5.222-1.926-10.004-5.777-13.855-3.851-3.851-8.632-5.777-13.855-5.777"/>
                </svg>
                <span>Get Connected</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-white via-cyan-50 to-white dark:from-zinc-950 dark:via-cyan-950/20 dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-700 dark:text-blue-400 font-bold mb-4">✨ Our Strengths</p>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Verified Capabilities</h2>
            <p className="mt-4 text-xl text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">Trusted by enterprises for reliable, secure, and compliant operations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Compliance Automation', 
                desc: 'Turn regulatory workflows into predictable, auditable systems with automated filing, deadline tracking, and audit-ready reporting.',
                icon: '📋',
                gradient: 'from-blue-500/20 to-cyan-500/20 dark:from-blue-900/30 dark:to-cyan-900/30'
              },
              { 
                title: 'Corporate Tech Delivery', 
                desc: 'Enterprise-grade infrastructure for onboarding, secure access flows, and reliable operations built for scale.',
                icon: '🏢',
                gradient: 'from-purple-500/20 to-blue-500/20 dark:from-purple-900/30 dark:to-blue-900/30'
              },
              { 
                title: 'Automated Payments', 
                desc: 'Seamless, secure payment processing powered by Razorpay with transaction tracking, reconciliation, and service continuity.',
                icon: '💳',
                gradient: 'from-emerald-500/20 to-cyan-500/20 dark:from-emerald-900/30 dark:to-cyan-900/30'
              },
            ].map(service => (
              <div key={service.title} className={`group rounded-2xl border border-zinc-200/50 bg-gradient-to-br ${service.gradient} backdrop-blur-sm p-8 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 cursor-pointer`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300 group-hover:text-cyan-600 transition-colors">{service.title}</h3>
                <p className="mt-4 text-slate-600 dark:text-zinc-300 leading-relaxed">{service.desc}</p>
                <div className="mt-6 h-1 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-12 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-900/30 dark:to-blue-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Govt Registered', value: '✓' },
              { label: 'Compliance Ready', value: '✓' },
              { label: 'Security First', value: '✓' }
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-cyan-50 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gradient-to-r border-zinc-200 bg-gradient-to-br from-white/40 to-cyan-50/40 backdrop-blur dark:border-white/10 dark:from-white/5 dark:to-cyan-900/20 p-12 sm:p-16 lg:p-20">
            {/* Decorative elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl dark:bg-cyan-900/20"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-900/20"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Ready to Scale Securely?</h2>
              <p className="text-xl text-slate-600 dark:text-zinc-300 mb-8 max-w-2xl leading-relaxed">
                Discover how our compliance-ready solutions help enterprises reduce operational friction and scale with confidence. Browse our complete service catalog or get in touch directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-4 font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105">
                  <span>Browse Services</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/get-connected" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-cyan-600 hover:border-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 font-semibold px-8 py-4 transition-all hover:scale-105">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171l-.546.327-.565-.098c-1.888-.33-3.477-.996-4.778-1.98L2.114 2 3.39 5.26c-.576 1.577-.876 3.289-.876 5.023 0 4.368 1.577 8.464 4.922 11.584 1.327 1.187 2.983 2.14 4.827 2.81.181.087.362.17.543.248 1.91.88 3.666 1.332 5.392 1.332 4.367 0 8.464-1.577 11.584-4.922 3.12-3.345 4.697-7.441 4.697-11.808 0-5.222-1.926-10.004-5.777-13.855-3.851-3.851-8.632-5.777-13.855-5.777"/>
                  </svg>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}