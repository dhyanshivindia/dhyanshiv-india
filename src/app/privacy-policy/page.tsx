'use client'

import { LegalList, LegalPageShell, LegalSection } from '@/components/ui/legal-layout'

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Data Protection and Privacy"
      title="Privacy Policy"
      description="Last updated: July 2026. DHYANSHIV INDIA PRIVATE LIMITED ('we,' 'us,' or 'Company') is committed to protecting your personal data and privacy."
    >
      <LegalSection title="1. Information We Collect">
        <p>
          <strong>Authentication Data:</strong> When you sign in via Google OAuth or email, we collect your name, email address, and session metadata required for account creation and security.
        </p>
        <p>
          <strong>Transaction Data:</strong> For service purchases, we collect order details, payment method information (processed securely by Razorpay), and service delivery preferences.
        </p>
        <p>
          <strong>Communication Data:</strong> We collect your preferences for transactional emails, support tickets, and service updates.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <LegalList>
          <li>Service delivery and account management</li>
          <li>Payment processing and transaction verification</li>
          <li>Compliance with legal and regulatory obligations</li>
          <li>Security monitoring and fraud prevention</li>
          <li>Transactional communication (receipts, confirmations, support)</li>
          <li>Service improvement and operational analytics</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="3. Payment Processing">
        <p>
          Transactions are processed securely through Razorpay Payment Gateway. <strong>We do not store, process, or retain credit card data, bank account details, or other payment credentials on our servers.</strong> Razorpay is PCI DSS compliant and handles all payment security protocols. Your payment information is encrypted and transmitted directly to Razorpay&apos;s secure servers.
        </p>
      </LegalSection>

      <LegalSection title="4. Data Retention">
        <p>
          <strong>Account Data:</strong> Retained for the duration of your active account and for 3 years after account closure for legal, tax, and compliance purposes.
        </p>
        <p>
          <strong>Transaction Records:</strong> Maintained in accordance with Indian tax law (GST and Income Tax requirements).
        </p>
        <p>
          <strong>Transactional Emails:</strong> Deleted after service completion unless legally required for record-keeping.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Security">
        <p>
          We implement industry-standard security measures including HTTPS encryption, session management with secure cookies, and regular security audits. However, no online transmission is completely secure; you use our services at your own risk.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights and Choices">
        <p>
          <strong>Access and Correction:</strong> You can access and update your account information anytime by logging in.
        </p>
        <p>
          <strong>Data Deletion:</strong> You may request deletion of your account and associated data by emailing support@dhyanshivindia.in. We will comply within 30 days unless retention is required by law.
        </p>
        <p>
          <strong>Email Preferences:</strong> You can unsubscribe from promotional emails anytime, though transactional messages cannot be disabled.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-Party Services">
        <p>
          We use <strong>Razorpay</strong> (payment processing), <strong>Supabase/PostgreSQL</strong> (data storage), and <strong>Google OAuth</strong> (authentication). Each service operates under their own privacy policies, which we encourage you to review.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact Us">
        <p>
          For privacy concerns, data access requests, or inquiries about this policy, contact us at support@dhyanshivindia.in.
        </p>
        <p>
          <strong>Response Time:</strong> We aim to respond to privacy requests within 7 business days.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}



