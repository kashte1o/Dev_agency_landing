import { NextResponse } from 'next/server'

export const runtime = 'edge'

interface LeadPayload {
  name?: string
  email?: string
  whatsapp?: string
  problem?: string
  businessIndustry?: string
  budget?: string
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
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'hello@runmadeagency.com'
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Runmade Website <onboarding@resend.dev>'

  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  let payload: LeadPayload
  try {
    payload = (await request.json()) as LeadPayload
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = payload.name?.trim() ?? ''
  const email = payload.email?.trim() ?? ''
  const whatsapp = payload.whatsapp?.trim() ?? ''
  const problem = payload.problem?.trim() ?? ''
  const industry = payload.businessIndustry?.trim() ?? ''
  const budget = payload.budget?.trim() ?? ''

  if (!name || !problem || (!email && !whatsapp)) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const subject = `New lead from runmadeagency.com — ${name}`
  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#f7f8fa;padding:24px">
      <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="padding:20px 24px;background:#070A12;color:#fff">
          <div style="font-size:13px;letter-spacing:.15em;text-transform:uppercase;color:#9ca3af">Runmade · New lead</div>
          <div style="font-size:18px;font-weight:600;margin-top:4px">${escapeHtml(name)}</div>
        </div>
        <table style="width:100%;border-collapse:collapse">
          ${row('Email', email)}
          ${row('WhatsApp', whatsapp)}
          ${row('Industry', industry)}
          ${row('Budget', budget)}
          ${row('What to fix / build', problem)}
        </table>
      </div>
    </div>
  `

  const text = [
    `New lead from runmadeagency.com`,
    ``,
    `Name: ${name}`,
    email && `Email: ${email}`,
    whatsapp && `WhatsApp: ${whatsapp}`,
    industry && `Industry: ${industry}`,
    budget && `Budget: ${budget}`,
    ``,
    `What to fix / build:`,
    problem,
  ]
    .filter(Boolean)
    .join('\n')

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
    return NextResponse.json({ error: 'Email delivery failed.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
