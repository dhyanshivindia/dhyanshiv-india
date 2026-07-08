'use client'

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

type ThemeContextValue = {
  mode: 'light' | 'dark'
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Force default light theme. Dark mode only activates when the user manually toggles.
    const stored = window.localStorage.getItem('dhyanshiv-theme') as 'light' | 'dark' | null
    const next = stored === 'dark' ? 'dark' : 'light'
    setMode(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }, [])


  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('dhyanshiv-theme', next)
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }

  const value = useMemo(() => ({ mode, toggleMode }), [mode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
