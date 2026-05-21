import { cn } from '@/lib/utils'

interface LogoMarkProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  pulse?: boolean
}

export function LogoMark({
  variant = 'dark',
  size = 'sm',
  pulse = false,
  className,
}: LogoMarkProps) {
  const isLight = variant === 'light'

  const sizeMap = {
    sm: { gap: 'gap-2.5', mark: 'px-2 py-1 text-[10px]',        word: 'text-sm' },
    md: { gap: 'gap-3',   mark: 'px-2.5 py-[5px] text-[11px]',  word: 'text-[0.95rem]' },
    lg: { gap: 'gap-3.5', mark: 'px-3 py-[6px] text-[12px]',    word: 'text-[1.05rem]' },
    xl: { gap: 'gap-4',   mark: 'px-3.5 py-[7px] text-[13px]',  word: 'text-[1.2rem]' },
  }

  const s = sizeMap[size]

  return (
    <a
      href="/"
      aria-label="YOURLOGO — home"
      className={cn(
        'inline-flex items-center select-none',
        s.gap,
        pulse && 'logo-pulse',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'inline-flex items-center justify-center rounded-[5px] font-bold uppercase tracking-widest leading-none',
          s.mark,
          isLight
            ? 'border border-white/35 text-white/75'
            : 'border border-text-primary/25 text-text-primary/70',
        )}
      >
        ■
      </span>
      <span
        className={cn(
          'font-semibold tracking-tight',
          s.word,
          isLight ? 'text-white/88' : 'text-text-primary',
        )}
      >
        YOURLOGO
      </span>
    </a>
  )
}
