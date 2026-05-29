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
    <Section id="start-project" background="dark" className="relative pt-28 md:pt-36 pb-20 md:pb-[120px]">
      {/* Layer 1 — Horizon edge: surgical 1px line, cool blue-white core */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-30"
        style={{
          height: '1px',
          background:
            'linear-gradient(to right, transparent 0%, rgba(180,210,255,0.65) 14%, rgba(240,248,255,1) 50%, rgba(180,210,255,0.65) 86%, transparent 100%)',
        }}
      />
      {/* Layer 2 — Inner halo: dense atmospheric dome hugging the horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 z-20"
        style={{
          top: '1px',
          height: '100px',
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(120,180,255,0.50) 0%, rgba(80,140,240,0.22) 45%, transparent 85%)',
        }}
      />
      {/* Layer 3 — Outer halo: diffuse scattering fading deep into the dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 z-10"
        style={{
          top: '1px',
          height: '280px',
          background:
            'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.07) 40%, transparent 75%)',
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
