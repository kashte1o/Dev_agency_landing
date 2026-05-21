'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'
import type { pain as PainType } from '@/content/home'

interface PainSectionProps {
  pain: typeof PainType
}

export function PainSection({ pain }: PainSectionProps) {
  return (
    /*
      Background: slightly darker than --bg-subtle (#F3F1EC) per PROJECT.md spec.
      Using inline style override so Section's bg class doesn't conflict.
    */
    <Section
      id="pain"
      background="subtle"
      className="py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: '#ECEAE3' } as React.CSSProperties}
    >
      {/* Container aligns left edge with hero headline */}
      <div className="mx-auto w-full max-w-[1440px] px-10 md:px-16 lg:px-20">

        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="
            w-full text-center
            font-bold text-text-primary tracking-[-0.022em] leading-[1.1]
            text-[1.9rem]
            sm:text-[2.25rem]
            md:text-[2.75rem]
            lg:text-[3.125rem]
          "
        >
          {pain.heading}
        </motion.h2>

        {/* ── Cards ───────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="
            mt-10 md:mt-14
            grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {pain.cards.map((card) => (
            <PainCard key={card.title} card={card} />
          ))}
        </motion.div>

      </div>
    </Section>
  )
}

// ── Card ─────────────────────────────────────────────────────
/*
  PROJECT.md spec:
  - Cards feel heavier — tighter line-height, denser padding
  - No hover effects (cards are not interactive)
*/
interface PainCardProps {
  card: { icon: string; title: string; description: string }
}

function PainCard({ card }: PainCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        flex flex-col gap-5
        rounded-[16px]
        border border-[#DEDAD2]
        bg-bg-surface
        p-8 md:p-[38px]
        shadow-[0_1px_4px_rgba(0,0,0,0.04),0_3px_12px_rgba(0,0,0,0.05)]
      "
      /* No hover effects per PROJECT.md spec */
    >
      {/* Icon */}
      <div className="
        inline-flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center
        rounded-[10px]
        bg-text-primary/[0.06]
        text-[1.5rem]
      ">
        <span aria-hidden>{card.icon}</span>
      </div>

      {/* Title */}
      <h3 className="
        font-semibold leading-snug text-text-primary
        text-[1.35rem] md:text-[1.4rem]
      ">
        {card.title}
      </h3>

      {/* Description — tighter line-height per PROJECT.md */}
      <p className="
        text-text-secondary
        text-[1.15rem] md:text-[1.2rem]
        leading-[1.6]
      ">
        {card.description}
      </p>
    </motion.div>
  )
}
