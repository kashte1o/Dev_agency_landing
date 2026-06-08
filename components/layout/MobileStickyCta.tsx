'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Persistent bottom CTA for mobile only.
 *
 * Appears once the visitor has scrolled past the hero (where a CTA is already
 * visible) and hides again as soon as the viewport reaches the contact section
 * — so it never sits on top of the lead form or the footer.
 */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const contact = document.getElementById('start-project')

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7
      const contactTop = contact
        ? contact.getBoundingClientRect().top + window.scrollY
        : Infinity
      const reachedContact = window.scrollY + window.innerHeight >= contactTop
      setVisible(pastHero && !reachedContact)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-30 md:hidden',
        'border-t border-border bg-bg-surface/95 backdrop-blur-md',
        'px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+10px)]',
        'transition-transform duration-300 ease-out',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
      aria-hidden={!visible}
    >
      <a
        href="#start-project"
        tabIndex={visible ? undefined : -1}
        className="flex w-full items-center justify-center rounded-[var(--radius-btn)] bg-[#0057FF] px-6 py-3.5 text-[1rem] font-semibold text-white transition-colors duration-200 hover:bg-[#1E40AF] active:bg-[#1E40AF]"
      >
        Let&apos;s scope your project
      </a>
    </div>
  )
}
