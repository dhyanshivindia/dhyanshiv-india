'use client'

import Link from 'next/link'
import { Settings, UserCircle2, Bell, Shield, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function SettingsPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl space-y-5">
        <Card className="border-border/90 bg-card/95 shadow-card">
          <CardHeader className="p-6 sm:p-8">
            <Badge variant="neutral" className="w-fit uppercase tracking-[0.2em] text-[10px]">
              Account Settings
            </Badge>
            <CardTitle className="mt-3 flex items-center gap-2 text-2xl tracking-tight sm:text-3xl">
              <Settings className="h-6 w-6 text-primary" />
              Settings
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Manage account preferences, communication options, and security guidance.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="border-border/90 bg-card/95 shadow-card">
            <CardHeader className="p-5">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <UserCircle2 className="h-4 w-4" />
              </div>
              <CardTitle className="text-base">Profile</CardTitle>
              <CardDescription className="text-sm">Update your personal and company information from your signup and dashboard flows.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/90 bg-card/95 shadow-card">
            <CardHeader className="p-5">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <Bell className="h-4 w-4" />
              </div>
              <CardTitle className="text-base">Notifications</CardTitle>
              <CardDescription className="text-sm">Control transactional updates via email and support channels.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/90 bg-card/95 shadow-card">
            <CardHeader className="p-5">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                <Shield className="h-4 w-4" />
              </div>
              <CardTitle className="text-base">Security</CardTitle>
              <CardDescription className="text-sm">Use strong credentials and contact support for account recovery or critical access updates.</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="border-border/90 bg-card/95 shadow-card">
          <CardContent className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6">
            <p className="text-sm text-muted-foreground">Need immediate help with account or billing settings?</p>
            <Button asChild>
              <Link href="/get-connected" className="inline-flex items-center gap-1.5">
                Contact Support <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
