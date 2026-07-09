'use client'

import { useTheme } from '@/context/theme-context'

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 transition hover:border-cyan-500 hover:bg-cyan-50 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:border-cyan-400 dark:hover:bg-zinc-800"
      title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      aria-label={`Toggle ${mode === 'dark' ? 'light' : 'dark'} mode`}
    >
      {mode === 'dark' ? (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.414 5.414a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM5 8a1 1 0 100-2H4a1 1 0 100 2h1z" clipRule="evenodd" />
        </svg>
      )}
      <span className="hidden sm:inline">{mode === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
