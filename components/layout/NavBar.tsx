'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LogoMark } from './LogoMark'
import { Button } from '@/components/ui/Button'
import { navLinks, navCta } from '@/content/navigation'
import { cn } from '@/lib/utils'

// Desktop navbar height constants — keep in sync with HeroSection top-padding
export const NAV_H_MOBILE  = 80   // px
export const NAV_H_DESKTOP = 130  // px (md+)

interface NavBarProps {
  heroDark?: boolean
}

export function NavBar({ heroDark = true }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
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
          Desktop: 5-column grid [auto | 1fr | auto | 1fr | auto] with a single
          `--nav-side-gap` token enforced as the minimum width of both spacer
          columns. The two 1fr spacers guarantee that the visual distance
          logo → nav is identical to nav → CTA, while nav links remain
          centered relative to the navbar. No per-element margin hacks.
          Mobile: flex justify-between (logo + hamburger only). The hidden nav
          and desktop spacers are display:none on mobile, so flex layout is
          unaffected.
        */}
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-10 md:px-16 lg:px-20
            h-[80px] md:h-[130px]
            flex md:grid items-center justify-between
            md:[grid-template-columns:auto_minmax(var(--nav-side-gap),1fr)_auto_minmax(var(--nav-side-gap),1fr)_auto]
          "
          style={{ ['--nav-side-gap' as string]: '48px' }}
        >
          {/* Left — Logo (intro animation plays once on initial mount).
              translateY(-2px) on desktop nudges the wordmark up so its optical
              baseline aligns with the nav link text. */}
          <div className="flex items-center min-w-0 md:[transform:translateY(-2px)]">
            <LogoMark
              variant={isDark ? 'light' : 'dark'}
              size="lg"
              intro
              className="hidden md:inline-flex"
            />
            <LogoMark
              variant={isDark ? 'light' : 'dark'}
              size="sm"
              intro
              className="inline-flex md:hidden"
            />
          </div>

          {/* Spacer — left of nav (desktop only) */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Center — Nav links (desktop only), in their own grid column */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-9 whitespace-nowrap"
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

          {/* Spacer — right of nav (desktop only) */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Right — CTA on desktop, hamburger on mobile. */}
          <div className="flex items-center justify-end">
            {/* Desktop Let's talk — masked text scroll on hover, contrasting bg invert */}
            <a
              href={navCta.href}
              className={cn(
                'nav-cta',
                'hidden md:inline-flex items-center px-[22px] py-[10px] text-[1.3rem] font-medium rounded-[var(--radius-btn)] select-none cursor-pointer',
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

            {/* Mobile hamburger */}
            <button
              className={cn(
                'flex md:hidden items-center justify-center rounded-md p-2 transition-colors',
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
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-bg-surface shadow-xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <LogoMark variant="dark" size="sm" />
                <button
                  className="rounded-md p-2 text-text-secondary hover:text-text-primary"
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
