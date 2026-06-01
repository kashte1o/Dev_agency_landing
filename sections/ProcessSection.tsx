'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import type { ProcessStep } from '@/content/types'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const TRACE_GLOW =
  '0 0 6px rgba(96,165,250,0.7), 0 0 14px rgba(59,130,246,0.45), 0 0 26px rgba(59,130,246,0.18)'
const DOT_GLOW = '0 0 10px 3px rgba(96,165,250,0.7), 0 0 22px 6px rgba(59,130,246,0.35)'

interface CardRowProps {
  pair: ProcessStep[]
  startIndex: number
  prefersReduced: boolean | null
}

function CardRow({ pair, startIndex, prefersReduced }: CardRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const inView = useInView(rowRef, { once: true, margin: '-80px' })

  // Row timing
  const CARD_DUR = 0.6
  const FIRST_DELAY = 0
  const TRACE_DELAY = 0.4
  const TRACE_DUR = 0.9        // line drawing time
  const HOLD = 1.0             // line stays fully visible after draw
  const FADE = 0.7             // smooth fade-out duration
  const LINE_TOTAL = TRACE_DUR + HOLD + FADE
  const SECOND_DELAY = TRACE_DELAY + TRACE_DUR * 0.55

  // Ionised-air particles travel with slight vertical drift + opacity flicker
  const PARTICLES = [
    { y: -3, size: 4, delayOffset: 0.00, dur: 1.0 },
    { y:  2, size: 3, delayOffset: 0.12, dur: 1.1 },
    { y: -1, size: 3, delayOffset: 0.22, dur: 1.0 },
    { y:  3, size: 2, delayOffset: 0.34, dur: 1.2 },
    { y: -2, size: 4, delayOffset: 0.46, dur: 1.0 },
  ]

  return (
    <div ref={rowRef} className="relative grid gap-5 md:grid-cols-2 md:gap-6">
      {/* Energy trace — uniform line drawn via width, holds, then fades */}
      {!prefersReduced && (
        <>
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-0 top-1/2 z-10 hidden h-[1.5px] -translate-y-1/2 rounded-full bg-accent md:block"
            style={{ boxShadow: TRACE_GLOW }}
            initial={{ width: '0%', opacity: 0 }}
            animate={inView ? { width: '100%', opacity: [0, 1, 1, 0] } : {}}
            transition={{
              width:   { delay: TRACE_DELAY, duration: TRACE_DUR, ease: EASE_OUT },
              opacity: {
                delay: TRACE_DELAY,
                duration: LINE_TOTAL,
                times: [0, 0.12 / LINE_TOTAL, (TRACE_DUR + HOLD) / LINE_TOTAL, 1],
                ease: 'linear',
              },
            }}
          />

          {/* Leading head dot — bright pulse at the line tip */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute top-1/2 z-20 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white md:block"
            style={{ boxShadow: DOT_GLOW }}
            initial={{ left: '0%', opacity: 0 }}
            animate={inView ? { left: '100%', opacity: [0, 1, 1, 0] } : {}}
            transition={{
              delay: TRACE_DELAY,
              duration: TRACE_DUR + 0.15,
              times: [0, 0.15, 0.85, 1],
              ease: EASE_OUT,
            }}
          />

          {/* Ionised-air particles — drift across with vertical jitter and flicker */}
          {PARTICLES.map((p, idx) => (
            <motion.span
              key={idx}
              aria-hidden
              className="pointer-events-none absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
              style={{
                top: `calc(50% + ${p.y}px)`,
                height: p.size,
                width: p.size,
                boxShadow: '0 0 6px 1.5px rgba(96,165,250,0.7)',
              }}
              initial={{ left: '0%', opacity: 0 }}
              animate={
                inView
                  ? {
                      left: '100%',
                      opacity: [0, 0.9, 0.6, 0.9, 0],
                    }
                  : {}
              }
              transition={{
                delay: TRACE_DELAY + p.delayOffset,
                duration: p.dur,
                times: [0, 0.18, 0.5, 0.8, 1],
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Electric discharge sparks — short flashes along the path */}
          {[0.2, 0.5, 0.78].map((pos, idx) => (
            <motion.span
              key={`spark-${idx}`}
              aria-hidden
              className="pointer-events-none absolute top-1/2 z-30 hidden h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white md:block"
              style={{
                left: `${pos * 100}%`,
                boxShadow:
                  '0 0 6px 2px rgba(255,255,255,0.9), 0 0 14px 4px rgba(96,165,250,0.6)',
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={
                inView
                  ? { opacity: [0, 1, 0], scale: [0.4, 1.4, 0.4] }
                  : {}
              }
              transition={{
                delay: TRACE_DELAY + 0.05 + pos * TRACE_DUR,
                duration: 0.35,
                times: [0, 0.45, 1],
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}

      {pair.map((step, i) => {
        const delay = prefersReduced
          ? i * 0.12
          : i === 0
            ? FIRST_DELAY
            : SECOND_DELAY
        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: prefersReduced ? 0 : 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay,
              duration: prefersReduced ? 0.3 : CARD_DUR,
              ease: EASE_OUT,
            }}
            className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-200 hover:border-accent/35 hover:bg-[rgba(59,130,246,0.05)] md:p-10 motion-reduce:transition-none"
          >
            {/* Mono label */}
            <p className="mb-5 font-mono text-[1.08rem] font-semibold uppercase tracking-[0.14em] text-accent/80">
              {String(startIndex + i + 1).padStart(2, '0')} · {step.label}
            </p>

            {/* Title */}
            <h3 className="mb-4 min-h-[3.25rem] text-[22px] font-semibold leading-snug text-white [text-wrap:balance] md:min-h-[5rem] md:text-[26px]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="flex-1 text-[15.5px] leading-[1.65] text-white/75 md:text-base">
              {step.description}
            </p>

            {/* Outcome */}
            <div className="mt-10 flex flex-col gap-1.5 border-t border-white/10 pt-6">
              <span className="font-mono text-[1.02rem] font-semibold uppercase tracking-[0.12em] text-white/50">
                Outcome
              </span>
              <span className="text-[23px] font-medium leading-snug text-white/95">
                {step.tooltip.replace(/^Outcome:\s*/i, '')}
              </span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

interface ProcessSectionProps {
  heading: string
  subheading: string
  steps: ProcessStep[]
}

export function ProcessSection({ heading, subheading, steps }: ProcessSectionProps) {
  const prefersReduced = useReducedMotion()
  const rows = [steps.slice(0, 2), steps.slice(2, 4)]

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

        {/* Two independent rows — each triggers on its own viewport entry */}
        <div className="flex flex-col gap-5 md:gap-6">
          {rows.map((pair, idx) => (
            <CardRow
              key={idx}
              pair={pair}
              startIndex={idx * 2}
              prefersReduced={prefersReduced}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
