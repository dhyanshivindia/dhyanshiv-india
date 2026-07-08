'use client'

import { useTheme } from '@/context/theme-context'

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan/40 hover:bg-cyan/10"
    >
      <span>{mode === 'dark' ? 'Dark' : 'Light'} mode</span>
      <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
    </button>
  )
}
