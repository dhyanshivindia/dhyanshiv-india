import Link from 'next/link'
import AdminServiceCrud from '@/components/admin-service-crud'

export default function AdminManage() {
  return (
    <main className="min-h-screen bg-cyber-obsidian px-6 py-16 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[32px] border border-white/10 bg-black/60 p-10 shadow-glass">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan">Supabase service catalog</p>
          <h1 className="mt-6 text-4xl font-semibold text-white">Service management</h1>
          <p className="mt-4 text-slate-300">Changes are served by Vercel API routes and stored in Supabase Postgres.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="inline-flex rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-cyan/40">
              View services
            </Link>
            <Link href="/" className="inline-flex rounded-3xl bg-cyan px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Return home
            </Link>
          </div>
        </div>
        <AdminServiceCrud />
        <div className="flex">
          <Link href="/" className="inline-flex rounded-3xl bg-cyan px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Return home
          </Link>
        </div>
      </div>
    </main>
  )
}
