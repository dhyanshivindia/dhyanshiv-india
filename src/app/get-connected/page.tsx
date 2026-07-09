import Link from 'next/link'

export default function GetConnected() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in learning more about DHYANSHIV INDIA's services. I found your contact from the website. 🚀"
  )
  const whatsappLink = `https://wa.me/919173011851?text=${whatsappMessage}`

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl dark:bg-cyan-900/30"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl dark:bg-blue-900/30"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Get Connected
            </h1>
            <p className="mt-6 text-xl text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Let's talk about how DHYANSHIV INDIA can help your enterprise scale securely and build compliance-ready operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-8">
                Reach Out to Us
              </h2>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email */}
                <div className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all dark:border-white/10 dark:bg-white/5 hover:border-cyan-400 dark:hover:border-cyan-400">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 p-3">
                      <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Email</h3>
                      <p className="text-slate-600 dark:text-zinc-400 mt-1">
                        <a href="mailto:support@dhyanshivindia.in" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                          support@dhyanshivindia.in
                        </a>
                      </p>
                      <p className="text-sm text-slate-500 dark:text-zinc-500 mt-2">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all dark:border-white/10 dark:bg-white/5 hover:border-blue-400 dark:hover:border-blue-400">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Phone</h3>
                      <p className="text-slate-600 dark:text-zinc-400 mt-1">
                        <a href="tel:+919173011851" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">
                          +91 917 301 1851
                        </a>
                      </p>
                      <p className="text-sm text-slate-500 dark:text-zinc-500 mt-2">Available Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all dark:border-white/10 dark:bg-white/5 hover:border-green-400 dark:hover:border-green-400">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-3">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171l-.546.327-.565-.098c-1.888-.33-3.477-.996-4.778-1.98L2.114 2 3.39 5.26c-.576 1.577-.876 3.289-.876 5.023 0 4.368 1.577 8.464 4.922 11.584 1.327 1.187 2.983 2.14 4.827 2.81.181.087.362.17.543.248 1.91.88 3.666 1.332 5.392 1.332 4.367 0 8.464-1.577 11.584-4.922 3.12-3.345 4.697-7.441 4.697-11.808 0-5.222-1.926-10.004-5.777-13.855-3.851-3.851-8.632-5.777-13.855-5.777"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-white">WhatsApp</h3>
                      <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
                        Quick chat for immediate support
                      </p>
                      <p className="text-sm text-slate-500 dark:text-zinc-500 mt-2">Response typically within 30 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              {/* WhatsApp CTA - Primary */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-semibold py-6 px-8 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171l-.546.327-.565-.098c-1.888-.33-3.477-.996-4.778-1.98L2.114 2 3.39 5.26c-.576 1.577-.876 3.289-.876 5.023 0 4.368 1.577 8.464 4.922 11.584 1.327 1.187 2.983 2.14 4.827 2.81.181.087.362.17.543.248 1.91.88 3.666 1.332 5.392 1.332 4.367 0 8.464-1.577 11.584-4.922 3.12-3.345 4.697-7.441 4.697-11.808 0-5.222-1.926-10.004-5.777-13.855-3.851-3.851-8.632-5.777-13.855-5.777"/>
                  </svg>
                  <span className="text-lg">Chat on WhatsApp</span>
                </a>
              </div>

              {/* Email CTA - Secondary */}
              <a
                href="mailto:support@dhyanshivindia.in"
                className="flex items-center justify-center gap-3 rounded-2xl border-2 border-cyan-600 hover:border-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400 font-semibold py-4 px-8 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Email</span>
              </a>

              {/* Back to services */}
              <Link
                href="/services"
                className="flex items-center justify-center gap-3 rounded-2xl text-zinc-700 dark:text-zinc-300 font-semibold py-4 px-8 transition-all hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <span>Explore Our Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-900/50 dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              What to Expect
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
              When you reach out to DHYANSHIV INDIA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Quick Response',
                desc: 'We respond to inquiries within 24 hours via email and 30 minutes on WhatsApp'
              },
              {
                icon: '🔒',
                title: 'Confidential Discussion',
                desc: 'Your requirements and business data remain confidential and secure'
              },
              {
                icon: '📋',
                title: 'Customized Solutions',
                desc: 'We assess your needs and propose tailored solutions for your enterprise'
              }
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-white/5 hover:shadow-lg transition-all hover:border-cyan-400 dark:hover:border-cyan-400">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Connections Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-900/50 dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Follow Our Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Connect with us across multiple platforms to stay updated with latest insights, updates, and industry trends
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/dhyanshiv-india"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400 hover:scale-105"
            >
              <div className="rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-4 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</span>
              <span className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Follow Us</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/dhyanshivindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-pink-400 hover:scale-105"
            >
              <div className="rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 p-4 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.77.3-1.417.72-2.05 1.35-.63.633-1.05 1.28-1.35 2.05-.266.787-.465 1.658-.6 2.936C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.6 2.936.3.77.72 1.417 1.35 2.05.633.63 1.28 1.05 2.05 1.35.787.266 1.658.465 2.936.6C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.6.77-.3 1.417-.72 2.05-1.35.63-.633 1.05-1.28 1.35-2.05.266-.787.465-1.658.6-2.936.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.6-2.936-.3-.77-.72-1.417-1.35-2.05-.633-.63-1.28-1.05-2.05-1.35-.787-.266-1.658-.465-2.936-.6C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.17.054 1.805.244 2.227.404.56.217.96.477 1.382.896.419.42.679.822.896 1.381.16.422.35 1.057.404 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.17-.244 1.805-.404 2.227-.217.56-.477.96-.896 1.382-.42.419-.822.679-1.381.896-.422.16-1.057.35-2.227.404-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.17-.054-1.805-.244-2.227-.404-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.822-.896-1.381-.16-.422-.35-1.057-.404-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.17.244-1.805.404-2.227.217-.56.477-.96.896-1.382.42-.419.822-.679 1.381-.896.422-.16 1.057-.35 2.227-.404 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
                </svg>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Instagram</span>
              <span className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Follow Us</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/dhyanshivindia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400 hover:scale-105"
            >
              <div className="rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-4 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">Facebook</span>
              <span className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Follow Us</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dhyanshivindia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 hover:border-gray-800 hover:shadow-xl hover:shadow-gray-800/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-white hover:scale-105"
            >
              <div className="rounded-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800/30 dark:to-gray-700/30 p-4 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-white transition-colors">GitHub</span>
              <span className="text-xs text-slate-500 dark:text-zinc-400 mt-1">View Code</span>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/dhyanshivindia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 hover:border-black hover:shadow-xl hover:shadow-black/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-white hover:scale-105"
            >
              <div className="rounded-full bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/30 dark:to-gray-700/30 p-4 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.625l-5.195-6.791-5.995 6.791H2.556l7.73-8.835L1.75 2.25h6.969l4.686 6.232 5.039-6.232zM17.534 20.643h1.828L6.456 3.901H4.546l13.988 16.742z"/>
                </svg>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">Twitter/X</span>
              <span className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Follow Us</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@dhyanshivindia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/10 transition-all dark:border-white/10 dark:bg-white/5 dark:hover:border-red-500 hover:scale-105"
            >
              <div className="rounded-full bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 p-4 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">YouTube</span>
              <span className="text-xs text-slate-500 dark:text-zinc-400 mt-1">Subscribe</span>
            </a>
          </div>

          {/* Social Media Description */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Latest Updates',
                desc: 'Stay informed with our latest announcements, feature releases, and industry insights'
              },
              {
                title: 'Behind the Scenes',
                desc: 'Discover our culture, team stories, and how we build compliance-ready solutions'
              },
              {
                title: 'Community Engagement',
                desc: 'Join our growing community, share ideas, and collaborate on meaningful projects'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section at Bottom */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-900/40 dark:to-blue-900/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-lg text-cyan-50 mb-8 max-w-2xl mx-auto">
            Connect with our team today to discuss how we can help you scale with compliance, security, and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-cyan-600 font-semibold px-8 py-3 hover:bg-cyan-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171l-.546.327-.565-.098c-1.888-.33-3.477-.996-4.778-1.98L2.114 2 3.39 5.26c-.576 1.577-.876 3.289-.876 5.023 0 4.368 1.577 8.464 4.922 11.584 1.327 1.187 2.983 2.14 4.827 2.81.181.087.362.17.543.248 1.91.88 3.666 1.332 5.392 1.332 4.367 0 8.464-1.577 11.584-4.922 3.12-3.345 4.697-7.441 4.697-11.808 0-5.222-1.926-10.004-5.777-13.855-3.851-3.851-8.632-5.777-13.855-5.777"/>
              </svg>
              Start WhatsApp Chat
            </a>
            <a
              href="mailto:support@dhyanshivindia.in"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white text-white font-semibold px-8 py-3 hover:bg-white/10 transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
