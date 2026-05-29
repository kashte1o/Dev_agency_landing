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
    label:   'See client results',
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

// ─── Why Different ───────────────────────────────────────────
export const whyDifferent = {
  heading: 'What makes us different',
  cards: [
    {
      title: 'Product-minded',
      body: 'Our senior teams focus on your business outcomes. We think about the "why" not just the "how," and that ultimately leads to a better product.',
    },
    {
      title: '1 Project — 1 Team',
      body: 'Once we assign a team to you, their focus is only on your project. That means faster development and no context switching.',
    },
    {
      title: 'Assembled for you',
      body: 'We draw from a broad network of specialists and technologies, selecting the exact combination your project requires — not a fixed template, but a setup built around your needs.',
    },
  ],
}

// ─── Pillars ─────────────────────────────────────────────────
export const pillars = {
  heading: 'What we build.',
  cards: [
    {
      icon: '⊞',
      title: 'Internal tools & dashboards',
      description: 'One place for your team to run the business.',
      body: 'Job tracking, approval workflows, operational dashboards — built around how your team actually works, not around a generic SaaS template.',
      href: '/internal-tools',
    },
    {
      icon: '⚡',
      title: 'Workflow automation',
      description: 'Cut the manual work out of your operations.',
      body: 'Connect your tools, automate repetitive steps, and free your team from copy-paste tasks, status updates, and manual handoffs.',
      href: '/workflow-automation',
    },
    {
      icon: '◎',
      title: 'Client portals & web apps',
      description: 'A better way for clients to interact with you.',
      body: 'Self-serve portals, order systems, and customer-facing apps that reduce support load and give clients the visibility they keep asking for.',
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
