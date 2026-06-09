'use client'
import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { staggerContainer, fadeUp, VIEWPORT } from '@/lib/motion'

const metrics = [
  {
    value: '5 weeks',
    label: 'Average time from brief to launch',
  },
  {
    value: '180%+',
    label: 'Average return on development investment within the first year',
  },
  {
    value: '7 days',
    label: 'Average time until your team uses the system effectively',
  },
  {
    value: '98%',
    label: 'Projects delivered on time and on budget',
  },
]

// Split a metric like "180%+" into its leading number (180) and the trailing
// unit/suffix ("%+") so we can count the number up while keeping the unit.
function parseMetric(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { target: null as number | null, suffix: value, decimals: 0 }
  const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0
  return { target: parseFloat(match[1]), suffix: match[2], decimals }
}

function CountUpValue({ value }: { value: string }) {
  const { target, suffix, decimals } = parseMetric(value)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (target == null) return
    if (reduce) {
      setN(target)
      return
    }
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(v),
    })
    return () => controls.stop()
  }, [inView, target, reduce])

  if (target == null) return <span ref={ref}>{value}</span>

  return (
    <span ref={ref} className="tabular-nums">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function MetricsSection() {
  return (
    <Section id="metrics" background="surface" className="!pt-6 md:!pt-9 !pb-12 md:!pb-[72px]">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p
            variants={fadeUp}
            className="mb-7 text-xs font-medium uppercase tracking-[0.18em] text-text-primary md:mb-10"
          >
            Measured delivery outcomes
          </motion.p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 lg:grid-cols-4 md:gap-y-10">
            {metrics.map((m) => (
              <motion.div key={m.label} variants={fadeUp} className="flex flex-col gap-3">
                <span className="text-[1.625rem] md:text-[2.5rem] font-bold leading-none tracking-tight text-accent">
                  <CountUpValue value={m.value} />
                </span>
                <p className="text-sm leading-relaxed text-text-secondary">{m.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-text-secondary md:mt-10">
            Based on 32 projects delivered between 2022 and 2025.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
