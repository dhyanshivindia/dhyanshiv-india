'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
    // Check if admin is logged in
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🔄</div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 dark:from-slate-950 dark:via-zinc-900 dark:to-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 border-b border-amber-200 dark:border-amber-800/30 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-xl">👨‍💼</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{admin?.userCode}</p>
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
            Welcome, {admin?.email.split('@')[0]}! 👋
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            You have full administrative access to the system.
          </p>
        </div>

        {/* Admin Info Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Admin Profile</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-amber-700 dark:text-amber-400 font-semibold mb-1">Email</p>
              <p className="text-lg font-bold text-amber-900 dark:text-amber-200">{admin?.email}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-sm text-orange-700 dark:text-orange-400 font-semibold mb-1">Admin ID</p>
              <p className="text-lg font-bold text-orange-900 dark:text-orange-200">{admin?.userCode}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-sm text-red-700 dark:text-red-400 font-semibold mb-1">Role</p>
              <p className="text-lg font-bold text-red-900 dark:text-red-200">{admin?.role}</p>
            </div>
          </div>
        </div>

        {/* Admin Functions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* User Management */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">User Management</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Manage all user accounts, roles, and permissions
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all">
              Manage Users
            </button>
          </div>

          {/* Agent Management */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Agent Management</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Manage all agent accounts and their activities
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg font-semibold transition-all">
              Manage Agents
            </button>
          </div>

          {/* System Stats */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">System Statistics</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              View system performance and analytics
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all">
              View Stats
            </button>
          </div>

          {/* Settings */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg p-8">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">System Settings</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Configure system settings and policies
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all">
              Open Settings
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="text-amber-600 dark:text-amber-400 font-semibold hover:underline">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
