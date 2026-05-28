'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'
import { homepageFAQ, type FAQItem } from '@/content/faq'

const HEADING = 'Common questions'
const SUBHEADING = "If you're on the fence, the answer is probably here."

export function FAQSection() {
  return (
    <Section id="faq" background="base" className="pt-10 md:pt-14 lg:pt-16 pb-20 md:pb-28 lg:pb-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-14"
        >
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

          <motion.div variants={fadeUp} className="flex flex-col divide-y divide-border">
            {homepageFAQ.map((item) => (
              <FAQAccordionItem key={item.question} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

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
        <span
          aria-hidden
          className="mt-1 flex-shrink-0 w-4 text-center text-[1rem] font-light leading-none text-text-secondary/60 select-none"
        >
          {open ? '−' : '+'}
        </span>
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
