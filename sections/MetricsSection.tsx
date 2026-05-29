'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { staggerContainer, fadeUp, VIEWPORT } from '@/lib/motion'

const metrics = [
  {
    value: 'X wks',
    label: 'Average time from brief to launch',
  },
  {
    value: 'X×',
    label: 'Average return on development investment within the first year',
  },
  {
    value: 'X days',
    label: 'Average team onboarding time to a new system',
  },
  {
    value: 'X%',
    label: 'Projects delivered on time and on budget',
  },
]

export function MetricsSection() {
  return (
    <Section id="metrics" background="surface">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-2 gap-x-12 gap-y-12 lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="flex flex-col gap-3 border-t border-border pt-6">
              <span className="text-[2.5rem] font-bold leading-none tracking-tight text-accent">
                {m.value}
              </span>
              <p className="text-sm leading-relaxed text-text-secondary">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
