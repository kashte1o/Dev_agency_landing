'use client'
import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  open: boolean
  onClose: () => void
  /** Accessible title rendered at the top of the dialog. */
  title?: string
  /** Optional supporting line under the title. */
  description?: string
  /** Tailwind max-width class for the dialog (default max-w-[39rem]). */
  maxWidthClassName?: string
  closeLabel?: string
  children: React.ReactNode
}

/**
 * Reusable centered modal shell — overlay, scroll-lock, Esc-to-close,
 * scrollable body, close button. Mirrors the ContactPopup styling so all
 * dialogs across the site read as one family.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  maxWidthClassName = 'max-w-[39rem]',
  closeLabel = 'Close',
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <button
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/50"
          />

          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`relative z-10 w-full ${maxWidthClassName} max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-xl border border-border bg-bg-surface p-7 shadow-lg outline-none sm:p-10`}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md text-text-secondary hover:bg-bg-base hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span aria-hidden className="text-xl leading-none">×</span>
            </button>

            {title && (
              <h3 className="pr-8 text-2xl font-semibold text-text-primary">{title}</h3>
            )}
            {description && (
              <p className="mt-3 text-[1.1rem] leading-relaxed text-text-secondary">
                {description}
              </p>
            )}

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
