import { notFound } from 'next/navigation'
import { ServiceDetailClient, type ServiceDetail } from './_client'

export const dynamic = 'force-dynamic'

const serviceData: Record<string, ServiceDetail> = {
  'compliance-automation': {
    id: 'compliance-automation',
    slug: 'compliance-automation',
    title: 'Compliance Automation',
    subtitle: 'Transform regulatory burden into governed workflows',
    description:
      'Turn recurring filings into governed, auditable workflows—deadline-aware and secure. Reduce manual effort, eliminate errors, and maintain audit readiness.',
    accent: 'cyan',
    highlights: [
      'Automated documentation pipeline',
      'GST/TDS readiness checks',
      'Audit-ready dashboards + reports',
    ],
    features: [
      {
        title: 'Deadline Intelligence',
        description:
          'Automatic tracking and alerts for GST, TDS, income tax, and other compliance deadlines specific to your corporate structure.',
      },
      {
        title: 'Document Generation',
        description:
          'Generate compliant filings, returns, and documentation with pre-configured templates aligned to corporate tax norms.',
      },
      {
        title: 'Audit Trail',
        description:
          'Complete immutable history of changes, approvals, and submissions for regulatory review and internal audits.',
      },
      {
        title: 'Real-time Status',
        description:
          'Dashboard showing compliance status, pending items, and approved milestones—always in sync with regulatory requirements.',
      },
    ],
    useCases: [
      {
        title: 'Multi-entity GST Filing',
        description:
          'Manage GST compliance across multiple registered entities. Automate reconciliation and filing workflows.',
      },
      {
        title: 'TDS Management',
        description:
          'Track TDS liability, generate compliant returns, and maintain payment records with automatic reconciliation.',
      },
      {
        title: 'Annual Audit Prep',
        description:
          'Prepare auditable documentation year-round. Export compliance reports directly for statutory auditors.',
      },
    ],
    pricing: {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Tiered by entity count and filing volume. Contact sales for quote.',
    },
    cta: 'Schedule a compliance audit',
    testimonial: {
      quote:
        'We reduced filing errors by 95% and cut compliance team overhead by 30 hours/month. The audit trail alone justifies the investment.',
      author: 'Rajesh Kumar',
      role: 'CFO, Mid-market Tech Corp',
    },
  },
  'corporate-tech': {
    id: 'corporate-tech',
    slug: 'corporate-tech',
    title: 'Corporate Tech Delivery',
    subtitle: 'Enterprise-grade systems built for reliability and rapid scaling',
    description:
      'Enterprise-grade systems built for reliability, security, and rapid corporate onboarding. From roadmap to execution to handoff.',
    accent: 'purple',
    highlights: [
      'Roadmap planning & execution',
      'Secure onboarding & access flows',
      'Data integrity with proven stacks',
    ],
    features: [
      {
        title: 'Architectural Planning',
        description:
          'Roadmap your tech stack. We design for your growth, regulatory needs, and future integrations.',
      },
      {
        title: 'Secure Delivery',
        description:
          'Built-in authentication, role-based access, audit logging, and compliance-first architecture from day one.',
      },
      {
        title: 'Rapid Onboarding',
        description:
          'Pre-configured teams, automated provisioning, and guided workflows get your org productive in days, not months.',
      },
      {
        title: 'Handoff & Support',
        description:
          'Documentation, runbooks, and knowledge transfer ensure your team owns the system from day one.',
      },
    ],
    useCases: [
      {
        title: 'Internal Business Systems',
        description:
          'CRM, project management, document collaboration—tailored to corporate workflows and access controls.',
      },
      {
        title: 'Customer-facing Portals',
        description:
          'Branded portals for customer onboarding, order tracking, and service management with enterprise SSO.',
      },
      {
        title: 'Regulatory Dashboards',
        description:
          'Real-time visibility into compliance metrics, audit logs, and regulatory KPIs for stakeholders.',
      },
    ],
    pricing: {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Based on scope, architecture complexity, and team size. Typical: ₹50L–₹2Cr.',
    },
    cta: 'Start your tech roadmap',
    testimonial: {
      quote:
        'Their team understood our regulatory constraints from day one. We launched 3 months earlier than planned.',
      author: 'Priya Sharma',
      role: 'Head of Operations, Financial Services',
    },
  },
  'automated-payments': {
    id: 'automated-payments',
    slug: 'automated-payments',
    title: 'Automated Payments',
    subtitle: 'Razorpay-powered checkout and service continuity',
    description:
      'Razorpay-powered checkout and status continuity to keep the service lifecycle effortless and transparent.',
    accent: 'cyan',
    highlights: [
      'Order lifecycle tracking',
      'Webhook-based reconciliation',
      'Receipts + service continuity',
    ],
    features: [
      {
        title: 'Seamless Checkout',
        description:
          'Pre-configured Razorpay integration with email receipts, invoice generation, and automated acknowledgment.',
      },
      {
        title: 'Order Tracking',
        description:
          'Real-time order status, fulfillment tracking, and customer visibility into their service delivery.',
      },
      {
        title: 'Reconciliation',
        description:
          'Automatic webhook handling, payment verification, and reconciliation with your financial records.',
      },
      {
        title: 'Service Continuity',
        description:
          'Post-payment provisioning, license generation, and immediate service activation without manual steps.',
      },
    ],
    useCases: [
      {
        title: 'Service Subscriptions',
        description: 'Recurring billing, auto-renewal, and usage-based pricing. Full audit trail for finance.',
      },
      {
        title: 'One-time Purchases',
        description:
          'License sales, consulting packages, or project-based offerings with instant fulfillment.',
      },
      {
        title: 'Multi-currency',
        description: 'Accept INR, USD, EUR, and more. Razorpay handles compliance and FX settlement.',
      },
    ],
    pricing: {
      tier: 'Standard',
      price: '₹25,000/month',
      description: 'Includes up to 1000 transactions. Overage: ₹15 per transaction.',
    },
    cta: 'Enable payments today',
    testimonial: {
      quote:
        'Payment processing went from a manual Excel nightmare to fully automated. We save 40 hours/month and have zero reconciliation issues.',
      author: 'Amit Patel',
      role: 'Operations Lead, SaaS Startup',
    },
  },
  'security-trust-ops': {
    id: 'security-trust-ops',
    slug: 'security-trust-ops',
    title: 'Security & Trust Ops',
    subtitle: 'Least-privilege access and secure session flows',
    description:
      'Least-privilege patterns and secure session flows for safer corporate access. Built for compliance-first teams.',
    accent: 'purple',
    highlights: [
      'Authentication & session protection',
      'Operational hygiene + monitoring',
      'Scalable access controls',
    ],
    features: [
      {
        title: 'Role-based Access Control',
        description:
          'Granular permissions, team hierarchies, and time-bound access for contractors and partners.',
      },
      {
        title: 'Session Management',
        description:
          'Automatic timeout, re-authentication for sensitive actions, and concurrent session limits.',
      },
      {
        title: 'Security Audit Logging',
        description:
          'Every login, permission change, and sensitive action is logged immutably and searchable.',
      },
      {
        title: 'Threat Detection',
        description:
          'Anomaly detection, IP whitelisting, and real-time alerts for suspicious activity.',
      },
    ],
    useCases: [
      {
        title: 'Regulated Industries',
        description: 'BFSI, healthcare, and fintech compliance: MFA, audit trails, and access controls.',
      },
      {
        title: 'Third-party Access',
        description:
          'Vendor portals, partner integrations, and contractor systems with strict permission scoping.',
      },
      {
        title: 'Incident Response',
        description:
          'Quick forensics: search audit logs, revoke sessions, and trace the impact of compromised accounts.',
      },
    ],
    pricing: {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Based on user count and audit log retention. Starting: ₹5L/year.',
    },
    cta: 'Secure your access layer',
    testimonial: {
      quote:
        'Their security audit prep helped us pass RBI compliance review in one attempt. The RBAC system is rock-solid.',
      author: 'Deepak Singh',
      role: 'Chief Information Security Officer, Bank',
    },
  },
  'workflow-automation': {
    id: 'workflow-automation',
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    subtitle: 'Reduce manual effort with governed automation',
    description:
      'Reduce manual effort with governed automation across compliance and delivery pipelines. Auditable, transparent, and scalable.',
    accent: 'cyan',
    highlights: [
      'Automated notifications & routing',
      'Governed data transformations',
      'Change tracking + audit trails',
    ],
    features: [
      {
        title: 'Workflow Builder',
        description:
          'Visual workflow designer—no-code branching, conditions, and multi-step approval chains.',
      },
      {
        title: 'Smart Routing',
        description:
          'Auto-assign tasks based on rules: department, skill, or availability. Round-robin or priority routing.',
      },
      {
        title: 'Notifications & Escalation',
        description:
          'Email, Slack, or SMS alerts. Auto-escalate if deadlines are missed. Context-aware messaging.',
      },
      {
        title: 'Integration',
        description:
          'Connect to email, Slack, Zapier, or your custom APIs. Webhook support for real-time sync.',
      },
    ],
    useCases: [
      {
        title: 'Approval Workflows',
        description:
          'Purchase requests, expense approvals, document sign-offs—with delegation and multi-level routing.',
      },
      {
        title: 'Onboarding Automation',
        description:
          'New hire workflows: IT provisioning, compliance training, access grant—triggered automatically.',
      },
      {
        title: 'Document Processing',
        description:
          'Invoice matching, OCR extraction, and approval chains. Integration with accounting software.',
      },
    ],
    pricing: {
      tier: 'Standard',
      price: '₹40,000/month',
      description: 'Includes 50 workflow instances. Additional: ₹800 per workflow/month.',
    },
    cta: 'Automate your processes',
    testimonial: {
      quote:
        'Workflow automation reduced our approval cycle from 2 weeks to 2 days. The audit trail is immaculate.',
      author: 'Neha Gupta',
      role: 'Process Manager, Pharma Co.',
    },
  },
  'support-service-ops': {
    id: 'support-service-ops',
    slug: 'support-service-ops',
    title: 'Support & Service Ops',
    subtitle: 'Reliable post-delivery operations',
    description:
      'Reliable post-auth operations that keep delivery smooth and transparent. Built for service teams and customers.',
    accent: 'purple',
    highlights: [
      'Issue triage + escalation paths',
      'Delivery monitoring',
      'Corporate-ready documentation',
    ],
    features: [
      {
        title: 'Ticketing System',
        description:
          'Customer support tickets with SLA tracking, priority classification, and auto-assignment to teams.',
      },
      {
        title: 'Knowledge Base',
        description:
          'Self-service documentation, FAQs, and troubleshooting guides. Searchable and customer-facing.',
      },
      {
        title: 'Service Monitoring',
        description:
          'Real-time uptime dashboards, incident tracking, and status page updates. Transparent to customers.',
      },
      {
        title: 'Analytics & Reporting',
        description:
          'SLA compliance, resolution time, customer satisfaction scores, and team productivity metrics.',
      },
    ],
    useCases: [
      {
        title: 'B2B SaaS Support',
        description:
          'Tiered support tiers (basic, priority, enterprise) with SLA guarantees and dedicated account managers.',
      },
      {
        title: 'Service Delivery Tracking',
        description:
          'Post-project support, maintenance windows, and feature deployment visibility for customers.',
      },
      {
        title: 'Incident Management',
        description:
          'P1/P2/P3 incident classification, war room coordination, and post-mortem tracking.',
      },
    ],
    pricing: {
      tier: 'Standard+',
      price: '₹60,000/month',
      description: 'Includes unlimited tickets, 3 agents, and dedicated Slack channel.',
    },
    cta: 'Build customer trust',
    testimonial: {
      quote:
        'Our support team productivity doubled. Customers love the self-service portal—support ticket volume dropped 40%.',
      author: 'Vikram Reddy',
      role: 'VP Customer Success, EdTech Platform',
    },
  },
}

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug]

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for does not exist.',
    }
  }

  return {
    title: `${service.title} | Dhyanshiv India`,
    description: service.description,
    keywords: [service.title, ...service.highlights],
    openGraph: {
      title: `${service.title} | Dhyanshiv India`,
      description: service.description,
      type: 'article',
    },
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug]

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}