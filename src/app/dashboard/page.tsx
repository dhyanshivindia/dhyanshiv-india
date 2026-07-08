'use client'

import { useSession } from 'next-auth/react'

export default function DashboardPage() {
  const { data: session } = useSession()
  const isAdmin = (session?.user as any)?.admin === true

  // Mock data - in production, fetch from database
  const stats = [
    { label: 'Active Services', value: '3', color: 'cyan' },
    { label: 'Total Spent', value: '₹45,000', color: 'purple' },
    { label: 'Compliance Score', value: '98%', color: 'green' },
  ]

  const recentActivity = [
    {
      id: 1,
      title: 'Compliance Automation service activated',
      date: '2 days ago',
      status: 'active',
    },
    {
      id: 2,
      title: 'GST filing completed successfully',
      date: '5 days ago',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Security audit initiated',
      date: '1 week ago',
      status: 'in-progress',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-800/50"
          >
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {stat.label}
            </p>
            <p className={`mt-2 text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-zinc-800/50">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Recent Activity
        </h2>
        <div className="mt-6 space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between rounded-lg border border-zinc-200 p-4 dark:border-white/10"
            >
              <div>
                <p className="font-medium text-zinc-900 dark:text-white">
                  {activity.title}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {activity.date}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  activity.status === 'active'
                    ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                    : activity.status === 'completed'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400'
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-zinc-800/50">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Quick Actions
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-700">
            New Service Request
          </button>
          <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-white/20 dark:text-white dark:hover:bg-zinc-800">
            View Compliance Status
          </button>
          {isAdmin && (
            <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-white/20 dark:text-white dark:hover:bg-zinc-800">
              View Analytics
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
