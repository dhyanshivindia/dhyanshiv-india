'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const isAdmin = (session?.user as any)?.admin === true

  useEffect(() => {
    if (!isAdmin) {
      router.push('/dashboard')
    }
  }, [isAdmin, router])

  if (!isAdmin) {
    return null
  }

  // Mock analytics data - in production, fetch from database/analytics service
  const metrics = [
    { label: 'Total Revenue', value: '₹2.4L', change: '+12.5%', color: 'green' },
    { label: 'Active Clients', value: '24', change: '+3', color: 'blue' },
    { label: 'Services Deployed', value: '68', change: '+8', color: 'purple' },
    { label: 'Uptime', value: '99.98%', change: 'Optimal', color: 'cyan' },
  ]

  const serviceMetrics = [
    {
      name: 'Compliance Automation',
      clients: 12,
      revenue: '₹1,20,000',
      growth: '+15%',
    },
    {
      name: 'Corporate Tech Delivery',
      clients: 8,
      revenue: '₹80,000',
      growth: '+8%',
    },
    {
      name: 'Security & Trust Ops',
      clients: 5,
      revenue: '₹50,000',
      growth: '+5%',
    },
    {
      name: 'Workflow Automation',
      clients: 4,
      revenue: '₹30,000',
      growth: '+2%',
    },
  ]

  const recentSignups = [
    { name: 'Acme Corporation', date: '2026-07-08', service: 'Compliance Automation' },
    { name: 'Global Tech Ltd', date: '2026-07-06', service: 'Corporate Tech' },
    { name: 'Finance Plus Inc', date: '2026-07-04', service: 'Workflow Automation' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Admin Analytics
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Platform metrics and business insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-800/50"
          >
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {metric.label}
            </p>
            <p className={`mt-2 text-3xl font-bold text-${metric.color}-600 dark:text-${metric.color}-400`}>
              {metric.value}
            </p>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
              {metric.change}
            </p>
          </div>
        ))}
      </div>

      {/* Service Performance */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-zinc-800/50">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Service Performance
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-white/10">
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                  Active Clients
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-white/10">
              {serviceMetrics.map((service) => (
                <tr key={service.name}>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-white">
                    {service.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {service.clients}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-white">
                    {service.revenue}
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">
                    {service.growth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Signups */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-zinc-800/50">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Recent Signups
        </h2>
        <div className="mt-6 space-y-4">
          {recentSignups.map((signup, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-lg border border-zinc-200 p-4 dark:border-white/10"
            >
              <div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  {signup.name}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {signup.service}
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {new Date(signup.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* System Health */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-zinc-800/50">
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            System Health
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">API Uptime</span>
              <span className="text-sm font-semibold text-green-600">99.98%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Avg Response Time</span>
              <span className="text-sm font-semibold text-green-600">245ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Database Health</span>
              <span className="text-sm font-semibold text-green-600">Healthy</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-zinc-800/50">
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            Deployment Status
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Latest Build</span>
              <span className="text-xs font-mono text-cyan-600">v2.4.1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Last Deploy</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Status</span>
              <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
