import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-2xl font-semibold">Page not found</p>
      <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-3xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
        >
          Back to home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-3xl border border-zinc-300 px-8 py-4 font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Explore services
        </Link>
      </div>
    </div>
  )
}
