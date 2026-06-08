// ─── Site-wide copy ──────────────────────────────────────────
// Single place to change the studio name.

export const STUDIO_NAME = 'Runmade'

export const isAvailable = false // controls StatusBadge visibility

export const availableText = ''

export const footerTagline = 'Custom software that helps businesses run better'

export const footerCopyright = `© ${new Date().getFullYear()} ${STUDIO_NAME}. All rights reserved.`

// Keys for footer items that open a modal instead of navigating.
export type FooterModalKey = 'careers' | 'support' | 'privacy' | 'terms'

export type FooterLink =
  | { label: string; href: string }
  | { label: string; modal: FooterModalKey }

export const footerColumns: {
  services: { heading: string; links: FooterLink[] }
  company: { heading: string; links: FooterLink[] }
  contact: { heading: string; email: string; phone: string; location: string }
  legal: { heading: string; links: FooterLink[] }
} = {
  services: {
    heading: 'Services',
    links: [
      { label: 'What we build',   href: '/#what-we-build' },
      { label: 'Ongoing Support', modal: 'support' },
    ],
  },
  company: {
    heading: 'Company',
    links: [
      { label: 'About',       href: '/#why-different' },
      { label: 'Our Process', href: '/#process' },
      { label: 'Work',        href: '/#proof' },
      { label: 'Careers',     modal: 'careers' },
    ],
  },
  contact: {
    heading: 'Contact',
    email: 'hello@runmadeagency.com',
    phone: '',                     // TODO: replace or remove
    location: 'Remote · Worldwide',
  },
  legal: {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',   modal: 'privacy' },
      { label: 'Terms of Service', modal: 'terms' },
    ],
  },
}

// Direct-contact details surfaced in the "Ongoing Support" modal.
// TODO: replace remaining channels (WhatsApp) with real ones before launch.
export const supportContact = {
  email: 'hello@runmadeagency.com',
  whatsappDisplay: '+971 50 123 4567',
  whatsappHref: 'https://wa.me/971501234567',
}

export const ongoingSupportPopup = {
  title: 'Ongoing support',
  body: "Already working with us, or need a hand with something that's live? Reach us directly — a real person replies, no ticket queue.",
  emailLabel: 'Email us',
  whatsappLabel: 'Message on WhatsApp',
  closeLabel: 'Close',
}

export const careersPopup = {
  title: 'Work with us',
  body: "Tell us where you fit. If there's a match, we'll reach out.",
  closeLabel: 'Close',
  submitLabel: 'Send application',
  note: 'No automated replies. A real person reviews every application.',
  successTitle: 'Application received',
  successBody: "Thanks for reaching out — we'll be in touch if there's a fit.",
  fields: {
    name:       { label: 'Your name', placeholder: 'Jane Doe' },
    email:      { label: 'Email', placeholder: 'you@example.com' },
    role:       { label: 'Role you’re after', placeholder: 'e.g. Frontend Engineer' },
    experience: { label: 'Years of experience', placeholder: 'e.g. 4 years with React / TypeScript' },
    salary:     { label: 'Salary expectation', placeholder: 'e.g. $4,000 / month' },
    message:    { label: 'Anything else? (optional)', placeholder: 'Portfolio link, availability, a few words about you…' },
  },
  errors: {
    name: 'Please enter your name.',
    email: 'Please enter a valid email address.',
    role: 'Please tell us the role you’re after.',
  },
}

// ─── Legal documents (rendered in scrollable modals) ────────────
// Placeholders [DATE], [LEGAL NAME ...], [CONTACT EMAIL], and
// [GOVERNING LAW / JURISDICTION] are intentional — fill before launch.
export type LegalBlock = { p: string } | { ul: string[] }
export type LegalSection = { heading: string; blocks: LegalBlock[] }
export type LegalDoc = {
  title: string
  effectiveDate: string
  intro: LegalBlock[]
  sections: LegalSection[]
}

export const legalDocuments: Record<'privacy' | 'terms', LegalDoc> = {
  privacy: {
    title: 'Privacy Policy',
    effectiveDate: '[DATE]',
    intro: [
      { p: 'This Privacy Policy explains how Runmade collects, uses, stores, and protects information submitted through this website.' },
      { p: 'By using this website or submitting a form, you agree to the practices described below.' },
    ],
    sections: [
      {
        heading: 'Who we are',
        blocks: [
          { p: 'Runmade is a custom software studio that helps businesses design and build internal tools, customer-facing platforms, web applications, automation systems, dashboards, and related digital products.' },
          { p: 'In this Privacy Policy, “Runmade”, “we”, “us”, and “our” refer to [LEGAL NAME OR WEBSITE OPERATOR].' },
        ],
      },
      {
        heading: 'Information we collect',
        blocks: [
          { p: 'We do not offer user accounts, login areas, or public registration on this website.' },
          { p: 'We collect personal information only when you choose to submit it through a form.' },
        ],
      },
      {
        heading: 'Project inquiry form',
        blocks: [
          { p: 'When you submit a project inquiry, we may collect:' },
          { ul: ['Name', 'Email address', 'WhatsApp number or phone number', 'Business type or industry', 'Project description', 'Estimated budget range', 'Any other information you include in your message'] },
        ],
      },
      {
        heading: 'Careers form',
        blocks: [
          { p: 'When you submit a careers inquiry, we may collect:' },
          { ul: ['Name', 'Email address', 'Desired role', 'Experience', 'Salary expectations', 'Portfolio link or message', 'Any other information you choose to provide'] },
        ],
      },
      {
        heading: 'FAQ question form',
        blocks: [
          { p: 'When you submit a question through the FAQ form, we may collect:' },
          { ul: ['Your question', 'Email address, WhatsApp, or Telegram contact, depending on what you choose to provide'] },
        ],
      },
      {
        heading: 'How we use your information',
        blocks: [
          { p: 'We use the information you provide to:' },
          { ul: ['Review your inquiry', 'Respond to your message', 'Discuss a potential project', 'Prepare next steps, questions, or a proposal', 'Review a careers or collaboration request', 'Maintain business communication', 'Protect the website from spam, abuse, and security risks', 'Comply with legal or contractual obligations where required'] },
          { p: 'We do not sell your personal information.' },
          { p: 'We do not use your personal information for advertising profiling.' },
          { p: 'We do not share your personal information with third parties for their own marketing purposes.' },
        ],
      },
      {
        heading: 'Technical information',
        blocks: [
          { p: 'When you visit the website, technical information may be processed automatically by our hosting and infrastructure providers.' },
          { p: 'This may include:' },
          { ul: ['IP address', 'Browser type', 'Device type', 'Request headers', 'Pages visited', 'Date and time of visit', 'Basic security and performance logs'] },
          { p: 'This information is used to deliver the website, maintain security, prevent abuse, and keep the website stable.' },
        ],
      },
      {
        heading: 'Hosting and infrastructure',
        blocks: [
          { p: 'This website is hosted using Cloudflare infrastructure.' },
          { p: 'Cloudflare may process technical traffic data such as IP addresses, request headers, and security logs as part of hosting, delivery, and protection of the website.' },
          { p: 'The website uses self-hosted fonts through the website build process. Your browser does not need to contact Google servers to load the fonts.' },
        ],
      },
      {
        heading: 'Form submissions and storage',
        blocks: [
          { p: 'Form submissions may be sent to our email inbox, CRM system, and Google Sheets.' },
          { p: 'Submitted information may be stored in our email inbox, CRM system, Google Sheets, and internal business records.' },
          { p: 'Access to submitted information is limited to people who need it to respond to inquiries, manage business communication, review applications, or operate the website.' },
          { p: 'We keep submitted information for 12 months, unless a longer period is required for legal, contractual, accounting, security, or legitimate business reasons.' },
        ],
      },
      {
        heading: 'Email, WhatsApp, and Telegram communication',
        blocks: [
          { p: 'If you provide your email address, WhatsApp number, phone number, or Telegram contact, we may use it to respond to your inquiry.' },
          { p: 'We do not use these contact details for unrelated marketing unless you have clearly agreed to receive such communication.' },
        ],
      },
      {
        heading: 'Cookies and analytics',
        blocks: [
          { p: 'At the time this Privacy Policy is published, this website does not use analytics tools.' },
          { p: 'This website does not use Google Analytics, Plausible, Yandex.Metrica, Meta Pixel, or similar tracking tools.' },
          { p: 'This website does not set its own cookies for tracking or advertising.' },
          { p: 'The website may contain structured SEO data such as Organization, WebSite, or FAQPage schema. This data describes the website for search engines and does not contain personal information submitted by users.' },
          { p: 'If analytics, cookies, or tracking tools are added later, this Privacy Policy will be updated.' },
        ],
      },
      {
        heading: 'Third-party services',
        blocks: [
          { p: 'We may use third-party services to operate the website, receive form submissions, manage communication, host the website, or protect it from abuse.' },
          { p: 'These services may include:' },
          { ul: ['Cloudflare, for website hosting, delivery, and security', 'Email service providers, for receiving and managing inquiries', 'CRM systems, for managing business communication', 'Google Sheets, for storing and organizing form submissions'] },
          { p: 'These providers may process information only as needed to provide their services to us.' },
        ],
      },
      {
        heading: 'Data retention',
        blocks: [
          { p: 'We keep personal information only for as long as reasonably necessary for the purpose it was collected.' },
          { p: 'Project inquiries may be kept for 12 months to manage communication, follow-ups, project discussions, and business records.' },
          { p: 'Careers inquiries may be kept for 12 months to review current or future collaboration opportunities.' },
          { p: 'FAQ questions may be kept for 12 months to respond to the question and improve future website content.' },
          { p: 'You may request deletion of your personal information by contacting us at [CONTACT EMAIL].' },
        ],
      },
      {
        heading: 'Your rights',
        blocks: [
          { p: 'Depending on where you live, you may have the right to:' },
          { ul: ['Request access to your personal information', 'Request correction of inaccurate information', 'Request deletion of your information', 'Object to certain processing', 'Withdraw consent where processing is based on consent', 'Request a copy of your information'] },
          { p: 'To make a request, contact us at [CONTACT EMAIL].' },
        ],
      },
      {
        heading: 'Security',
        blocks: [
          { p: 'We take reasonable technical and organizational measures to protect personal information from unauthorized access, loss, misuse, or disclosure.' },
          { p: 'No method of online transmission or storage is completely secure. We cannot guarantee absolute security.' },
        ],
      },
      {
        heading: 'Children',
        blocks: [
          { p: 'This website is intended for business and professional use.' },
          { p: 'We do not knowingly collect personal information from children.' },
        ],
      },
      {
        heading: 'International processing',
        blocks: [
          { p: 'Runmade may work remotely and use online service providers. Your information may be processed in countries different from your country of residence.' },
          { p: 'Where required, we take reasonable steps to ensure that personal information is handled securely and in accordance with applicable data protection requirements.' },
        ],
      },
      {
        heading: 'Changes to this Privacy Policy',
        blocks: [
          { p: 'We may update this Privacy Policy from time to time.' },
          { p: 'The updated version will be posted on this page with a new effective date.' },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          { p: 'For privacy-related questions or requests, contact us at [CONTACT EMAIL].' },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of Service',
    effectiveDate: '[DATE]',
    intro: [
      { p: 'These Terms of Service govern your use of the Runmade website.' },
      { p: 'By using this website, you agree to these Terms.' },
    ],
    sections: [
      {
        heading: 'Who we are',
        blocks: [
          { p: 'Runmade is a custom software studio that helps businesses design and build internal tools, customer-facing platforms, web applications, automation systems, dashboards, and related digital products.' },
          { p: 'In these Terms, “Runmade”, “we”, “us”, and “our” refer to [LEGAL NAME OR WEBSITE OPERATOR].' },
        ],
      },
      {
        heading: 'Use of this website',
        blocks: [
          { p: 'You may use this website to learn about our services, submit a project inquiry, ask a question, contact us, or submit a careers-related inquiry.' },
          { p: 'You agree not to use this website for:' },
          { ul: ['Illegal activity', 'Spam or abusive messages', 'Attempts to disrupt, damage, overload, or interfere with the website', 'Misrepresentation of your identity, company, or intentions', 'Submitting content that infringes third-party rights', 'Copying, scraping, or reusing website content in a way that violates these Terms'] },
        ],
      },
      {
        heading: 'Our services',
        blocks: [
          { p: 'Runmade provides custom software development and related services.' },
          { p: 'These services may include:' },
          { ul: ['Product discovery', 'Project scoping', 'UX/UI design', 'Web application development', 'Internal tools', 'Customer-facing platforms', 'Client portals', 'Booking and request systems', 'Dashboards', 'Workflow automation', 'CRM, website, spreadsheet, messenger, and payment integrations', 'Technical consulting', 'Post-launch support'] },
          { p: 'Information on this website is general. It does not create a binding offer, guarantee, or obligation to provide services.' },
        ],
      },
      {
        heading: 'Project inquiries',
        blocks: [
          { p: 'Submitting a form through this website does not create a client relationship.' },
          { p: 'A client relationship begins only when both sides agree to specific project terms in writing.' },
          { p: 'Specific project terms may be set out in a proposal, statement of work, contract, invoice, email confirmation, or another written agreement.' },
        ],
      },
      {
        heading: 'Separate project agreements',
        blocks: [
          { p: 'Any specific project scope, price, timeline, payment schedule, deliverables, ownership transfer, support period, confidentiality terms, or acceptance process must be agreed separately.' },
          { p: 'If there is a conflict between these Terms and a separate written project agreement, the separate project agreement controls for that project.' },
        ],
      },
      {
        heading: 'Payments',
        blocks: [
          { p: 'Payment terms are governed by the applicable project agreement, proposal, invoice, or written arrangement.' },
          { p: 'Unless separately agreed, we are not required to start, continue, deliver, transfer, or publish work before required payments are received.' },
        ],
      },
      {
        heading: 'Client responsibilities',
        blocks: [
          { p: 'If you work with us on a project, you are responsible for:' },
          { ul: ['Providing accurate information', 'Giving timely feedback', 'Providing required access, content, materials, and approvals', 'Making sure you have the right to use any materials you provide', 'Reviewing deliverables before approval or launch', 'Complying with laws that apply to your business, users, data, and industry'] },
          { p: 'Delays in feedback, access, content, payment, or approvals may affect project timelines.' },
        ],
      },
      {
        heading: 'Website content',
        blocks: [
          { p: 'All content on this website is provided for general informational purposes.' },
          { p: 'We try to keep website content accurate and up to date, but we do not guarantee that all information will always be complete, current, or error-free.' },
          { p: 'We may update, change, suspend, or remove any part of the website at any time.' },
        ],
      },
      {
        heading: 'Marketing metrics and results',
        blocks: [
          { p: 'This website may include performance metrics, averages, timelines, or examples based on past projects.' },
          { p: 'These numbers are provided for general informational and marketing purposes only.' },
          { p: 'They are not guarantees of future results.' },
          { p: 'Actual results depend on many factors, including project scope, client input, business model, market conditions, technical requirements, team adoption, and implementation quality.' },
          { p: 'We do not guarantee specific revenue growth, ROI, cost savings, conversion rates, rankings, speed improvements, or business outcomes unless expressly agreed in a separate written agreement.' },
        ],
      },
      {
        heading: 'Intellectual property',
        blocks: [
          { p: 'All content on this website, including text, design, layout, branding, graphics, components, and code, belongs to Runmade or its licensors unless stated otherwise.' },
          { p: 'You may not copy, reproduce, modify, distribute, or reuse website materials without written permission.' },
          { p: 'For client projects, ownership of custom deliverables is handled in the applicable project agreement.' },
          { p: 'Unless a project agreement says otherwise, we retain ownership of:' },
          { ul: ['Pre-existing tools', 'Frameworks', 'Reusable components', 'Internal methods', 'General know-how', 'Templates', 'Libraries', 'Technical processes', 'Non-client-specific knowledge'] },
          { p: 'Transfer of ownership of custom project deliverables, if agreed, usually occurs only after full payment.' },
          { p: 'Third-party libraries, APIs, platforms, plugins, fonts, and tools remain subject to their own licenses and terms.' },
        ],
      },
      {
        heading: 'Portfolio and case studies',
        blocks: [
          { p: 'We do not claim the right to publicly use your name, logo, confidential information, or project details unless you give permission or this is agreed separately.' },
        ],
      },
      {
        heading: 'Confidentiality',
        blocks: [
          { p: 'If you share non-public business information with us through a form or during project discussions, we will treat it with reasonable care.' },
          { p: 'A separate confidentiality agreement may be signed if stricter confidentiality terms are required.' },
        ],
      },
      {
        heading: 'Third-party services',
        blocks: [
          { p: 'This website or our services may rely on third-party platforms, hosting providers, APIs, infrastructure providers, communication tools, payment tools, software libraries, or other external services.' },
          { p: 'We are not responsible for third-party services, their availability, security, performance, pricing, policies, or terms.' },
        ],
      },
      {
        heading: 'Website availability',
        blocks: [
          { p: 'We do not guarantee that the website will always be available, uninterrupted, secure, or error-free.' },
          { p: 'We may suspend, update, or remove parts of the website at any time.' },
        ],
      },
      {
        heading: 'No professional advice',
        blocks: [
          { p: 'Content on this website does not constitute legal, financial, tax, security, compliance, or professional advice.' },
          { p: 'You are responsible for obtaining professional advice where needed for your business, industry, data, users, or legal obligations.' },
        ],
      },
      {
        heading: 'Disclaimer',
        blocks: [
          { p: 'The website is provided “as is” and “as available”.' },
          { p: 'To the maximum extent permitted by applicable law, we disclaim all warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, non-infringement, availability, and accuracy.' },
        ],
      },
      {
        heading: 'Limitation of liability',
        blocks: [
          { p: 'To the maximum extent permitted by applicable law, Runmade is not liable for indirect, incidental, special, consequential, punitive, or exemplary damages.' },
          { p: 'This includes loss of profits, revenue, data, business opportunities, goodwill, or business interruption.' },
          { p: 'Our total liability for any claim related to this website is limited to the amount you paid us for the specific service giving rise to the claim.' },
          { p: 'If no payment was made, our liability is limited to the minimum amount permitted by applicable law.' },
        ],
      },
      {
        heading: 'Indemnity',
        blocks: [
          { p: 'You agree to hold Runmade harmless from claims, damages, losses, liabilities, costs, and expenses arising from:' },
          { ul: ['Your misuse of the website', 'Your violation of these Terms', 'Your violation of third-party rights', 'Materials or information you provide to us', 'Your business, users, products, services, or legal obligations'] },
        ],
      },
      {
        heading: 'Changes to these Terms',
        blocks: [
          { p: 'We may update these Terms from time to time.' },
          { p: 'The updated version will be posted on this page with a new effective date.' },
          { p: 'Continued use of the website after changes are posted means you accept the updated Terms.' },
        ],
      },
      {
        heading: 'Governing law',
        blocks: [
          { p: 'These Terms are governed by the laws specified in the applicable project agreement.' },
          { p: 'If no project agreement applies, these Terms are governed by the laws of [JURISDICTION].' },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          { p: 'For questions about these Terms, contact us at [CONTACT EMAIL].' },
        ],
      },
    ],
  },
}

export const stillHaveQuestionsPopup = {
  title: 'Ask us directly',
  body: 'Send your question. A real person will reply quickly.',
  questionLabel: 'Your question',
  questionPlaceholder: 'What would you like to clarify?',
  emailLabel: 'Email',
  emailPlaceholder: 'you@example.com',
  messengerLabel: 'WhatsApp or Telegram',
  messengerPlaceholder: '+971 XX XXX XXXX or @username',
  contactHint: 'You only need to fill in one contact method.',
  submitLabel: 'Send question',
  note: 'No automated replies. No sales pressure.',
  closeLabel: 'Close',
  successTitle: 'Thanks',
  successBody: "We'll get back to you within 24 hours.",
  errors: {
    question: 'Please enter your question.',
    contactRequired: 'Please leave an email or WhatsApp/Telegram so we can reply.',
    emailFormat: 'Please enter a valid email address.',
    messengerFormat: 'Please enter a valid WhatsApp number or Telegram username.',
  },
}

export const socialLinks: Array<{ platform: string; href: string }> = [
  // TODO: add real links
  // { platform: 'LinkedIn', href: 'https://linkedin.com/company/...' },
  // { platform: 'X',        href: 'https://x.com/...' },
]
