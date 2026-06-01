import type { ProcessStep } from './types'

export const processHeading    = 'A clear process from start to finish'
export const processSubheading = 'A collaborative, transparent approach that turns complex business workflows into clear, reliable software'

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    icon: '🔍',
    label: 'Discover',
    title: 'Understand your business first',
    description: 'We learn your workflows, systems, goals, and constraints before writing a line of code, so the solution fits your business instead of forcing you into a template.',
    tooltip: 'Outcome: clear scope and success criteria',
  },
  {
    number: 2,
    icon: '🗺',
    label: 'Plan',
    title: 'The right team and roadmap for your case',
    description: 'We define what needs to be built, select the right in-house specialists for the job, turn the plan into clear technical documentation, and set milestones you can actually track.',
    tooltip: 'Outcome: matched team and delivery plan',
  },
  {
    number: 3,
    icon: '🔧',
    label: 'Build',
    title: 'Transparent development and testing',
    description: 'We build in short cycles with demos, progress updates, direct access to the team, and QA checks throughout the process, so you always know what is being built and what is ready to ship.',
    tooltip: 'Outcome: visible progress and tested releases',
  },
  {
    number: 4,
    icon: '🚀',
    label: 'Launch & Support',
    title: 'Launch and keep it stable',
    description: 'We deploy the product, hand over documentation, monitor the system after launch, and stay available for fixes, updates, and support so the software keeps working in real conditions.',
    tooltip: 'Outcome: live product and operational stability',
  },
]
