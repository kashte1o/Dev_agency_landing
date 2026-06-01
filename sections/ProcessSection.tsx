'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import type { ProcessStep } from '@/content/types'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

// Trace path through the 2×2 grid:
//   TL → TR (top)           ─►
//   TR → mid-R (right ½)    ▼
//   mid-R → mid-L (middle)  ◄─
//   mid-L → BL (left ½)     ▼
//   BL → BR (bottom)        ─►
const TRACE = {
  top:    { delay: 0.0, duration: 0.7 },
  right:  { delay: 0.7, duration: 0.3 },
  middle: { delay: 1.0, duration: 0.7 },
  left:   { delay: 1.7, duration: 0.3 },
  bottom: { delay: 2.0, duration: 0.8 },
}

// Card reveal — pulse arrival times (source order: 01, 02, 03, 04)
const CARD_DELAYS_ANIMATED = [0.05, TRACE.top.delay + TRACE.top.duration, TRACE.left.delay + TRACE.left.duration, TRACE.bottom.delay + TRACE.bottom.duration / 2]
const CARD_DELAYS_REDUCED  = [0, 0.08, 0.16, 0.24]

// Layered halo for the "charged air" feel
const TRACE_GLOW =
  '0 0 6px rgba(96,165,250,0.7), 0 0 14px rgba(59,130,246,0.45), 0 0 26px rgba(59,130,246,0.18)'

interface ProcessSectionProps {
  heading: string
  subheading: string
  steps: ProcessStep[]
}

export function ProcessSection({ heading, subheading, steps }: ProcessSectionProps) {
  const prefersReduced = useReducedMotion()
  const gridRef = useRef<HTMLDivElement>(null)
  const inView = useInView(gridRef, { once: true, margin: '-80px' })
  const cardDelays = prefersReduced ? CARD_DELAYS_REDUCED : CARD_DELAYS_ANIMATED

  return (
    <section
      id="process"
      className="pt-10 md:pt-14 pb-20 md:pb-[120px]"
      style={{ backgroundColor: 'var(--bg-dark-soft)' }}
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mb-12 flex flex-col items-center gap-5 text-center md:mb-14"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT } },
            }}
            className="text-[1.4rem] font-semibold uppercase tracking-[0.15em] text-white/40"
          >
            Our Process
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
            }}
            className="max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
          >
            {heading}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
            }}
            className="max-w-3xl text-[1.25rem] leading-[1.6] text-white/60 [text-wrap:balance] md:text-[1.58rem]"
          >
            {subheading}
          </motion.p>
        </motion.div>

        {/* Grid + charged-air trace */}
        <div ref={gridRef} className="relative">
          {!prefersReduced && (
            <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
              {/* 1. Top edge — left → right */}
              <motion.span
                aria-hidden
                className="absolute -top-px left-0 right-0 h-[1.5px] origin-left rounded-full bg-gradient-to-r from-transparent via-accent/25 to-accent"
                style={{ boxShadow: TRACE_GLOW, filter: 'blur(0.2px)' }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: TRACE.top.delay, duration: TRACE.top.duration, ease: EASE_OUT }}
              />
              {/* 2. Right edge — top → mid (bottom corner of top-right card) */}
              <motion.span
                aria-hidden
                className="absolute -right-px top-0 h-1/2 w-[1.5px] origin-top rounded-full bg-gradient-to-b from-transparent via-accent/25 to-accent"
                style={{ boxShadow: TRACE_GLOW, filter: 'blur(0.2px)' }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: TRACE.right.delay, duration: TRACE.right.duration, ease: EASE_OUT }}
              />
              {/* 3. Middle row gap — right → left */}
              <motion.span
                aria-hidden
                className="absolute left-0 right-0 top-1/2 h-[1.5px] -translate-y-1/2 origin-right rounded-full bg-gradient-to-l from-transparent via-accent/25 to-accent"
                style={{ boxShadow: TRACE_GLOW, filter: 'blur(0.2px)' }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: TRACE.middle.delay, duration: TRACE.middle.duration, ease: EASE_OUT }}
              />
              {/* 4. Left edge — mid → bottom (bottom-left of bottom-left card) */}
              <motion.span
                aria-hidden
                className="absolute -left-px top-1/2 bottom-0 w-[1.5px] origin-top rounded-full bg-gradient-to-b from-transparent via-accent/25 to-accent"
                style={{ boxShadow: TRACE_GLOW, filter: 'blur(0.2px)' }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: TRACE.left.delay, duration: TRACE.left.duration, ease: EASE_OUT }}
              />
              {/* 5. Bottom edge — left → right (through mid-bottom to BR of grid) */}
              <motion.span
                aria-hidden
                className="absolute -bottom-px left-0 right-0 h-[1.5px] origin-left rounded-full bg-gradient-to-r from-transparent via-accent/25 to-accent"
                style={{ boxShadow: TRACE_GLOW, filter: 'blur(0.2px)' }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: TRACE.bottom.delay, duration: TRACE.bottom.duration, ease: EASE_OUT }}
              />
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: cardDelays[i],
                  duration: prefersReduced ? 0.3 : 0.5,
                  ease: EASE_OUT,
                }}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-200 hover:border-accent/35 hover:bg-[rgba(59,130,246,0.05)] md:p-10 motion-reduce:transition-none"
              >
                {/* Mono label */}
                <p className="mb-5 font-mono text-[1.08rem] font-semibold uppercase tracking-[0.14em] text-accent/80">
                  {String(step.number).padStart(2, '0')} · {step.label}
                </p>

                {/* Title — fixed min-height keeps body baseline aligned */}
                <h3 className="mb-4 min-h-[3.25rem] text-[22px] font-semibold leading-snug text-white [text-wrap:balance] md:min-h-[5rem] md:text-[26px]">
                  {step.title}
                </h3>

                {/* Description — flexes to absorb height differences */}
                <p className="flex-1 text-[15.5px] leading-[1.65] text-white/75 md:text-base">
                  {step.description}
                </p>

                {/* Outcome — pinned to bottom across all cards */}
                <div className="mt-10 flex flex-col gap-1.5 border-t border-white/10 pt-6">
                  <span className="font-mono text-[1.02rem] font-semibold uppercase tracking-[0.12em] text-white/50">
                    Outcome
                  </span>
                  <span className="text-[23px] font-medium leading-snug text-white/95">
                    {step.tooltip.replace(/^Outcome:\s*/i, '')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
