'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ClipboardList, TrendingUp, Users2, DollarSign, MessageSquare, Settings, LogOut, Briefcase } from 'lucide-react'

interface AgentInfo {
  agentId: string
  email: string
  userCode: string
  role: string
  name?: string
}

export default function AgentDashboard() {
  const [agent, setAgent] = useState<AgentInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const agentAuth = localStorage.getItem('agentAuth')
    if (!agentAuth) {
      router.push('/agent/signin')
      return
    }
    setAgent(JSON.parse(agentAuth))
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('agentAuth')
    router.push('/')
  }

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const actions = [
    { icon: ClipboardList, title: 'Manage Services', description: 'View and manage the services you provide', label: 'My Services', href: '/services', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { icon: TrendingUp, title: 'Performance', description: 'Track your performance and earnings', label: 'View Metrics', href: '/dashboard', color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-50 dark:bg-teal-900/20' },
    { icon: Users2, title: 'My Clients', description: 'Manage client relationships and interactions', label: 'View Clients', href: '/get-connected', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: DollarSign, title: 'Earnings', description: 'Track your earnings and payouts', label: 'View Earnings', href: '/dashboard', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20' },
    { icon: MessageSquare, title: 'Messages', description: 'Communicate with clients and support team', label: 'View Messages', href: '/get-connected', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: Settings, title: 'Settings', description: 'Update your profile and preferences', label: 'Open Settings', href: '/settings', color: 'text-zinc-600 dark:text-zinc-400', bg: 'bg-zinc-100 dark:bg-zinc-800' },
  ]

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-zinc-50 dark:bg-zinc-950">
      {/* Page sub-header */}
      <div className="border-b border-border bg-card sticky top-14 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 dark:bg-emerald-900/30">
              <Briefcase className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Agent Dashboard</p>
              <p className="text-xs text-muted-foreground">{agent?.userCode}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome */}
        <div>
          <h1 className="text-xl font-semibold text-foreground">Welcome back, {agent?.name || agent?.email.split('@')[0]}</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage your services and track your performance metrics.</p>
        </div>

        {/* Agent Profile */}
        <div className="rounded-lg border border-emerald-200/70 dark:border-emerald-900/40 bg-card shadow-card p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">Agent Profile</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Name', value: agent?.name || agent?.email.split('@')[0] },
              { label: 'Email', value: agent?.email },
              { label: 'Agent ID', value: agent?.userCode },
              { label: 'Role', value: agent?.role },
            ].map((item) => (
              <div key={item.label} className="rounded-md bg-muted/50 px-4 py-3">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium text-foreground font-mono truncate">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Grid */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {actions.map((action) => (
              <div key={action.title} className="rounded-lg border border-border bg-card shadow-card p-5 hover:shadow-card-hover transition-shadow">
                <div className={`inline-flex rounded-md ${action.bg} p-2 mb-3`}>
                  <action.icon className={`h-5 w-5 ${action.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{action.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{action.description}</p>
                <Link href={action.href} className="mt-3 inline-flex h-7 items-center rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground shadow-xs hover:bg-accent transition-colors">
                  {action.label}
                </Link>
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
