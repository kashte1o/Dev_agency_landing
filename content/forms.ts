import type { FormField } from './types'

export const leadFormFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    placeholder: 'Your full name',
    type: 'text',
    required: true,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'you@company.com',
    type: 'email',
    required: false,
  },
  {
    id: 'whatsapp',
    name: 'whatsapp',
    label: 'WhatsApp',
    placeholder: '+1 234 567 8900',
    type: 'tel',
    required: false,
  },
  {
    id: 'problem',
    name: 'problem',
    label: "What do you want to fix or build?",
    placeholder: "Describe the workflow, process, or problem you want to solve.",
    type: 'textarea',
    required: true,
    rows: 4,
  },
  {
    id: 'businessIndustry',
    name: 'businessIndustry',
    label: 'Industry',
    placeholder: 'e.g. Logistics, Healthcare, Retail…',
    type: 'text',
    required: false,
    badge: 'Optional',
  },
  {
    id: 'budget',
    name: 'budget',
    label: 'Rough budget range',
    type: 'select',
    required: false,
    badge: 'Optional',
    options: [
      { value: '',         label: 'Not sure yet' },
      { value: 'sub-10k', label: 'Under $10k' },
      { value: '10-30k',  label: '$10k–$30k' },
      { value: '30-80k',  label: '$30k–$80k' },
      { value: '80k-plus', label: '$80k+' },
    ],
  },
]

export const leadFormCta = 'Scope your project →'

export const leadFormSuccess = {
  heading: "We've got it.",
  body: 'Expect to hear from us within one business day.',
}

export const leadFormError =
  'Something went wrong — please try again or email us directly.'
