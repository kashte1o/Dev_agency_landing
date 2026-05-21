'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { TextInput, TextareaInput, SelectInput } from './FormField'
import { leadFormFields, leadFormCta, leadFormSuccess, leadFormError } from '@/content/forms'
import { fadeUp } from '@/lib/motion'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function LeadForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState(leadFormError)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      // TODO: replace with real API endpoint
      await new Promise((res) => setTimeout(res, 1200))
      // Simulate success. Change to: const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      setState('success')
    } catch {
      setErrorMsg(leadFormError)
      setState('error')
    }
  }

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 rounded-[var(--radius-card)] border border-accent-green/30 bg-accent-green/5 px-8 py-12 text-center"
          >
            <span className="text-3xl" aria-hidden>✓</span>
            <h3 className="text-xl font-bold text-text-primary">{leadFormSuccess.heading}</h3>
            <p className="text-sm text-text-secondary">{leadFormSuccess.body}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            {state === 'error' && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="rounded-[var(--radius-input)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {errorMsg}
              </motion.div>
            )}

            {/* Render each field by type */}
            {leadFormFields.map((field) => {
              if (field.type === 'text' || field.type === 'email') {
                return <TextInput key={field.id} field={field} disabled={state === 'loading'} />
              }
              if (field.type === 'textarea') {
                return <TextareaInput key={field.id} field={field} disabled={state === 'loading'} />
              }
              if (field.type === 'select') {
                return <SelectInput key={field.id} field={field} disabled={state === 'loading'} />
              }
              return null
            })}

            <Button
              type="submit"
              variant="primary"
              loading={state === 'loading'}
              className="mt-2 w-full justify-center py-3 text-base"
            >
              {leadFormCta}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
