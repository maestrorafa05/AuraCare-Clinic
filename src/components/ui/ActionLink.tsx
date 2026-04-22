import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ActionLinkProps = {
  to: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'light' | 'ghost'
}

const variants = {
  primary:
    'bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800 border-slate-950',
  secondary:
    'border border-current/15 bg-white/70 text-current hover:-translate-y-0.5 hover:bg-white',
  light:
    'bg-white text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100 border-white',
  ghost:
    'border border-current/15 bg-transparent text-current hover:-translate-y-0.5 hover:bg-white/8',
}

export function ActionLink({
  to,
  children,
  className,
  variant = 'primary',
}: ActionLinkProps) {
  const sharedClassName = cn(
    'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-200',
    variants[variant],
    className,
  )

  return (
    <a className={sharedClassName} href={to}>
      {children}
    </a>
  )
}
