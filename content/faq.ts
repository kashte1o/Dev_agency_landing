export type FAQItem = {
  question: string
  answer: string
  cta?: boolean
}

export const homepageFAQ: FAQItem[] = [
  {
    question: 'How do you price a custom software development project?',
    answer:
      'We start by gathering every detail and writing a full technical specification. Then we assemble a team from our in-house developers, estimate the hours involved, and account for any related costs like servers and domains. That figure is final — no hidden fees, no surprise charges.',
  },
  {
    question: 'Do you require a deposit for software development projects?',
    answer: 'Yes. We take a 25% deposit to start the project.',
  },
  {
    question: 'How long does it take to build custom software, an MVP, or a web app?',
    answer:
      "It depends on the scope. We don't bill by the hour, so it's in our own interest to ship a quality result as fast as possible — not to stretch the timeline out.",
  },
  {
    question: "We don't have a clear spec yet — can you help define what to build?",
    answer:
      "Yes. We'll help you shape the technical specification around your business goals, whether you're building an MVP, internal tool, business automation system, or AI automation product. You go into the build knowing exactly what you're getting and why.",
  },
  {
    question: 'How do you keep software development projects on time and on budget?',
    answer:
      'We only take on projects where our process is fully dialed in, which all but removes the risk of slipping timelines or budget overruns. Where real risks do exist, we flag them upfront — with a clear range and the reason behind it.',
  },
  {
    question: 'Can you take on a complex custom software build start to finish?',
    answer:
      "Yes. We're a full-service software development company — we handle the entire build, from first scope to launch, however complex the idea.",
  },
  {
    question: 'Do we need to be technical to work with you?',
    answer:
      'No. Many of our clients are companies with no in-house development team. We handle the technical side and keep the conversation in plain business terms.',
  },
  {
    question: 'How involved will we be during the build?',
    answer:
      'We keep you updated at every key milestone, so you always know exactly where the project stands.',
  },
  {
    question: 'Will the software scale as we grow?',
    answer:
      'Yes. We build on a carefully designed architecture, so your technology can grow with your company without painful rebuilds.',
  },
  {
    question: 'Who owns the code — and are we locked in to you?',
    answer:
      "You're never locked in. Once the project is complete, we hand over the full codebase and all related data on request — it's yours to keep.",
  },
  {
    question: 'What happens after launch?',
    answer:
      'We provide technical support after launch until the risk of critical errors is behind us. From there, we either continue with ongoing support or hand the technology over to your team.',
  },
  {
    question: 'Still have questions?',
    answer: '',
    cta: true,
  },
]
