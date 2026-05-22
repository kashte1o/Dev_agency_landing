import { HeroSection } from '@/sections/HeroSection'
import { TrustStrip } from '@/sections/TrustStrip'
import { PainSection } from '@/sections/PainSection'
import { CostOfInaction } from '@/sections/CostOfInaction'
import { ChaosTransition } from '@/sections/ChaosTransition'
import { BeforeAfterSection } from '@/sections/BeforeAfterSection'
import { PillarsSection } from '@/sections/PillarsSection'
import { ProcessSection } from '@/sections/ProcessSection'
import { CredibilitySection } from '@/sections/CredibilitySection'
import { ProofSection } from '@/sections/ProofSection'
import { ContactSection } from '@/sections/ContactSection'

import { hero, pain, chaosOrder, pillars, credibility, contactSection } from '@/content/home'
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
      <TrustStrip />
      <PainSection pain={pain} />
      <CostOfInaction />
      <ChaosTransition chaosOrder={chaosOrder} />
      <BeforeAfterSection />
      <PillarsSection pillars={pillars} />
      <ProcessSection heading={processHeading} subheading={processSubheading} steps={processSteps} />
      <CredibilitySection credibility={credibility} />
      <ProofSection />
      <ContactSection contactSection={contactSection} />
    </>
  )
}
