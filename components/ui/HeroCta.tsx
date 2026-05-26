'use client'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroCtaProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function HeroCta({ href, children, className }: HeroCtaProps) {
  return (
    <a
      href={href}
      className={cn(
        'hero-cta',
        'relative inline-flex items-center gap-3 select-none cursor-pointer',
        'bg-accent text-white font-semibold',
        'rounded-[var(--radius-btn)] md:rounded-[10px]',
        // restore original hero button sizing
        'px-7 py-[14px] text-[0.95rem]',
        'md:px-12 md:py-[26px] md:text-[1.1rem] md:font-semibold',
        'outline-none',
        'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12]',
        className,
      )}
    >
      {/* Text — exits up on hover, duplicate enters from below */}
      <span className="overflow-hidden" style={{ height: '1.25em' }}>
        <span className="hero-cta-text-group flex flex-col">
          <span className="block" style={{ lineHeight: '1.25em' }}>{children}</span>
          <span className="block" style={{ lineHeight: '1.25em' }} aria-hidden="true">{children}</span>
        </span>
      </span>

      {/* Arrow — [new (hidden left)][visible] horizontal pair.
          Group starts at translateX(-16px) so "visible" fills wrapper.
          On hover slides right: visible exits right, new enters from left. */}
      <span className="overflow-hidden flex-shrink-0" style={{ width: '16px', height: '16px' }}>
        <span className="hero-cta-arrow-group flex">
          <ArrowRight size={16} strokeWidth={2} className="flex-shrink-0" aria-hidden="true" />
          <ArrowRight size={16} strokeWidth={2} className="flex-shrink-0" />
        </span>
      </span>
    </a>
  )
}
