'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { LeadForm } from '@/components/forms/LeadForm'
import { staggerContainer, fadeUp, VIEWPORT } from '@/lib/motion'
import type { contactSection as ContactSectionType } from '@/content/home'

interface ContactSectionProps {
  contactSection: typeof ContactSectionType
}

export function ContactSection({ contactSection }: ContactSectionProps) {
  return (
    <Section id="start-project" background="dark" className="relative">
      {/* Accent bar — visual "new chapter" marker at the dark transition.
          Glow intentionally extends past the top edge to bridge the FAQ fade. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[3px] w-[220px] rounded-full bg-accent z-10"
        style={{
          boxShadow:
            '0 0 32px 4px rgba(59,130,246,0.75), 0 0 80px 8px rgba(59,130,246,0.35)',
        }}
      />
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Left: heading + trust signals */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold tracking-tight text-white md:text-4xl"
              >
                {contactSection.heading}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-base leading-relaxed text-white/60"
              >
                {contactSection.subheading}
              </motion.p>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col gap-4">
              {contactSection.trustSignals.map((signal) => (
                <motion.div
                  key={signal.title}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span aria-hidden className="mt-0.5 flex-shrink-0 text-sm text-accent">
                    {signal.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{signal.title}</p>
                    <p className="text-sm text-white/60">{signal.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="rounded-[var(--radius-frame)] border border-border bg-bg-surface p-6 md:p-8 shadow-sm"
          >
            <LeadForm />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
