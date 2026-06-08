'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import type { ProcessStep } from '@/content/types'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const TRACE_GLOW =
  '0 0 6px rgba(96,165,250,0.7), 0 0 14px rgba(59,130,246,0.45), 0 0 26px rgba(59,130,246,0.18)'
const DOT_GLOW = '0 0 10px 3px rgba(96,165,250,0.7), 0 0 22px 6px rgba(59,130,246,0.35)'

// Trace timing (seconds) — path:
// 1. TL → TR  (top edge)
// 2. TR → mid-R  (right edge, top half)
// 3. mid-R → mid-L  (middle row gap, right → left)
// 4. mid-L → BL  (left edge, bottom half)
// 5. BL → BR  (bottom edge)
const SEG = {
  top:    { delay: 0.3, dur: 0.7 },
  right:  { delay: 1.0, dur: 0.3 },
  middle: { delay: 1.3, dur: 0.7 },
  left:   { delay: 2.0, dur: 0.3 },
  bottom: { delay: 2.3, dur: 0.7 },
}
const DRAW_END = SEG.bottom.delay + SEG.bottom.dur  // 3.0
const HOLD = 1.0
const FADE = 0.7
const FADE_START = DRAW_END + HOLD                  // 4.0
const TRACE_TOTAL = FADE_START + FADE               // 4.7
const DOT_DUR = DRAW_END - SEG.top.delay            // 2.7
const T = (t: number) => t / DOT_DUR

// Card reveal timing — moment the pulse touches each card's defining corner
const CARD_DELAYS_ANIMATED = [
  0,                                          // 01 — TL of grid (pulse starts)
  SEG.top.delay + SEG.top.dur,                // 02 — TR (end of seg1) = 1.0
  SEG.left.delay + SEG.left.dur,              // 03 — BL (end of seg4) = 2.3
  SEG.bottom.delay + SEG.bottom.dur * 0.5,    // 04 — mid-bottom (mid of seg5) = 2.65
]
const CARD_DELAYS_REDUCED = [0, 0.08, 0.16, 0.24]

// Spark flashes at corner junctions (path waypoints)
const SPARKS = [
  { left: '100%', top: '0%',   at: SEG.top.delay + SEG.top.dur },
  { left: '100%', top: '50%',  at: SEG.right.delay + SEG.right.dur },
  { left: '0%',   top: '50%',  at: SEG.middle.delay + SEG.middle.dur },
  { left: '0%',   top: '100%', at: SEG.left.delay + SEG.left.dur },
  { left: '100%', top: '100%', at: SEG.bottom.delay + SEG.bottom.dur },
]

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
      className="pt-10 md:pt-14 pb-14 md:pb-[120px]"
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
            className="text-[1rem] font-semibold uppercase tracking-[0.15em] text-white/40 md:text-[1.4rem]"
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
            className="max-w-3xl text-[1rem] leading-[1.55] text-white/60 [text-wrap:balance] md:text-[1.58rem] md:leading-[1.6]"
          >
            {subheading}
          </motion.p>
        </motion.div>

        {/* Grid with corner-to-corner energy trace */}
        <div ref={gridRef} className="relative">
          {/* Trace wrapper — collective fade-out after the path finishes */}
          {!prefersReduced && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 hidden md:block"
              initial={{ opacity: 1 }}
              animate={inView ? { opacity: [1, 1, 0] } : {}}
              transition={{
                duration: TRACE_TOTAL,
                times: [0, FADE_START / TRACE_TOTAL, 1],
                ease: 'easeOut',
              }}
            >
              {/* 1. Top edge — TL → TR */}
              <motion.span
                className="absolute -top-px left-0 h-[1.5px] rounded-full bg-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ width: '0%' }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ delay: SEG.top.delay, duration: SEG.top.dur, ease: EASE_OUT }}
              />
              {/* 2. Right edge top half — TR → mid-R */}
              <motion.span
                className="absolute -right-px top-0 w-[1.5px] rounded-full bg-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ height: '0%' }}
                animate={inView ? { height: '50%' } : {}}
                transition={{ delay: SEG.right.delay, duration: SEG.right.dur, ease: EASE_OUT }}
              />
              {/* 3. Middle row gap — mid-R → mid-L (anchored right, grows leftward) */}
              <motion.span
                className="absolute right-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ width: '0%' }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ delay: SEG.middle.delay, duration: SEG.middle.dur, ease: EASE_OUT }}
              />
              {/* 4. Left edge bottom half — mid-L → BL */}
              <motion.span
                className="absolute -left-px top-1/2 w-[1.5px] rounded-full bg-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ height: '0%' }}
                animate={inView ? { height: '50%' } : {}}
                transition={{ delay: SEG.left.delay, duration: SEG.left.dur, ease: EASE_OUT }}
              />
              {/* 5. Bottom edge — BL → BR */}
              <motion.span
                className="absolute -bottom-px left-0 h-[1.5px] rounded-full bg-accent"
                style={{ boxShadow: TRACE_GLOW }}
                initial={{ width: '0%' }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ delay: SEG.bottom.delay, duration: SEG.bottom.dur, ease: EASE_OUT }}
              />

              {/* Head dot — travels through all 5 segments */}
              <motion.span
                className="absolute z-20 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                style={{ boxShadow: DOT_GLOW }}
                initial={{ left: '0%', top: '0%', opacity: 0 }}
                animate={
                  inView
                    ? {
                        left: ['0%', '100%', '100%', '0%',  '0%',   '100%'],
                        top:  ['0%', '0%',   '50%',  '50%', '100%', '100%'],
                        opacity: 1,
                      }
                    : {}
                }
                transition={{
                  left: {
                    delay: SEG.top.delay,
                    duration: DOT_DUR,
                    times: [
                      0,
                      T(SEG.top.dur),
                      T(SEG.top.dur + SEG.right.dur),
                      T(SEG.top.dur + SEG.right.dur + SEG.middle.dur),
                      T(SEG.top.dur + SEG.right.dur + SEG.middle.dur + SEG.left.dur),
                      1,
                    ],
                    ease: 'linear',
                  },
                  top: {
                    delay: SEG.top.delay,
                    duration: DOT_DUR,
                    times: [
                      0,
                      T(SEG.top.dur),
                      T(SEG.top.dur + SEG.right.dur),
                      T(SEG.top.dur + SEG.right.dur + SEG.middle.dur),
                      T(SEG.top.dur + SEG.right.dur + SEG.middle.dur + SEG.left.dur),
                      1,
                    ],
                    ease: 'linear',
                  },
                  opacity: { delay: SEG.top.delay, duration: 0.18, ease: 'easeOut' },
                }}
              />

              {/* Trailing ionised particle — same path, slightly delayed and smaller */}
              <motion.span
                className="absolute z-20 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                style={{ boxShadow: '0 0 6px 1.5px rgba(96,165,250,0.7)' }}
                initial={{ left: '0%', top: '0%', opacity: 0 }}
                animate={
                  inView
                    ? {
                        left: ['0%', '100%', '100%', '0%',  '0%',   '100%'],
                        top:  ['0%', '0%',   '50%',  '50%', '100%', '100%'],
                        opacity: [0, 0.85, 0.85, 0],
                      }
                    : {}
                }
                transition={{
                  left:  { delay: SEG.top.delay + 0.18, duration: DOT_DUR, times: [0, T(SEG.top.dur), T(SEG.top.dur + SEG.right.dur), T(SEG.top.dur + SEG.right.dur + SEG.middle.dur), T(SEG.top.dur + SEG.right.dur + SEG.middle.dur + SEG.left.dur), 1], ease: 'linear' },
                  top:   { delay: SEG.top.delay + 0.18, duration: DOT_DUR, times: [0, T(SEG.top.dur), T(SEG.top.dur + SEG.right.dur), T(SEG.top.dur + SEG.right.dur + SEG.middle.dur), T(SEG.top.dur + SEG.right.dur + SEG.middle.dur + SEG.left.dur), 1], ease: 'linear' },
                  opacity: { delay: SEG.top.delay + 0.18, duration: DOT_DUR, times: [0, 0.1, 0.9, 1], ease: 'easeOut' },
                }}
              />

              {/* Spark flashes at every corner junction */}
              {SPARKS.map((s, i) => (
                <motion.span
                  key={i}
                  className="absolute z-30 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                  style={{
                    left: s.left,
                    top: s.top,
                    boxShadow:
                      '0 0 6px 2px rgba(255,255,255,0.9), 0 0 14px 4px rgba(96,165,250,0.6)',
                  }}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={inView ? { opacity: [0, 1, 0], scale: [0.4, 1.4, 0.4] } : {}}
                  transition={{
                    delay: s.at,
                    duration: 0.35,
                    times: [0, 0.45, 1],
                    ease: 'easeOut',
                  }}
                />
              ))}
            </motion.div>
          )}

          <div className="-mx-6 flex items-stretch snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: cardDelays[i],
                  duration: prefersReduced ? 0.3 : 0.55,
                  ease: EASE_OUT,
                }}
                className="group flex h-full w-[82vw] min-w-[82vw] flex-shrink-0 snap-center flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-200 hover:border-accent/35 hover:bg-[rgba(59,130,246,0.05)] md:w-auto md:min-w-0 md:flex-shrink md:p-10 motion-reduce:transition-none"
              >
                {/* Mono label */}
                <p className="mb-4 font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-accent/80 md:mb-5 md:text-[1.08rem]">
                  {String(i + 1).padStart(2, '0')} · {step.label}
                </p>

                {/* Title */}
                <h3 className="mb-3 min-h-[2.5rem] text-[16px] font-semibold leading-snug text-white [text-wrap:balance] md:mb-4 md:min-h-[5rem] md:text-[26px]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-[14px] leading-[1.6] text-white/75 md:text-base md:leading-[1.65]">
                  {step.description}
                </p>

                {/* Outcome */}
                <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-4 md:mt-10 md:gap-1.5 md:pt-6">
                  <span className="font-mono text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/50 md:text-[1.02rem]">
                    Outcome
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-white/95 md:text-[23px]">
                    {step.tooltip.replace(/^Outcome:\s*/i, '')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Swipe affordance — mobile only (cards scroll horizontally) */}
          <p className="mt-5 flex items-center justify-center gap-1.5 text-[12px] font-medium text-white/40 md:hidden">
            <span aria-hidden>←</span> Swipe <span aria-hidden>→</span>
          </p>
        </div>
      </Container>
    </section>
  )
}
