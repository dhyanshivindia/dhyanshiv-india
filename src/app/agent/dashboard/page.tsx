'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
    // Check if agent is logged in
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🔄</div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Agent Dashboard</h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{agent?.userCode}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all"
          >
            🚪 Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
            Welcome, {agent?.name || agent?.email.split('@')[0]}! 👋
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Manage your services and track your performance metrics.
          </p>
        </div>

        {/* Agent Info Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Agent Profile</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <p className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Name</p>
              <p className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                {agent?.name || agent?.email.split('@')[0]}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
              <p className="text-sm text-teal-700 dark:text-teal-400 font-semibold mb-1">Email</p>
              <p className="text-lg font-bold text-teal-900 dark:text-teal-200 break-all text-sm">
                {agent?.email}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-green-700 dark:text-green-400 font-semibold mb-1">Agent ID</p>
              <p className="text-lg font-bold text-green-900 dark:text-green-200">{agent?.userCode}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <p className="text-sm text-cyan-700 dark:text-cyan-400 font-semibold mb-1">Role</p>
              <p className="text-lg font-bold text-cyan-900 dark:text-cyan-200">{agent?.role}</p>
            </div>
          </div>
        </div>

        {/* Agent Functions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Services */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Manage Services</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              View and manage the services you provide
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg font-semibold transition-all">
              My Services
            </button>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Performance</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Track your performance and earnings
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all">
              View Metrics
            </button>
          </div>

          {/* Clients */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">My Clients</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Manage client relationships and interactions
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all">
              View Clients
            </button>
          </div>

          {/* Earnings */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Earnings</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Track your earnings and payouts
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all">
              View Earnings
            </button>
          </div>

          {/* Messages */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Messages</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Communicate with your clients and support team
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all">
              View Messages
            </button>
          </div>

          {/* Settings */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Settings</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Update your profile and preferences
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white rounded-lg font-semibold transition-all">
              Open Settings
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
