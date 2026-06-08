// ─── Site-wide copy ──────────────────────────────────────────
// Single place to change the studio name.

export const STUDIO_NAME = 'Runmade'

export const isAvailable = false // controls StatusBadge visibility

export const availableText = ''

export const footerTagline = 'Custom software that helps businesses run better'

export const footerCopyright = `© ${new Date().getFullYear()} ${STUDIO_NAME}. All rights reserved.`

// Keys for footer items that open a modal instead of navigating.
export type FooterModalKey = 'careers' | 'support' | 'privacy' | 'terms'

export type FooterLink =
  | { label: string; href: string }
  | { label: string; modal: FooterModalKey }

export const footerColumns: {
  services: { heading: string; links: FooterLink[] }
  company: { heading: string; links: FooterLink[] }
  contact: { heading: string; email: string; phone: string; location: string }
  legal: { heading: string; links: FooterLink[] }
} = {
  services: {
    heading: 'Services',
    links: [
      { label: 'What we build',   href: '/#what-we-build' },
      { label: 'Ongoing Support', modal: 'support' },
    ],
  },
  company: {
    heading: 'Company',
    links: [
      { label: 'About',       href: '/#why-different' },
      { label: 'Our Process', href: '/#process' },
      { label: 'Work',        href: '/#proof' },
      { label: 'Careers',     modal: 'careers' },
    ],
  },
  contact: {
    heading: 'Contact',
    email: 'hello@yourstudio.com', // TODO: replace
    phone: '',                     // TODO: replace or remove
    location: 'Remote · Worldwide',
  },
  legal: {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',   modal: 'privacy' },
      { label: 'Terms of Service', modal: 'terms' },
    ],
  },
}

// Placeholder direct-contact details surfaced in the "Ongoing Support" modal.
// TODO: replace with real channels before launch.
export const supportContact = {
  email: 'support@runmade.com',
  whatsappDisplay: '+971 50 123 4567',
  whatsappHref: 'https://wa.me/971501234567',
}

export const ongoingSupportPopup = {
  title: 'Ongoing support',
  body: "Already working with us, or need a hand with something that's live? Reach us directly — a real person replies, no ticket queue.",
  emailLabel: 'Email us',
  whatsappLabel: 'Message on WhatsApp',
  closeLabel: 'Close',
}

export const careersPopup = {
  title: 'Work with us',
  body: "Tell us where you fit. If there's a match, we'll reach out.",
  closeLabel: 'Close',
  submitLabel: 'Send application',
  note: 'No automated replies. A real person reviews every application.',
  successTitle: 'Application received',
  successBody: "Thanks for reaching out — we'll be in touch if there's a fit.",
  fields: {
    name:       { label: 'Your name', placeholder: 'Jane Doe' },
    email:      { label: 'Email', placeholder: 'you@example.com' },
    role:       { label: 'Role you’re after', placeholder: 'e.g. Frontend Engineer' },
    experience: { label: 'Years of experience', placeholder: 'e.g. 4 years with React / TypeScript' },
    salary:     { label: 'Salary expectation', placeholder: 'e.g. $4,000 / month' },
    message:    { label: 'Anything else? (optional)', placeholder: 'Portfolio link, availability, a few words about you…' },
  },
  errors: {
    name: 'Please enter your name.',
    email: 'Please enter a valid email address.',
    role: 'Please tell us the role you’re after.',
  },
}

// Placeholder legal copy — replace `body` with the real documents (rendered
// as a scrollable modal). Kept minimal so no link 404s before text lands.
export const legalPopups: Record<'privacy' | 'terms', { title: string; body: string }> = {
  privacy: {
    title: 'Privacy Policy',
    body: `Our full Privacy Policy is being finalized.\n\nIn short: the only personal data we collect is what you submit through our contact and application forms (name, email, WhatsApp, and the details you choose to share). We use it solely to reply to you. We don't sell it.\n\nFor any data request, email ${supportContact.email}.`,
  },
  terms: {
    title: 'Terms of Service',
    body: `Our full Terms of Service are being finalized.\n\nBy using this site you agree to use it lawfully and accept that all content and code shown here remain our property unless agreed otherwise in a signed contract.\n\nQuestions? Email ${supportContact.email}.`,
  },
}

export const stillHaveQuestionsPopup = {
  title: 'Ask us directly',
  body: 'Send your question. A real person will reply quickly.',
  questionLabel: 'Your question',
  questionPlaceholder: 'What would you like to clarify?',
  emailLabel: 'Email',
  emailPlaceholder: 'you@example.com',
  messengerLabel: 'WhatsApp or Telegram',
  messengerPlaceholder: '+971 XX XXX XXXX or @username',
  contactHint: 'You only need to fill in one contact method.',
  submitLabel: 'Send question',
  note: 'No automated replies. No sales pressure.',
  closeLabel: 'Close',
  successTitle: 'Thanks',
  successBody: "We'll get back to you within 24 hours.",
  errors: {
    question: 'Please enter your question.',
    contactRequired: 'Please leave an email or WhatsApp/Telegram so we can reply.',
    emailFormat: 'Please enter a valid email address.',
    messengerFormat: 'Please enter a valid WhatsApp number or Telegram username.',
  },
}

export const socialLinks: Array<{ platform: string; href: string }> = [
  // TODO: add real links
  // { platform: 'LinkedIn', href: 'https://linkedin.com/company/...' },
  // { platform: 'X',        href: 'https://x.com/...' },
]
