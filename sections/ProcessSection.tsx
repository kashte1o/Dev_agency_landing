'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import type { ProcessStep } from '@/content/types'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

interface ProcessSectionProps {
  heading: string
  subheading: string
  steps: ProcessStep[]
}

export function ProcessSection({ heading, subheading, steps }: ProcessSectionProps) {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="process"
      className="py-20 md:py-[120px]"
      style={{ backgroundColor: 'var(--bg-dark-soft)' }}
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {/* Heading */}
          <div className="mb-12 flex flex-col items-center gap-5 text-center md:mb-14">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT } },
              }}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/40"
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
              className="max-w-3xl text-[1.05rem] leading-[1.65] text-white/60 [text-wrap:balance]"
            >
              {subheading}
            </motion.p>
          </div>

          {/* 2×2 grid */}
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={
                  prefersReduced
                    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
                    : {
                        hidden: { opacity: 0, y: 14 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
                      }
                }
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-200 hover:border-accent/35 hover:bg-[rgba(59,130,246,0.05)] md:p-10 motion-reduce:transition-none"
              >
                {/* Mono label */}
                <p className="mb-5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent/80">
                  {String(step.number).padStart(2, '0')} · {step.label}
                </p>

                {/* Title */}
                <h3 className="mb-4 text-[22px] font-semibold leading-snug text-white [text-wrap:balance] md:text-[26px]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[15.5px] leading-[1.65] text-white/75 md:text-base">
                  {step.description}
                </p>

                {/* Outcome line */}
                <div className="mt-auto flex items-start gap-3 pt-7">
                  <svg
                    aria-hidden
                    viewBox="0 0 20 20"
                    className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-accent"
                    fill="none"
                  >
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                    <path d="M6 10.5l2.6 2.5L14 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/50">
                      Outcome
                    </span>
                    <span className="text-[15.5px] font-medium leading-snug text-white/95">
                      {step.tooltip.replace(/^Outcome:\s*/i, '')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
