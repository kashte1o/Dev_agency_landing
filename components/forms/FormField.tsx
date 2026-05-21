import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import type { FormField as FormFieldType } from '@/content/types'

interface FieldWrapperProps {
  field: FormFieldType
  children: React.ReactNode
}

export function FieldWrapper({ field, children }: FieldWrapperProps) {
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
      {field.helperText && (
        <p className="text-xs text-text-secondary">{field.helperText}</p>
      )}
    </div>
  )
}

const inputBase =
  'w-full rounded-[var(--radius-input)] border border-border bg-bg-surface px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50'

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  field: FormFieldType
}

export function TextInput({ field, ...props }: TextInputProps) {
  return (
    <FieldWrapper field={field}>
      <input
        id={field.id}
        name={field.name}
        type={field.type === 'email' ? 'email' : 'text'}
        placeholder={field.placeholder}
        required={field.required}
        className={inputBase}
        {...props}
      />
    </FieldWrapper>
  )
}

interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  field: FormFieldType
}

export function TextareaInput({ field, ...props }: TextareaInputProps) {
  return (
    <FieldWrapper field={field}>
      <textarea
        id={field.id}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        rows={field.rows ?? 4}
        className={cn(inputBase, 'resize-y min-h-[100px]')}
        {...props}
      />
    </FieldWrapper>
  )
}

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  field: FormFieldType
}

export function SelectInput({ field, ...props }: SelectInputProps) {
  return (
    <FieldWrapper field={field}>
      <select
        id={field.id}
        name={field.name}
        required={field.required}
        className={cn(inputBase, 'cursor-pointer appearance-none')}
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
