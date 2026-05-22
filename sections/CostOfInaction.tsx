'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'

/**
 * CostOfInaction
 * ──────────────
 * Sits after PainSection.
 * Goal: raise urgency by showing what happens when the problem is left unsolved.
 * Pain section = recognition. This section = price of doing nothing.
 *
 * PLACEHOLDER — content to be written based on real client stories.
 * Replace the ITEMS array and headings with content/home.ts entries.
 */

// ── PLACEHOLDER DATA ─────────────────────────────────────────────────────────
const HEADING = 'What breaks when you do nothing'
const SUBHEADING =
  'Every month without a working system costs more than you think.'

const ITEMS = [
  {
    icon: '⏳',
    title: '[PLACEHOLDER] Lost hours per week',
    body: 'Describe the time cost: how many hours your team wastes on manual work that a system would handle automatically.',
  },
  {
    icon: '❌',
    title: '[PLACEHOLDER] Errors and missed tasks',
    body: 'Describe the error cost: what falls through the cracks when there is no single source of truth.',
  },
  {
    icon: '📉',
    title: '[PLACEHOLDER] Clients feel the friction',
    body: 'Describe the client experience cost: slow responses, missed follow-ups, a product that does not match what the business can deliver.',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export function CostOfInaction() {
  return (
    <Section id="cost-of-inaction" background="subtle" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-10 md:px-16 lg:px-20">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <motion.h2
              variants={fadeUp}
              className="max-w-2xl text-[1.9rem] font-bold tracking-tight text-text-primary sm:text-[2.25rem] md:text-[2.75rem]"
            >
              {HEADING}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-[1.1rem] text-text-secondary"
            >
              {SUBHEADING}
            </motion.p>
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ITEMS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col gap-4 rounded-xl border border-dashed border-border bg-bg-surface p-6"
              >
                {/* Dashed border = placeholder signal for developer */}
                <span aria-hidden className="text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
