'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FormEvent, useEffect, useMemo, useState } from 'react'

export default function ResetPasswordPage() {
  const searchParams = useSearchParams()
  const token = useMemo(() => searchParams.get('token') || '', [searchParams])

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isCheckingToken, setIsCheckingToken] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [tokenError, setTokenError] = useState('')
  const [formError, setFormError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    let ignore = false

    async function verifyToken() {
      if (!token) {
        setTokenError('Reset token is missing')
        setIsCheckingToken(false)
        return
      }

      try {
        const res = await fetch(`/api/auth/reset-password?token=${encodeURIComponent(token)}`)
        const data = await res.json()
        if (!ignore && !res.ok) {
          setTokenError(data.error || 'Reset token is invalid or expired')
        }
      } catch {
        if (!ignore) {
          setTokenError('Unable to validate reset token. Please try again.')
        }
      } finally {
        if (!ignore) {
          setIsCheckingToken(false)
        }
      }
    }

    verifyToken()

    return () => {
      ignore = true
    }
  }, [token])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password.length < 8) {
      setFormError('Password must be at least 8 characters long')
      return
    }

    if (password !== confirmPassword) {
      setFormError('Passwords do not match')
      return
    }

    setIsSubmitting(true)
    setFormError('')

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setFormError(data.error || 'Unable to reset password')
        return
      }

      setSuccessMessage('Password updated successfully. You can now sign in.')
      setPassword('')
      setConfirmPassword('')
    } catch {
      setFormError('Unable to reset password. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-gradient-to-br from-slate-50 to-white px-4 py-12 dark:from-zinc-950 dark:to-zinc-900">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Set a new password</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Choose a strong password for your account.</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          {isCheckingToken ? (
            <div className="flex items-center justify-center py-8 text-sm text-muted-foreground">Validating reset link...</div>
          ) : tokenError ? (
            <div className="space-y-4">
              <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-destructive dark:border-red-800 dark:bg-red-900/20">
                {tokenError}
              </div>
              <Link
                href="/forgot-password"
                className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
              >
                Request new reset link
              </Link>
            </div>
          ) : successMessage ? (
            <div className="space-y-4">
              <div className="rounded-md border border-green-200 bg-green-50 p-3 text-xs text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400">
                {successMessage}
              </div>
              <Link
                href="/signin"
                className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
              >
                Continue to sign in
              </Link>
            </div>
          ) : (
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-foreground">
                  New password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Minimum 8 characters"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-foreground">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isSubmitting}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Re-enter new password"
                />
              </div>

              {formError && (
                <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-destructive dark:border-red-800 dark:bg-red-900/20">
                  {formError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
              >
                {isSubmitting ? 'Updating...' : 'Update password'}
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link href="/signin" className="text-primary hover:underline underline-offset-4">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
