'use client'

import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle, PhoneCall } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function GetConnectedPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 py-10 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <Card className="rounded-[24px] border-zinc-200/60 bg-white/75 shadow-xl backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-900/65">
          <CardHeader className="p-6 sm:p-8">
            <Badge variant="info" className="w-fit uppercase tracking-[0.2em] text-[10px]">
              Client Onboarding
            </Badge>
            <CardTitle className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Plan Your Next Service
            </CardTitle>
            <CardDescription className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Reach our team for compliance, technology delivery, payment automation, or managed support operations.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="border-border/90 bg-card/95 shadow-card">
            <CardHeader className="p-5">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                <MessageCircle className="h-4 w-4" />
              </div>
              <CardTitle className="text-base">WhatsApp</CardTitle>
              <CardDescription className="text-sm">Fastest response for new inquiries and support.</CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <Button asChild className="w-full">
                <a href="https://wa.me/919173011851">Start Chat</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/90 bg-card/95 shadow-card">
            <CardHeader className="p-5">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <Mail className="h-4 w-4" />
              </div>
              <CardTitle className="text-base">Email</CardTitle>
              <CardDescription className="text-sm">Share detailed requirements or documents.</CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:support@dhyanshivindia.in">Email Support</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/90 bg-card/95 shadow-card">
            <CardHeader className="p-5">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <PhoneCall className="h-4 w-4" />
              </div>
              <CardTitle className="text-base">Portal Access</CardTitle>
              <CardDescription className="text-sm">Continue with sign-in to track requests and services.</CardDescription>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <Button asChild variant="outline" className="w-full">
                <Link href="/signin">Go to Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/90 bg-card/95 shadow-card">
          <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-semibold text-foreground">Need a quick overview first?</p>
              <p className="text-sm text-muted-foreground">Explore our service catalog and choose a starting point.</p>
            </div>
            <Button asChild>
              <Link href="/services" className="inline-flex items-center gap-1.5">
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
