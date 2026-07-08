import Link from 'next/link'

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-cyber-obsidian px-6 py-16 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-black/60 p-10 text-center shadow-glass">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan">Admin dashboard</p>
        <h1 className="mt-6 text-4xl font-semibold text-white">Manage Dhyanshiv services</h1>
        <p className="mt-4 text-slate-300">Sign in with the admin account to create, update, and retire services backed by Supabase Postgres.</p>
        <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:gap-4">
          <Link href="/admin/manage" className="inline-flex rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-cyan/40">
            Open service manager
          </Link>
          <Link href="/" className="inline-flex rounded-3xl bg-cyan px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Return home
          </Link>
        </div>
      </div>
    </main>
  )
}
