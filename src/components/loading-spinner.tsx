'use client'

import Image from 'next/image'

type LoadingSpinnerProps = {
  label?: string
}

export default function LoadingSpinner({ label = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-white/5 p-4 shadow-glow">
        <Image src="/loading-spinner.gif" alt="Loading animation" width={96} height={96} className="h-20 w-20 object-contain" priority />
      </div>
      <p className="max-w-xs text-sm text-slate-300">{label}</p>
    </div>
  )
}
