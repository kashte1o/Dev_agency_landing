type SubmissionKind = 'project' | 'career'

type ContactPayload = {
  kind?: unknown
  name?: unknown
  email?: unknown
  whatsapp?: unknown
  problem?: unknown
  businessIndustry?: unknown
  budget?: unknown
  role?: unknown
  experience?: unknown
  salary?: unknown
  message?: unknown
  website?: unknown
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_BODY_SIZE = 16_000

function text(value: unknown, maxLength = 2_000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    }
    return entities[character]
  })
}

function detailsRow(label: string, value: string) {
  if (!value) return ''
  return `<tr><td style="padding:4px 12px 4px 0;color:#64748b"><strong>${escapeHtml(label)}</strong></td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`
}

function responseError(message: string, status = 400) {
  return Response.json({ error: message }, { status })
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > MAX_BODY_SIZE) {
    return responseError('The submission is too large.', 413)
  }

  let payload: ContactPayload
  try {
    payload = await request.json() as ContactPayload
  } catch {
    return responseError('Invalid submission.')
  }

  // Hidden honeypot field. Bots receive the same successful response but no email is sent.
  if (text(payload.website, 200)) {
    return Response.json({ ok: true })
  }

  const kind = text(payload.kind, 20) as SubmissionKind
  const name = text(payload.name, 120)
  const email = text(payload.email, 254).toLowerCase()

  if (kind !== 'project' && kind !== 'career') {
    return responseError('Unknown submission type.')
  }
  if (!name) {
    return responseError('Please enter your name.')
  }
  if (email && !EMAIL_RE.test(email)) {
    return responseError('Please enter a valid email address.')
  }

  const resendKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL
  if (!resendKey || !from || !recipient) {
    return responseError('The contact form is not configured yet. Please try again later.', 503)
  }

  let subject: string
  let html: string
  const replyTo = email || undefined

  if (kind === 'project') {
    const whatsapp = text(payload.whatsapp, 100)
    const problem = text(payload.problem, 4_000)
    const businessIndustry = text(payload.businessIndustry, 300)
    const budget = text(payload.budget, 100)

    if (!email && !whatsapp) {
      return responseError('Please leave an email address or WhatsApp number.')
    }
    if (!problem) {
      return responseError('Please describe what you want to fix or build.')
    }

    subject = `New project inquiry from ${name}`
    html = `<h2>New project inquiry</h2><table>${detailsRow('Name', name)}${detailsRow('Email', email)}${detailsRow('WhatsApp', whatsapp)}${detailsRow('Industry', businessIndustry)}${detailsRow('Budget', budget)}</table><h3>What they want to fix or build</h3><p style="white-space:pre-wrap">${escapeHtml(problem)}</p>`
  } else {
    const role = text(payload.role, 300)
    const experience = text(payload.experience, 300)
    const salary = text(payload.salary, 300)
    const message = text(payload.message, 4_000)

    if (!email) {
      return responseError('Please enter a valid email address.')
    }
    if (!role) {
      return responseError('Please tell us which role you are interested in.')
    }

    subject = `New careers inquiry from ${name}`
    html = `<h2>New careers inquiry</h2><table>${detailsRow('Name', name)}${detailsRow('Email', email)}${detailsRow('Role', role)}${detailsRow('Experience', experience)}${detailsRow('Salary expectations', salary)}</table>${message ? `<h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(message)}</p>` : ''}`
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    })

    if (!resendResponse.ok) {
      console.error('Resend rejected contact submission', resendResponse.status)
      return responseError('We could not send your message. Please try again shortly.', 502)
    }
  } catch (error) {
    console.error('Unable to reach Resend', error)
    return responseError('We could not send your message. Please try again shortly.', 502)
  }

  return Response.json({ ok: true })
}
