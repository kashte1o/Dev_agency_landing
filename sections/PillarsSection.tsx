'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
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
                className="group flex flex-col gap-4 rounded-[var(--radius-frame)] border border-border bg-bg-surface p-8 transition-shadow hover:shadow-md"
              >
                <span aria-hidden className="text-3xl">{card.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{card.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{card.description}</p>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary">{card.body}</p>

                {/* v2: placeholder for mockup */}
                <div
                  aria-hidden
                  className="mt-2 h-28 w-full rounded-[var(--radius-card)] border border-dashed border-border bg-bg-subtle flex items-center justify-center text-xs text-text-secondary/50"
                >
                  Visual mockup — v2
                </div>

                <a
                  href={card.href}
                  className="mt-2 text-sm font-medium text-accent hover:underline"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
