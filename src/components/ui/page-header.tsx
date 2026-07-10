import * as React from 'react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface PageHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
  badge?: React.ReactNode
  backHref?: string
  backLabel?: string
  className?: string
}

function PageHeader({ title, description, actions, badge, className }: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between', className)}>
      <div className="min-w-0">
        {badge && <div className="mb-2">{badge}</div>}
        <h1 className="text-xl font-semibold tracking-tight text-foreground truncate">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 shrink-0">{actions}</div>
      )}
    </div>
  )
}

interface LoadingPageProps {
  message?: string
}

function LoadingPage({ message = 'Loading...' }: LoadingPageProps) {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  )
}

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border p-8 text-center', className)}>
      {icon && <div className="text-muted-foreground">{icon}</div>}
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {description && <p className="mt-1 text-sm text-muted-foreground max-w-xs mx-auto">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  trend?: {
    value: string
    positive?: boolean
  }
  className?: string
  variant?: 'default' | 'colored'
  color?: string
}

function StatCard({ title, value, description, icon, trend, className, variant = 'default', color }: StatCardProps) {
  return (
    <div className={cn(
      'rounded-lg border border-border bg-card p-6 shadow-card',
      className
    )}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
          {trend && (
            <p className={cn('mt-2 text-xs font-medium', trend.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')}>
              {trend.value}
            </p>
          )}
        </div>
        {icon && (
          <div className="shrink-0 rounded-md bg-muted p-2 text-muted-foreground">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}

export { PageHeader, LoadingPage, EmptyState, StatCard }
