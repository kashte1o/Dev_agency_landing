// ─── Shared types ────────────────────────────────────────────
// Single source of truth for all content shapes.
// Imported by both /content/*.ts and components.

export type CTAButton = {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export type FAQItem = {
  question: string
  answer: string
}

export type ProcessStep = {
  number: number
  icon: string        // emoji string — never an imported SVG
  title: string
  description: string
  tooltip: string     // microcopy: desktop hover, mobile inline
}

export type FormField = {
  id: string
  name: string
  label: string
  placeholder?: string
  helperText?: string
  type: 'text' | 'email' | 'textarea' | 'select' | 'radio'
  required: boolean
  badge?: 'Optional'
  options?: Array<{ value: string; label: string }>
  rows?: number
}

export type ServicePage = {
  slug: string
  isReady: boolean
  title: string
  h1: string
  subheadline: string
  intent: string
  secondaryIntents: string[]
  shouldRankFor: string[]
  shouldNotRankFor: string[]
  seo: {
    title: string
    description: string
    canonical: string
    ogTitle: string
    ogDescription: string
    noIndex?: boolean
  }
  hero: {
    eyebrow?: string
    primaryCta: CTAButton
    secondaryCta?: CTAButton
  }
  problems: Array<{ title: string; description: string }>
  whatWeBuild: Array<{ title: string; description: string }>
  workflowExamples: Array<{ title: string; before: string; after: string }>
  faq: FAQItem[]
  relatedServices: string[]
  breadcrumbs: Array<{ label: string; href: string }>
}

export type NavItem = {
  label: string
  href: string
}
