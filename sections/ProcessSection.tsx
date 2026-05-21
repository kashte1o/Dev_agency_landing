'use client'
import { useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import type { ProcessStep } from '@/content/types'

// ─── Timing ─────────────────────────────────────────────────────
// Line draws for LINE_DUR seconds, starting after LINE_DELAY.
// Each node activates as the line reaches its position (i+1)/4.

const LINE_DUR   = 1.2   // seconds
const LINE_DELAY = 0.35  // after section heading fades in

function nodeDelay(i: number): number {
  return LINE_DELAY + LINE_DUR * ((i + 1) / 4)
}

// ─── Variants ────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const

const eyebrowV = {
  hidden:  { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
}
const headingV = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: 0.06 } },
}
const subheadV = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE, delay: 0.13 } },
}

// Line: scaleX 0→1 from the left
const lineV: Variants = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: LINE_DUR, ease: [0.4, 0, 0.2, 1] as [number,number,number,number], delay: LINE_DELAY },
  },
}

// Node circle activates when line arrives
const nodeV = {
  hidden:  { scale: 0.75, opacity: 0.2 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: nodeDelay(i), duration: 0.32, ease: EASE },
  }),
}

// Card content reveals after node
const cardV = {
  hidden:  { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: nodeDelay(i) + 0.09, duration: 0.42, ease: EASE },
  }),
}

// Background step number
const numV = {
  hidden:  { opacity: 0 },
  visible: (i: number) => ({
    opacity: 0.065,
    transition: { delay: nodeDelay(i) + 0.07, duration: 0.5 },
  }),
}

// Ship node ring expands and fades once — fires after line completes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shipRingV: Variants = {
  hidden:  { scale: 1, opacity: 0 },
  visible: {
    scale:   [1, 1.7, 2.2] as any,
    opacity: [0, 0.5, 0]   as any,
    transition: {
      delay:    LINE_DELAY + LINE_DUR + 0.12,
      duration: 0.65,
      ease:     'easeOut',
      times:    [0, 0.45, 1],
    } as any,
  },
}

// Mobile cards fade up
const mobileCardV = {
  hidden:  { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.42, ease: EASE },
  }),
}

const VIEWPORT_ONCE = { once: true, margin: '-60px' }

// ─── Types ───────────────────────────────────────────────────────
interface ProcessSectionProps {
  heading: string
  subheading: string
  steps: ProcessStep[]
}

// ─── Static fallback (reduced motion) ───────────────────────────
function StaticProcess({ heading, subheading, steps }: ProcessSectionProps) {
  return (
    <Section id="process" background="base">
      <Container>
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary/45">
            Our Process
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-[2.75rem]">
            {heading}
          </h2>
          <p className="max-w-xl text-[1.05rem] leading-[1.65] text-text-secondary">
            {subheading}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col rounded-2xl border border-border bg-bg-surface p-6"
            >
              <span
                aria-hidden
                className="absolute right-4 top-4 select-none font-mono text-[5rem] font-bold leading-none text-text-primary"
                style={{ opacity: 0.065 }}
              >
                {String(step.number).padStart(2, '0')}
              </span>
              <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-bg-base text-lg">
                {step.icon}
              </div>
              <p className="relative z-10 mb-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-text-secondary/40">
                {String(step.number).padStart(2, '0')}
              </p>
              <h3 className="relative z-10 mb-2 text-[1.0rem] font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="relative z-10 text-[0.9rem] leading-[1.6] text-text-secondary">
                {step.description}
              </p>
              <p className="relative z-10 mt-4 text-[0.76rem] font-medium text-accent">
                {step.tooltip}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-0 md:hidden">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-shrink-0 flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-surface text-xl">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-1 min-h-[28px] w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-8 pt-1">
                <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-text-secondary/40">
                  {String(step.number).padStart(2, '0')}
                </span>
                <h3 className="mt-1 text-[1.0rem] font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-[1.6] text-text-secondary">{step.description}</p>
                <p className="mt-2 text-[0.78rem] italic text-text-secondary/50">{step.tooltip}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// ─── Main export ─────────────────────────────────────────────────
export function ProcessSection({ heading, subheading, steps }: ProcessSectionProps) {
  const prefersReduced = useReducedMotion()
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  if (prefersReduced) {
    return <StaticProcess heading={heading} subheading={subheading} steps={steps} />
  }

  return (
    <Section id="process" background="base">
      <Container>
        {/*
          Outer motion.div: whileInView="visible" triggers all children.
          All child motion elements inherit "hidden" → "visible" state.
        */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {/* ── Intro ────────────────────────────────────────── */}
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <motion.p
              variants={eyebrowV}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary/45"
            >
              Our Process
            </motion.p>
            <motion.h2
              variants={headingV}
              className="max-w-xl text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-[2.75rem]"
            >
              {heading}
            </motion.h2>
            <motion.p
              variants={subheadV}
              className="max-w-xl text-[1.05rem] leading-[1.65] text-text-secondary"
            >
              {subheading}
            </motion.p>
          </div>

          {/* ── Desktop ──────────────────────────────────────── */}
          <div className="hidden md:block">

            {/* Nodes row + animated line */}
            <div className="relative flex items-center justify-between">

              {/* Static base line — always visible as grey track */}
              <div
                aria-hidden
                className="absolute left-7 right-7 top-1/2 h-px -translate-y-1/2 bg-border/50"
              />

              {/* Animated gradient line — scaleX 0→1 from left */}
              <div
                aria-hidden
                className="absolute left-7 right-7 top-1/2 h-[1.5px] -translate-y-1/2"
              >
                <motion.div
                  variants={lineV}
                  className="h-full w-full"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(107,114,128,0.3) 0%, #3B82F6 100%)',
                    originX: 0,
                  }}
                />
              </div>

              {/* Nodes */}
              {steps.map((step, i) => {
                const isLast = i === steps.length - 1
                return (
                  <motion.div
                    key={step.number}
                    custom={i}
                    variants={nodeV}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg-surface text-2xl shadow-sm"
                  >
                    {/* Ship pulse ring — expands and fades once */}
                    {isLast && (
                      <motion.div
                        variants={shipRingV}
                        aria-hidden
                        className="absolute inset-0 rounded-full border-2 border-accent"
                      />
                    )}
                    {step.icon}
                  </motion.div>
                )
              })}
            </div>

            {/* Cards row */}
            <div className="mt-8 grid grid-cols-4 gap-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={cardV}
                  whileHover={{ y: -2, transition: { duration: 0.15, ease: 'easeOut' } }}
                  tabIndex={0}
                  aria-label={`Step ${step.number}: ${step.title}`}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onFocus={() => setHoveredIdx(i)}
                  onBlur={() => setHoveredIdx(null)}
                  className="group relative flex flex-col rounded-2xl border border-border bg-bg-surface p-6 pt-8 transition-colors transition-shadow duration-200 hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {/* Large background step number */}
                  <motion.span
                    custom={i}
                    variants={numV}
                    aria-hidden
                    className="pointer-events-none absolute right-3 top-3 select-none font-mono text-[5rem] font-bold leading-none text-text-primary"
                  >
                    {String(step.number).padStart(2, '0')}
                  </motion.span>

                  {/* Icon holder */}
                  <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-bg-base text-lg">
                    {step.icon}
                  </div>

                  {/* Small mono step number */}
                  <p className="relative z-10 mb-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-text-secondary/40">
                    {String(step.number).padStart(2, '0')}
                  </p>

                  {/* Title */}
                  <h3 className="relative z-10 mb-2 text-[1.0rem] font-semibold leading-snug text-text-primary">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-[0.9rem] leading-[1.6] text-text-secondary">
                    {step.description}
                  </p>

                  {/* Microcopy tooltip — fades in on hover/focus via CSS */}
                  <p className="relative z-10 mt-4 text-[0.76rem] font-medium text-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                    {step.tooltip}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Mobile ───────────────────────────────────────── */}
          <div className="flex flex-col gap-0 md:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={mobileCardV}
                className="flex gap-5"
              >
                {/* Left: node + connector line */}
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-surface text-xl shadow-sm">
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-1 min-h-[28px] w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-8 pt-1">
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-text-secondary/40">
                    {String(step.number).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 text-[1.0rem] font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] leading-[1.6] text-text-secondary">
                    {step.description}
                  </p>
                  {/* Tooltip shown as static microcopy on mobile */}
                  <p className="mt-2 text-[0.78rem] italic text-text-secondary/50">
                    {step.tooltip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </Container>
    </Section>
  )
}
