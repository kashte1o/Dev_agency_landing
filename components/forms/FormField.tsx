import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import type { FormField as FormFieldType } from '@/content/types'

interface FieldWrapperProps {
  field: FormFieldType
  children: React.ReactNode
  error?: string
}

export function FieldWrapper({ field, children, error }: FieldWrapperProps) {
  const errorId = `${field.id}-error`
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <label
          htmlFor={field.id}
          className="text-sm font-medium text-text-primary"
        >
          {field.label}
          {field.required && (
            <span className="ml-1 text-accent" aria-hidden>*</span>
          )}
        </label>
        {field.badge && <Badge variant="optional">{field.badge}</Badge>}
      </div>
      {children}
      {field.helperText && !error && (
        <p className="text-xs text-text-secondary">{field.helperText}</p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

const inputBase =
  'w-full rounded-[var(--radius-input)] border border-border bg-bg-surface px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50'

const inputError =
  'border-red-400 focus:border-red-400 focus:ring-red-400'

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  field: FormFieldType
  error?: string
}

export function TextInput({ field, error, ...props }: TextInputProps) {
  const errorId = `${field.id}-error`
  const inputType = field.type === 'email' ? 'email' : field.type === 'tel' ? 'tel' : 'text'
  return (
    <FieldWrapper field={field} error={error}>
      <input
        id={field.id}
        name={field.name}
        type={inputType}
        placeholder={field.placeholder}
        required={field.required}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? true : undefined}
        className={cn(inputBase, error && inputError)}
        {...props}
      />
    </FieldWrapper>
  )
}

interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  field: FormFieldType
  error?: string
}

export function TextareaInput({ field, error, ...props }: TextareaInputProps) {
  const errorId = `${field.id}-error`
  return (
    <FieldWrapper field={field} error={error}>
      <textarea
        id={field.id}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        rows={field.rows ?? 4}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? true : undefined}
        className={cn(inputBase, 'resize-y min-h-[100px]', error && inputError)}
        {...props}
      />
    </FieldWrapper>
  )
}

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  field: FormFieldType
  error?: string
}

export function SelectInput({ field, error, ...props }: SelectInputProps) {
  const errorId = `${field.id}-error`
  return (
    <FieldWrapper field={field} error={error}>
      <select
        id={field.id}
        name={field.name}
        required={field.required}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? true : undefined}
        className={cn(inputBase, 'cursor-pointer appearance-none', error && inputError)}
        {...props}
      >
        {field.options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  )
}
