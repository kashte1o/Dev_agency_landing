import type { CTAButton } from './types'

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  heading:    'Software that makes your business easier to run.',
  subheading: 'We build custom tools shaped around how your business actually works — so your team spends less time fighting systems and more time doing the work.',
  primaryCta: {
    label:   'Scope your project',
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
      icon: '◈',
      title: 'Clear outcomes',
      body: "We'll reply with questions, ideas, and a plan.",
    },
    {
      icon: '◉',
      title: 'Human response',
      body: "You'll hear from a real person, not an automated reply.",
    },
  ],
}
