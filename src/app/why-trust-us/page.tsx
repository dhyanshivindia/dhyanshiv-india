import Link from 'next/link'

export default function WhyTrustUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl dark:bg-cyan-900/20"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-700 dark:text-blue-400 font-bold mb-6">🛡️ Trust & Security</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Why Trust DHYANSHIV INDIA
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-600 dark:text-zinc-300">
              Built on foundations of transparency, compliance, and commitment to your success. We're not just a service provider—we're your trusted partner in growth.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-950 dark:to-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              The 6 Pillars of Our Trust
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-400">What makes us different and why you can rely on us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏛️</div>
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3">Govt Registered</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                DHYANSHIV INDIA PRIVATE LIMITED is officially registered with the Government of India. We maintain full compliance with all statutory requirements and regulatory frameworks.
              </p>
              <div className="mt-6 h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-12 transition-all"></div>
            </div>

            {/* Pillar 2 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔐</div>
              <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300 mb-3">Enterprise Security</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                End-to-end encryption, HTTPS secured channels, and regular security audits. Your data is protected with industry-leading security protocols and compliance standards.
              </p>
              <div className="mt-6 h-1 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-12 transition-all"></div>
            </div>

            {/* Pillar 3 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3">Compliance First</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Built for regulatory compliance. We help enterprises meet GST, Income Tax, and other compliance requirements with automated workflows and audit trails.
              </p>
              <div className="mt-6 h-1 w-8 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-12 transition-all"></div>
            </div>

            {/* Pillar 4 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-green-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💳</div>
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-3">Trusted Payments</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Powered by Razorpay - PCI DSS compliant. We never store credit card data. All transactions are processed securely through verified payment gateways.
              </p>
              <div className="mt-6 h-1 w-8 bg-gradient-to-r from-green-500 to-cyan-500 group-hover:w-12 transition-all"></div>
            </div>

            {/* Pillar 5 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-orange-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👥</div>
              <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-3">Expert Team</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Built by professionals with experience in enterprise compliance, corporate tech, and payment systems. We understand your challenges because we've solved them before.
              </p>
              <div className="mt-6 h-1 w-8 bg-gradient-to-r from-orange-500 to-blue-500 group-hover:w-12 transition-all"></div>
            </div>

            {/* Pillar 6 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-red-400">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📞</div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-3">Always Available</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Responsive support team. 24-hour email response commitment and 30-minute WhatsApp support. We're here when you need us, for guidance and assistance.
              </p>
              <div className="mt-6 h-1 w-8 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-12 transition-all"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-400">Meeting international and local requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data Protection',
                items: ['HTTPS Encryption', 'End-to-End Security', 'Data Retention Policies', '3-Year Legal Archival'],
                icon: '🔒'
              },
              {
                title: 'Payment Processing',
                items: ['PCI DSS Compliance', 'Razorpay Integration', 'No Card Storage', 'Secure Transactions'],
                icon: '💰'
              },
              {
                title: 'Tax & Legal',
                items: ['GST Compliance Ready', 'TDS Calculations', 'Income Tax Alignment', 'Audit-Ready Reports'],
                icon: '📊'
              },
              {
                title: 'Operational Excellence',
                items: ['Regular Audits', 'Monitoring & Alerts', 'Backup & Recovery', '99.9% Uptime SLA'],
                icon: '⚙️'
              }
            ].map((standard, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-white/5 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">{standard.title}</h3>
                <ul className="space-y-3">
                  {standard.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-zinc-400">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Our Transparent Policies
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-400">Open communication about pricing, security, and operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Clear Pricing',
                desc: 'No hidden fees. Transparent pricing structure with clear breakdown of all costs. You know exactly what you\'re paying for.'
              },
              {
                title: 'Easy Cancellation',
                desc: '24-hour cancellation window. Partial or full refunds depending on service status. Hassle-free process with no penalties.'
              },
              {
                title: 'Privacy Guaranteed',
                desc: 'Your data is yours. Clear privacy policy. GDPR-aligned practices. Data retention only as long as needed, then securely deleted.'
              }
            ].map((policy, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-8 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{policy.title}</h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{policy.desc}</p>
              </div>
            ))}
          </div>

          {/* Links to legal pages */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-zinc-400 mb-6">Want to review our complete policies?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/privacy-policy" className="inline-flex items-center justify-center rounded-lg border border-cyan-600 hover:border-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 font-semibold px-6 py-3 transition-all">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="inline-flex items-center justify-center rounded-lg border border-blue-600 hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-blue-600 dark:text-blue-400 font-semibold px-6 py-3 transition-all">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="inline-flex items-center justify-center rounded-lg border border-purple-600 hover:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-950/30 text-purple-600 dark:text-purple-400 font-semibold px-6 py-3 transition-all">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-400">Your questions about our trustworthiness answered</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is DHYANSHIV INDIA officially registered?',
                a: 'Yes, DHYANSHIV INDIA PRIVATE LIMITED is an officially registered company with the Government of India. We maintain full compliance with all statutory requirements.'
              },
              {
                q: 'How is my payment data protected?',
                a: 'We use Razorpay, a PCI DSS compliant payment gateway. We never store credit card details on our servers. All transactions are encrypted and secured.'
              },
              {
                q: 'What if I want to cancel?',
                a: 'You can cancel within 24 hours of service commencement for a full refund. After that, partial refunds are available depending on service status.'
              },
              {
                q: 'How often do you conduct security audits?',
                a: 'We conduct regular security audits and maintain continuous monitoring. Our infrastructure is built with enterprise-grade security standards.'
              },
              {
                q: 'How long do you retain my data?',
                a: 'We retain account data for 3 years for legal and tax compliance purposes. Transaction data follows GST and Income Tax retention requirements. You can request deletion anytime.'
              },
              {
                q: 'What if I have a dispute?',
                a: 'We have a clear dispute resolution process. Contact support@dhyanshivindia.in with details. We aim to resolve within 7 business days.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">Q: {faq.q}</h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed"><strong>A:</strong> {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900/40 dark:to-cyan-900/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work With a Trustworthy Partner?
          </h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Join enterprises that trust DHYANSHIV INDIA for compliance, security, and growth.
          </p>
          <Link href="/get-connected" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-600 font-semibold px-8 py-3 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
            Get Connected Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
