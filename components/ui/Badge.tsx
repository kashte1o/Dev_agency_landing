import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'optional' | 'accent'
  className?: string
}

const variants = {
  default: 'bg-bg-subtle text-text-secondary border border-border',
  optional: 'bg-bg-subtle text-text-secondary border border-border',
  accent:   'bg-accent/10 text-accent border border-accent/20',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-badge)] px-2 py-0.5 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
