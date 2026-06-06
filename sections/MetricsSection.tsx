'use client'
import { motion } from 'framer-motion'
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

export function MetricsSection() {
  return (
    <Section id="metrics" background="dark-soft" className="!pt-6 md:!pt-9 !pb-12 md:!pb-[72px]">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="visible"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 lg:grid-cols-4">
            {metrics.map((m) => (
              <motion.div key={m.label} variants={fadeUp} className="flex flex-col gap-3">
                <span className="font-mono text-[1.625rem] md:text-[2.5rem] font-bold leading-none tracking-tight text-accent">
                  {m.value}
                </span>
                <p className="text-sm leading-relaxed text-white/70">{m.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-white/50 md:mt-10">
            Based on 32 projects delivered between 2022 and 2025.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
