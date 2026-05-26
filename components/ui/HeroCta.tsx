'use client'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'

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
        'group relative inline-flex items-center gap-[10px] select-none cursor-pointer',
        'bg-accent text-white font-semibold',
        'rounded-[var(--radius-btn)]',
        'px-7 py-[14px] text-[0.95rem]',
        'md:px-9 md:py-[18px] md:text-[1.05rem]',
        'outline-none',
        'hover:-translate-y-px hover:bg-[#4F90F8]',
        'active:translate-y-0 active:scale-[0.98]',
        'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12]',
        className,
      )}
      style={{
        transition: `background-color 350ms ${ease}, transform 350ms ${ease}`,
      }}
    >
      {/* Text — two identical spans, clips to one line height */}
      <span className="overflow-hidden" style={{ height: '1.25em' }}>
        <span
          className="flex flex-col group-hover:-translate-y-1/2"
          style={{ transition: `transform 400ms ${ease}` }}
        >
          <span className="block" style={{ lineHeight: '1.25em' }}>{children}</span>
          <span className="block" style={{ lineHeight: '1.25em' }} aria-hidden="true">{children}</span>
        </span>
      </span>

      {/* Arrow — two identical icons, clips to one icon height */}
      <span className="overflow-hidden flex-shrink-0" style={{ height: '16px', width: '16px' }}>
        <span
          className="flex flex-col group-hover:-translate-y-1/2"
          style={{ transition: `transform 400ms ${ease}` }}
        >
          <ArrowRight size={16} strokeWidth={2} className="block flex-shrink-0" />
          <ArrowRight size={16} strokeWidth={2} className="block flex-shrink-0" aria-hidden={true} />
        </span>
      </span>
    </a>
  )
}
