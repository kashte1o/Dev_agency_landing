import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export function CtaTransition() {
  return (
    <Section background="base" className="py-10 md:py-14">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:gap-10 md:text-left">
          <p className="max-w-xl text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
            Enough theory. Let&apos;s discuss your case.
          </p>
          <a
            href="/#start-project"
            className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-[#0057FF] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#1E40AF]"
          >
            Let&apos;s scope your project
          </a>
        </div>
      </Container>
    </Section>
  )
}
