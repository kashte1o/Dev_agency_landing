import type { ProcessStep } from './types'

export const processHeading = 'A clear process from start to finish.'

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    icon: '🔍',
    title: 'Understand',
    description: 'We learn your business, current workflow, and what\'s not working.',
    tooltip: 'No assumptions — we map what actually happens',
  },
  {
    number: 2,
    icon: '🗺',
    title: 'Define',
    description: 'We map requirements, prioritize what matters, and define the plan.',
    tooltip: 'Scope agreed before a line of code',
  },
  {
    number: 3,
    icon: '🔧',
    title: 'Build',
    description: 'We design and build iteratively with regular check-ins and feedback.',
    tooltip: 'Weekly check-ins, no black boxes',
  },
  {
    number: 4,
    icon: '🚀',
    title: 'Ship',
    description: 'We test, launch, and ensure a smooth handoff with documentation.',
    tooltip: 'Deployed and documented',
  },
]
