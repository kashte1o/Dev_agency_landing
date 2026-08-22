import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export function CtaTransition() {
  return (
    <Section background="base" className="pt-10 md:pt-14 pb-5 md:pb-7">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:gap-10 md:text-left">
          <p className="max-w-xl text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
            Enough theory. Let&apos;s discuss your case.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/#start-project"
              className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-[#0057FF] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#1E40AF]"
            >
              Let&apos;s scope your project
            </Link>
            <div className="flex flex-col items-center gap-1.5">
              <p className="whitespace-nowrap text-center text-[14px] font-medium text-text-secondary md:text-[15px]">
                Free consultation + prototype preview
              </p>
              <span
                aria-hidden
                className="cta-bar-pulse block h-[2px] w-full rounded-full bg-accent/70"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
