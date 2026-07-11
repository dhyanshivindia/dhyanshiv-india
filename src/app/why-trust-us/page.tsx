'use client'

import Link from 'next/link'
import { CheckCircle2, ShieldCheck, Landmark, Clock3, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const trustPoints = [
  {
    icon: Landmark,
    title: 'Registered and Compliant',
    text: 'Operations aligned with Indian business and compliance requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Delivery Standards',
    text: 'Enterprise-grade handling for service requests, data, and payment workflows.',
  },
  {
    icon: Clock3,
    title: 'Operational Reliability',
    text: 'Clear communication, predictable timelines, and accountable service execution.',
  },
] as const

export default function WhyTrustUsPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 py-10 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <Card className="rounded-[24px] border-zinc-200/60 bg-white/75 shadow-xl backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-900/65">
          <CardHeader className="p-6 sm:p-8">
            <Badge variant="info" className="w-fit uppercase tracking-[0.2em] text-[10px]">
              Trust and Delivery
            </Badge>
            <CardTitle className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Why Businesses Choose DHYANSHIV
            </CardTitle>
            <CardDescription className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              We combine compliance understanding, technical delivery capability, and operational discipline to support startups and MSMEs with enterprise-grade standards.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {trustPoints.map((item) => (
            <Card key={item.title} className="border-border/90 bg-card/95 shadow-card">
              <CardHeader className="p-5">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="border-border/90 bg-card/95 shadow-card">
          <CardHeader className="p-5 sm:p-6">
            <CardTitle className="text-base">Operational Principles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-5 pt-0 text-sm text-muted-foreground sm:p-6 sm:pt-0">
            <p className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 dark:text-green-400" />Transparent communication from inquiry to delivery.</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 dark:text-green-400" />Service-first approach with security and compliance by default.</p>
            <p className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 dark:text-green-400" />Practical solutions focused on measurable business outcomes.</p>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/get-connected" className="inline-flex items-center gap-1.5">
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
