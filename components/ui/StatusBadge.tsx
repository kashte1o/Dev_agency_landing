import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  label: string
  className?: string
}

export function StatusBadge({ label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/40',
        className,
      )}
    >
      <span aria-hidden className="h-px w-5 bg-white/20" />
      {label}
    </span>
  )
}
