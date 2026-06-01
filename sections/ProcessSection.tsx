'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import type { ProcessStep } from '@/content/types'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

// Perimeter trace timing (seconds) — pulse travels TL→TR→BR→BL→TL
const TRACE = {
  top:    { delay: 0.0, duration: 0.9 },
  right:  { delay: 0.9, duration: 0.6 },
  bottom: { delay: 1.5, duration: 0.9 },
  left:   { delay: 2.4, duration: 0.6 },
}

// Card reveal delays in source order (01, 02, 03, 04).
// Pulse reaches: 01 at start, 02 at top end, 04 at right end, 03 at bottom end.
const CARD_DELAYS_ANIMATED = [0.05, 0.9, 2.4, 1.5]
const CARD_DELAYS_REDUCED  = [0,    0.08, 0.16, 0.24]

const TRACE_GLOW = '0 0 8px rgba(59,130,246,0.55)'

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

        {/* Grid + perimeter trace */}
        <div ref={gridRef} className="relative">
          {!prefersReduced && (
            <>
              {/* Top edge — left → right */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -top-px left-0 right-0 z-10 h-[2px] origin-left rounded-full bg-gradient-to-r from-transparent via-accent/30 to-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: TRACE.top.delay, duration: TRACE.top.duration, ease: EASE_OUT }}
              />
              {/* Right edge — top → bottom */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -right-px bottom-0 top-0 z-10 w-[2px] origin-top rounded-full bg-gradient-to-b from-transparent via-accent/30 to-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: TRACE.right.delay, duration: TRACE.right.duration, ease: EASE_OUT }}
              />
              {/* Bottom edge — right → left */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -bottom-px left-0 right-0 z-10 h-[2px] origin-right rounded-full bg-gradient-to-l from-transparent via-accent/30 to-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: TRACE.bottom.delay, duration: TRACE.bottom.duration, ease: EASE_OUT }}
              />
              {/* Left edge — bottom → top */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -left-px bottom-0 top-0 z-10 w-[2px] origin-bottom rounded-full bg-gradient-to-t from-transparent via-accent/30 to-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: TRACE.left.delay, duration: TRACE.left.duration, ease: EASE_OUT }}
              />
            </>
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
