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
            : 'rgba(11,16,32,0)',
          backdropFilter: scrolled ? 'blur(18px)' : 'blur(0px)',
          // subtle separator: faint white line over hero, faint dark line when scrolled
          borderBottomColor: scrolled
            ? 'rgba(0,0,0,0.07)'
            : 'rgba(255,255,255,0.05)',
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {/*
          Mobile:  flex justify-between → [logo] [hamburger]
          Desktop: grid 1fr auto 1fr   → [logo] [nav center] [cta right]
        */}
        <div
          className="
            mx-auto w-full max-w-[1440px]
            px-10 md:px-16 lg:px-20
            h-[80px] md:h-[130px]
            flex items-center justify-between
            md:grid md:grid-cols-[1fr_auto_1fr] md:items-center
          "
        >
          {/* Left — Logo */}
          <div className="flex items-center">
            <LogoMark
              variant={isDark ? 'light' : 'dark'}
              size="xl"
              className="hidden md:inline-flex"
            />
            <LogoMark
              variant={isDark ? 'light' : 'dark'}
              size="sm"
              className="inline-flex md:hidden"
            />
          </div>

          {/* Center — Nav links */}
          <nav
            className="hidden md:flex items-center gap-9"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[1rem] font-medium tracking-[0.005em] transition-colors duration-150',
                  isDark
                    ? 'text-white/60 hover:text-white'
                    : 'text-text-secondary hover:text-text-primary',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — CTA on desktop, hamburger on mobile */}
          <div className="flex items-center justify-end">
            <Button
              href={navCta.href}
              variant="ghost"
              className={cn(
                'hidden md:inline-flex px-5 py-[9px] text-[0.875rem] font-medium rounded-[var(--radius-btn)] transition-colors duration-200',
                isDark
                  // over dark hero: frosted pill
                  ? 'bg-white/[0.09] text-white border border-white/[0.14] hover:bg-white/[0.16] hover:text-white hover:border-white/[0.22]'
                  // scrolled light navbar: dark pill
                  : 'bg-[#111827] text-white border-transparent hover:bg-[#1F2937] hover:text-white',
              )}
            >
              {navCta.label}
            </Button>

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
