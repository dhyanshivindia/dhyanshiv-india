'use client'

import { LegalPageShell, LegalSection } from '@/components/ui/legal-layout'

export default function CopyrightPage() {
  return (
    <LegalPageShell
      eyebrow="Intellectual Property"
      title="Copyright"
      description="All content, design, and intellectual property on this website are owned by DHYANSHIV INDIA PRIVATE LIMITED. Unauthorized reproduction or reuse is prohibited."
    >
      <LegalSection title="Ownership">
        <p>
          Trademarks, logos, photographs, and written materials displayed are the exclusive property of DHYANSHIV INDIA PRIVATE LIMITED or our licensed partners.
        </p>
      </LegalSection>

      <LegalSection title="Usage Terms">
        <p>
          You may not reproduce, distribute, or exploit content from this website without our express written permission.
        </p>
      </LegalSection>

      <LegalSection title="DMCA">
        <p>
          If you believe your copyrighted work has been used improperly, contact support@dhyanshivindia.in so we can promptly review and resolve the issue.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}



