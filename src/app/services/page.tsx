'use client'

import Link from 'next/link'
import { ArrowRight, ShieldCheck, Briefcase, Wallet, Shield, Workflow, Headset } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Compliance Automation',
    description:
      'GST, ROC, and statutory workflows with consistent execution, reminders, and documentation trails.',
    icon: ShieldCheck,
    badge: 'Compliance',
  },
  {
    title: 'Corporate Tech Delivery',
    description:
      'Custom internal systems, dashboards, and integrations tailored for regulated business environments.',
    icon: Briefcase,
    badge: 'Engineering',
  },
  {
    title: 'Automated Payments',
    description:
      'Secure payment collection and reconciliation patterns powered by production-ready gateway flows.',
    icon: Wallet,
    badge: 'Payments',
  },
  {
    title: 'Security and Trust Ops',
    description:
      'Operational controls, access discipline, and audit-aware practices for enterprise-grade trust.',
    icon: Shield,
    badge: 'Security',
  },
  {
    title: 'Workflow Automation',
    description:
      'Process mapping and automation for repetitive operations across teams and service pipelines.',
    icon: Workflow,
    badge: 'Operations',
  },
  {
    title: 'Support Service Ops',
    description:
      'Client support frameworks and service monitoring that keep outcomes reliable and transparent.',
    icon: Headset,
    badge: 'Support',
  },
] as const

export default function ServicesPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 py-10 text-slate-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Card className="mb-8 rounded-[24px] border-zinc-200/60 bg-white/75 shadow-xl backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-900/65">
          <CardHeader className="p-6 sm:p-8">
            <Badge variant="info" className="w-fit uppercase tracking-[0.2em] text-[10px]">
              Enterprise Service Catalog
            </Badge>
            <CardTitle className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Services Built for Indian Businesses
            </CardTitle>
            <CardDescription className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Explore our core offerings designed for compliance reliability, technology modernization, and secure operations.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/90 bg-card/95 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <CardHeader className="p-5 pb-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button asChild variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent">
                  <Link href="/get-connected" className="inline-flex items-center gap-1.5">
                    Request this service <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}