/**
 * FAQ content — homepage
 * ──────────────────────
 * Goal: close objections and qualify leads before the form.
 * Language: business owner, not developer.
 *
 * PLACEHOLDER — replace body text with final approved copy.
 * Keep questions as-is: they cover the real objections in this niche.
 */

export type FAQItem = {
  question: string
  answer: string
}

export const homepageFAQ: FAQItem[] = [
  {
    question: 'How much does a custom software project cost?',
    answer:
      '[PLACEHOLDER] Give an honest range without committing. Example: "Projects typically start from $X depending on scope. We always define scope before quoting — so you know what you\'re paying for before any work begins. If budget is a concern, we\'ll tell you upfront whether it makes sense to proceed."',
  },
  {
    question: 'How long does it take to build?',
    answer:
      '[PLACEHOLDER] Give a realistic range. Example: "A focused MVP for a single workflow usually takes 6–10 weeks. Larger systems take longer. We set a clear timeline during the scoping phase — no open-ended engagements."',
  },
  {
    question: 'Where do we start if we\'re not sure what we need?',
    answer:
      '[PLACEHOLDER] Describe the scoping workshop. Example: "We start with a scoping session where we map your workflow together. You describe what\'s broken; we ask questions and come back with a clear picture of what to build and why. No technical knowledge required on your end."',
  },
  {
    question: 'Do we actually need custom software, or would an off-the-shelf tool work?',
    answer:
      '[PLACEHOLDER] Be honest — this builds trust. Example: "Sometimes an existing tool is the right answer and we\'ll say so. Custom software makes sense when your workflow is specific enough that no existing product fits without significant workarounds — or when those workarounds are already costing you time and money."',
  },
  {
    question: 'What happens after the project is delivered?',
    answer:
      '[PLACEHOLDER] Address the fear of being left alone with a system. Example: "We hand over documented, working software. We offer support and iteration post-launch. You\'re not buying a black box — you\'re getting something your team can actually use and grow with."',
  },
  {
    question: 'Who is this not for?',
    answer:
      '[PLACEHOLDER] Be direct — this filters out bad-fit leads and increases trust with good ones. Example: "We\'re not the right fit if you\'re looking for a cheap clone of an existing SaaS, don\'t have a specific business problem to solve, or aren\'t ready to be involved in the process. Good software requires input from the people who use it."',
  },
]
