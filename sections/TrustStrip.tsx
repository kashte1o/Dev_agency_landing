'use client'
import { motion } from 'framer-motion'
import { fadeUp, VIEWPORT } from '@/lib/motion'

/**
 * TrustStrip
 * ──────────
 * Sits immediately after Hero.
 * Goal: kill the first wave of hesitation with 3 quick signals.
 * No H2, no CTA — purely ambient trust layer.
 *
 * PLACEHOLDER — copy lives in content/siteCopy.ts once finalised.
 */

const SIGNALS = [
  {
    icon: '⏱',
    text: 'Reply within 1 business day',
  },
  {
    icon: '🤝',
    text: 'No commitment — just a conversation',
  },
  {
    icon: '👤',
    text: "You'll talk to a real person, not a bot",
  },
]

export function TrustStrip() {
  return (
    <section
      id="trust-strip"
      aria-label="Trust signals"
      className="border-y border-white/[0.08] bg-[#0D1117]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-10 py-6 md:px-16 lg:px-20">
        <motion.ul
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-10 md:gap-16"
        >
          {SIGNALS.map((s) => (
            <motion.li
              key={s.text}
              variants={fadeUp}
              className="flex items-center gap-2.5"
            >
              <span aria-hidden className="text-[1.1rem]">{s.icon}</span>
              <span className="text-[0.875rem] font-medium text-white/55">
                {s.text}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
