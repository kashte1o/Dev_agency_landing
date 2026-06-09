import { HeroSection } from '@/sections/HeroSection'
import { LogoStrip } from '@/sections/LogoStrip'
import { WhyDifferentSection } from '@/sections/WhyDifferentSection'
import { MetricsSection } from '@/sections/MetricsSection'
import { ProofSection } from '@/sections/ProofSection'
import { PillarsSection } from '@/sections/PillarsSection'
import { ProcessSection } from '@/sections/ProcessSection'
import { CtaTransition } from '@/sections/CtaTransition'
import { FAQSection } from '@/sections/FAQSection'
import { ContactSection } from '@/sections/ContactSection'

import { hero, whyDifferent, pillars, contactSection } from '@/content/home'
import { processHeading, processSubheading, processSteps } from '@/content/process'
import { isAvailable, availableText } from '@/content/siteCopy'

export default function HomePage() {
  return (
    // Flex column so we can reorder the last two sections on mobile only.
    // All non-reordered sections keep the default order (0) and render in
    // source order; only Contact/FAQ get explicit orders.
    <div className="flex flex-col">
      <HeroSection
        hero={hero}
        availableText={availableText}
        isAvailable={isAvailable}
      />
      <LogoStrip />
      <WhyDifferentSection whyDifferent={whyDifferent} />
      <MetricsSection />
      <ProofSection />
      <PillarsSection pillars={pillars} />
      <ProcessSection heading={processHeading} subheading={processSubheading} steps={processSteps} />
      <CtaTransition />
      {/* Mobile: Contact form sits above FAQ. Desktop: original order (FAQ → Contact). */}
      <div className="order-2 md:order-1">
        <FAQSection />
      </div>
      <div className="order-1 md:order-2">
        <ContactSection contactSection={contactSection} />
      </div>
    </div>
  )
}
