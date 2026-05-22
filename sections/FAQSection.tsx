'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'
import { homepageFAQ, type FAQItem } from '@/content/faq'

/**
 * FAQSection
 * ──────────
 * Sits between ProofSection and ContactSection.
 * Goal: close objections and qualify leads before the form.
 * Last 2 questions (what we do / don't fit) act as a filter.
 *
 * Content lives in content/faq.ts — replace PLACEHOLDER text there.
 */

const HEADING = 'Common questions'
const SUBHEADING = "If you're on the fence, the answer is probably here."

export function FAQSection() {
  return (
    <Section id="faq" background="base" className="py-20 md:py-28 lg:py-32">
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

          {/* Accordion */}
          <motion.div variants={fadeUp} className="flex flex-col divide-y divide-border">
            {homepageFAQ.map((item) => (
              <FAQAccordionItem key={item.question} item={item} />
            ))}
          </motion.div>

        </motion.div>
      </div>
    </Section>
  )
}

// ── Accordion item ────────────────────────────────────────────────

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
      >
        <span className="text-[1.05rem] font-semibold text-text-primary leading-snug">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-0.5 flex-shrink-0 text-text-secondary"
          aria-hidden
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[1rem] leading-relaxed text-text-secondary">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
