'use client'
import { useState } from 'react'
import { LogoMark } from './LogoMark'
import { Modal } from '@/components/ui/Modal'
import { CareersForm } from '@/components/forms/CareersForm'
import { LegalDocument } from '@/components/ui/LegalDocument'
import {
  footerTagline,
  footerCopyright,
  footerColumns,
  socialLinks,
  supportContact,
  ongoingSupportPopup,
  careersPopup,
  legalDocuments,
  type FooterLink as FooterLinkType,
  type FooterModalKey,
} from '@/content/siteCopy'

export function Footer() {
  const { services, company, contact, legal } = footerColumns
  const [modal, setModal] = useState<FooterModalKey | null>(null)
  const close = () => setModal(null)

  return (
    <footer className="bg-bg-dark text-white/70">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <div aria-hidden className="mx-auto h-px w-full max-w-[960px] bg-white/10" />
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 py-7 md:gap-8 md:py-16 md:grid-cols-4">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-2 md:items-stretch md:gap-4">
            <LogoMark variant="light" size="sm" className="scale-[1.5] -mt-2 mb-1 md:scale-100 md:mt-0 md:mb-0 md:self-start" />
            <p className="text-[0.7rem] md:text-[1.05rem] leading-snug text-white/60 text-center md:text-left whitespace-nowrap md:whitespace-normal md:max-w-[260px]">
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
                    className="text-[0.9rem] text-white/55 hover:text-white transition-colors"
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
              <FooterItem key={l.label} link={l} onOpenModal={setModal} />
            ))}
          </FooterColumn>

          {/* Company */}
          <FooterColumn heading={company.heading}>
            {company.links.map((l) => (
              <FooterItem key={l.label} link={l} onOpenModal={setModal} />
            ))}
          </FooterColumn>

          {/* Contact + Legal — side by side on mobile (row 3), stacked on desktop (col 4) */}
          <div className="col-span-2 grid grid-cols-2 gap-x-6 md:col-span-1 md:flex md:flex-col md:gap-6">
            <FooterColumn heading={contact.heading}>
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[0.72rem] md:text-[1.1rem] font-medium leading-relaxed text-white hover:text-white/80 transition-colors whitespace-nowrap"
                >
                  {contact.email}
                </a>
              )}
              {contact.location && (
                <span className="text-[0.8rem] md:text-[1.1rem] leading-relaxed text-white/55">{contact.location}</span>
              )}
            </FooterColumn>
            <FooterColumn heading={legal.heading}>
              {legal.links.map((l) => (
                <FooterItem key={l.label} link={l} onOpenModal={setModal} />
              ))}
            </FooterColumn>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 md:py-6 text-[0.8rem] md:text-[0.9rem] text-white/45">
          {footerCopyright}
        </div>
      </div>

      {/* Ongoing Support */}
      <Modal
        open={modal === 'support'}
        onClose={close}
        title={ongoingSupportPopup.title}
        description={ongoingSupportPopup.body}
        closeLabel={ongoingSupportPopup.closeLabel}
      >
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`mailto:${supportContact.email}`}
            className="flex items-center justify-between rounded-lg border border-border bg-bg-base px-4 py-3 text-[0.95rem] font-medium text-text-primary transition-colors hover:border-accent/50 hover:bg-bg-surface"
          >
            <span>{ongoingSupportPopup.emailLabel}</span>
            <span className="text-text-secondary">{supportContact.email}</span>
          </a>
          <a
            href={supportContact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-border bg-bg-base px-4 py-3 text-[0.95rem] font-medium text-text-primary transition-colors hover:border-accent/50 hover:bg-bg-surface"
          >
            <span>{ongoingSupportPopup.whatsappLabel}</span>
            <span className="text-text-secondary">{supportContact.whatsappDisplay}</span>
          </a>
        </div>
      </Modal>

      {/* Careers */}
      <Modal open={modal === 'careers'} onClose={close} title={careersPopup.title} closeLabel={careersPopup.closeLabel}>
        <CareersForm onClose={close} />
      </Modal>

      {/* Legal documents */}
      <Modal
        open={modal === 'privacy'}
        onClose={close}
        title={legalDocuments.privacy.title}
        maxWidthClassName="max-w-2xl"
      >
        <LegalDocument doc={legalDocuments.privacy} />
      </Modal>
      <Modal
        open={modal === 'terms'}
        onClose={close}
        title={legalDocuments.terms.title}
        maxWidthClassName="max-w-2xl"
      >
        <LegalDocument doc={legalDocuments.terms} />
      </Modal>
    </footer>
  )
}

function FooterColumn({
  heading,
  children,
  className,
}: {
  heading: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-2 md:gap-3 ${className ?? ''}`}>
      <p className="text-[0.95rem] font-semibold uppercase tracking-wider text-white/60">
        {heading}
      </p>
      <div className="flex flex-col gap-1 md:gap-1.5">{children}</div>
    </div>
  )
}

const footerItemClass =
  'text-left text-[0.8rem] md:text-[1.1rem] leading-snug md:leading-relaxed text-white/65 hover:text-white transition-colors'

function FooterItem({
  link,
  onOpenModal,
}: {
  link: FooterLinkType
  onOpenModal: (key: FooterModalKey) => void
}) {
  if ('modal' in link) {
    return (
      <button type="button" onClick={() => onOpenModal(link.modal)} className={footerItemClass}>
        {link.label}
      </button>
    )
  }
  return (
    <a href={link.href} className={footerItemClass}>
      {link.label}
    </a>
  )
}
