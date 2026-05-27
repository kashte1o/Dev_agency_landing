import { LogoMark } from './LogoMark'
import { footerTagline, footerCopyright, footerColumns, socialLinks } from '@/content/siteCopy'

export function Footer() {
  const { services, company, contact, legal } = footerColumns

  return (
    <footer className="bg-bg-dark text-white/70">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <div aria-hidden className="mx-auto h-px w-full max-w-[480px] bg-white/10" />
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <LogoMark variant="light" />
            <p className="text-sm leading-relaxed text-white/50 max-w-[200px]">
              {footerTagline}
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3 mt-1">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <FooterColumn heading={services.heading}>
            {services.links.map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterColumn>

          {/* Company */}
          <FooterColumn heading={company.heading}>
            {company.links.map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </FooterColumn>

          {/* Contact + Legal */}
          <div className="flex flex-col gap-6">
            <FooterColumn heading={contact.heading}>
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              )}
              {contact.location && (
                <span className="text-sm text-white/40">{contact.location}</span>
              )}
            </FooterColumn>

            <FooterColumn heading={legal.heading}>
              {legal.links.map((l) => (
                <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
              ))}
            </FooterColumn>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-xs text-white/30">
          {footerCopyright}
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
        {heading}
      </p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-white/50 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}
