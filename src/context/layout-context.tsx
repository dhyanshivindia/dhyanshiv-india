"use client"

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"

type LayoutMode = "standard" | "compact" | "immersive"

type LayoutContextValue = {
  mode: LayoutMode
  setMode: (mode: LayoutMode) => void
  toggleMode: () => void
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined)

const MODE_ORDER: LayoutMode[] = ["standard", "compact", "immersive"]

export function LayoutModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<LayoutMode>("standard")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = window.localStorage.getItem("dhyanshiv-layout") as LayoutMode | null
    if (stored && MODE_ORDER.includes(stored)) {
      setModeState(stored)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.dataset.layoutMode = mode
    window.localStorage.setItem("dhyanshiv-layout", mode)
  }, [mode, mounted])

  const setMode = (next: LayoutMode) => {
    setModeState(next)
  }

  const toggleMode = () => {
    setModeState((prev) => {
      const idx = MODE_ORDER.indexOf(prev)
      return MODE_ORDER[(idx + 1) % MODE_ORDER.length]
    })
  }

  const value = useMemo(() => ({ mode, setMode, toggleMode }), [mode])

  if (!mounted) {
    return <>{children}</>
  }

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export function useLayoutMode() {
  const context = useContext(LayoutContext)
  if (!context) throw new Error("useLayoutMode must be used inside LayoutModeProvider")
  return context
}