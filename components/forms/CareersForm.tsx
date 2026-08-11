'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { careersPopup } from '@/content/siteCopy'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const f = careersPopup.fields

type Errors = { name?: string; email?: string; role?: string }
type FormState = 'idle' | 'loading' | 'error'

const inputClass =
  'rounded-md border border-border bg-bg-base px-3.5 py-2.5 text-[0.95rem] text-text-primary placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'
const labelClass = 'text-[0.95rem] font-medium text-text-primary'

export function CareersForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('Something went wrong. Please try again shortly.')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const role = String(data.get('role') ?? '').trim()

    const next: Errors = {}
    if (!name) next.name = careersPopup.errors.name
    if (!EMAIL_RE.test(email)) next.email = careersPopup.errors.email
    if (!role) next.role = careersPopup.errors.role

    setErrors(next)
    if (Object.keys(next).length > 0) return

    setState('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'career', ...Object.fromEntries(data.entries()) }),
      })
      if (!response.ok) {
        const result = await response.json().catch(() => null) as { error?: string } | null
        throw new Error(result?.error ?? errorMessage)
      }
      setSubmitted(true)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again shortly.')
      setState('error')
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-4 text-center">
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
        <h3 className="mt-8 text-3xl font-semibold tracking-tight text-text-primary">
          {careersPopup.successTitle}
        </h3>
        <p className="mt-4 max-w-sm text-[1.05rem] leading-relaxed text-text-secondary">
          {careersPopup.successBody}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-10 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-secondary hover:bg-bg-base hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {careersPopup.closeLabel}
        </button>
      </div>
    )
  }

  return (
    <>
      <p className="mt-3 text-[1.1rem] leading-relaxed text-text-secondary">{careersPopup.body}</p>
      <form onSubmit={handleSubmit} noValidate className="mt-5 flex flex-col gap-4">
        <input name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
        {state === 'error' && <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</p>}
        <Field id="name" name="name" label={f.name.label} placeholder={f.name.placeholder} error={errors.name} />
        <Field id="email" name="email" type="email" label={f.email.label} placeholder={f.email.placeholder} error={errors.email} />
        <Field id="role" name="role" label={f.role.label} placeholder={f.role.placeholder} error={errors.role} />
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <Field id="experience" name="experience" label={f.experience.label} placeholder={f.experience.placeholder} />
          </div>
          <div className="flex-1">
            <Field id="salary" name="salary" label={f.salary.label} placeholder={f.salary.placeholder} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="careers-message" className={labelClass}>
            {f.message.label}
          </label>
          <textarea
            id="careers-message"
            name="message"
            rows={3}
            placeholder={f.message.placeholder}
            className={`resize-none ${inputClass}`}
          />
        </div>

        <button
          type="submit"
          disabled={state === 'loading'}
          className="mt-1 rounded-lg bg-accent px-5 py-3 text-[0.95rem] font-medium text-white transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {state === 'loading' ? 'Sending…' : careersPopup.submitLabel}
        </button>
        <p className="text-[0.8rem] leading-relaxed text-text-secondary">{careersPopup.note}</p>
      </form>
    </>
  )
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = 'text',
  error,
}: {
  id: string
  name: string
  label: string
  placeholder: string
  type?: string
  error?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`careers-${id}`} className={labelClass}>
        {label}
      </label>
      <input
        id={`careers-${id}`}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `careers-${id}-error` : undefined}
        className={inputClass}
      />
      {error && (
        <p id={`careers-${id}-error`} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
