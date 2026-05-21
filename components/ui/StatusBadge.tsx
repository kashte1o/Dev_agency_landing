import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  label: string
  className?: string
}

export function StatusBadge({ label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-1.5 text-[0.875rem] font-medium text-accent-green',
        className,
      )}
    >
      <span className="status-pulse h-2 w-2 rounded-full bg-accent-green" />
      {label}
    </span>
  )
}
