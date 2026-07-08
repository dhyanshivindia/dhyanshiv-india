"use client"

import { useLayoutMode } from "@/context/layout-context"

const LABELS: Record<"standard" | "compact" | "immersive", string> = {
  standard: "Standard",
  compact: "Compact",
  immersive: "Immersive",
}

const ICONS: Record<"standard" | "compact" | "immersive", React.ReactNode> = {
  standard: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  compact: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  immersive: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
}
export function LayoutModeToggle() {
  const { mode, setMode } = useLayoutMode()
  const modes: Array<"standard" | "compact" | "immersive"> = ["standard", "compact", "immersive"]

  return (
    <div className="hidden md:flex items-center gap-1 rounded-xl border border-zinc-200 bg-white/70 p-1 backdrop-blur dark:border-white/10 dark:bg-white/5" role="group" aria-label="Layout mode">
      {modes.map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`relative inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 $
            mode === m
              ? "bg-cyan-600 text-white shadow-[0_0_16px_rgba(0,255,255,0.35)]"
              : "text-slate-700 hover:text-slate-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/10"
          }`}
          aria-pressed={mode === m}
        >
          {ICONS[m]}
          <span className="hidden sm:inline">{LABELS[m]}</span>
        </button>
      ))}
    </div>
  )
}