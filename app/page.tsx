import { HeroSection } from '@/sections/HeroSection'
import { PainSection } from '@/sections/PainSection'
import { ChaosTransition } from '@/sections/ChaosTransition'
import { PillarsSection } from '@/sections/PillarsSection'
import { ProcessSection } from '@/sections/ProcessSection'
import { CredibilitySection } from '@/sections/CredibilitySection'
import { ContactSection } from '@/sections/ContactSection'

import { hero, pain, chaosOrder, pillars, credibility, contactSection } from '@/content/home'
import { processHeading, processSteps } from '@/content/process'
import { isAvailable, availableText } from '@/content/siteCopy'

export default function HomePage() {
  return (
    <>
      <HeroSection
        hero={hero}
        availableText={availableText}
        isAvailable={isAvailable}
      />
      <PainSection pain={pain} />
      <ChaosTransition chaosOrder={chaosOrder} />
      <PillarsSection pillars={pillars} />
      <ProcessSection heading={processHeading} steps={processSteps} />
      <CredibilitySection credibility={credibility} />
      <ContactSection contactSection={contactSection} />
    </>
  )
}
