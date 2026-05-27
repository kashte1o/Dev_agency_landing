import { Section } from '@/components/ui/Section'

export function CtaTransition() {
  return (
    <Section background="base" className="py-6 md:py-7 border-y border-border">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
        <p className="text-lg font-semibold tracking-tight text-text-primary md:text-xl">
          Enough theory. Let&apos;s discuss your case.
        </p>
        <a
          href="/#start-project"
          className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-[#0057FF] px-6 py-2.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#1E40AF]"
        >
          Let&apos;s scope your project
        </a>
      </div>
    </Section>
  )
}
