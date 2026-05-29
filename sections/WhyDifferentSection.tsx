'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { staggerContainer, fadeUp, VIEWPORT } from '@/lib/motion'
import type { whyDifferent as WhyDifferentType } from '@/content/home'

interface WhyDifferentSectionProps {
  whyDifferent: typeof WhyDifferentType
}

export function WhyDifferentSection({ whyDifferent }: WhyDifferentSectionProps) {
  return (
    <Section id="why-different" background="base">
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
            {whyDifferent.heading}
          </motion.h2>

          <div className="grid gap-x-16 gap-y-8 sm:grid-cols-3">
            {whyDifferent.cards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="flex flex-col gap-2 border-t border-border pt-6"
              >
                <h3 className="font-semibold text-text-primary">{card.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
