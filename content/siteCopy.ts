// ─── Site-wide copy ──────────────────────────────────────────
// Single place to change the studio name.

export const STUDIO_NAME = 'STUDIO_NAME' // TODO: replace with final brand name

export const isAvailable = true // controls StatusBadge visibility

export const availableText = 'Currently taking new projects'

export const footerTagline = 'Custom software that helps businesses run better.'

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

export const socialLinks: Array<{ platform: string; href: string }> = [
  // TODO: add real links
  // { platform: 'LinkedIn', href: 'https://linkedin.com/company/...' },
  // { platform: 'X',        href: 'https://x.com/...' },
]
