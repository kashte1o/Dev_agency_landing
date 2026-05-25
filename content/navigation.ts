import type { NavItem, CTAButton } from './types'

export const navLinks: NavItem[] = [
  { label: 'Services',  href: '/#what-we-build' },
  { label: 'Process',   href: '/#process' },
  { label: 'Work',      href: '/case-studies' },
  { label: 'About',     href: '/#about' },
  { label: 'FAQ',       href: '/#faq' },
  { label: 'Resources', href: '/resources' },
]

export const serviceDropdown: NavItem[] = [
  { label: 'Internal Tools',            href: '/internal-tools' },
  { label: 'Workflow Automation',        href: '/workflow-automation' },
  { label: 'Client Portals',             href: '/client-portals' },
  { label: 'Customer-Facing Software',   href: '/customer-facing-software' },
  { label: 'Booking & Request Systems',  href: '/booking-request-systems' },
  { label: 'Dashboards',                 href: '/dashboards' },
  { label: 'AI Workflows',               href: '/ai-workflows' },
  { label: 'Product Rescue',             href: '/product-rescue' },
]

export const navCta: CTAButton = {
  label: "Let's talk",
  href: '/#start-project',
  variant: 'primary',
}
