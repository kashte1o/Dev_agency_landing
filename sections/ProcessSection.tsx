'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { staggerContainer, fadeUp, lineDraw, VIEWPORT } from '@/lib/motion'
import type { ProcessStep } from '@/content/types'

interface ProcessSectionProps {
  heading: string
  steps: ProcessStep[]
}

export function ProcessSection({ heading, steps }: ProcessSectionProps) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)

  return (
    <Section id="process" background="subtle">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-12"
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
          >
            {heading}
          </motion.h2>

          {/* Desktop: horizontal connector + nodes */}
          <div className="hidden md:block">
            <div className="relative flex items-start justify-between">
              {/* SVG connector line */}
              <svg
                className="absolute top-8 left-0 right-0 h-[2px] w-full"
                aria-hidden
                overflow="visible"
              >
                <motion.line
                  x1="5%"
                  y1="1"
                  x2="95%"
                  y2="1"
                  stroke="var(--border-color)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  variants={lineDraw}
                  style={{ pathLength: 0 }}
                />
              </svg>

              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative z-10 flex flex-1 flex-col items-center gap-4 text-center"
                  onMouseEnter={() => setActiveTooltip(i)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  {/* Node */}
                  <motion.div
                    variants={fadeUp}
                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-bg-surface text-2xl shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md cursor-default"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Tooltip */}
                  {activeTooltip === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-[72px] z-20 whitespace-nowrap rounded-[var(--radius-card)] border border-border bg-bg-surface px-3 py-1.5 text-xs text-text-secondary shadow-lg"
                    >
                      {step.tooltip}
                    </motion.div>
                  )}

                  <motion.div variants={fadeUp} className="flex flex-col gap-1 px-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary/50">
                      0{step.number}
                    </span>
                    <h3 className="font-bold text-text-primary">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-8 md:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-surface text-xl shadow-sm">
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="h-full w-[2px] bg-border" />
                  )}
                </div>
                <div className="pb-4 pt-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary/50">
                    0{step.number}
                  </span>
                  <h3 className="mt-1 font-bold text-text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{step.description}</p>
                  <p className="mt-2 text-xs text-text-secondary/60 italic">{step.tooltip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
