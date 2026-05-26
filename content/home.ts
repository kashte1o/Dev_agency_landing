import type { CTAButton } from './types'

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  heading: 'Custom software built to improve business performance',
  bodyParagraphs: [
    'We build custom software for the systems your team uses internally and the digital products your customers interact with.',
    'We help companies replace manual workflows, reduce operational friction, and improve business performance within 6–12 weeks of deployment.',
  ],
  primaryCta: {
    label:   "Let's scope your project",
    href:    '/#start-project',
    variant: 'primary',
  } satisfies CTAButton,
  secondaryCta: {
    label:   'See what we build',
    href:    '/#what-we-build',
    variant: 'ghost',
  } satisfies CTAButton,
}

// ─── Pain ────────────────────────────────────────────────────
export const pain = {
  heading: 'Most businesses run into the same problems',
  costStatement: 'Every month without a fix costs your team hours, multiplies errors, and shows up in how clients experience your business.',
  cards: [
    {
      image: '/images/pain-tabs.webp',
      title: 'Too many tabs open',
      description: 'Information is scattered across tools and platforms. Your team spends more time switching than getting work done.',
    },
    {
      image: '/images/pain-spreadsheets.webp',
      title: 'Running the business in spreadsheets',
      description: "Spreadsheets weren't built to run a business. They break, don't scale, and are risky to share and maintain.",
    },
    {
      image: '/images/pain-clients.webp',
      title: 'Clients get a worse experience than they deserve',
      description: 'Slow updates, manual follow-ups, and clunky processes lead to frustration — for your team and your clients.',
    },
  ],
}

// ─── Chaos → Order ──────────────────────────────────────────
export const chaosOrder = {
  headingLeft:  'From workflow chaos...',
  headingRight: '...to clear, connected systems.',
  // Desktop: 8 words. Same array, mobile slices to first 6.
  chaosWords: [
    'Excel',
    'emails',
    'manual updates',
    'approvals',
    'documents',
    'status calls',
    'copy-paste',
    'lost tasks',
  ],
  pillars: {
    organize: 'Organize',
    automate: 'Automate',
    serve:    'Serve',
  },
}

// ─── Pillars ─────────────────────────────────────────────────
export const pillars = {
  heading: 'We build custom software around your business.',
  cards: [
    {
      icon: '⊞',
      title: 'Organize',
      description: 'Centralize your data and operations.',
      body: 'Admin dashboards and internal tools that give your team clarity and control.',
      href: '/internal-tools',
    },
    {
      icon: '⚡',
      title: 'Automate',
      description: 'Connect steps and eliminate busywork.',
      body: 'Smart automations and integrations that save time and reduce errors.',
      href: '/workflow-automation',
    },
    {
      icon: '◎',
      title: 'Serve',
      description: 'Deliver a better client experience.',
      body: 'Client portals and customer-facing systems that build trust and loyalty.',
      href: '/client-portals',
    },
  ],
}

// ─── Credibility ─────────────────────────────────────────────
export const credibility = {
  heading: 'How we work is what sets the difference.',
  cards: [
    {
      icon: '☑',
      title: 'Scope before build',
      body: 'We define the problem, agree on scope, and align on outcomes before writing code.',
    },
    {
      icon: '⇢',
      title: 'Workflow-first approach',
      body: 'We design around your real processes — then build the right solution.',
    },
    {
      icon: '⊡',
      title: 'Internal and customer-facing systems',
      body: 'We build the tools your team uses and the experiences your clients interact with.',
    },
    {
      icon: '◇',
      title: 'No heavy agency process',
      body: 'Fast communication, lean documentation, practical solutions, no unnecessary layers.',
    },
  ],
}

// ─── Contact section ────────────────────────────────────────
export const contactSection = {
  heading:    'Ready to scope your project?',
  subheading: "Tell us a bit about what you're building. We'll review and get back with a clear plan and next steps.",
  trustSignals: [
    {
      icon: '✓',
      title: 'No commitment',
      body: 'This is just the first step.',
    },
    {
      icon: '✓',
      title: 'Clear reply',
      body: "We'll respond with questions, ideas, and next steps.",
    },
    {
      icon: '✓',
      title: 'Human response',
      body: "You'll hear from a real person, not an automated reply.",
    },
  ],
}
