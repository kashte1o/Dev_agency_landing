'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'ghost-dark'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  loading?: boolean
  href?: string
  children: React.ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer'

const variants: Record<ButtonVariant, string> = {
  primary:
    'rounded-[var(--radius-btn)] bg-accent text-white px-5 py-2.5 relative overflow-hidden duration-[250ms] ease-in-out hover:bg-[#60A5FA] hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]',
  secondary:
    'rounded-[var(--radius-btn)] border border-border bg-bg-surface text-text-primary hover:bg-bg-subtle px-5 py-2.5 duration-150',
  ghost:
    'rounded-[var(--radius-btn)] text-text-secondary hover:text-text-primary hover:bg-bg-subtle px-4 py-2 duration-150',
  'ghost-dark':
    'rounded-[var(--radius-btn)] border border-white/25 text-white/80 hover:bg-white/10 hover:border-white/40 hover:text-white px-5 py-2.5 duration-150',
}

function PrimaryButton({
  children,
  className,
  loading,
  ...props
}: Omit<ButtonProps, 'variant' | 'href'>) {
  const ref = useRef<HTMLButtonElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const glowX = useTransform(mouseX, (v) => `${v}px`)
  const glowY = useTransform(mouseY, (v) => `${v}px`)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <button
      ref={ref}
      className={cn(base, variants.primary, 'group', className)}
      onMouseMove={handleMouseMove}
      disabled={loading || props.disabled}
      {...props}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(80px circle at ${glowX} ${glowY}, rgba(255,255,255,0.18), transparent 70%)`,
        }}
      />
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
          Loading…
        </span>
      ) : (
        children
      )}
    </button>
  )
}

export function Button({
  variant = 'primary',
  loading,
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    )
  }

  if (variant === 'primary') {
    return (
      <PrimaryButton loading={loading} className={className} {...props}>
        {children}
      </PrimaryButton>
    )
  }

  return (
    <button
      className={cn(base, variants[variant], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {children}
    </button>
  )
}
