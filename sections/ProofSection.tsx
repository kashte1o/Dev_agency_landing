'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'

/**
 * ProofSection
 * ─────────────
 * Real anonymised mini case studies.
 * Structure per card: tag → title → body → outcome bullets.
 */

const HEADING = "Projects we've worked on"
const SUBHEADING = 'A few examples of what we built and why it mattered.'

const CASES = [
  {
    tag: 'Manufacturing · Internal system',
    title: 'From specialist-only calculations to regulator-ready reports',
    body: 'We built a guided wind-flow calculation system for a production facility where routine reports depended on engineering staff. Non-specialist employees can now enter facility data, run calculations, and prepare regulator-ready reports through a clear internal workflow.',
    outcomes: [
      'Regulatory review passed',
      '60% less manual calculation work',
      'Reports prepared in under one working day',
    ],
  },
  {
    tag: 'Logistics · Customer platform',
    title: 'From status calls to self-service shipment tracking',
    body: 'We built a customer platform, mobile app, and mini app for a logistics company whose clients had to call managers or use an outdated website to track shipments. Customers can now see delivery status, documents, and key order events without contacting support.',
    outcomes: [
      '45% fewer status-related support calls',
      '1.5× higher customer retention',
      '25% revenue growth one month after launch',
    ],
  },
  {
    tag: 'Real estate · Automation',
    title: 'From scattered operations to visible lead flow',
    body: 'We built an automation system for a real estate agency where leads, viewings, documents, and follow-ups were spread across disconnected tools. The team now manages lead intake, property matching, task assignment, document flow, and manager dashboards in one place.',
    outcomes: [
      '30% faster lead processing',
      '40% fewer manual follow-ups',
      'Clear lead statuses across the team',
    ],
  },
]

export function ProofSection() {
  return (
    <Section id="proof" background="base" className="!pt-8 md:!pt-12 !pb-10 md:!pb-14">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-16 lg:px-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-8 md:gap-14"
        >
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <motion.h2
              variants={fadeUp}
              className="max-w-2xl text-[1.5rem] font-bold tracking-tight text-text-primary sm:text-[2.25rem] md:text-[2.75rem]"
            >
              {HEADING}
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-xl text-[0.95rem] text-text-secondary md:text-[1.1rem]">
              {SUBHEADING}
            </motion.p>
          </div>

          {/* Case cards */}
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:-mx-16 md:px-16 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
            {CASES.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex h-full w-[86vw] min-w-[86vw] flex-shrink-0 snap-center flex-col gap-5 rounded-2xl border border-border bg-bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_28px_-12px_rgba(59,130,246,0.18)] md:w-[62vw] md:min-w-[62vw] md:gap-6 md:p-8 lg:w-auto lg:min-w-0 lg:flex-shrink lg:p-9 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                {/* Tag */}
                <p className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-text-secondary md:text-[0.9rem]">
                  {c.tag}
                </p>

                {/* Title */}
                <h3 className="text-[21px] font-bold leading-tight tracking-tight text-text-primary [text-wrap:balance] md:text-[28px]">
                  {c.title}
                </h3>

                {/* Body */}
                <p className="text-[16px] leading-[1.6] text-text-primary/80 md:text-[18px] md:leading-[1.65]">
                  {c.body}
                </p>

                {/* Outcomes — pinned to bottom across cards */}
                <div className="mt-auto flex flex-col gap-2.5 border-t border-border pt-4 md:gap-3 md:pt-5">
                  <span className="font-mono text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-text-secondary/70 md:text-[0.78rem]">
                    Outcomes
                  </span>
                  <ul className="flex flex-col gap-2 md:gap-2.5">
                    {c.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2.5 text-[15.5px] font-medium leading-snug text-text-primary md:gap-3 md:text-[17px]"
                      >
                        <span
                          aria-hidden
                          className="mt-[8px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                        />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Swipe affordance — mobile only (cards scroll horizontally) */}
          <p className="-mt-8 flex items-center justify-center gap-1.5 text-[12px] font-medium text-text-secondary/55 lg:hidden">
            <span aria-hidden>←</span> Swipe <span aria-hidden>→</span>
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
