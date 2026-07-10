import { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { cn } from '@/lib/cn'

interface LegalPageShellProps {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

interface LegalSectionProps {
  title: string
  children: ReactNode
  className?: string
}

function LegalPageShell({ eyebrow, title, description, children }: LegalPageShellProps) {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-4 py-10 text-slate-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl space-y-5 sm:space-y-6">
        <Card className="rounded-[24px] border-zinc-200/60 bg-white/75 shadow-xl backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-900/65">
          <CardHeader className="p-6 pb-4 sm:p-8 sm:pb-5">
            <Badge variant="info" className="w-fit uppercase tracking-[0.2em] text-[10px]">
              {eyebrow}
            </Badge>
            <CardTitle className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="space-y-4">{children}</div>
      </div>
    </div>
  )
}

function LegalSection({ title, children, className }: LegalSectionProps) {
  return (
    <Card className={cn('border-border/90 bg-card/90 backdrop-blur-sm shadow-card', className)}>
      <CardHeader className="p-5 pb-3 sm:p-6 sm:pb-4">
        <CardTitle className="text-base text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-5 pt-0 text-sm leading-relaxed text-muted-foreground sm:p-6 sm:pt-0">
        {children}
      </CardContent>
    </Card>
  )
}

function LegalList({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <ul className={cn('ml-5 list-disc space-y-2', className)}>
      {children}
    </ul>
  )
}

export { LegalPageShell, LegalSection, LegalList }