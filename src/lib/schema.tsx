export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dhyanshiv India Private Limited',
    url: 'https://dhyanshivindia.in',
    logo: 'https://dhyanshivindia.in/logo.png',
    description:
      'Corporate tech delivery, compliance automation, secure payments, and workflow optimization for regulated enterprises.',
    sameAs: [
      'https://linkedin.com/company/dhyanshiv-india',
      'https://twitter.com/dhyanshivindia',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'India',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@dhyanshivindia.in',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  image,
}: {
  name: string
  description: string
  image?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    image,
    provider: {
      '@type': 'Organization',
      name: 'Dhyanshiv India Private Limited',
    },
    areaServed: 'IN',
    serviceType: 'Business Services',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
