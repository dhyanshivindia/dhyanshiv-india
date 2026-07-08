'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/context/theme-context'
import { LayoutModeProvider } from '@/context/layout-context'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <LayoutModeProvider>{children}</LayoutModeProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

