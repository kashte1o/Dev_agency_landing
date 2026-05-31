'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'
import { homepageFAQ, type FAQItem } from '@/content/faq'
import { contactDetails, stillHaveQuestionsPopup } from '@/content/siteCopy'

const HEADING = 'Common questions'
const SUBHEADING = "If you're on the fence, the answer is probably here."

export function FAQSection() {
  const [popupOpen, setPopupOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

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
            {homepageFAQ.map((item) =>
              item.cta ? (
                <FAQContactTrigger
                  key={item.question}
                  ref={triggerRef}
                  question={item.question}
                  onClick={() => setPopupOpen(true)}
                />
              ) : (
                <FAQAccordionItem key={item.question} item={item} />
              )
            )}
          </motion.div>
        </motion.div>
      </Container>

      <ContactPopup
        open={popupOpen}
        onClose={() => {
          setPopupOpen(false)
          triggerRef.current?.focus()
        }}
      />
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

type FAQContactTriggerProps = {
  question: string
  onClick: () => void
}

const FAQContactTrigger = ({
  ref,
  question,
  onClick,
}: FAQContactTriggerProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-6 py-6 text-left group"
    >
      <span className="text-[1.05rem] font-semibold text-text-primary leading-snug group-hover:text-accent transition-colors duration-200">
        {question}
      </span>
      <span
        aria-hidden
        className="flex-shrink-0 text-[1rem] font-light text-text-secondary/60 group-hover:text-accent transition-colors duration-200"
      >
        →
      </span>
    </button>
  )
}

function ContactPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeBtnRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  const whatsappHref = `https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/50"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-md rounded-xl border border-border bg-bg-surface p-6 shadow-lg sm:p-8 max-h-[calc(100dvh-2rem)] overflow-y-auto"
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label={stillHaveQuestionsPopup.closeLabel}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md text-text-secondary hover:bg-bg-base hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span aria-hidden className="text-xl leading-none">×</span>
            </button>

            <h3
              id="contact-popup-title"
              className="pr-8 text-xl font-semibold text-text-primary"
            >
              {stillHaveQuestionsPopup.title}
            </h3>

            <p className="mt-3 text-[0.95rem] leading-relaxed text-text-secondary">
              {stillHaveQuestionsPopup.body}
            </p>

            <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <dt className="font-medium text-text-primary">
                  {stillHaveQuestionsPopup.emailLabel}:
                </dt>
                <dd>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-accent hover:underline break-all"
                  >
                    {contactDetails.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <dt className="font-medium text-text-primary">
                  {stillHaveQuestionsPopup.whatsappLabel}:
                </dt>
                <dd>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {contactDetails.whatsapp}
                  </a>
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-xs leading-relaxed text-text-secondary">
              {stillHaveQuestionsPopup.note}
            </p>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-primary hover:bg-bg-base focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {stillHaveQuestionsPopup.closeLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
