'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { TextInput, TextareaInput, SelectInput } from './FormField'
import { leadFormCta, leadFormSuccess, leadFormError } from '@/content/forms'
import { fadeUp } from '@/lib/motion'

type FormState = 'idle' | 'loading' | 'success' | 'error'

type FieldErrors = {
  name?: string
  contact?: string   // group error: email or whatsapp required
  problem?: string
}

// Field definitions inlined so we can render explicitly with per-field errors
import { leadFormFields } from '@/content/forms'

export function LeadForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState(leadFormError)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const nameField          = leadFormFields.find((f) => f.id === 'name')!
  const emailField         = leadFormFields.find((f) => f.id === 'email')!
  const whatsappField      = leadFormFields.find((f) => f.id === 'whatsapp')!
  const problemField       = leadFormFields.find((f) => f.id === 'problem')!
  const industryField      = leadFormFields.find((f) => f.id === 'businessIndustry')!
  const budgetField        = leadFormFields.find((f) => f.id === 'budget')!

  function validate(formData: FormData): FieldErrors {
    const errors: FieldErrors = {}
    const name    = String(formData.get('name') ?? '').trim()
    const email   = String(formData.get('email') ?? '').trim()
    const whatsapp = String(formData.get('whatsapp') ?? '').trim()
    const problem = String(formData.get('problem') ?? '').trim()

    if (!name) errors.name = 'Please enter your name.'
    if (!email && !whatsapp) errors.contact = 'Please leave an email or WhatsApp number.'
    if (!problem) errors.problem = 'Please describe what you want to fix or build.'

    return errors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const errors = validate(formData)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setState('loading')

    const data = Object.fromEntries(formData.entries())

    try {
      // TODO: replace with real API endpoint
      await new Promise((res) => setTimeout(res, 1200))
      // const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      void data
      setState('success')
    } catch {
      setErrorMsg(leadFormError)
      setState('error')
    }
  }

  const disabled = state === 'loading'

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

            {/* Name */}
            <TextInput field={nameField} error={fieldErrors.name} disabled={disabled} />

            {/* Contact details group */}
            <div className="flex flex-col gap-1.5">
              {/* Group label */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-text-primary">
                  Contact details
                  <span className="ml-1 text-accent" aria-hidden>*</span>
                </span>
              </div>
              {/* Individual fields */}
              <div className="flex flex-col gap-3">
                <TextInput field={emailField} disabled={disabled} />
                <TextInput field={whatsappField} disabled={disabled} />
              </div>
              {/* Helper / validation */}
              {fieldErrors.contact ? (
                <p role="alert" className="text-xs text-red-500">
                  {fieldErrors.contact}
                </p>
              ) : (
                <p className="text-xs text-text-secondary">
                  Leave at least one: email or WhatsApp.
                </p>
              )}
            </div>

            {/* Problem */}
            <TextareaInput field={problemField} error={fieldErrors.problem} disabled={disabled} />

            {/* Industry */}
            <TextInput field={industryField} disabled={disabled} />

            {/* Budget */}
            <SelectInput field={budgetField} disabled={disabled} />

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
