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
    required: true,
  },
  {
    id: 'businessType',
    name: 'businessType',
    label: 'Business type',
    type: 'select',
    required: true,
    options: [
      { value: '',                      label: 'Select your business type' },
      { value: 'retail',                label: 'Retail' },
      { value: 'professional-services', label: 'Professional services' },
      { value: 'healthcare',            label: 'Healthcare' },
      { value: 'logistics',             label: 'Logistics' },
      { value: 'other',                 label: 'Other' },
    ],
  },
  {
    id: 'problem',
    name: 'problem',
    label: "What's the problem?",
    placeholder: "Tell us what's not working or what you want to improve.",
    type: 'textarea',
    required: true,
    rows: 4,
  },
  {
    id: 'triedBefore',
    name: 'triedBefore',
    label: 'Have you tried solving this before?',
    type: 'select',
    required: true,
    options: [
      { value: '',         label: 'Select an option' },
      { value: 'software', label: 'Yes — with software' },
      { value: 'manually', label: 'Yes — manually' },
      { value: 'no',       label: "No, we haven't tried yet" },
    ],
  },
  {
    id: 'budget',
    name: 'budget',
    label: 'Rough budget range',
    type: 'select',
    required: false,
    badge: 'Optional',
    options: [
      { value: '',        label: 'Select a range' },
      { value: 'sub-10k', label: 'Under $10k' },
      { value: '10-30k',  label: '$10k–$30k' },
      { value: '30-80k',  label: '$30k–$80k' },
      { value: '80k-plus', label: '$80k+' },
      { value: 'unsure',  label: 'Not sure yet' },
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
