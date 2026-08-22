'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LogoMark } from './LogoMark'
import { Button } from '@/components/ui/Button'
import { navLinks, navCta } from '@/content/navigation'
import { cn } from '@/lib/utils'

// Navbar heights at each breakpoint — keep in sync with HeroSection
// top-padding and globals.css scroll-padding-top.
export const NAV_H_MOBILE      = 80   // px (<400)
export const NAV_H_MOBILE_LG   = 110  // px (>=400)
export const NAV_H_TABLET      = 120  // px (md+)
export const NAV_H_DESKTOP     = 130  // px (xl+)

interface NavBarProps {
  heroDark?: boolean
}

export function NavBar({ heroDark = true }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousFocus = document.activeElement as HTMLElement | null
    const drawer = drawerRef.current
    const focusable = () => Array.from(
      drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
    )
    const first = focusable()[0]
    first?.focus()

    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }
      if (event.key !== 'Tab') return
      const items = focusable()
      if (!items.length) return
      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
      previousFocus?.focus()
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isDark = heroDark && !scrolled

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        animate={{
          backgroundColor: scrolled
            ? 'rgba(247,248,250,0.97)'
            // Muted band over hero: semi-opaque dark + blur to feel "blanched"
            : 'rgba(11,16,32,0.55)',
          backdropFilter: scrolled ? 'blur(18px)' : 'blur(10px)',
          // Slate-tinted hairline (cool blue-gray) — reads as machined edge
          // rather than a drawn line. Same visual weight as the previous
          // pure white/black border, just temperature-shifted toward steel.
          borderBottomColor: scrolled
            ? 'rgba(71,85,105,0.10)'
            : 'rgba(148,163,184,0.10)',
          // Inset 1px highlight stacked just above the border = dual-edge bevel.
          // Kept under 5% opacity so it never reads as a visible line, only as
          // a subtle reflective lip when light catches the navbar edge.
          boxShadow: scrolled
            ? 'inset 0 -1px 0 0 rgba(15,23,42,0.025)'
            : 'inset 0 -1px 0 0 rgba(203,213,225,0.04)',
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {/*
          Desktop: 3-column grid [1fr | auto | 1fr] with minmax(0,1fr)
          to lock side columns to equal width. Nav links live in the
          centered `auto` column → they sit at the exact center of the
          container regardless of logo / CTA widths.
          Mobile: flex justify-between (logo + hamburger only). Hidden
          desktop nav doesn't affect mobile layout.
        */}
        <div
          className="
            relative mx-auto w-full max-w-[1440px]
            px-6 xl:px-16 2xl:px-20
            h-[80px] min-[400px]:h-[110px] md:h-[120px] xl:h-[130px]
            flex xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center justify-center xl:justify-between
          "
        >
          {/* Left — Logo (intro animation plays once on initial mount).
              At xl-2xl we use the `md` LogoMark size so the desktop nav
              actually fits in 1280-1535px viewports; at 2xl+ (1536+) we
              switch to the larger `lg` mark. The symmetric side gaps come
              from `--nav-side-gap`, applied identically to both the logo's
              `mr` and the CTA's `ml`, so the empty space around the centred
              nav links is balanced (logo→Approach == FAQ→Let's talk). */}
          <div className="flex items-center min-w-0 xl:justify-self-end xl:mr-[var(--nav-side-gap)]">
            <LogoMark
              variant={isDark ? 'light' : 'dark'}
              size="lg"
              intro
              priority
              className="hidden 2xl:inline-flex 2xl:-translate-y-[2px]"
            />
            <LogoMark
              variant={isDark ? 'light' : 'dark'}
              size="md"
              intro
              priority
              className="hidden xl:inline-flex 2xl:hidden xl:-translate-y-[2px]"
            />
            <LogoMark
              variant={isDark ? 'light' : 'dark'}
              size="sm"
              intro
              priority
              className="inline-flex xl:hidden"
            />
          </div>

          {/* Center — Nav links (desktop only), centered in the auto column */}
          <nav
            className="hidden xl:flex items-center gap-8 2xl:gap-9 whitespace-nowrap xl:justify-self-center"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[1.3rem] font-medium tracking-[0.005em] transition-colors duration-150',
                  isDark
                    ? 'text-white/60 hover:text-white'
                    : 'text-text-secondary hover:text-text-primary',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — CTA on desktop, hamburger on mobile.
              Mirror of the logo at the box level. The logo PNG has visible
              transparent space on its right edge, so a strictly symmetric
              ml value leaves the visual gap on the right looking smaller
              than on the left. Bumping the CTA's left margin compensates
              for the logo's visual padding so RUNMADE→Approach reads
              equal to FAQ→Let's talk. */}
          <div className="absolute right-6 top-0 bottom-0 flex items-center xl:static xl:right-auto xl:top-auto xl:bottom-auto xl:justify-self-start xl:ml-[var(--nav-side-gap)] justify-end">
            {/* Desktop Let's talk — masked text scroll on hover, contrasting bg invert */}
            <a
              href={navCta.href}
              className={cn(
                'nav-cta',
                'hidden xl:inline-flex items-center px-[22px] py-[10px] text-[1.3rem] font-medium rounded-[var(--radius-btn)] select-none cursor-pointer',
                isDark
                  // over dark hero: stay in light family (dark hover would merge with hero)
                  ? 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#CBD5E1] hover:text-[#0F172A]'
                  // scrolled white navbar: brand blue pill (matches hero CTA family, darker on hover)
                  : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:text-white',
              )}
            >
              <span style={{ display: 'inline-block', overflow: 'hidden', height: '1.25em' }}>
                <span
                  className="nav-cta-text-group"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <span style={{ display: 'block', lineHeight: '1.25em' }}>{navCta.label}</span>
                  <span style={{ display: 'block', lineHeight: '1.25em' }} aria-hidden="true">{navCta.label}</span>
                </span>
              </span>
            </a>

            {/* Mobile/tablet hamburger — full nav shown only at xl+ */}
            <button
              className={cn(
                'flex xl:hidden items-center justify-center rounded-md h-11 w-11 -mr-2 transition-colors',
                isDark
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle',
              )}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/40 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              ref={drawerRef}
              className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-bg-surface shadow-xl xl:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="relative flex items-center justify-center border-b border-border px-6 py-4">
                <LogoMark variant="dark" size="md" />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-text-secondary hover:text-text-primary"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[var(--radius-btn)] px-4 py-2.5 text-sm font-medium text-text-secondary hover:bg-bg-subtle hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto border-t border-border p-4">
                <Button href={navCta.href} variant="primary" className="w-full justify-center py-3">
                  {navCta.label}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
