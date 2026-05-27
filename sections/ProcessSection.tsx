'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ScanSearch, Map, Code2, Plug } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import type { ProcessStep } from '@/content/types'

// ─── Wire timing ─────────────────────────────────────────────────
const LINE_DELAY = 0.5   // seconds after heading settles
const LINE_DUR   = 1.8   // seconds for wire to fill L→R

function nodeDelay(i: number) {
  return LINE_DELAY + LINE_DUR * ((i + 1) / 4)
}

// ─── Icon mapping (step index → Lucide icon) ─────────────────────
// Intentionally decoupled from content/process.ts emoji strings.
// Understand → ScanSearch (examine the workflow)
// Define     → Map        (map the path / scope)
// Build      → Code2      (write the software)
// Ship       → Plug       (connect — wire metaphor payoff)
const STEP_ICONS = [ScanSearch, Map, Code2, Plug] as const

const EASE_OUT = [0.22, 1, 0.36, 1] as const

// ─── Reduced-motion fallback ─────────────────────────────────────
function StaticProcess({
  heading,
  subheading,
  steps,
}: {
  heading: string
  subheading: string
  steps: ProcessStep[]
}) {
  return (
    <Section id="process" style={{ backgroundColor: 'var(--bg-dark-soft)' }}>
      <Container>
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/30">
            Our Process
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            {heading}
          </h2>
          <p className="max-w-xl text-[1.05rem] leading-[1.65] text-white/50">{subheading}</p>
        </div>
        <div className="hidden md:grid grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i]!
            return (
              <div
                key={step.number}
                className="flex flex-col gap-4 rounded-2xl p-6 pt-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)' }}>
                  <Icon size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/30">
                  {String(step.number).padStart(2, '0')}
                </p>
                <h3 className="text-[1rem] font-semibold text-white">{step.title}</h3>
                <p className="text-[0.9rem] leading-[1.6] text-white/50">{step.description}</p>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col gap-0 md:hidden">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i]!
            return (
              <div key={step.number} className="flex gap-5">
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)' }}>
                    <Icon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-1 min-h-[28px] w-px flex-1" style={{ background: 'rgba(59,130,246,0.2)' }} />
                  )}
                </div>
                <div className="pb-8 pt-1">
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-white/30">
                    {String(step.number).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 text-[1rem] font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-[1.6] text-white/50">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

// ─── Wire node ───────────────────────────────────────────────────
interface WireNodeProps {
  step: ProcessStep
  index: number
  isLast: boolean
  inView: boolean
}

function WireNode({ step, index, isLast, inView }: WireNodeProps) {
  const Icon = STEP_ICONS[index]!
  const delay = nodeDelay(index)

  return (
    <div className="relative z-10 flex flex-col items-center">
      {/* ── Node circle ─────────────────────────────────────── */}
      <div className="relative flex items-center justify-center" style={{ width: 56, height: 56 }}>

        {/* Spark burst ring — fires once on activation */}
        <motion.div
          aria-hidden
          className="absolute rounded-full border border-accent/70"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: [0.6, 2.4, 3.2], opacity: [0, 0.7, 0] } : {}}
          transition={{ delay: delay + 0.02, duration: 0.45, ease: 'easeOut' }}
          style={{ width: 56, height: 56 }}
        />

        {/* Completion radial pulse — last node only */}
        {isLast && (
          <>
            <motion.div
              aria-hidden
              className="absolute rounded-full"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={inView ? { scale: [0.6, 4, 6], opacity: [0, 0.35, 0] } : {}}
              transition={{ delay: delay + 0.2, duration: 0.9, ease: 'easeOut' }}
              style={{ width: 56, height: 56, background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)' }}
            />
            <motion.div
              aria-hidden
              className="absolute rounded-full border border-accent/50"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={inView ? { scale: [0.6, 3.5, 5], opacity: [0, 0.5, 0] } : {}}
              transition={{ delay: delay + 0.35, duration: 0.7, ease: 'easeOut' }}
              style={{ width: 56, height: 56 }}
            />
          </>
        )}

        {/* Persistent ambient glow — fades in after spark */}
        <motion.div
          aria-hidden
          className="absolute rounded-full"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: isLast ? 0.55 : 0.35 } : {}}
          transition={{ delay: delay + 0.3, duration: 0.6 }}
          style={{
            width: 56,
            height: 56,
            boxShadow: `0 0 ${isLast ? 28 : 18}px ${isLast ? 10 : 6}px rgba(59,130,246,${isLast ? 0.45 : 0.3})`,
          }}
        />

        {/* Main node disc */}
        <motion.div
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full"
          initial={{ scale: 0.65, opacity: 0.15 }}
          animate={
            inView
              ? { scale: [0.65, 1.28, 1.0], opacity: [0.15, 1, 1] }
              : {}
          }
          transition={{ delay, duration: 0.5, times: [0, 0.38, 1], ease: 'easeOut' }}
          style={{
            background: 'linear-gradient(135deg, #131d35 0%, #0a1020 100%)',
            border: '1.5px solid rgba(59,130,246,0.45)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: delay + 0.12, duration: 0.3, ease: EASE_OUT }}
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              className={cn(isLast ? 'text-accent' : 'text-blue-300')}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Step number label below node */}
      <motion.span
        aria-hidden
        className="mt-3 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/25"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.18, duration: 0.4 }}
      >
        {String(step.number).padStart(2, '0')}
      </motion.span>
    </div>
  )
}

// ─── Main export ─────────────────────────────────────────────────
interface ProcessSectionProps {
  heading: string
  subheading: string
  steps: ProcessStep[]
}

export function ProcessSection({ heading, subheading, steps }: ProcessSectionProps) {
  const prefersReduced = useReducedMotion()
  const [inView, setInView] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  if (prefersReduced) {
    return <StaticProcess heading={heading} subheading={subheading} steps={steps} />
  }

  return (
    <section
      id="process"
      className="py-20 md:py-[120px]"
      style={{ backgroundColor: 'var(--bg-dark-soft)' }}
    >
      <Container>
        <motion.div
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* ── Heading ─────────────────────────────────────── */}
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/30"
            >
              Our Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.06 }}
              className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.13 }}
              className="max-w-xl text-[1.05rem] leading-[1.65] text-white/50"
            >
              {subheading}
            </motion.p>
          </div>

          {/* ── Desktop ───────────────────────────────────────── */}
          <div className="hidden md:block">

            {/* Wire + nodes row */}
            <div className="relative flex items-start justify-between">

              {/* ── Wire track (absolute, vertically centered on nodes) ── */}
              <div
                aria-hidden
                className="absolute left-7 right-7 top-7 z-0 -translate-y-1/2"
                style={{ height: 3 }}
              >
                {/* Cable insulation */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                />

                {/* Blue charge fill — scaleX 0 → 1 */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(59,130,246,0.4) 0%, #3B82F6 100%)',
                    originX: 0,
                    scaleX: 0,
                  }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: LINE_DELAY, duration: LINE_DUR, ease: [0.4, 0, 0.2, 1] }}
                />

                {/* Electricity dashes — appear at LINE_DELAY, run until complete */}
                {inView && (
                  <motion.div
                    aria-hidden
                    className="electricity-flow absolute inset-0 rounded-full overflow-hidden"
                    style={{
                      background:
                        'repeating-linear-gradient(90deg, rgba(147,197,253,0.85) 0px, rgba(147,197,253,0.85) 3px, transparent 3px, transparent 16px)',
                      backgroundSize: '16px 100%',
                      animationDelay: `${LINE_DELAY}s`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{
                      delay: LINE_DELAY,
                      duration: LINE_DUR + 0.3,
                      times: [0, 0.05, 0.85, 1],
                    }}
                  />
                )}

                {/* Glowing leading point */}
                {inView && (
                  <motion.div
                    aria-hidden
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: '#93C5FD',
                      boxShadow: '0 0 14px 6px rgba(147,197,253,0.8), 0 0 4px 2px #fff',
                      marginLeft: -5,
                      left: '0%',
                    }}
                    animate={{ left: '100%' }}
                    transition={{ delay: LINE_DELAY, duration: LINE_DUR, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </div>

              {/* ── Nodes ─────────────────────────────────────── */}
              {steps.map((step, i) => (
                <WireNode
                  key={step.number}
                  step={step}
                  index={i}
                  isLast={i === steps.length - 1}
                  inView={inView}
                />
              ))}
            </div>

            {/* ── Cards ─────────────────────────────────────── */}
            <div className="mt-10 grid grid-cols-4 gap-5">
              {steps.map((step, i) => {
                const Icon = STEP_ICONS[i]!
                const delay = nodeDelay(i) + 0.1
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay, duration: 0.4, ease: EASE_OUT }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    tabIndex={0}
                    aria-label={`Step ${step.number}: ${step.title}`}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onFocus={() => setHoveredIdx(i)}
                    onBlur={() => setHoveredIdx(null)}
                    className={cn(
                      'group relative flex flex-col rounded-2xl p-6 pt-8 transition-all duration-200 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#080E1E]',
                      hoveredIdx === i
                        ? 'border border-accent/35'
                        : 'border border-white/[0.07]',
                    )}
                    style={{
                      background:
                        hoveredIdx === i
                          ? 'rgba(59,130,246,0.06)'
                          : 'rgba(255,255,255,0.03)',
                      boxShadow:
                        hoveredIdx === i
                          ? '0 0 24px rgba(59,130,246,0.12)'
                          : 'none',
                    }}
                  >
                    {/* Background step number */}
                    <motion.span
                      aria-hidden
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 0.06 } : {}}
                      transition={{ delay: delay + 0.05, duration: 0.5 }}
                      className="pointer-events-none absolute right-3 top-3 select-none font-mono text-[5rem] font-bold leading-none text-white"
                    >
                      {String(step.number).padStart(2, '0')}
                    </motion.span>

                    {/* Icon — small version in card */}
                    <div
                      className="relative z-10 mb-4 flex h-9 w-9 items-center justify-center rounded-full"
                      style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}
                    >
                      <Icon size={16} strokeWidth={1.5} className="text-blue-300" />
                    </div>

                    {/* Mono label */}
                    <p className="relative z-10 mb-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/25">
                      {String(step.number).padStart(2, '0')}
                    </p>

                    {/* Title */}
                    <h3 className="relative z-10 mb-2 text-[1rem] font-semibold leading-snug text-white">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-[0.9rem] leading-[1.6] text-white/50">
                      {step.description}
                    </p>

                    {/* Tooltip microcopy — hover/focus */}
                    <p className="relative z-10 mt-4 text-[0.76rem] font-medium text-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                      {step.tooltip}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* ── Mobile — vertical wire ────────────────────────── */}
          <div className="flex flex-col gap-0 md:hidden">
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[i]!
              const isLast = i === steps.length - 1
              return (
                <div key={step.number} className="flex gap-5">
                  {/* Left column: node + vertical wire */}
                  <div className="flex flex-shrink-0 flex-col items-center">
                    {/* Node */}
                    <motion.div
                      className="relative flex h-12 w-12 items-center justify-center rounded-full"
                      initial={{ scale: 0.7, opacity: 0.2 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.1 + i * 0.18, duration: 0.4, ease: EASE_OUT }}
                      style={{
                        background: 'linear-gradient(135deg, #131d35 0%, #0a1020 100%)',
                        border: '1.5px solid rgba(59,130,246,0.4)',
                        boxShadow: '0 0 10px 3px rgba(59,130,246,0.2)',
                      }}
                    >
                      <Icon size={18} strokeWidth={1.5} className="text-blue-300" />
                    </motion.div>

                    {/* Vertical wire segment */}
                    {!isLast && (
                      <div className="relative mt-1 min-h-[32px] w-[3px] flex-1 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ background: '#3B82F6', originY: 0, scaleY: 0 }}
                          animate={inView ? { scaleY: 1 } : {}}
                          transition={{ delay: 0.2 + i * 0.18, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        />
                        {inView && (
                          <div
                            className="electricity-flow absolute inset-0 rounded-full"
                            style={{
                              background:
                                'repeating-linear-gradient(180deg, rgba(147,197,253,0.85) 0px, rgba(147,197,253,0.85) 3px, transparent 3px, transparent 16px)',
                              backgroundSize: '100% 16px',
                              animationDelay: `${0.2 + i * 0.18}s`,
                              animationName: 'electricityFlowV',
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right column: content */}
                  <motion.div
                    className="pb-8 pt-1"
                    initial={{ opacity: 0, x: 8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.18, duration: 0.4, ease: EASE_OUT }}
                  >
                    <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-white/25">
                      {String(step.number).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 text-[1rem] font-semibold text-white">{step.title}</h3>
                    <p className="mt-1.5 text-[0.9rem] leading-[1.6] text-white/50">{step.description}</p>
                    <p className="mt-2 text-[0.76rem] font-medium text-accent">{step.tooltip}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>

        </motion.div>
      </Container>
    </section>
  )
}
