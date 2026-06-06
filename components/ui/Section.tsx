import { cn } from '@/lib/utils'

type SectionBackground = 'base' | 'surface' | 'subtle' | 'dark' | 'dark-soft'

const bgMap: Record<SectionBackground, string> = {
  base:        'bg-bg-base',
  surface:     'bg-bg-surface',
  subtle:      'bg-bg-subtle',
  dark:        'bg-bg-dark',
  'dark-soft': 'bg-bg-dark-soft',
}

interface SectionProps {
  children: React.ReactNode
  id?: string
  background?: SectionBackground
  className?: string
  style?: React.CSSProperties
}

export function Section({
  children,
  id,
  background = 'base',
  className,
  style,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-[120px]', bgMap[background], className)}
      style={style}
    >
      {children}
    </section>
  )
}
