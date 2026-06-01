import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export function CtaTransition() {
  return (
    <Section background="base" className="pt-10 md:pt-14 pb-5 md:pb-7">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:gap-10 md:text-left">
          <div className="flex max-w-xl flex-col gap-2.5">
            <p className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
              Enough theory. Let&apos;s discuss your case.
            </p>
            <p className="text-base text-text-secondary md:text-[17px]">
              Free consultation + prototype preview.
            </p>
          </div>
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
