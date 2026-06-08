'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface CarouselDotsProps<T extends HTMLElement> {
  /** Ref to the horizontally-scrolling track. */
  scrollRef: React.RefObject<T | null>
  /** Number of cards / snap positions. */
  count: number
  /** Dot palette — light for dark sections, default for light sections. */
  tone?: 'default' | 'light'
  /** Responsive visibility + spacing (e.g. "md:hidden mt-6"). */
  className?: string
}

/**
 * Scroll-position indicator for the mobile card carousels. Tracks the track's
 * scrollLeft and lights the dot nearest the current position. Purely a visual
 * affordance — the scroll container itself remains the interaction target.
 */
export function CarouselDots<T extends HTMLElement>({
  scrollRef,
  count,
  tone = 'default',
  className,
}: CarouselDotsProps<T>) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      if (max <= 0) {
        setActive(0)
        return
      }
      const ratio = el.scrollLeft / max
      setActive(Math.round(ratio * (count - 1)))
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [scrollRef, count])

  if (count <= 1) return null

  const dotIdle = tone === 'light' ? 'bg-white/25' : 'bg-text-secondary/30'
  const dotActive = tone === 'light' ? 'bg-white/80' : 'bg-accent'

  return (
    <div
      aria-hidden
      className={cn('flex items-center justify-center gap-2', className)}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            'h-1.5 rounded-full transition-all duration-200',
            i === active ? cn('w-5', dotActive) : cn('w-1.5', dotIdle),
          )}
        />
      ))}
    </div>
  )
}
