'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { staggerContainer, clipReveal, fadeUp, VIEWPORT } from '@/lib/motion'
import type { pillars as PillarsType } from '@/content/home'

interface PillarsSectionProps {
  pillars: typeof PillarsType
}

export function PillarsSection({ pillars }: PillarsSectionProps) {
  return (
    <Section id="what-we-build" background="base">
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
            {pillars.heading}
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.cards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={clipReveal}
                custom={i}
                className="group flex flex-col gap-5 rounded-[var(--radius-frame)] border border-border bg-bg-surface p-8"
              >
                <span
                  aria-hidden
                  className="font-mono text-[0.68rem] font-semibold tracking-[0.12em] text-text-secondary/40"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-bold text-text-primary">{card.title}</h3>
                  <p className="text-sm font-medium text-accent">{card.description}</p>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
