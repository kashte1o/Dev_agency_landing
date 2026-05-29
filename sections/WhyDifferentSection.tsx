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
    <Section id="why-different" background="base" className="py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-16 md:gap-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[2.25rem] font-bold tracking-tight text-text-primary sm:text-[2.75rem] md:text-[3.25rem]"
          >
            {whyDifferent.heading}
          </motion.h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {whyDifferent.cards.map((card) => (
              <motion.div key={card.title} variants={fadeUp} className="flex flex-col gap-4">
                <h3 className="border-b border-text-primary pb-3 text-[1.2rem] font-semibold tracking-tight text-text-primary">
                  {card.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-text-secondary">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
