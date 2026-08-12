import { NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'

interface LeadPayload {
  name?: string
  email?: string
  whatsapp?: string
  problem?: string
  businessIndustry?: string
  budget?: string
  role?: string
  experience?: string
  salary?: string
  message?: string
  source?: 'contact' | 'faq' | 'career'
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function row(label: string, value?: string) {
  if (!value) return ''
  return `<tr><td style="padding:6px 12px;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#111827;font-size:14px">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`
}

export async function POST(request: Request) {
  const { env } = getCloudflareContext()
  const variables = env as unknown as Record<string, string | undefined>
  const apiKey =
    variables.RESEND_API_KEY ??
    process.env.RESEND_API_KEY
  const toEmail =
    variables.CONTACT_RECIPIENT_EMAIL ??
    process.env.CONTACT_RECIPIENT_EMAIL ??
    variables.CONTACT_TO_EMAIL ??
    process.env.CONTACT_TO_EMAIL ??
    ''
  const fromEmail =
    variables.RESEND_FROM_EMAIL ??
    process.env.RESEND_FROM_EMAIL ??
    variables.CONTACT_FROM_EMAIL ??
    process.env.CONTACT_FROM_EMAIL ??
    ''

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Contact form: Resend configuration is incomplete')
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  let payload: LeadPayload
  try {
    payload = (await request.json()) as LeadPayload
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const source = payload.source === 'faq' ? 'faq' : payload.source === 'career' ? 'career' : 'contact'
  const name = payload.name?.trim() ?? ''
  const email = payload.email?.trim() ?? ''
  const whatsapp = payload.whatsapp?.trim() ?? ''
  const problem = payload.problem?.trim() ?? ''
  const industry = payload.businessIndustry?.trim() ?? ''
  const budget = payload.budget?.trim() ?? ''
  const role = payload.role?.trim() ?? ''
  const experience = payload.experience?.trim() ?? ''
  const salary = payload.salary?.trim() ?? ''
  const message = payload.message?.trim() ?? ''

  if (source === 'career' && (!name || !email || !role)) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }
  if (source !== 'career' && (!problem || (!email && !whatsapp))) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }
  if (source === 'contact' && !name) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const displayName = name || (source === 'faq' ? 'FAQ visitor' : 'Anonymous')
  const subject =
    source === 'faq'
      ? `New FAQ question from runmadeagency.com — ${displayName}`
      : source === 'career'
        ? `New careers inquiry from runmadeagency.com — ${displayName}`
      : `New lead from runmadeagency.com — ${displayName}`
  const headerLabel = source === 'faq' ? 'Runmade · FAQ question' : source === 'career' ? 'Runmade · Careers inquiry' : 'Runmade · New lead'
  const problemLabel = source === 'faq' ? 'Question' : 'What to fix / build'
  const rows = source === 'career'
    ? `${row('Email', email)}${row('Role', role)}${row('Experience', experience)}${row('Salary expectations', salary)}${row('Message', message)}`
    : `${row('Email', email)}${source === 'faq' ? row('Telegram / Phone', whatsapp) : row('WhatsApp', whatsapp)}${row('Industry', industry)}${row('Budget', budget)}${row(problemLabel, problem)}`

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#f7f8fa;padding:24px">
      <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="padding:20px 24px;background:#070A12;color:#fff">
          <div style="font-size:13px;letter-spacing:.15em;text-transform:uppercase;color:#9ca3af">${headerLabel}</div>
          <div style="font-size:18px;font-weight:600;margin-top:4px">${escapeHtml(displayName)}</div>
        </div>
        <table style="width:100%;border-collapse:collapse">
          ${rows}
        </table>
      </div>
    </div>
  `

  const text = [
    source === 'faq'
      ? `New FAQ question from runmadeagency.com`
      : source === 'career'
        ? `New careers inquiry from runmadeagency.com`
      : `New lead from runmadeagency.com`,
    ``,
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    source === 'career' && role && `Role: ${role}`,
    source === 'career' && experience && `Experience: ${experience}`,
    source === 'career' && salary && `Salary expectations: ${salary}`,
    source === 'career' && message && `Message: ${message}`,
    source !== 'career' && whatsapp &&
      (source === 'faq' ? `Telegram / Phone: ${whatsapp}` : `WhatsApp: ${whatsapp}`),
    industry && `Industry: ${industry}`,
    budget && `Budget: ${budget}`,
    ``,
    source !== 'career' && `${problemLabel}:`,
    source !== 'career' && problem,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        html,
        text,
        reply_to: email || undefined,
      }),
    })

    if (!resendRes.ok) {
      const detail = await resendRes.text().catch(() => '')
      console.error('Resend error', resendRes.status, detail)
      return NextResponse.json(
        { error: 'Email delivery failed.', detail },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form unexpected error', err)
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 })
  }
}
