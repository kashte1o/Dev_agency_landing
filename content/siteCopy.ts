// ─── Site-wide copy ──────────────────────────────────────────
// Single place to change the studio name.

export const STUDIO_NAME = 'Runmade'

export const isAvailable = false // controls StatusBadge visibility

export const availableText = ''

export const footerTagline = 'Custom software that helps businesses run better'

export const footerCopyright = `© ${new Date().getFullYear()} ${STUDIO_NAME}. All rights reserved.`

export const footerColumns = {
  services: {
    heading: 'Services',
    links: [
      { label: 'Internal Tools',        href: '/internal-tools' },
      { label: 'Workflow Automation',    href: '/workflow-automation' },
      { label: 'Client Portals',         href: '/client-portals' },
      { label: 'Integrations',           href: '/workflow-automation' },
      { label: 'Ongoing Support',        href: '/contact' },
    ],
  },
  company: {
    heading: 'Company',
    links: [
      { label: 'About',       href: '/#about' },
      { label: 'Our Process', href: '/#process' },
      { label: 'Work',        href: '/case-studies' },
      { label: 'Careers',     href: '/contact' },
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
      { label: 'Privacy Policy',  href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
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
  successBody: "We'll reply directly.",
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
