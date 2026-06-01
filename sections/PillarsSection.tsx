'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { staggerContainer, fadeUp, VIEWPORT } from '@/lib/motion'
import type { pillars as PillarsType } from '@/content/home'

interface PillarsSectionProps {
  pillars: typeof PillarsType
}

export function PillarsSection({ pillars }: PillarsSectionProps) {
  return (
    <Section id="what-we-build" background="base" className="!pt-10 md:!pt-[60px]">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-10 md:gap-14"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              {pillars.heading}
            </h2>
            {pillars.subline && (
              <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
                {pillars.subline}
              </p>
            )}
          </motion.div>

          <ul className="flex flex-col gap-5 md:gap-6">
            {pillars.cards.map((card, i) => (
              <motion.li
                key={card.title}
                variants={fadeUp}
                className="group relative grid grid-cols-1 gap-5 rounded-[24px] border border-border bg-bg-surface p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_28px_-12px_rgba(59,130,246,0.18)] md:min-h-[220px] md:grid-cols-12 md:items-start md:gap-10 md:p-12 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                {/* Number */}
                <div className="md:col-span-2">
                  <span
                    aria-hidden
                    className="font-mono text-5xl font-semibold leading-none text-accent md:text-[72px]"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title + value line */}
                <div className="flex flex-col gap-3 md:col-span-4">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-text-primary md:text-[32px]">
                    {card.title}
                  </h3>
                  <p className="text-lg font-medium leading-snug text-accent md:text-[19px]">
                    {card.description}
                  </p>
                </div>

                {/* Body */}
                <div className="md:col-span-6">
                  <p className="text-[17px] leading-[1.6] text-text-primary/85 md:text-[18px]">
                    {card.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* CTA strip */}
          {pillars.cta && !pillars.cta.hidden && (
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-start justify-between gap-6 rounded-[20px] border border-border bg-bg-surface px-8 py-7 md:flex-row md:items-center md:px-10"
            >
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-text-primary md:text-xl">
                  {pillars.cta.title}
                </p>
                <p className="text-base text-text-secondary md:text-[17px]">
                  {pillars.cta.body}
                </p>
              </div>
              <a
                href={pillars.cta.buttonHref}
                className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-accent px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent/90"
              >
                {pillars.cta.buttonLabel}
              </a>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}
