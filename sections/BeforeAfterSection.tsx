'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'

/**
 * BeforeAfterSection
 * ──────────────────
 * Replaces ChaosTransition.
 * Goal: show concrete workflow transformations — not abstract metaphors.
 * Each card = one real client situation: "Before" state → "After" state.
 *
 * PLACEHOLDER — replace EXAMPLES with real anonymised project stories.
 * Format: industry/role context + broken workflow → what was built → what changed.
 * No client names or logos needed — anonymised is fine.
 */

// ── PLACEHOLDER DATA ─────────────────────────────────────────────────────────
const HEADING = 'From broken workflow to working system'
const SUBHEADING = 'Real situations we helped fix.'

const EXAMPLES = [
  {
    context: '[PLACEHOLDER — industry / role, e.g. "A logistics company, 40 people"]',
    before: {
      label: 'Before',
      text: "[PLACEHOLDER] Describe what was broken in plain language: the tools they used, why it wasn't working, the manual work involved. Write as the client would describe it, not as a developer would.",
    },
    after: {
      label: 'After',
      text: '[PLACEHOLDER] Describe what was built and what changed for the business. Focus on outcomes, not technical details. Example: "One interface for job tracking, client updates, and status reports — no more spreadsheet juggling."',
    },
  },
  {
    context: '[PLACEHOLDER — industry / role, e.g. "A professional services firm, 15 people"]',
    before: {
      label: 'Before',
      text: '[PLACEHOLDER] Describe the painful situation: manual approvals, scattered files, duplicate work, slow client communication.',
    },
    after: {
      label: 'After',
      text: "[PLACEHOLDER] Describe the result: what they can do now that they couldn't before. What takes minutes instead of hours.",
    },
  },
  {
    context: '[PLACEHOLDER — industry / role, e.g. "A retail business with a B2B client base"]',
    before: {
      label: 'Before',
      text: '[PLACEHOLDER] Describe the friction clients felt when interacting with the business: hard to place orders, no visibility on status, too many back-and-forth emails.',
    },
    after: {
      label: 'After',
      text: '[PLACEHOLDER] Describe what clients can now do themselves: self-serve portal, status visibility, fewer calls to the team.',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export function BeforeAfterSection() {
  return (
    <Section id="before-after" background="base" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-10 md:px-16 lg:px-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-14"
        >

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <motion.h2
              variants={fadeUp}
              className="max-w-2xl text-[1.9rem] font-bold tracking-tight text-text-primary sm:text-[2.25rem] md:text-[2.75rem]"
            >
              {HEADING}
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-xl text-[1.1rem] text-text-secondary">
              {SUBHEADING}
            </motion.p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-8">
            {EXAMPLES.map((ex, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-dashed border-border bg-bg-surface overflow-hidden"
              >
                {/* Context bar */}
                <div className="border-b border-border px-6 py-3 bg-bg-subtle">
                  <p className="text-[0.8rem] font-medium uppercase tracking-[0.08em] text-text-secondary">
                    {ex.context}
                  </p>
                </div>

                {/* Before / After columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  {/* Before */}
                  <div className="flex flex-col gap-3 p-6 md:p-8">
                    <span className="inline-flex w-fit rounded-full bg-[#FEF3C7] px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-wide text-[#92400E]">
                      {ex.before.label}
                    </span>
                    <p className="text-[1rem] leading-relaxed text-text-secondary">
                      {ex.before.text}
                    </p>
                  </div>

                  {/* After */}
                  <div className="flex flex-col gap-3 p-6 md:p-8">
                    <span className="inline-flex w-fit rounded-full bg-[#DCFCE7] px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-wide text-[#166534]">
                      {ex.after.label}
                    </span>
                    <p className="text-[1rem] font-medium leading-relaxed text-text-primary">
                      {ex.after.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </Section>
  )
}
