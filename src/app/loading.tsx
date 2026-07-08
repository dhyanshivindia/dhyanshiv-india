export default function Loading() {
  return (
    <div className="page-shell space-y-12 animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="space-y-6">
        <div className="h-12 w-32 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-16 w-3/4 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-3">
          <div className="h-6 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-6 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="h-12 w-40 rounded-full bg-zinc-200 dark:bg-zinc-800" />
      </section>

      {/* Grid Section Skeleton */}
      <section className="space-y-6">
        <div className="h-8 w-40 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="h-6 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-zinc-100 dark:bg-zinc-900" />
                <div className="h-4 w-5/6 rounded bg-zinc-100 dark:bg-zinc-900" />
              </div>
              <div className="h-10 w-full rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
