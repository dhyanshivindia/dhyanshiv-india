'use client'

import { LegalList, LegalPageShell, LegalSection } from '@/components/ui/legal-layout'

export default function RefundPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Refund and Cancellation"
      title="Refund Policy"
      description="Last updated: July 2026. At DHYANSHIV INDIA PRIVATE LIMITED, we strive for customer satisfaction. This policy outlines our refund and cancellation procedures for services purchased through our platform."
    >
      <LegalSection title="1. Service Eligibility">
        <p>All services purchased through our platform are subject to:</p>
        <LegalList>
          <li>Initial review and approval by our team</li>
          <li>Payment verification through Razorpay</li>
          <li>Verification of customer eligibility and jurisdiction</li>
          <li>Compliance with our Terms of Service</li>
        </LegalList>
        <p>
          Once payment is captured and verified, service delivery begins immediately unless otherwise agreed in writing.
        </p>
      </LegalSection>

      <LegalSection title="2. Cancellation Process">
        <p>
          <strong>How to Request:</strong> Submit cancellation requests in writing (email) to support@dhyanshivindia.in with:
        </p>
        <LegalList>
          <li>Your account email and order ID</li>
          <li>Reason for cancellation</li>
          <li>Any supporting documentation</li>
        </LegalList>
        <p>
          <strong>Response Time:</strong> We review cancellation requests within 5-7 business days.
        </p>
      </LegalSection>

      <LegalSection title="3. Refund Eligibility and Timeline">
        <p>
          <strong>Eligible for Full Refund:</strong>
        </p>
        <LegalList>
          <li>Cancellation requested within 24 hours of purchase (if service not yet started)</li>
          <li>Technical failure or service unavailability on our end</li>
          <li>Duplicate/erroneous charges</li>
        </LegalList>
        <p>
          <strong>Partial Refund (Case-by-case):</strong>
        </p>
        <LegalList>
          <li>Service partially delivered or customization work started</li>
          <li>Administrative or setup costs incurred</li>
          <li>Non-recoverable resources consumed</li>
        </LegalList>
        <p>
          <strong>Not Eligible for Refund:</strong>
        </p>
        <LegalList>
          <li>Service fully delivered and accepted by customer</li>
          <li>Cancellation requested after service commencement</li>
          <li>Non-refundable services clearly marked at purchase</li>
          <li>Customer changes mind after delivery</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="4. Refund Processing">
        <p>
          <strong>Approval and Issuance:</strong> If refund is approved, we initiate the reversal through Razorpay within 3-5 business days.
        </p>
        <p>
          <strong>Settlement Timeline:</strong> The refund will appear in your original payment method within 5-10 business days (varies by bank/payment provider).
        </p>
        <p>
          <strong>Processing Fees:</strong> Razorpay processing fees are non-refundable, per Razorpay&apos;s standard policy.
        </p>
      </LegalSection>

      <LegalSection title="5. Special Cases and Exceptions">
        <p>
          <strong>Technical Issues:</strong> If service is unavailable due to our technical failure, we offer full refund or service credit.
        </p>
        <p>
          <strong>Fraudulent Transactions:</strong> Fraudulent or unauthorized charges are refunded in full after investigation.
        </p>
        <p>
          <strong>Dispute Resolution:</strong> Disputes not resolved amicably may be escalated through Razorpay&apos;s dispute resolution process.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact and Support">
        <p>
          <strong>Email:</strong> support@dhyanshivindia.in
        </p>
        <p>
          <strong>Response Time:</strong> We aim to respond within 24-48 business hours.
        </p>
        <p>
          Questions about your purchase, refund status, or payment issues can be addressed through our support team.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}

