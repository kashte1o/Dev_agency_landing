import { HeroSection } from '@/sections/HeroSection'
import { LogoStrip } from '@/sections/LogoStrip'
import { WhyDifferentSection } from '@/sections/WhyDifferentSection'
import { PillarsSection } from '@/sections/PillarsSection'
import { ProcessSection } from '@/sections/ProcessSection'
import { CredibilitySection } from '@/sections/CredibilitySection'
import { ProofSection } from '@/sections/ProofSection'
import { CtaTransition } from '@/sections/CtaTransition'
import { FAQSection } from '@/sections/FAQSection'
import { ContactSection } from '@/sections/ContactSection'

import { hero, whyDifferent, pillars, credibility, contactSection } from '@/content/home'
import { processHeading, processSubheading, processSteps } from '@/content/process'
import { isAvailable, availableText } from '@/content/siteCopy'

export default function HomePage() {
  return (
    <>
      <HeroSection
        hero={hero}
        availableText={availableText}
        isAvailable={isAvailable}
      />
      <LogoStrip />
      <WhyDifferentSection whyDifferent={whyDifferent} />
      <ProofSection />
      <PillarsSection pillars={pillars} />
      <ProcessSection heading={processHeading} subheading={processSubheading} steps={processSteps} />
      <CredibilitySection credibility={credibility} />
      <CtaTransition />
      <FAQSection />
      <ContactSection contactSection={contactSection} />
    </>
  )
}
