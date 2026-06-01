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

// ─── Projects ───────────────────────────────────────────────
export const projects = {
  heading: "Projects we've worked on",
  subline: 'A few examples of what we built and why it mattered.',
  outcomesLabel: 'Outcomes',
  cases: [
    {
      tag: 'Manufacturing · Internal system',
      title: 'From specialist-only calculations to regulator-ready reports',
      body: 'We built a guided wind-flow calculation system for a production facility where routine reports depended on engineering staff. Non-specialist employees can now enter facility data, run calculations, and prepare regulator-ready reports through a clear internal workflow.',
      outcomes: [
        'Regulatory review passed',
        '60% less manual calculation work',
        'Reports prepared in under one working day',
      ],
    },
    {
      tag: 'Logistics · Customer platform',
      title: 'From status calls to self-service shipment tracking',
      body: 'We built a customer platform, mobile app, and mini app for a logistics company whose clients had to call managers or use an outdated website to track shipments. Customers can now see delivery status, documents, and key order events without contacting support.',
      outcomes: [
        '45% fewer status-related support calls',
        '1.5× higher customer retention',
        '25% revenue growth one month after launch',
      ],
    },
    {
      tag: 'Real estate · Automation',
      title: 'From scattered operations to visible lead flow',
      body: 'We built an automation system for a real estate agency where leads, viewings, documents, and follow-ups were spread across disconnected tools. The team now manages lead intake, property matching, task assignment, document flow, and manager dashboards in one place.',
      outcomes: [
        '30% faster lead processing',
        '40% fewer manual follow-ups',
        'Clear lead statuses across the team',
      ],
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
      description: 'Software behind how your product, service, or operation works.',
      body: 'Internal portals, custom business logic, product-side software modules, control panels, quoting engines, pricing logic, planning tools, operational dashboards, and back-office systems built to support the real mechanics of your business.',
      href: '/internal-tools',
    },
    {
      title: 'Customer-facing platforms',
      description: 'Digital products your customers use to take action.',
      body: 'Web platforms, mobile apps, client portals, booking systems, order flows, self-service products, and customer dashboards that help customers request, book, approve, pay, track, and come back without extra friction.',
      href: '/client-portals',
    },
    {
      title: 'Automation & integrations',
      description: 'The connective layer between your systems.',
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
