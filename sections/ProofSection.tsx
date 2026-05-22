'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'

/**
 * ProofSection
 * ─────────────
 * Sits between CredibilitySection and ContactSection.
 * Goal: close the trust gap before asking for a lead.
 * Format: 2–3 anonymised mini case studies.
 * Structure per card: situation → what was built → what changed.
 *
 * PLACEHOLDER — replace CASES with real project stories when available.
 * No client logos or names needed. Industry + company size is enough.
 */

// ── PLACEHOLDER DATA ──────────────────────────────────────────────
const HEADING = "Projects we've worked on"
const SUBHEADING = 'A few examples of what we built and why it mattered.'

const CASES = [
  {
    tag: '[PLACEHOLDER — e.g. "Logistics · 40 people"]',
    situation:
      '[PLACEHOLDER] One sentence: what was the operational problem. Example: "Job requests arrived by email, WhatsApp and phone — no one had a single view of what was happening."',
    built:
      '[PLACEHOLDER] One sentence: what we built. Example: "Internal job management system with real-time status, automatic client updates and a dispatcher dashboard."',
    outcome:
      '[PLACEHOLDER] One or two sentences: what changed for the business. Avoid technical metrics. Focus on time, errors, client experience. Example: "Team spends 4 hours less per day on status calls. Clients see job progress without calling in."',
  },
  {
    tag: '[PLACEHOLDER — e.g. "Professional services · 15 people"]',
    situation:
      '[PLACEHOLDER] Describe the broken process: scattered approvals, manual invoicing, lost documents, slow client onboarding.',
    built:
      '[PLACEHOLDER] Describe the solution: client portal, approval workflow, document hub, or similar.',
    outcome:
      '[PLACEHOLDER] Describe the outcome in business terms: faster onboarding, fewer errors, clients self-serve instead of calling.',
  },
  {
    tag: '[PLACEHOLDER — e.g. "Retail B2B · 3 locations"]',
    situation:
      '[PLACEHOLDER] Describe what the client experience looked like before: how clients placed orders, checked availability, got updates.',
    built:
      '[PLACEHOLDER] Describe the customer-facing product: order portal, booking system, account dashboard.',
    outcome:
      '[PLACEHOLDER] Describe what changed: repeat orders increased, support requests dropped, clients stopped asking "where is my order?".',
  },
]
// ──────────────────────────────────────────────────────────────────

export function ProofSection() {
  return (
    <Section id="proof" background="subtle" className="py-20 md:py-28 lg:py-32">
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

          {/* Case cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CASES.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col gap-5 rounded-2xl border border-dashed border-border bg-bg-surface p-6 md:p-8"
              >
                {/* Tag */}
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-text-secondary">
                  {c.tag}
                </p>

                {/* Situation */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent">
                    Situation
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-text-secondary">
                    {c.situation}
                  </p>
                </div>

                {/* What we built */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent">
                    What we built
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-text-secondary">
                    {c.built}
                  </p>
                </div>

                {/* Outcome */}
                <div className="flex flex-col gap-1.5 rounded-lg bg-bg-subtle p-4">
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent">
                    Outcome
                  </span>
                  <p className="text-[0.95rem] font-medium leading-relaxed text-text-primary">
                    {c.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </Section>
  )
}
