import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description: string
  className?: string
  align?: 'start' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'start',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        light ? 'text-white' : 'text-slate-900',
        className,
      )}
    >
      <p
        className={cn(
          'text-xs font-semibold uppercase tracking-[0.26em]',
          light ? 'text-white/60' : 'text-slate-500',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'font-fashion-display mt-4 text-balance text-4xl leading-none tracking-[-0.05em] md:text-6xl',
          light ? 'text-white' : 'text-slate-950',
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'mt-5 text-pretty text-base leading-7 md:text-lg',
          light ? 'text-white/72' : 'text-slate-600',
        )}
      >
        {description}
      </p>
    </div>
  )
}
