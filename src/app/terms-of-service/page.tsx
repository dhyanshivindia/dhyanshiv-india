'use client'

import { LegalList, LegalPageShell, LegalSection } from '@/components/ui/legal-layout'

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      eyebrow="Legal Agreement"
      title="Terms of Service"
      description="Last updated: July 2026. These Terms of Service ('Terms') govern your use of DHYANSHIV INDIA PRIVATE LIMITED's website and services. By accessing or using our services, you agree to be bound by these Terms."
    >
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By using this website or purchasing our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
        </p>
      </LegalSection>

      <LegalSection title="2. Service Description">
        <p>
          We provide: (a) Compliance automation services, (b) Corporate tech delivery, (c) Automated payment processing, (d) Security and workflow solutions. All services are subject to availability and may be modified or discontinued at our discretion with reasonable notice.
        </p>
      </LegalSection>

      <LegalSection title="3. User Eligibility and Responsibilities">
        <p>
          <strong>You must:</strong>
        </p>
        <LegalList>
          <li>Be at least 18 years old or have parental consent</li>
          <li>Provide accurate, complete information during registration</li>
          <li>Maintain account security and not share credentials</li>
          <li>Use services only for lawful purposes</li>
          <li>Not attempt unauthorized access to admin controls or restricted areas</li>
          <li>Comply with all applicable laws and regulations</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="4. Payment Terms and Billing">
        <p>
          <strong>Payment Processing:</strong> All transactions are processed through Razorpay. By initiating a transaction, you authorize us to process payment using the method you provide.
        </p>
        <p>
          <strong>Pricing:</strong> Prices are subject to change with notice. Taxes and fees (if applicable) are calculated at checkout.
        </p>
        <p>
          <strong>Service Commencement:</strong> Upon payment capture, service delivery begins immediately unless otherwise agreed in writing.
        </p>
      </LegalSection>

      <LegalSection title="5. Intellectual Property">
        <p>
          All content, design, code, trademarks, and materials on this website are owned by or licensed to DHYANSHIV INDIA PRIVATE LIMITED. You may not reproduce, distribute, or modify any content without explicit written permission.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation of Liability">
        <p>
          To the fullest extent permitted by law:
        </p>
        <LegalList>
          <li>Our total liability is limited to the amount you paid for the service</li>
          <li>We are not liable for indirect, incidental, or consequential damages</li>
          <li>We are not liable for lost profits, data loss, or business interruption</li>
          <li>We provide services &quot;as-is&quot; without warranties</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="7. Disclaimer of Warranties">
        <p>
          Services are provided &quot;as-is&quot; and &quot;as-available&quot; without any express or implied warranties. We do not warrant that services will be uninterrupted, error-free, or free from viruses.
        </p>
      </LegalSection>

      <LegalSection title="8. Prohibited Conduct">
        <p>
          You may not: (a) Hack or attempt unauthorized access; (b) Upload malware or harmful code; (c) Use services for illegal activities; (d) Reverse-engineer or decompile our software; (e) Spam or harass; (f) Violate intellectual property rights.
        </p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>
          We may suspend or terminate your account immediately if you violate these Terms or engage in illegal activity. Upon termination, your right to use services ceases, and data may be deleted in accordance with our retention policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact for Legal Inquiries">
        <p>Email: support@dhyanshivindia.in</p>
      </LegalSection>
    </LegalPageShell>
  )
}



