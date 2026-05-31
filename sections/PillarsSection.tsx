'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { staggerContainer, fadeUp, VIEWPORT } from '@/lib/motion'
import type { pillars as PillarsType } from '@/content/home'

interface PillarsSectionProps {
  pillars: typeof PillarsType
}

type VisualKey = 'dashboard' | 'app' | 'nodes'

function CardVisual({ kind }: { kind: VisualKey }) {
  const common =
    'h-full w-full text-accent/40 transition-colors duration-300 group-hover:text-accent/70'
  if (kind === 'dashboard') {
    return (
      <svg viewBox="0 0 120 120" fill="none" className={common} aria-hidden>
        <rect x="8" y="14" width="104" height="92" rx="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="34" x2="112" y2="34" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="46" width="38" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="64" y="46" width="38" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="76" width="84" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="24" r="2" fill="currentColor" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    )
  }
  if (kind === 'app') {
    return (
      <svg viewBox="0 0 120 120" fill="none" className={common} aria-hidden>
        <rect x="34" y="8" width="52" height="104" rx="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="34" y1="24" x2="86" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="34" y1="98" x2="86" y2="98" stroke="currentColor" strokeWidth="1.5" />
        <rect x="42" y="34" width="36" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="42" y="54" width="36" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="42" y="74" width="36" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="105" r="2.5" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 120 120" fill="none" className={common} aria-hidden>
      <circle cx="22" cy="30" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="90" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="98" cy="30" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="98" cy="90" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 30 L53 60" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 90 L53 60" stroke="currentColor" strokeWidth="1.5" />
      <path d="M67 60 L92 30" stroke="currentColor" strokeWidth="1.5" />
      <path d="M67 60 L92 90" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
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
                className="group relative grid grid-cols-1 gap-6 rounded-[24px] border border-border bg-bg-surface p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_28px_-12px_rgba(59,130,246,0.18)] md:min-h-[280px] md:grid-cols-12 md:gap-8 md:p-12 motion-reduce:transition-none motion-reduce:hover:transform-none"
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
                <div className="flex flex-col gap-3 md:col-span-3">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-text-primary md:text-[34px]">
                    {card.title}
                  </h3>
                  <p className="text-lg font-medium leading-snug text-accent md:text-[19px]">
                    {card.description}
                  </p>
                </div>

                {/* Body + chips */}
                <div className="flex flex-col gap-5 md:col-span-5">
                  <p className="text-[17px] leading-[1.6] text-text-primary/85 md:text-[18px]">
                    {card.body}
                  </p>
                  {card.chips && card.chips.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {card.chips.map((chip) => (
                        <li
                          key={chip}
                          className="rounded-full border border-border-subtle bg-bg-base px-3 py-1 text-xs font-medium text-text-secondary"
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Visual accent */}
                <div className="hidden items-center justify-end md:col-span-2 md:flex">
                  <div className="h-24 w-24 lg:h-28 lg:w-28">
                    <CardVisual kind={card.visual} />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* CTA strip */}
          {pillars.cta && (
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
