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
      description: 'Slow updates, manual follow-ups, and clunky processes lead to frustration, for your team and your clients.',
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
      body: 'Before writing a line of code, we map where your current process actually breaks. We\'ve caught scoping mistakes this way that would have cost clients months of rework.',
    },
    {
      title: '1 Project — 1 Team',
      body: 'Once we assign a team to you, their focus is only on your project. That means faster development and no context switching.',
    },
    {
      title: 'Assembled for you',
      body: 'We draw from a broad network of specialists and technologies, selecting the exact combination your project requires. Not a fixed template, but a setup built around your needs.',
    },
  ],
}

// ─── Pillars ─────────────────────────────────────────────────
export const pillars = {
  heading: 'What we build',
  subline:
    'We build the internal systems, customer platforms, and connective workflows that make your business easier to run',
  cards: [
    {
      title: 'Internal tools & product systems',
      description: 'If your team tracks orders, quotes, or inventory in spreadsheets — this is where to start.',
      body: 'Internal portals, custom business logic, product-side software modules, control panels, quoting engines, pricing logic, planning tools, operational dashboards, and back-office systems built to support the real mechanics of your business.',
      href: '/internal-tools',
    },
    {
      title: 'Customer-facing platforms',
      description: 'If your customers call or email for things they could do themselves in an app — this is for you.',
      body: 'Web platforms, mobile apps, client portals, booking systems, order flows, self-service products, and customer dashboards that help customers request, book, approve, pay, track, and come back without extra friction.',
      href: '/client-portals',
    },
    {
      title: 'Automation & integrations',
      description: 'If your team copies data between tools by hand every day — this is what fixes that.',
      body: 'We connect your CRM, website, spreadsheets, messengers, payment tools, internal software, and third-party platforms so data moves automatically and your team stops chasing updates by hand.',
      href: '/workflow-automation',
    },
  ],
  cta: {
    hidden: true,
    title: 'Not sure where your project fits?',
    body: 'We’ll help you figure it out and scope the right solution.',
    buttonLabel: 'Let’s scope your project →',
    buttonHref: '#start-project',
  },
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
      body: 'We spend time with the people who\'ll use the system — mapping the steps, the handoffs, and the workarounds. What we build reflects how your team actually works.',
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
