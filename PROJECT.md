# Dev Agency — Project Document v1
*Last updated: 2026-05-21*

---

## 0. Quick reference

| Item | Value |
|------|-------|
| Studio name | `STUDIO_NAME` (placeholder — single export in `content/siteCopy.ts`) |
| Primary CTA label | "Scope your project" |
| Primary CTA href | `/#start-project` |
| Stack | Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion |
| Target audience | Non-technical SMB decision makers, age 27–60 |
| Core positioning | Custom software shaped around real business workflows |
| Main commercial message | "Software that makes your business easier to run." |

---

## 1. Project definition

### What this studio does

Builds **custom software for SMBs** that makes the business easier to run. The studio does not sell templates, subscriptions, or generic SaaS — every engagement is shaped around a specific business workflow.

### What it does NOT do

- Does not build speculative products with no business process behind them (though client-driven MVPs are in scope)
- Does not take on projects just because they are technically interesting
- Does not clone SaaS apps "because they need a cheaper version"

### Client profile (primary)

- Business owner or operations lead at an SMB
- Has a specific operational problem they can describe
- Has outgrown spreadsheets, generic tools, or manual processes
- Has budget and urgency
- **Not** a developer, not looking for a technology partner for its own sake

### Studio positioning in one sentence

> "We build custom software when off-the-shelf tools stop working — shaped around how your business actually runs."

---

## 2. Communication strategy

### Audience segment

Non-technical SMB decision makers (27–60). They understand their business; they do not understand software. They are skeptical of agencies because most agencies talk about technology, not about outcomes.

### Tone

- Warm but direct. Not casual, not corporate.
- Speaks to the business problem first, technology second (or not at all).
- No jargon: no "full-stack", no "microservices", no "agile sprints" in marketing copy.
- Confident without being arrogant.
- Short sentences. No filler. Every sentence earns its place.

### What the site must do

1. Qualify the visitor (right-fit clients recognize themselves immediately)
2. Build credibility without fake proof (no testimonials, no logos, no invented metrics)
3. Get the form fill

### What the site must NOT do

- Not try to explain how software is built
- Not show a portfolio of generic screenshots
- Not use agency clichés ("passionate team", "cutting-edge", "end-to-end solutions")
- Not position as a commodity vendor competing on price

---

## 3. Offer architecture

### Three service pillars

| Pillar | Verb | What it means |
|--------|------|----------------|
| **Organize** | — | Internal tools, dashboards, admin systems that bring order to operations |
| **Automate** | — | Workflow automation, integrations, reducing manual repetition |
| **Serve** | — | Customer-facing software, client portals, booking systems |

All three pillars are equally important. "Serve" is not secondary to the other two.

### Engagement types

- **Workshop only** — scoping session, no build commitment
- **MVP build** — single workflow, defined scope, fixed timeline
- **Full build** — multi-workflow system, larger scope
- **Ongoing** — post-launch maintenance, iteration

### Price signal

Mid-to-high. Not bottom of market. Not enterprise. The site signals this through quality of execution, not through explicit pricing (no pricing page).

---

## 4. Homepage narrative

### Narrative arc (section order)

```
Hero
  ↓ "Here's why you need this"
Pain (3 problems)
  ↓ "Here's what we actually do"
What we build (3 pillars)
  ↓ "Here's how it works"
Process (lean, 4 steps)
  ↓ "Here's why we're different" (lean transition — pending copy approval)
Credibility / Differentiation
  ↓ "Let's talk"
Contact / Lead form (#start-project)
Footer
```

### Hero section

**H1:** "Software that makes your business easier to run."
**Subheadline:** "We build custom tools shaped around how your business actually works — so your team spends less time fighting systems and more time doing the work."
**Primary CTA:** "Scope your project" → `/#start-project`
**Secondary CTA:** "See what we build" → `/#what-we-build` (ghost button, less visual weight)

No hero image. No background video. No animated particles. Background: dark with radial gradient in accent color (subtle).

### Pain section

Three problem cards. Each describes a real operational situation, not a software problem.

1. **"Your team has too many tabs open"** — juggling between tools that don't talk to each other
2. **"You're managing the business in spreadsheets"** — manual processes that break when the business grows
3. **"Your clients are getting a worse experience than they deserve"** — customer-facing friction that costs you deals

### What we build section

Three cards, one per pillar:

| Card | Title | Description |
|------|-------|-------------|
| Organize | "Internal tools that bring order" | Dashboards, admin panels, internal ops software |
| Automate | "Automated workflows that scale" | Integration, repetition elimination, business logic |
| Serve | "Customer-facing software that wins business" | Portals, booking systems, client-side apps |

Each card links to the relevant service page cluster.

### Process section (4 steps)

1. **Understand** — We learn your workflow before writing a line of code
2. **Define** — We scope exactly what to build and why
3. **Build** — We build it. Transparently, with you in the loop
4. **Ship** — We deliver working software, then stay available

### Credibility section

No testimonials. No logos. No invented metrics. Instead:
- A short paragraph explaining the studio's philosophy (workflow-first)
- Optional: 1–2 specific statements about how they work (e.g., "We scope every project before committing to a timeline")

The lean transition copy between Pain → Credibility is **still pending approval** (user flagged it as "too heavy" — needs to be rewritten shorter).

### Lead form (#start-project)

See Section 10 (Conversion path and lead form).

---

## 5. Site structure

### Routes

```
/                             — Homepage
/internal-tools               — Service page
/workflow-automation          — Service page
/client-portals               — Service page
/customer-facing-software     — Service page
/booking-request-systems      — Service page
/dashboards                   — Service page
/ai-workflows                 — Service page
/product-rescue               — Service page
/case-studies                 — List page (noindex until real cases exist)
/case-studies/[slug]          — MDX case study (noindex individually until populated)
/contact                      — Standalone contact page
/thank-you                    — Post-form submission confirmation
/sitemap.xml                  — Auto-generated
/robots.txt                   — Auto-generated
```

### Navigation

```
Logo → /
Услуги (dropdown) →
  Internal tools
  Workflow automation
  Client portals
  Customer-facing software
  Booking & request systems
  Dashboards
  AI workflows
  Product rescue
О нас → /#about (or /about if needed later)
CTA button → /#start-project
```

Mobile: hamburger. Dropdown becomes accordion on mobile.

---

## 6. SEO architecture

### Keyword strategy

Each service page targets one primary keyword cluster. No two pages compete for the same intent.

| Page | Primary intent | Should NOT rank for |
|------|----------------|---------------------|
| /internal-tools | "custom internal tools for business" | generic "web app development" |
| /workflow-automation | "business workflow automation software" | "workflow management SaaS" |
| /client-portals | "custom client portal development" | "white-label portal software" |
| /customer-facing-software | "customer-facing software development" | "mobile app development" |
| /booking-request-systems | "custom booking system development" | "Calendly alternatives" |
| /dashboards | "custom dashboard development" | "BI software" / "Tableau alternatives" |
| /ai-workflows | "AI workflow automation for business" | "AI chatbot development" |
| /product-rescue | "fix broken software project" | "software testing services" |

### SEO rules (immutable)

1. Every page has a unique `<title>` and `<meta description>` — no defaults propagated down
2. Canonical URLs are explicit on all pages
3. No two pages share an H1
4. Service pages are not noindex unless `isReady: false` in content
5. `/case-studies` and all slugs are noindex until real content exists
6. Structured data on every page: Organization + WebSite on homepage; Service schema on service pages; BreadcrumbList on all inner pages; FAQPage on pages with FAQ sections
7. Internal links: service pages link to each other via "Related services" component; homepage links to all service pages
8. Sitemap auto-generated from route structure — excludes noindex pages

### URL structure

- Flat where possible (no `/services/internal-tools` nesting)
- All lowercase, hyphen-separated
- No trailing slashes

---

## 7. Content system architecture

### Rule: components never hardcode copy

All text lives in `/content/*.ts` files. Components receive data as props. This enables:
- Copy edits without touching components
- A/B testing copy without touching components
- Future CMS migration if needed (swap content files for API calls)

### Content files

| File | Contains |
|------|----------|
| `content/navigation.ts` | Nav links, CTA button, mobile menu |
| `content/seo.ts` | Site-level SEO defaults (og:image, twitter handle, etc.) |
| `content/home.ts` | Homepage section content (hero, pain, pillars, process, credibility) |
| `content/services.ts` | Service card data used on homepage |
| `content/process.ts` | Process steps (shared between homepage and service pages) |
| `content/faq.ts` | FAQ items keyed by page slug |
| `content/siteCopy.ts` | Studio name, footer, legal copy, shared UI strings |
| `content/servicePages.ts` | Full data for all 8 service pages |
| `content/projectExamples.ts` | Future case study teasers (not on homepage v1) |
| `content/forms.ts` | All form fields, labels, placeholders, error messages |

### TypeScript shapes (approved)

```typescript
// CTAButton — used everywhere
type CTAButton = {
  label: string
  href: string
  anchor?: string
  variant?: "primary" | "secondary" | "ghost"
}

// ServicePage — one entry per service page in servicePages.ts
type ServicePage = {
  slug: string
  isReady: boolean
  title: string
  h1: string
  subheadline: string
  intent: string                      // primary SEO intent
  secondaryIntents: string[]
  shouldRankFor: string[]
  shouldNotRankFor: string[]
  differentiationNotes: string
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
  process: Array<{ title: string; description: string }>
  faq: FAQItem[]
  relatedServices: string[]           // slugs
  breadcrumbs: Array<{ label: string; href: string }>
  anchors: {
    startProject: string
    whatWeBuild: string
    howWeWork: string
    faq: string
  }
}

// FAQItem
type FAQItem = {
  question: string
  answer: string
}

// FormField
type FormField = {
  id: string
  name: string
  label: string
  placeholder?: string
  helperText?: string
  type: "text" | "email" | "textarea" | "select" | "radio"
  required: boolean
  badge?: "Optional"
  options?: Array<{ value: string; label: string }>
  rows?: number
}
```

### Studio name convention

```typescript
// content/siteCopy.ts
export const STUDIO_NAME = "STUDIO_NAME" // ← single place to replace
```

Used everywhere else as an import. Never hardcoded in components.

---

## 8. Visual system

### Color tokens

```css
--bg-base:         #F7F8FA   /* page background */
--bg-surface:      #FFFFFF   /* cards, inputs */
--bg-subtle:       #F3F1EC   /* warm section breaks */
--bg-dark:         #0B1020   /* hero, footer, dark sections */
--text-primary:    #111827
--text-secondary:  #6B7280
--accent:          #3B82F6   /* primary blue — CTAs, links, focus rings */
--accent-green:    #A3E635   /* ONLY for status dots and badges — never for text or large fills */
--border:          #E5E7EB
```

#### Token usage rules

- `--accent-green` is used exclusively for: status indicators ("available"), small badges. Never for buttons, text links, or large fills.
- Light sections use `--bg-base` or `--bg-subtle` (warm cream for visual breathing room)
- Dark sections (`--bg-dark`): hero, footer. Maximum 2 dark sections on any page.
- Cards always `--bg-surface` with `--border` border.

### Typography

**Fonts:** Geist Sans (body, UI) + Geist Mono (code-like accents, process numbers)

```
Display (H1):   clamp(2.5rem, 5vw, 4rem) / 800 weight / -0.03em tracking
H2:             2rem / 700 weight / -0.02em tracking
H3:             1.25rem / 600 weight
Body:           1rem / 400 weight / 1.7 line-height
Small:          0.875rem / 400 weight
Mono accent:    0.875rem / Geist Mono / letter-spacing: 0.05em / uppercase
```

Type scale is set via Tailwind custom tokens, not arbitrary values.

### Spacing system

Base unit: `4px`. All spacing values are multiples of 4. Section padding: `120px` vertical on desktop, `80px` on mobile.

### Border radius

- Cards: `12px`
- Buttons: `8px`
- Inputs: `6px`
- Tags/badges: `4px`

### Shadows

Minimal. Cards: `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`. No dramatic box shadows.

### Motion

**Philosophy:** Every animation must explain meaning, not decorate.

**Approved animation patterns:**

| Pattern | Trigger | What it communicates |
|---------|---------|----------------------|
| Fade + slide up (24px) | Scroll into view | Content arriving, ready |
| Card lift on hover (−4px Y) | Hover | Clickable, responsive |
| Button opacity on hover (0.85) | Hover | Interactive |
| Process line draw | Scroll into process section | Steps connecting |
| Staggered children | Parent enters viewport | Items in a sequence |

**prefers-reduced-motion:** All transform-based animations are disabled. Opacity-only fallback is the minimum — no motion at all is also acceptable.

**Framer Motion variants pattern:**

```typescript
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}
// Always wrapped in: if (prefersReducedMotion) → opacity only variant
```

---

## 9. Component architecture

### Directory structure

```
/app
  layout.tsx
  page.tsx
  /[service-slug]/page.tsx  (8 pages)
  /case-studies/page.tsx
  /case-studies/[slug]/page.tsx
  /contact/page.tsx
  /thank-you/page.tsx
  not-found.tsx
  sitemap.ts
  robots.ts

/components
  /seo
    JsonLd.tsx              — outputs <script type="application/ld+json">
    Breadcrumbs.tsx         — renders + outputs BreadcrumbList schema
  /layout
    Header.tsx
    Footer.tsx
    MobileNav.tsx
  /ui
    Button.tsx              — renders CTAButton shape
    Card.tsx
    Badge.tsx
    SectionHeading.tsx
  /sections
    Hero.tsx
    PainSection.tsx
    PillarsSection.tsx
    ProcessSection.tsx
    CredibilitySection.tsx
    ContactSection.tsx      — contains LeadForm
  /service
    ServicePageTemplate.tsx — renders any ServicePage shape
    RelatedServices.tsx
    SEOFAQ.tsx              — FAQ accordion + FAQPage schema
  /forms
    LeadForm.tsx
    FormField.tsx

/content
  (all .ts files — see Section 7)

/lib
  seo.ts                    — generateMetadata helpers

/styles
  globals.css               — Tailwind base + CSS custom properties
```

### Service page template

All 8 service pages use `ServicePageTemplate.tsx`. The page file only:
1. Imports the content entry for its slug
2. Passes it to `<ServicePageTemplate data={...} />`
3. Exports `generateMetadata` using the seo field

No business logic in page files. All rendering in the template component.

---

## 10. Conversion path and lead form

### Anchor

`#start-project` — placed at the top of the contact/lead form section on the homepage. All primary CTAs across the site link here. Also used as a campaign landing anchor for paid ads (Meta Ads).

### Form fields

| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | Name | text | Yes | Placeholder: "Your name" |
| 2 | Email | email | Yes | Placeholder: "your@email.com" |
| 3 | Business type | select | Yes | Options: Retail / Professional services / Healthcare / Logistics / Other |
| 4 | What's the problem? | textarea | Yes | 4 rows. Placeholder: "Describe what's not working, in plain language." |
| 5 | Have you tried solving this before? | radio | Yes | Options: Yes — with software / Yes — manually / No, we haven't tried yet |
| 6 | Rough budget range | select | No | Badge: "Optional". Options: Under $10k / $10k–$30k / $30k–$80k / $80k+ / Not sure yet |

### Form states

- **Idle** — default render
- **Loading** — submit button shows spinner, fields disabled
- **Success** — form replaced by confirmation message, no page reload
- **Error** — inline error message below submit button

No backend integration yet. Form state is UI-only with a clear `// TODO: wire up to backend` comment. No fake success — success state should only trigger when/if a real endpoint confirms.

### Post-submission

Redirect to `/thank-you` page. This page:
- Confirms receipt
- Sets expectation ("We'll be in touch within 1 business day")
- Has no navigation pressure (no "book a call" redirect)
- Is excluded from sitemap

---

## 11. Visual direction

### Overall aesthetic

**Not:** dark brutalism, SaaS dashboard aesthetic, "Web3 agency" look, parallax-heavy, full-bleed video backgrounds.

**Yes:** Clean editorial. Warm and light in body sections. Dark and grounded in hero/footer. Feels premium without feeling expensive-for-its-own-sake.

### Section rhythm

Alternating light/warm/light sections with dark bookends (hero, footer). Breaks `--bg-subtle` (#F3F1EC, warm cream) are used to visually separate major sections without hard borders.

### What NOT to show

- No team photos
- No stock photos of "people looking at laptops"
- No abstract tech illustrations (circuit boards, networks)
- No generic "hero image"
- No client logos (not until real client permission is given)
- No testimonials (not until real testimonials are collected)

### What to show instead

- The process (clearly, linearly)
- The problems (specifically, in client language)
- The outcomes (in business terms, not tech terms)
- The form (directly, without friction)

---

## 12. Visual metaphors

### Primary metaphor: Chaos → Structure → Software

The site's visual narrative mirrors what the studio does for clients: things start messy (pain section), resolve into clarity (what we build), and operate smoothly (process section).

**Implementation:**

| Section | Visual treatment |
|---------|-----------------|
| Pain | Slightly disorganized layout, warm amber/orange accent, items feel "heavy" |
| Pillars | Clean grid, cards align, breathing room returns |
| Process | Linear progression, connecting line drawn on scroll (SVG animation) |
| Form | Calm, centered, minimal — arriving at resolution |

### Secondary metaphors (approved for use)

**1. The connected process line**
- *Reason:* Makes abstract "4 steps" feel like a real path
- *Implementation:* SVG line between step nodes, drawn on scroll (Framer Motion path animation)
- *Where:* Process section
- *Decision:* **Include**

**2. Workflow before/after**
- *Reason:* Makes value concrete without screenshots or testimonials
- *Implementation:* Two-column layout per service page. Left: "Before (what clients describe)". Right: "After (what they have)". Plain text, no graphics needed.
- *Where:* Service pages only (not homepage)
- *Decision:* **Include**

**3. Status dot / "Available for projects"**
- *Reason:* Creates soft urgency without fake scarcity
- *Implementation:* Small pulsing green dot (`--accent-green`) + "Currently taking new projects" text in header or hero area. Removed when not taking projects.
- *Where:* Header or hero eyebrow line
- *Decision:* **Include** (controlled via siteCopy.ts boolean `isAvailable`)

**4. Geist Mono for process numbers**
- *Reason:* Monospace numerals feel systematic, like a build log or a checklist — reinforces that this studio is methodical
- *Implementation:* Process step numbers in Geist Mono, larger size, low opacity, positioned as background numerals
- *Where:* Process section
- *Decision:* **Include**

**5. Warm section breaks as "breathing room"**
- *Reason:* Mirrors what the studio provides — space between chaos and clarity. Also helps the 27–60 audience: warm tones are less fatiguing than continuous cold blue/dark.
- *Implementation:* `--bg-subtle` (#F3F1EC) on alternating sections
- *Where:* Pain section background, possibly credibility section
- *Decision:* **Include**

### Chaos → Order transition animation (approved concept, implementation TBD)

**Problem identified (Step 16 review):** The Chaos → Structure → Software metaphor — the central narrative — is not visually expressed. Pain section is visually calm and ordered, so the transition to pillars has no contrast. The metaphor exists only in copy, not in design.

**Approved concept:** Between the pain section and pillars section, a word-scatter animation bridges the two.

- 15–20 words appear scattered across the section — real business pain words in client language: "Excel", "вручную", "звонки", "снова переделывать", "таблицы", "не работает", etc.
- Words have varying opacity and size — not pure chaos, but visual density and tension
- Animation: words converge and collapse in 0.8–1.2 seconds into three words: **Organize. Automate. Serve.**
- Pillar cards then appear (clip-path reveal)
- The animation IS the metaphor — chaos becoming structure, visually, not just described

**Constraints:**
- Mobile: static — three words already in place, no scatter
- `prefers-reduced-motion`: static final state only
- Words must be in client language, not tech jargon
- Duration hard cap: 1.2s — never delay comprehension
- Defined in `content/home.ts` as `chaosWords: string[]` array

**Status:** Concept approved. Visual treatment of pain section (making it feel "heavier" before the transition) also to be addressed in implementation — tighter line-height, slightly denser layout, no hover effects on pain cards.

### Metaphors discussed but not included (v1)

- **Inline demos / interactive previews** — Too complex for v1, requires real product screenshots. Revisit for v2.
- **Code-like syntax in hero** — Risks alienating non-technical audience. Excluded.

---

## 13. Technical implementation details

### Next.js setup

- App Router (not Pages Router)
- TypeScript strict mode
- Turbopack in development
- `next/font` for Geist (no external font requests)

### Tailwind config additions

```typescript
// tailwind.config.ts (relevant additions)
theme: {
  extend: {
    colors: {
      'bg-base':      '#F7F8FA',
      'bg-surface':   '#FFFFFF',
      'bg-subtle':    '#F3F1EC',
      'bg-dark':      '#0B1020',
      'text-primary': '#111827',
      'text-secondary':'#6B7280',
      'accent':       '#3B82F6',
      'accent-green': '#A3E635',
      'border':       '#E5E7EB',
    },
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'monospace'],
    },
  }
}
```

### Structured data schemas

| Page | Schemas |
|------|---------|
| Homepage | Organization, WebSite |
| All service pages | Service, BreadcrumbList |
| Pages with FAQ | FAQPage |
| Case studies | Article, BreadcrumbList |

All schemas rendered via `<JsonLd />` component as `<script type="application/ld+json">`.

### Sitemap and robots

- `app/sitemap.ts` — auto-generated, excludes noindex pages and `/thank-you`
- `app/robots.ts` — disallows `/thank-you`, allows all else
- Canonical URLs use `process.env.NEXT_PUBLIC_SITE_URL` — required env var

### Environment variables

```
NEXT_PUBLIC_SITE_URL=https://[domain]    # Required for canonical URLs and OG tags
```

No other env vars needed until form backend is added.

---

## 14. Implementation order

When building, follow this sequence:

1. **Initialize project** — `npx create-next-app@latest` with TypeScript, Tailwind, App Router
2. **Design tokens** — `tailwind.config.ts`, `globals.css` with CSS custom properties
3. **Content files** — all files in `/content/` with correct TypeScript shapes (no UI yet)
4. **Layout** — `Header`, `Footer`, `MobileNav`
5. **Homepage sections** — in narrative order: Hero → Pain → Pillars → Process → Credibility → Form
6. **Lead form** — with all 4 states (idle, loading, success, error), no backend
7. **Service page template** — `ServicePageTemplate.tsx` + one sample service page to validate
8. **All 8 service pages** — fill content entries, use template
9. **SEO layer** — `JsonLd.tsx`, `Breadcrumbs.tsx`, `generateMetadata` helpers, sitemap, robots
10. **Case studies placeholder** — noindex list page with "coming soon" message
11. **Supporting pages** — `/contact`, `/thank-you`, `/not-found`
12. **QA** — responsive (320px → 1440px), reduced-motion, keyboard navigation, Lighthouse

---

## 15. Pending decisions

| Item | Status | Notes |
|------|--------|-------|
| Studio name | **Pending** | Placeholder: `STUDIO_NAME` in `siteCopy.ts` |
| Credibility section copy ("lean transition") | **Pending** | User flagged previous draft as too heavy |
| Client type description (B2B clarification) | **Pending** | "Подвешена" — to revisit |
| Hero: dark vs light background | **Dark preferred** | Final sign-off not given |
| Process SVG line animation | **Approved in principle** | Implementation details TBD |
| Pain section drift animation | **Under discussion** | May be too subtle |
| Domain | **Unknown** | Needed for `NEXT_PUBLIC_SITE_URL` |
| Form backend | **Not planned for v1** | UI-only, TODO comment in code |
| Meta Ads integration | **Future** | `/#start-project` anchor ready |

---

## 16. What is explicitly out of scope (v1)

- Pricing page
- Blog
- Team/about page with photos
- Client portal or login
- Payment processing
- Live chat widget
- Analytics beyond basic (no heatmaps, session recording)
- Backend form handling (v1 is UI-only)
- Real case studies (routes exist, content is noindex placeholder)
- Internationalization

---

---

## 17. Motion system (Step 16, approved)

### Ground rules
- Motion communicates state change, hierarchy, or causality — not style
- `prefers-reduced-motion`: all transforms → opacity only, duration halved
- Mobile: duration ×0.7, distance ÷2, stagger disabled

### Animation types

| ID | Name | Purpose | Mobile | Status |
|----|------|---------|--------|--------|
| A | Hero — no animation | Reliable software doesn't wait. H1 is already there. | Same | Approved |
| A2 | Pain blur→clarity | Text inside pain cards clarifies as you focus — recognition, not arrival | Opacity only | Approved |
| B2 | Pillar clip-path fill | Cards fill left→right (0.35s each) — output being assembled | Opacity only | Approved |
| C | Process line draw | SVG line draws through steps, each node activates as line arrives — causality | Static pre-drawn | Approved |
| D2 | Card border trace | Border animates around perimeter on hover — precision, craftsmanship | Disabled | Approved |
| E2 | CTA label follows cursor | Label shifts 3px toward cursor direction — "software that responds" | whileTap scale 0.97 | Approved |
| F2 | Scroll-linked section bg | Background color interpolates between pain and pillars sections | Disabled | Approved |
| G | Status dot pulse | CSS keyframes, 2s loop — alive, available | Same | Approved (CSS only) |
| H | Form state transitions | AnimatePresence idle→loading→success/error. Errors appear instantly (no softening) | Same | Approved |
| — | Chaos→Order word scatter | See Section 12 — bridge animation between pain and pillars | Static | Approved concept |

### Explicitly NOT animated
Page transitions, text typing effects, number count-ups, parallax, background gradient shifts on scroll, anything looping except status dot, dropdown open/close (CSS only).

---

## 18. Component system (Step 17)

### Design tokens (immutable rules)

**Radius scale:**
| Token | Value | Usage |
|-------|-------|-------|
| `rounded` | 4px | Badges, tags |
| `rounded-md` | 6px | Inputs, small elements |
| `rounded-lg` | 8px | Buttons |
| `rounded-xl` | 12px | Cards |
| `rounded-2xl` | 16px | Large cards, MockupFrame |

**Spacing:** 4px base unit. All spacing multiples of 4. Section vertical padding: 120px desktop / 80px mobile.

**Hover states (consistent across all interactive elements):**
- Cards: border trace animation (D2) or border-color → `--accent` (reduced motion)
- Buttons: primary variant uses E2 (cursor-follow label). Fallback: opacity 0.85
- Links: color → `--accent`, no underline by default
- No element uses both lift AND border change simultaneously

**Icon system:** Lucide React only. Whitelist: `ChevronDown`, `ArrowRight`, `Menu`, `X`, `Check`, `Loader2`. No other icons. Card "icons" are strings (emoji) from content files, never imported SVGs.

---

### Foundation components

---

**Button**
- **Purpose:** Single interactive CTA element used everywhere
- **Props:** `label`, `href?`, `onClick?`, `variant`, `size?`, `disabled?`, `loading?`, `icon?`
- **Variants:** `primary` (accent fill), `secondary` (border, transparent bg), `ghost` (no border, text only)
- **Content source:** Label always from content file via parent. Never hardcoded in Button itself.
- **Responsive:** Full width on mobile when inside form. Inline elsewhere.
- **Motion:** E2 (cursor-follow label) on primary, desktop only. `whileTap: scale 0.97` on mobile. Reduced motion: opacity only.
- **A11y:** `role="button"`, `aria-disabled` when disabled, `aria-busy` when loading. Focus ring: 2px `--accent` offset 2px.
- **Not:** No icon-only variant. No size variants beyond default and `sm`. No color variants beyond the three above.

---

**Container**
- **Purpose:** Max-width wrapper with consistent horizontal padding
- **Props:** `children`, `className?`
- **Variants:** None — one consistent width (1100px max)
- **Content source:** N/A — layout only
- **Responsive:** `padding: 0 24px` desktop → `0 16px` mobile
- **Motion:** None
- **A11y:** N/A
- **Not:** No fluid/full-width variant. No size options.

---

**Section**
- **Purpose:** Vertical rhythm wrapper for all page sections
- **Props:** `children`, `id?`, `background?` (`base` | `surface` | `subtle` | `dark`), `className?`
- **Variants:** Background color only — no structural variants
- **Content source:** N/A — layout only
- **Responsive:** `padding: 120px 0` desktop → `80px 0` mobile
- **Motion:** F2 (scroll-linked background interpolation) between `subtle` and `base` sections — desktop only
- **A11y:** Renders as `<section>`. Always has `id` if linked from nav.
- **Not:** No border variants. No shadow. No overflow hidden by default.

---

**Badge**
- **Purpose:** Label for status, categories, optional fields
- **Props:** `label`, `variant?` (`default` | `green` | `muted`)
- **Variants:** `default` (border, transparent), `green` (accent-green bg — status only), `muted` (muted text, no border)
- **Content source:** Label from parent prop
- **Responsive:** No change
- **Motion:** None (status dot pulse is in StatusBadge, not here)
- **A11y:** Inline element, no role needed unless conveying state
- **Not:** No clickable badge variant. No icon inside badge.

---

**StatusBadge**
- **Purpose:** "Available for projects" live indicator — controlled by `isAvailable` in siteCopy.ts
- **Props:** `label`, `isAvailable` (boolean)
- **Variants:** None — single appearance, hidden when `isAvailable: false`
- **Content source:** `content/siteCopy.ts`
- **Responsive:** No change
- **Motion:** CSS pulse on the dot (G). Reduced motion: static dot.
- **A11y:** `aria-label="Currently available for new projects"`
- **Not:** No click behavior. No tooltip.

---

**LogoMark**
- **Purpose:** Studio wordmark — placeholder until final brand
- **Props:** `size?`, `href?`
- **Variants:** Light (for dark backgrounds), dark (for light backgrounds)
- **Content source:** `STUDIO_NAME` from `content/siteCopy.ts`
- **Responsive:** Scales down on mobile (font-size only)
- **Motion:** None
- **A11y:** If linked: `aria-label="[STUDIO_NAME] — home"`
- **Not:** No animated logo. No SVG illustration — text only until brand finalized.

---

### Card components

---

**Card**
- **Purpose:** Base card shell — all other card variants extend this visual language
- **Props:** `children`, `className?`, `href?` (makes card a link), `hoverable?`
- **Variants:** Default only. Other card types compose on top.
- **Content source:** N/A — shell only
- **Responsive:** Full width on mobile (no multi-column)
- **Motion:** D2 (border trace on hover) when `hoverable`. Reduced motion: border-color transition only.
- **A11y:** If `href`: render as `<a>` with full card as target. Keyboard focusable.
- **Not:** No shadow variants. No background variants (controlled by Section).

---

**ServiceCard**
- **Purpose:** Homepage pillar cards (Organize / Automate / Serve)
- **Props:** `icon`, `title`, `description`, `href`
- **Variants:** None
- **Content source:** `content/home.ts` → `pillars[]`
- **Responsive:** Single column on mobile, 3-col grid on desktop
- **Motion:** B2 (clip-path reveal, staggered, desktop only). D2 on hover.
- **A11y:** Card is a link. `aria-label` = title.
- **Not:** No price, no CTA button inside card — the card itself is the link.

---

**WorkflowCard**
- **Purpose:** Before/after workflow examples on service pages
- **Props:** `title`, `before`, `after`
- **Variants:** None
- **Content source:** `content/servicePages.ts` → `workflowExamples[]`
- **Responsive:** Stacked (before on top, after below) on mobile. Two columns on desktop.
- **Motion:** None — static. Typography weight carries the metaphor (before: light/muted, after: semibold/primary).
- **A11y:** Before/after sections labeled with `aria-label` or visible headings
- **Not:** No animation. No icons. No color coding beyond typography weight.

---

**BeforeAfterCard**
- **Purpose:** Compact before/after comparison used inline in service page sections
- **Props:** `before`, `after`, `context?`
- **Variants:** None
- **Content source:** `content/servicePages.ts`
- **Responsive:** Stacked on mobile
- **Motion:** None
- **A11y:** Same as WorkflowCard
- **Not:** No toggle/reveal interaction. No slider. Static two-state display.

---

**MetricCard**
- **Purpose:** Highlight a key number or outcome — used sparingly if real data exists
- **Props:** `value`, `label`, `context?`
- **Variants:** None
- **Content source:** `content/home.ts` or `content/servicePages.ts`
- **Responsive:** Grid collapses to 2-col on mobile
- **Motion:** None — no count-up animation
- **A11y:** `value` and `label` in correct heading hierarchy
- **Not:** Not used with invented/estimated data. No count-up. No sparkline.

---

**ProjectExampleCard**
- **Purpose:** Case study teaser — not on homepage v1, used on /case-studies
- **Props:** `title`, `industry`, `outcome`, `slug`, `isReady`
- **Variants:** None
- **Content source:** `content/projectExamples.ts`
- **Responsive:** Single column on mobile
- **Motion:** D2 on hover
- **A11y:** Card is a link
- **Not:** No image placeholder. No mock screenshot. Not shown until `isReady: true`.

---

**InternalLinkCard**
- **Purpose:** Related service links at bottom of service pages
- **Props:** `title`, `description`, `href`
- **Variants:** None — compact version of ServiceCard
- **Content source:** `content/servicePages.ts` → `relatedServices[]` (resolved to page data)
- **Responsive:** 2-col on tablet/desktop, 1-col on mobile
- **Motion:** D2 on hover
- **A11y:** Full card is link
- **Not:** No icon. No CTA label — card itself is interactive.

---

**MockupFrame**
- **Purpose:** Container for future product screenshots or UI mockups
- **Props:** `children`, `type?` (`browser` | `mobile` | `plain`)
- **Variants:** `browser` (address bar chrome), `mobile` (device frame), `plain` (no chrome)
- **Content source:** N/A — visual shell only
- **Responsive:** Scales with container width
- **Motion:** None
- **A11y:** `role="img"` with `aria-label` describing the content
- **Not:** No actual screenshots in v1 — renders placeholder. No animated UI inside.

---

### Content block components

---

**ProcessStep**
- **Purpose:** Single step in the 4-step process
- **Props:** `number`, `title`, `description`, `isLast?`
- **Variants:** None
- **Content source:** `content/process.ts`
- **Responsive:** Vertical stack on mobile (no horizontal layout)
- **Motion:** Node activates as process line SVG reaches it (C). Number in Geist Mono, large, low-opacity background.
- **A11y:** Number is decorative (`aria-hidden`). Title is the meaningful label.
- **Not:** No icon. No button. No link.

---

**FAQItem**
- **Purpose:** Single accordion FAQ item
- **Props:** `question`, `answer`, `defaultOpen?`
- **Variants:** None
- **Content source:** `content/faq.ts`
- **Responsive:** Full width at all sizes
- **Motion:** Height expand/collapse via `AnimatePresence` + `motion.div`. CSS chevron rotation. Reduced motion: instant show/hide.
- **A11y:** `<details>/<summary>` pattern or ARIA `expanded`/`controls`. Keyboard: Enter/Space to toggle.
- **Not:** No nested FAQs. No rich text in answer — plain string only in v1.

---

**FeatureList**
- **Purpose:** Bulleted list of capabilities or included items
- **Props:** `items: string[]`, `icon?` (`check` | `arrow` | `none`)
- **Variants:** `check` (Lucide Check), `arrow` (Lucide ArrowRight), `none` (typographic bullet)
- **Content source:** From parent props (service page content)
- **Responsive:** Single column always
- **Motion:** None
- **A11y:** Renders as `<ul>/<li>`
- **Not:** No two-column feature grid. No icon color variation.

---

**CTASection**
- **Purpose:** Full-width call-to-action band — used between major sections or at page bottom
- **Props:** `heading`, `subheading?`, `cta: CTAButton`, `background?`
- **Variants:** Dark background (default), subtle background
- **Content source:** `content/home.ts` or `content/servicePages.ts`
- **Responsive:** Stacked on mobile, centered
- **Motion:** Entrance reveal (A) on heading. Button uses E2.
- **A11y:** Heading has correct level in hierarchy
- **Not:** No two-CTA variant. No form inside CTASection — that's ContactSection.

---

### Form components

---

**FormField**
- **Purpose:** Text or email input with label, placeholder, error state
- **Props:** `field: FormField`, `value`, `onChange`, `error?`
- **Variants:** Default, focused (accent border), error (red border + message)
- **Content source:** `content/forms.ts` → `FormField` type
- **Responsive:** Full width always
- **Motion:** Border color transition CSS only. No FM.
- **A11y:** `<label>` always associated via `htmlFor`. Error message via `aria-describedby`.
- **Not:** No floating label. No inline icon. No character count.

---

**SelectField**
- **Purpose:** Dropdown select input
- **Props:** `field: FormField`, `value`, `onChange`, `error?`
- **Variants:** Same as FormField
- **Content source:** `content/forms.ts` — options array in FormField shape
- **Responsive:** Full width always
- **Motion:** None — native select
- **A11y:** Native `<select>` — full keyboard and screen reader support without custom implementation
- **Not:** No custom dropdown UI in v1 — native select only. No multi-select.

---

**TextareaField**
- **Purpose:** Multi-line text input
- **Props:** `field: FormField`, `value`, `onChange`, `error?`
- **Variants:** Same as FormField
- **Content source:** `content/forms.ts`
- **Responsive:** Full width. `rows` from content field definition.
- **Motion:** None
- **A11y:** Same as FormField
- **Not:** No auto-resize. No markdown support.

---

### Page-level components

---

**NavBar**
- **Purpose:** Fixed site header with logo, nav links, CTA
- **Props:** None — all content from `content/navigation.ts`
- **Variants:** Transparent (on dark hero), solid (on scroll)
- **Content source:** `content/navigation.ts`
- **Responsive:** Desktop: horizontal links. Mobile: hamburger → MobileNav.
- **Motion:** F (CSS transition on background/blur on scroll). Active link state via IntersectionObserver.
- **A11y:** `<header>`, `<nav aria-label="Main navigation">`. Skip-to-content link as first element.
- **Not:** No mega-menu. No search. No user account.

---

**MobileNav**
- **Purpose:** Full-screen or slide-in mobile menu
- **Props:** `isOpen`, `onClose`, items from `content/navigation.ts`
- **Variants:** None
- **Content source:** `content/navigation.ts`
- **Responsive:** Mobile only — hidden on desktop
- **Motion:** Slide in from right or fade in. `AnimatePresence`. Reduced motion: instant toggle.
- **A11y:** `role="dialog"`, `aria-modal="true"`. Focus trapped inside when open. Escape key closes.
- **Not:** No nested submenus. No search in mobile nav.

---

**Footer**
- **Purpose:** Site footer with copyright, nav links, optional social links
- **Props:** None — all from `content/siteCopy.ts` and `content/navigation.ts`
- **Variants:** None
- **Content source:** `content/siteCopy.ts`
- **Responsive:** Stacks to single column on mobile
- **Motion:** None
- **A11y:** `<footer>`, `<nav aria-label="Footer navigation">`
- **Not:** No newsletter signup. No sitemap tree. No social icons in v1.

---

**PageHeader**
- **Purpose:** Inner page hero — for /contact, /case-studies, and other non-service pages
- **Props:** `eyebrow?`, `heading`, `subheading?`, `cta?: CTAButton`
- **Variants:** Dark background (default), light background
- **Content source:** Page-specific content file
- **Responsive:** Stacked, centered on mobile
- **Motion:** Entrance reveal on heading. Hero static rule does NOT apply here — only to homepage hero.
- **A11y:** `<h1>` always present
- **Not:** No background image. No video.

---

**ServicePageHero**
- **Purpose:** Hero section for all 8 service pages
- **Props:** `eyebrow?`, `h1`, `subheadline`, `primaryCta: CTAButton`, `secondaryCta?: CTAButton`
- **Variants:** None — consistent across all service pages
- **Content source:** `content/servicePages.ts` → `hero` field
- **Responsive:** Stacked on mobile, CTA buttons full-width
- **Motion:** Same as PageHeader — entrance reveal permitted (not homepage hero rule)
- **A11y:** `<h1>` is the service page title. Breadcrumbs rendered above eyebrow.
- **Not:** No background illustration. No product screenshot in hero.

---

**SEOFAQ**
- **Purpose:** FAQ accordion section + FAQPage structured data — used on all pages with FAQ content
- **Props:** `items: FAQItem[]`, `heading?`
- **Variants:** None
- **Content source:** `content/faq.ts` keyed by page slug
- **Responsive:** Full width
- **Motion:** Per FAQItem (accordion expand/collapse)
- **A11y:** Heading + list of FAQItem components. Schema output via JsonLd.
- **Not:** No search inside FAQ. No category filter.

---

### Approval checkpoint

**Design tokens**
| Decision | Status |
|----------|--------|
| Radius scale (4 / 6 / 8 / 12 / 16px) | Ready |
| Hover rule (no element uses lift AND border simultaneously) | Ready |
| Icon whitelist (6 Lucide icons only) | Ready |
| Card "icons" as strings from content | Ready |

**Foundation**
| Component | Status |
|-----------|--------|
| Button (3 variants + motion rules) | Ready |
| Container | Ready |
| Section (4 background variants) | Ready |
| Badge (3 variants) | Ready |
| StatusBadge | Ready |
| LogoMark (text only) | Ready |

**Cards**
| Component | Status |
|-----------|--------|
| Card (base shell) | Ready |
| ServiceCard | Ready |
| WorkflowCard | Ready |
| BeforeAfterCard | Ready |
| MetricCard (no count-up) | Ready |
| ProjectExampleCard | Ready |
| InternalLinkCard | Ready |
| MockupFrame (placeholder v1) | Ready |

**Content blocks**
| Component | Status |
|-----------|--------|
| ProcessStep | Ready |
| FAQItem | Ready |
| FeatureList (3 variants) | Ready |
| CTASection | Ready |

**Forms**
| Component | Status |
|-----------|--------|
| FormField | Ready |
| SelectField (native select) | Ready |
| TextareaField | Ready |

**Page-level**
| Component | Status |
|-----------|--------|
| NavBar | Ready |
| MobileNav | Ready |
| Footer | Ready |
| PageHeader | Ready |
| ServicePageHero | Ready |
| SEOFAQ | Ready |

---

## 19. Technical architecture (Step 18)

### Folder structure

```
/
├── app/
│   ├── layout.tsx                    # Root layout — fonts, NavBar, Footer, metadata defaults
│   ├── page.tsx                      # Homepage — section composition only, no hardcoded content
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── thank-you/page.tsx            # noindex, excluded from sitemap
│   ├── contact/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx                  # noindex until real content
│   │   └── [slug]/page.tsx           # MDX, noindex
│   ├── internal-tools/page.tsx
│   ├── workflow-automation/page.tsx
│   ├── client-portals/page.tsx
│   ├── customer-facing-software/page.tsx
│   ├── booking-request-systems/page.tsx
│   ├── dashboards/page.tsx
│   ├── ai-workflows/page.tsx
│   └── product-rescue/page.tsx
│
├── components/
│   ├── ui/                           # Primitives: Button, Badge, Card, Container, Section, StatusBadge
│   ├── layout/                       # NavBar, MobileNav, Footer, LogoMark
│   ├── seo/                          # JsonLd, Breadcrumbs
│   ├── forms/                        # LeadForm, FormField, SelectField, TextareaField
│   ├── service/                      # ServicePageTemplate, ServicePageHero, WorkflowExamples, RelatedServices, SEOFAQ
│   └── shared/                       # ProcessStep, FAQItem, FeatureList, CTASection, MockupFrame, MetricCard, InternalLinkCard, BeforeAfterCard
│
├── sections/                         # Homepage-only full-width sections (not reused elsewhere)
│   ├── HeroSection.tsx
│   ├── PainSection.tsx
│   ├── ChaosTransition.tsx           # Word scatter animation — autonomous
│   ├── PillarsSection.tsx
│   ├── ProcessSection.tsx
│   ├── CredibilitySection.tsx
│   └── ContactSection.tsx
│
├── content/
│   ├── types.ts                      # All shared TypeScript types — imported by both content files and components
│   ├── navigation.ts
│   ├── seo.ts
│   ├── home.ts                       # includes chaosWords: string[]
│   ├── services.ts
│   ├── process.ts
│   ├── faq.ts
│   ├── siteCopy.ts                   # STUDIO_NAME lives here — single export
│   ├── servicePages.ts
│   ├── projectExamples.ts            # empty in v1, isReady: false on all
│   ├── forms.ts
│   └── case-studies/                 # MDX files — empty in v1, .gitkeep
│
├── lib/
│   ├── seo.ts                        # generateMetadata, OG helpers, schema builders
│   ├── motion.ts                     # All Framer Motion variants — single source of truth
│   └── utils.ts                      # cn(), slug helpers, useMediaQuery
│
├── public/
│   ├── images/og/og-default.png      # 1200×630, <200KB — needed before launch
│   └── favicon.ico
│
├── styles/globals.css                # Tailwind directives + CSS custom properties
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

### File responsibility rules

| File | Does | Does NOT |
|------|------|---------|
| `app/layout.tsx` | Fonts, NavBar, Footer, default metadata | Content, section rendering |
| `app/page.tsx` | Imports sections, composes in narrative order | Hardcoded content, business logic |
| `app/[service]/page.tsx` | Get content entry, pass to template, export generateMetadata | Anything else |
| `sections/*.tsx` | Full section markup + animation | Import data directly — receives via props from page.tsx |
| `components/service/ServicePageTemplate.tsx` | Render any ServicePage object | Know about specific pages |
| `lib/motion.ts` | Export named FM variants | Business logic, components |
| `lib/seo.ts` | generateMetadata, schema builders | Rendering |
| `content/*.ts` | Data and types | Import from components or lib |
| `content/types.ts` | Shared types | Data |

### Routing plan

| Route | Indexed | Notes |
|-------|---------|-------|
| `/` | Yes | Homepage |
| `/internal-tools` … `/product-rescue` (×8) | Yes | `noIndex: true` if `isReady: false` in content |
| `/case-studies` | **No** | Until real content |
| `/case-studies/[slug]` | **No** | MDX, until real content |
| `/contact` | Yes | |
| `/thank-you` | **No** | Excluded from sitemap + robots |
| `*` (404) | **No** | |

### Component call hierarchy

```
app/page.tsx (Server Component — reads data, passes as props)
  → sections/HeroSection.tsx        ('use client' — FM)
  → sections/PainSection.tsx        ('use client' — FM)
  → sections/ChaosTransition.tsx    ('use client' — FM, autonomous)
  → sections/PillarsSection.tsx     ('use client' — FM)
  → sections/ProcessSection.tsx     ('use client' — FM)
  → sections/CredibilitySection.tsx
  → sections/ContactSection.tsx
      → components/forms/LeadForm.tsx ('use client')

app/[service]/page.tsx (Server Component)
  → components/service/ServicePageTemplate.tsx
      → ServicePageHero, WorkflowExamples, ProcessStep, SEOFAQ,
         RelatedServices → InternalLinkCard, LeadForm
```

**Server/client boundary rule:** Data lives in Server Components (`page.tsx`). Animated components are Client Components. Data passed as props downward. No fetching inside client components.

### SEO layer

`lib/seo.ts` exports:
- `generatePageMetadata(page: ServicePage): Metadata`
- `generateHomepageMetadata(): Metadata`
- `buildServiceSchema(page)` — Service JSON-LD
- `buildBreadcrumbSchema(items)` — BreadcrumbList JSON-LD
- `buildFAQSchema(items)` — FAQPage JSON-LD
- `buildOrganizationSchema()` — Organization JSON-LD (homepage only)

`app/sitemap.ts` — reads servicePages.ts, excludes noindex + /thank-you. URL base from `NEXT_PUBLIC_SITE_URL`.

`app/robots.ts` — Disallow: /thank-you. Sitemap: [NEXT_PUBLIC_SITE_URL]/sitemap.xml.

### Stack rationale

| Technology | Verdict | Reason |
|-----------|---------|--------|
| Next.js App Router | Correct | generateMetadata, sitemap.ts, robots.ts built-in; API route ready for form backend; MDX case studies |
| TypeScript | Correct | No debate |
| Tailwind CSS | Correct | Design tokens via config, no CSS sprawl |
| Framer Motion | Correct | Earns place on 3 things: AnimatePresence (form), ChaosTransition, cursor-follow. CSS handles the rest but mixing two systems is worse. |
| Local content files | Correct for v1 | Clear migration path to CMS — same TypeScript shapes, swap data source |

**Main risk to manage:** Framer Motion requires `'use client'`. Most of `sections/` will be client components. Keep data fetching in Server Components, pass via props. This is the correct pattern — requires discipline.

### Environment variables

```
NEXT_PUBLIC_SITE_URL=https://[domain]   # Required for canonical URLs and OG tags
```

Single env var needed for v1. All others added when integrations are built.

---

## 20. Mobile, performance, and accessibility (Step 19)

### Mobile behavior by section

| Section | Mobile treatment |
|---------|----------------|
| NavBar | Logo + hamburger only. CTA hidden — available inside MobileNav. |
| HeroSection | H1 immediately visible, no animation. Subheading ≤2 lines. CTA full-width. |
| PainSection | Single column. No blur animation — instant opacity reveal. |
| ChaosTransition | Static final state only — three words already in place. No scatter. |
| PillarsSection | Single column. Clip-path → opacity only. No stagger. |
| ProcessSection | Vertical stack. Line static (pre-drawn). Numbers visible. |
| ContactSection | Form full-width. All fields stacked. Submit full-width. |
| Footer | Single column. |

**Tap targets:** minimum 44×44px on all buttons and links.
**Text:** minimum 16px body, 14px only for badges/labels. Never smaller.
**Horizontal scroll:** 0px at all breakpoints. `overflow-x: hidden` on body + test at 320px.

### Performance risks

| Risk | Level | Mitigation |
|------|-------|-----------|
| ChaosTransition with 15–20 motion values | Medium | Hard cap: 15 words. `layout={false}`. Test on low-end Android. |
| `'use client'` sprawl | Medium | Data in Server Components, passed as props. No fetching inside client components. |
| Framer Motion bundle (~50KB gzip) | Low | Acceptable. No additional animation libraries. |
| Cursor-follow mousemove | Low | `useMotionValue` — no re-renders. Fully disabled on mobile. |
| Fonts | None | Geist via `next/font` — zero external requests, no FOUT. |
| LCP | None | Hero is text, not image. LCP = H1. Instant. |
| Images | None | No product images in v1. OG image doesn't affect page LCP. |

### Accessibility rules

**Structure:**
- One `<h1>` per page — always
- Hierarchy: h1 (hero) → h2 (section) → h3 (card). No skips.
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- Skip-to-content link — first element in DOM, visible on focus

**Interactive elements:**
- `<button>` for actions, `<a>` for navigation, never `<div onClick>`
- All icon-only elements: `aria-label`
- Disabled buttons: `aria-disabled="true"` (not `disabled` — keeps them focusable)
- Focus ring: `outline: 2px solid var(--accent)`, `outline-offset: 2px` — never removed without replacement

**Color contrast (verified):**
| Pair | Ratio | Result |
|------|-------|--------|
| #111827 on #F7F8FA | 17.5:1 | ✓ AAA |
| #6B7280 on #FFFFFF | 4.6:1 | ✓ AA |
| #FFFFFF on #3B82F6 | 3.1:1 | ✓ AA large text |
| #E0E0E0 on #0B1020 | 11.2:1 | ✓ AAA |

**Forms:**
- Every input has `<label>` with `htmlFor` — always visible, not just placeholder
- Error messages: `aria-describedby` on input, `role="alert"` on error container
- Required fields: `aria-required="true"` + visual indicator

**MobileNav:** `role="dialog"`, `aria-modal="true"`, focus trap while open, Escape closes.

### SEO-friendly HTML rules

- `<main>` wraps all content between header and footer
- Every `<section>` has `id` if anchor-linked
- Canonical always explicit on every page
- Structured data via `<JsonLd />` — never inline in body
- `<Breadcrumbs />` on all inner pages, above `<h1>`
- Link text descriptive: "See workflow automation services" not "Learn more"
- No `<b>` or `<i>` for semantics — use `<strong>` and `<em>`

### Image and asset rules

- All `<img>` → `next/image` without exceptions
- OG image: 1200×630px, PNG, <200KB — must exist before launch
- MockupFrame v1: CSS placeholder, no images
- Future screenshots: WebP, `sizes` prop for responsive, `priority={true}` on first viewport image only
- No base64 inline images for content

### Animation simplification matrix

| Desktop animation | Mobile | prefers-reduced-motion |
|------------------|--------|----------------------|
| Blur reveal | Instant opacity | Instant opacity |
| Clip-path stagger | Simultaneous opacity | Instant opacity |
| Chaos word scatter | Static final state | Static final state |
| Process line draw | Pre-drawn static | Pre-drawn static |
| Cursor-follow CTA | Disabled | Disabled |
| Scroll-linked bg | Disabled — static | Disabled — static |
| Card hover | Disabled | Border-color only |
| whileTap scale | Kept | Disabled |

All animated components: check `useReducedMotion()`. Variants in `lib/motion.ts` have `reduced` versions alongside main.

### Acceptance criteria

| Criterion | Threshold |
|-----------|-----------|
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| LCP (mobile, 3G) | < 2.5s |
| Horizontal scroll | 0px at all breakpoints |
| Keyboard accessible interactive elements | 100% |
| Form fields with visible labels | 100% |
| Heading hierarchy violations | 0 |
| Images without alt | 0 |
| `outline: none` without replacement | 0 |

---

## 21. Technical pages and form states (Step 19b)

### /contact

- **Purpose:** Standalone page for visitors navigating directly to /contact
- **H1:** "Let's scope your project"
- **Subheading:** "Tell us what's not working. We'll tell you what we'd build."
- **Content:** PageHeader + LeadForm
- **CTA:** "Scope your project" (submit button)
- **On success:** Redirect to `/thank-you` — set via `successBehavior="redirect"` prop on LeadForm
- **Indexed:** Yes
- **Not:** No duplicate of full homepage. No forced follow-up. No fake response time promises.

### /thank-you

- **Purpose:** Post-form confirmation from /contact. Sets expectation, no pressure.
- **H1:** "Got it — we'll be in touch."
- **Body:** "We review every request personally and will respond within one business day."
- **CTA:** Text link only — "Back to homepage". No button, no urgency.
- **Indexed:** No — excluded from sitemap and robots
- **Not:** No second form. No "While you wait…" block. No countdown. No social share prompt.

### /not-found (404)

- **Purpose:** Graceful exit. Don't lose the user.
- **H1:** "This page doesn't exist."
- **Body:** "It may have moved or never existed. Here's where to go instead:"
- **Links:** Homepage / Services / "Scope your project"
- **Layout:** Full NavBar and Footer present
- **Not:** No animated character. No humor. No "contact us". No search.

### Form states

**State machine:** `'idle' | 'loading' | 'success' | 'error'`

| State | UI | Copy | Notes |
|-------|-----|------|-------|
| idle | All fields active | Submit: "Scope your project" | Default |
| loading | Fields disabled, spinner | Submit: "Sending…" + Loader2 + `aria-busy="true"` | No navigation |
| success (inline) | Form replaced by confirmation | "We've got it. / Expect to hear from us within one business day." | Homepage only |
| success (redirect) | router.push('/thank-you') | — | /contact only |
| error | Form stays, fields re-enabled | "Something went wrong — please try again or email us at [email]." + `role="alert"` | No data loss, no reset |

**LeadForm prop:** `successBehavior: 'inline' | 'redirect'`
- Homepage: `'inline'`
- /contact: `'redirect'`

**TODO comments (required in LeadForm.tsx):**
```
// TODO(backend): replace simulated delay with real API call
// Options: /api/contact route → Resend, Tally, or direct form service
// TODO(email): send notification to studio email on successful submission
```

**Validation:**
- HTML5 `required` as first barrier
- Basic JS validation before submit (email format, non-empty required fields)
- Per-field errors via `error` prop — no third-party validation library in v1
- On error: fields stay filled, user retries

---

## 22. Pending decisions (updated)

| Item | Status | Notes |
|------|--------|-------|
| Studio name | **Pending** | Placeholder: `STUDIO_NAME` in `content/siteCopy.ts` |
| Credibility section copy | **Pending** | Previous draft too heavy — rewrite shorter |
| Client type description (B2B) | **Pending** | Deferred — revisit before launch |
| Hero background | **Dark preferred** | Not formally signed off |
| Domain | **Unknown** | Needed for `NEXT_PUBLIC_SITE_URL` env var |
| OG image | **Not created** | 1200×630px PNG needed before launch |
| Favicon | **Not created** | Needed before launch |
| Chaos→Order visual treatment of pain section | **Gap/v1** | Pain cards need to feel heavier — tighter line-height, no hover effects |
| Form backend | **Not planned v1** | UI-only, TODO comments in code |
| Meta Ads integration | **Future** | `/#start-project` anchor ready |

---

## 23. Out of scope (v1)

Pricing page, blog, team/about with photos, client portal, payment processing, live chat, heatmaps/session recording, real case studies, internationalization, Vercel setup, Sanity/CMS, Resend/email, GA4, Search Console, PostHog, paid domain.

---

*End of document. Steps 1–19 complete. Ready for implementation.*
