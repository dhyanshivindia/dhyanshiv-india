'use client'

import Link from 'next/link'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] font-bold text-cyan-400">Company</p>
            <p className="text-sm font-semibold text-white">DHYANSHIV INDIA PRIVATE LIMITED</p>
            <p className="text-xs text-slate-400">
              Government of India Registered Company providing compliance automation, secure payment solutions, and business software to startups and MSMEs.
            </p>
          </div>

          {/* Services Info */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] font-bold text-cyan-400">Services</p>
            <ul className="text-xs space-y-2">
              <li className="text-slate-400">✓ Compliance Automation</li>
              <li className="text-slate-400">✓ Secure Payment Processing</li>
              <li className="text-slate-400">✓ Business Software</li>
              <li className="text-slate-400">✓ Data Security & Backup</li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] font-bold text-cyan-400">Support</p>
            <p className="text-xs space-y-1">
              <div className="text-slate-400">📧 support@dhyanshivindia.in</div>
              <div className="text-slate-400">📱 WhatsApp: +91 9173011851</div>
              <div className="text-slate-400">🕐 24-Hour Support Available</div>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm uppercase tracking-[0.35em] font-bold text-cyan-400 mb-4">Legal & Compliance</p>
          <nav className="flex flex-wrap gap-6 text-sm text-slate-300">
            <Link href="/privacy-policy" className="hover:text-cyan-400 transition tracking-wide">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-cyan-400 transition tracking-wide">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-cyan-400 transition tracking-wide">
              Refund Policy
            </Link>
            <Link href="/copyright" className="hover:text-cyan-400 transition tracking-wide">
              Copyright & IP
            </Link>
          </nav>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} DHYANSHIV INDIA PRIVATE LIMITED. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built with security and compliance as our foundation. Not offering financial advice.
          </p>
        </div>

        {/* Compliance Notice */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> DHYANSHIV INDIA PRIVATE LIMITED is a registered company in India. All services are provided in compliance with applicable laws and regulations. We do not offer financial, legal, or investment advice. Always consult with qualified professionals for legal and financial matters. Payment processing is done through Razorpay, a licensed payment aggregator. Your data is protected under our Privacy Policy and applicable data protection laws.
          </p>
        </div>
      </div>
    </footer>
  )
}

