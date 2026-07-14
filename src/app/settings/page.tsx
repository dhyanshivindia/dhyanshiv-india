'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { Settings, UserCircle2, Bell, Shield, ArrowRight, Laptop, LogOut } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type TrustedDevice = {
  id: string
  deviceName: string | null
  userAgent: string | null
  ipAddress: string | null
  createdAt: string
  revokedAt: string | null
}

export default function SettingsPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [devices, setDevices] = useState<TrustedDevice[]>([])
  const [isLoadingDevices, setIsLoadingDevices] = useState(false)
  const [isLoggingOutAll, setIsLoggingOutAll] = useState(false)
  const [revokingDeviceId, setRevokingDeviceId] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin')
      return
    }

    if (status === 'authenticated') {
      void fetchTrustedDevices()
    }
  }, [router, status])

  const fetchTrustedDevices = async () => {
    setIsLoadingDevices(true)
    try {
      const response = await fetch('/api/v1/auth/trusted-devices/list', { cache: 'no-store' })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to load trusted devices')
      }
      setDevices(data.devices || [])
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load trusted devices'
      setFeedback(message)
    } finally {
      setIsLoadingDevices(false)
    }
  }

  const handleLogoutAll = async () => {
    setFeedback('')
    setIsLoggingOutAll(true)
    try {
      const response = await fetch('/api/v1/auth/session/logout-all', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to logout from all devices')
      }
      await signOut({ callbackUrl: '/signin' })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to logout from all devices'
      setFeedback(message)
    } finally {
      setIsLoggingOutAll(false)
    }
  }

  const handleRevokeDevice = async (deviceId: string) => {
    setFeedback('')
    setRevokingDeviceId(deviceId)
    try {
      const response = await fetch('/api/v1/auth/trusted-devices/revoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to revoke trusted device')
      }
      await fetchTrustedDevices()
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to revoke trusted device'
      setFeedback(message)
    } finally {
      setRevokingDeviceId(null)
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:px-6 lg:px-8">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

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
              Manage account preferences, communication options, and active session security controls.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-border/90 bg-card/95 shadow-card">
          <CardHeader className="p-5">
            <CardTitle className="text-base">Current Session</CardTitle>
            <CardDescription className="text-sm">
              Signed in as {session?.user?.email || 'unknown'} ({(session?.user as any)?.role || 'user'})
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pb-5 pt-0">
            <Button onClick={handleLogoutAll} disabled={isLoggingOutAll} className="inline-flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              {isLoggingOutAll ? 'Logging out...' : 'Logout From All Devices'}
            </Button>
          </CardContent>
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
          <CardHeader className="p-5">
            <CardTitle className="text-base">Trusted Devices</CardTitle>
            <CardDescription className="text-sm">Review and revoke devices that can be used for authentication flows.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 px-5 pb-5 pt-0">
            {isLoadingDevices && <p className="text-sm text-muted-foreground">Loading devices...</p>}

            {!isLoadingDevices && devices.length === 0 && (
              <p className="text-sm text-muted-foreground">No trusted devices found.</p>
            )}

            {!isLoadingDevices && devices.length > 0 &&
              devices.map((device) => (
                <div key={device.id} className="flex items-center justify-between rounded-md border border-border/80 p-3">
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Laptop className="h-4 w-4 text-muted-foreground" />
                      {device.deviceName || 'Unnamed device'}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground truncate">
                      {device.ipAddress || 'Unknown IP'} • {device.userAgent || 'Unknown user-agent'}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRevokeDevice(device.id)}
                    disabled={!!device.revokedAt || revokingDeviceId === device.id}
                  >
                    {device.revokedAt ? 'Revoked' : revokingDeviceId === device.id ? 'Revoking...' : 'Revoke'}
                  </Button>
                </div>
              ))}
          </CardContent>
        </Card>

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

        {feedback && (
          <p className="text-sm text-destructive">{feedback}</p>
        )}
      </div>
    </div>
  )
}
