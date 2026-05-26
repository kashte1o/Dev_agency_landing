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
        'bg-[#2563EB] text-white font-semibold',
        'rounded-[var(--radius-btn)] md:rounded-[10px]',
        'px-7 py-[14px] text-[0.95rem]',
        'md:px-12 md:py-[26px] md:text-[1.1rem] md:font-semibold',
        'outline-none',
        'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12]',
        className,
      )}
    >
      {/* Arrow BEFORE text.
          Group layout: [new arrow][visible arrow]
          Default translateX(-16px) → visible arrow fills wrapper.
          Hover translateX(0) → visible exits right, new enters from left. */}
      <span
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          width: '16px',
          height: '16px',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        <span
          className="hero-cta-arrow-group"
          style={{ display: 'flex' }}
        >
          <ArrowRight size={16} strokeWidth={2} style={{ flexShrink: 0, display: 'block' }} aria-hidden={true} />
          <ArrowRight size={16} strokeWidth={2} style={{ flexShrink: 0, display: 'block' }} />
        </span>
      </span>

      {/* Text — exits up, duplicate enters from below */}
      <span style={{ display: 'inline-block', overflow: 'hidden', height: '1.25em' }}>
        <span
          className="hero-cta-text-group"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <span style={{ display: 'block', lineHeight: '1.25em' }}>{children}</span>
          <span style={{ display: 'block', lineHeight: '1.25em' }} aria-hidden="true">{children}</span>
        </span>
      </span>
    </a>
  )
}
