import { Section } from '@/components/ui/Section'
import { HeroCta } from '@/components/ui/HeroCta'

export function CtaTransition() {
  return (
    <Section background="base" className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Enough theory. Let&apos;s discuss your case.
        </h2>
        <HeroCta href="/#start-project">Let&apos;s scope your project</HeroCta>
      </div>
    </Section>
  )
}
