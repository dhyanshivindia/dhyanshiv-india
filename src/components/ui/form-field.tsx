import * as React from 'react'
import { cn } from '@/lib/cn'

interface FormFieldProps {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
  htmlFor?: string
}

function FormField({ label, hint, error, required, className, children, htmlFor }: FormFieldProps) {
  return (
    <div className={cn('space-y-1.5', className)}>
      {label && (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </label>
      )}
      {children}
      {hint && !error && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  )
}

interface FormDividerProps {
  label?: string
}

function FormDivider({ label }: FormDividerProps) {
  if (!label) {
    return <div className="h-px bg-border my-2" />
  }
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

interface FormSectionProps {
  title?: string
  description?: string
  className?: string
  children: React.ReactNode
}

function FormSection({ title, description, className, children }: FormSectionProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {(title || description) && (
        <div>
          {title && <h3 className="text-sm font-semibold text-foreground">{title}</h3>}
          {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        </div>
      )}
      {children}
    </div>
  )
}

export { FormField, FormDivider, FormSection }
