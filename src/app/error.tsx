'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service (e.g., Sentry)
    // eslint-disable-next-line no-console
    console.error('Error:', error)
  }, [error])

  return (
    <div className="page-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">Something went wrong</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        An unexpected error occurred. Our team has been notified.
      </p>
      {error.message && (
        <p className="mt-2 max-w-2xl rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
          {error.message}
        </p>
      )}
      {error.digest && (
        <p className="mt-2 text-xs text-zinc-500">Error ID: {error.digest}</p>
      )}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-3xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-3xl border border-zinc-300 px-8 py-4 font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
