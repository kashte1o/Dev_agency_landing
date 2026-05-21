import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  label: string
  className?: string
}

export function StatusBadge({ label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green',
        className,
      )}
    >
      <span className="status-pulse h-1.5 w-1.5 rounded-full bg-accent-green" />
      {label}
    </span>
  )
}
