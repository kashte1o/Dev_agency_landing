'use client'
import type { Variants } from 'framer-motion'

// ─── Viewport defaults ────────────────────────────────────────
export const VIEWPORT = { once: true, margin: '-80px' }

// ─── A: Fade up (sections, cards) ────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── A2: Stagger container ────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

// ─── A3: Fade in (no Y movement) ─────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// ─── B2: Blur → clarity (Pain section) ───────────────────────
export const blurClarity: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 16 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── C: Clip-path reveal (Pillars section) ────────────────────
export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── D2: Process node activate ────────────────────────────────
export const nodeActivate: Variants = {
  inactive: { scale: 0.9, opacity: 0.4 },
  active: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// ─── E2: Cursor follow (Button hover glow) ───────────────────
// Used via inline style + useMotionValue — not Variants

// ─── F2: Nav transparent → solid ─────────────────────────────
export const navSolid = {
  transparent: { backgroundColor: 'rgba(247,248,250,0)' },
  solid:       { backgroundColor: 'rgba(247,248,250,0.95)' },
}

// ─── G: Chaos words scatter / collect ────────────────────────
// Keyed per-word via dynamic variants — see ChaosTransition component

// ─── H: Process line draw ─────────────────────────────────────
export const lineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut' },
  },
}
