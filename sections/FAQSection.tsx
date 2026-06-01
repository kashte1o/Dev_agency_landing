'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { fadeUp, staggerContainer, VIEWPORT } from '@/lib/motion'
import { homepageFAQ, type FAQItem } from '@/content/faq'
import { stillHaveQuestionsPopup } from '@/content/siteCopy'

const HEADING = 'Common questions'
const SUBHEADING = "If you're on the fence, the answer is probably here."

export function FAQSection() {
  const [popupOpen, setPopupOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  return (
    <Section id="faq" background="base" className="pt-5 md:pt-7 lg:pt-8 pb-20 md:pb-28 lg:pb-32">
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
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span className="text-[1.35rem] font-semibold text-text-primary leading-snug">
          {item.question}
        </span>
        <span
          aria-hidden
          className="mt-1 flex-shrink-0 w-5 text-center text-[1.3rem] font-light leading-none text-text-secondary/60 select-none"
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
            <p className="pb-5 text-[1.25rem] leading-relaxed text-text-secondary">
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
      className="flex w-full items-center justify-between gap-6 py-5 text-left group"
    >
      <span className="text-[1.35rem] font-semibold text-text-primary leading-snug group-hover:text-accent transition-colors duration-200">
        {question}
      </span>
      <span
        aria-hidden
        className="flex-shrink-0 text-[1.3rem] font-light text-text-secondary/60 group-hover:text-accent transition-colors duration-200"
      >
        →
      </span>
    </button>
  )
}

type PopupErrors = {
  question?: string
  email?: string
  messenger?: string
  contact?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TELEGRAM_RE = /^@[A-Za-z0-9_]{5,}$/

function validateMessenger(raw: string): boolean {
  const v = raw.trim()
  if (v.startsWith('@')) return TELEGRAM_RE.test(v)
  const normalized = v.replace(/[\s()\-]/g, '')
  return /^\+?\d{8,15}$/.test(normalized)
}

function ContactPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const questionRef = useRef<HTMLTextAreaElement | null>(null)
  const [question, setQuestion] = useState('')
  const [email, setEmail] = useState('')
  const [messenger, setMessenger] = useState('')
  const [errors, setErrors] = useState<PopupErrors>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    questionRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setSubmitted(false)
      setQuestion('')
      setEmail('')
      setMessenger('')
      setErrors({})
    }
  }, [open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const next: PopupErrors = {}
    const q = question.trim()
    const em = email.trim()
    const ms = messenger.trim()

    if (!q) next.question = stillHaveQuestionsPopup.errors.question

    if (!em && !ms) {
      next.contact = stillHaveQuestionsPopup.errors.contactRequired
    } else {
      if (em && !EMAIL_RE.test(em)) next.email = stillHaveQuestionsPopup.errors.emailFormat
      if (ms && !validateMessenger(ms)) next.messenger = stillHaveQuestionsPopup.errors.messengerFormat
    }

    setErrors(next)
    if (Object.keys(next).length > 0) return

    // TODO: wire up to backend
    setSubmitted(true)
  }

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
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`relative z-10 w-full rounded-xl border border-border bg-bg-surface shadow-lg max-h-[calc(100dvh-2rem)] overflow-y-auto ${submitted ? 'max-w-2xl p-9 sm:p-14' : 'max-w-[39rem] p-7 sm:p-10'}`}
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

            {!submitted && (
              <>
                <h3
                  id="contact-popup-title"
                  className="pr-8 text-2xl font-semibold text-text-primary"
                >
                  {stillHaveQuestionsPopup.title}
                </h3>
                <p className="mt-3 text-[1.1rem] leading-relaxed text-text-secondary">
                  {stillHaveQuestionsPopup.body}
                </p>
              </>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit} noValidate className="mt-5 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="popup-question"
                    className="text-[0.95rem] font-medium text-text-primary"
                  >
                    {stillHaveQuestionsPopup.questionLabel}
                  </label>
                  <textarea
                    ref={questionRef}
                    id="popup-question"
                    rows={4}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder={stillHaveQuestionsPopup.questionPlaceholder}
                    aria-invalid={errors.question ? true : undefined}
                    aria-describedby={errors.question ? 'popup-question-error' : undefined}
                    className="resize-none rounded-md border border-border bg-bg-base px-3.5 py-2.5 text-[0.95rem] text-text-primary placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  {errors.question && (
                    <p id="popup-question-error" role="alert" className="text-xs text-red-500">
                      {errors.question}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="popup-email"
                      className="text-[0.95rem] font-medium text-text-primary"
                    >
                      {stillHaveQuestionsPopup.emailLabel}
                    </label>
                    <input
                      id="popup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={stillHaveQuestionsPopup.emailPlaceholder}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? 'popup-email-error' : undefined}
                      className="rounded-md border border-border bg-bg-base px-3.5 py-2.5 text-[0.95rem] text-text-primary placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                    {errors.email && (
                      <p id="popup-email-error" role="alert" className="text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="popup-messenger"
                      className="text-[0.95rem] font-medium text-text-primary"
                    >
                      {stillHaveQuestionsPopup.messengerLabel}
                    </label>
                    <input
                      id="popup-messenger"
                      type="text"
                      value={messenger}
                      onChange={(e) => setMessenger(e.target.value)}
                      placeholder={stillHaveQuestionsPopup.messengerPlaceholder}
                      aria-invalid={errors.messenger ? true : undefined}
                      aria-describedby={errors.messenger ? 'popup-messenger-error' : undefined}
                      className="rounded-md border border-border bg-bg-base px-3.5 py-2.5 text-[0.95rem] text-text-primary placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                    {errors.messenger && (
                      <p id="popup-messenger-error" role="alert" className="text-xs text-red-500">
                        {errors.messenger}
                      </p>
                    )}
                  </div>

                  {errors.contact ? (
                    <p role="alert" className="text-[0.8rem] text-red-500">
                      {errors.contact}
                    </p>
                  ) : (
                    <p className="text-[0.8rem] text-text-secondary">
                      {stillHaveQuestionsPopup.contactHint}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-1 rounded-lg bg-accent px-5 py-3 text-[0.95rem] font-medium text-white transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {stillHaveQuestionsPopup.submitLabel}
                </button>

                <p className="text-[0.8rem] leading-relaxed text-text-secondary">
                  {stillHaveQuestionsPopup.note}
                </p>
              </form>
            )}

            {submitted && (
              <div className="flex flex-col items-center text-center py-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200"
                >
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <motion.path
                      d="M5 12.5l4.5 4.5L19 7.5"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                    />
                  </svg>
                </motion.div>
                <h3
                  id="contact-popup-title"
                  className="mt-8 text-3xl font-semibold tracking-tight text-text-primary"
                >
                  {stillHaveQuestionsPopup.successTitle}
                </h3>
                <p className="mt-4 max-w-sm text-[1.05rem] leading-relaxed text-text-secondary">
                  {stillHaveQuestionsPopup.successBody}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-10 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-secondary hover:bg-bg-base hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {stillHaveQuestionsPopup.closeLabel}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
