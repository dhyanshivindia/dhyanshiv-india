'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Users, Bot, BarChart3, Settings, LogOut, ShieldCheck } from 'lucide-react'

interface AdminInfo {
  adminId: string
  email: string
  userCode: string
  role: string
}

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<AdminInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuth')
    if (!adminAuth) {
      router.push('/admin/signin')
      return
    }
    setAdmin(JSON.parse(adminAuth))
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/')
  }

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const actions = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Manage all user accounts, roles, and permissions',
      label: 'Manage Users',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Bot,
      title: 'Agent Management',
      description: 'Manage all agent accounts and their activities',
      label: 'Manage Agents',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    },
    {
      icon: BarChart3,
      title: 'System Statistics',
      description: 'View system performance and analytics',
      label: 'View Stats',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: Settings,
      title: 'System Settings',
      description: 'Configure system settings and policies',
      label: 'Open Settings',
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
    },
  ]

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-zinc-50 dark:bg-zinc-950">
      {/* Page sub-header */}
      <div className="border-b border-border bg-card sticky top-14 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-100 dark:bg-amber-900/30">
              <ShieldCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Admin Dashboard</p>
              <p className="text-xs text-muted-foreground">{admin?.userCode}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome */}
        <div>
          <h1 className="text-xl font-semibold text-foreground">Welcome back, {admin?.email.split('@')[0]}</h1>
          <p className="mt-1 text-sm text-muted-foreground">You have full administrative access to the system.</p>
        </div>

        {/* Admin Profile Card */}
        <div className="rounded-lg border border-amber-200/70 dark:border-amber-900/40 bg-card shadow-card p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">Admin Profile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Email', value: admin?.email },
              { label: 'Admin ID', value: admin?.userCode },
              { label: 'Role', value: admin?.role },
            ].map((item) => (
              <div key={item.label} className="rounded-md bg-muted/50 px-4 py-3">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium text-foreground font-mono">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Actions Grid */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-4">Admin Controls</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {actions.map((action) => (
              <div key={action.title} className="rounded-lg border border-border bg-card shadow-card p-5 hover:shadow-card-hover transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`rounded-md ${action.bg} p-2 shrink-0`}>
                    <action.icon className={`h-5 w-5 ${action.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">{action.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{action.description}</p>
                    <button className="mt-3 inline-flex h-7 items-center rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
                      {action.label}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
