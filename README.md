# Dev Agency Landing

Marketing website for a boutique custom software studio.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion

**Status:** Planning complete (Steps 1–19). Implementation not started.

---

## Navigation

All planning decisions, architecture, and implementation rules are in **[PROJECT.md](PROJECT.md)**.

| Section | What it covers |
|---------|---------------|
| §0 | Quick reference |
| §1–4 | Project definition, communication strategy, offer architecture, homepage narrative |
| §5 | Site structure and routing |
| §6 | SEO architecture and keyword strategy |
| §7 | Content system architecture and TypeScript shapes |
| §8 | Visual system — color tokens, typography, spacing |
| §9 | Component architecture overview |
| §10 | Conversion path and lead form fields |
| §11 | Visual direction |
| §12 | Visual metaphors — including Chaos→Order transition |
| §13 | Technical implementation details |
| §14 | Implementation order |
| §15–16 | Stack rationale and motion system decisions |
| §17 | Motion system — all animation types approved |
| §18 | Component system — all 27 components defined |
| §19 | Technical architecture — folder structure, routing, SEO layer |
| §20 | Mobile, performance, and accessibility rules |
| §21 | Technical pages and form states |
| §22 | Pending decisions before launch |
| §23 | Out of scope (v1) |

---

## Implementation order

1. Initialize Next.js 15 with TypeScript, Tailwind, App Router
2. Design tokens — `tailwind.config.ts`, `styles/globals.css`
3. Content files — all `/content/*.ts` with TypeScript shapes
4. Layout — NavBar, Footer, MobileNav
5. Homepage sections — Hero → Pain → ChaosTransition → Pillars → Process → Credibility → Form
6. Lead form — 4 UI states, no backend
7. Service page template + one sample service page
8. All 8 service pages
9. SEO layer — JsonLd, Breadcrumbs, generateMetadata, sitemap, robots
10. Supporting pages — /contact, /thank-you, /not-found
11. QA — responsive (320px→1440px), reduced-motion, keyboard nav, Lighthouse

---

## Key decisions

- **Primary CTA:** "Scope your project" → `/#start-project`
- **Studio name:** `STUDIO_NAME` placeholder — single export in `content/siteCopy.ts`
- **Content rule:** Components never hardcode copy. All text from `/content/*.ts` via props.
- **Animation rule:** All Framer Motion variants in `lib/motion.ts` — never defined inside components.
- **No fake proof:** No testimonials, no client logos, no invented metrics until real.
- **Form v1:** UI-only with 4 states. TODO comments for backend integration.

---

## Environment

```
NEXT_PUBLIC_SITE_URL=https://[domain]
```

Single env var for v1. Add others when integrations are built.
