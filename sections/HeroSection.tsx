import { HeroCta } from '@/components/ui/HeroCta'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import type { hero as HeroDataType } from '@/content/home'

// Must stay in sync with NavBar.tsx NAV_H_MOBILE / NAV_H_DESKTOP
const NAV_H_MOBILE  = 80
const NAV_H_DESKTOP = 130

interface HeroSectionProps {
  hero: typeof HeroDataType
  availableText: string
  isAvailable: boolean
}

export function HeroSection({ hero, availableText, isAvailable }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#070A12] flex flex-col"
      aria-label="Hero"
    >

      {/* ── Ambient top glow ──────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 28% at 50% -4%, rgba(59,130,246,0.055) 0%, transparent 100%)',
        }}
      />

      {/* ── Grain ────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '256px 256px',
        }}
      />

      {/* ── Content — pushes below navbar ────────────────────── */}
      <div
        className="relative z-10 flex flex-1 items-center pt-[80px] md:pt-[130px]"
      >
        <div
          className="w-full"
          style={{}}
        >
          <div
            className="mx-auto w-full max-w-[1440px] px-10 md:px-16 lg:px-20 py-12 md:py-0"
            style={
              {} as React.CSSProperties
            }
          >
            <div className="
              grid grid-cols-1 items-center
              gap-10 md:gap-12 lg:gap-16
              md:grid-cols-[3fr_2fr]
            ">

              {/* ── LEFT ──────────────────────────────────────── */}
              <div className="flex flex-col gap-7 md:gap-8">

                {isAvailable && (
                  <div>
                    <StatusBadge label={availableText} />
                  </div>
                )}

                <h1
                  className="font-bold text-white tracking-[-0.025em] leading-[1.05]"
                  style={{ fontSize: 'clamp(2.5rem, 4.2vw, 5.125rem)' }}
                >
                  {hero.heading}
                </h1>

                {/* Body paragraphs (replaces former subheading) */}
                <div className="flex flex-col gap-5 max-w-[680px]">
                  {hero.bodyParagraphs.map((para, i) => (
                    <p
                      key={i}
                      className="leading-[1.65] text-white/55"
                      style={{ fontSize: 'clamp(1.2rem, 1.2vw, 1.38rem)' }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 md:gap-5 pt-2">
                  <HeroCta href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                  </HeroCta>
                  <Button
                    href={hero.secondaryCta.href}
                    variant="ghost-dark"
                    className="
                      px-7 py-[14px] text-[0.95rem]
                      md:px-12 md:py-[26px] md:text-[1.1rem] md:rounded-[10px]
                    "
                  >
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </div>

              {/* ── RIGHT: person photo ───────────────────────── */}
              <div className="hidden md:flex items-end justify-center">
                <PersonPhoto />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,10,18,0.75))' }}
      />
    </section>
  )
}

function PersonPhoto() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative mx-auto flex max-w-[480px] select-none items-end justify-center"
        style={{
          // Width-based scaling (was 72vh) so portrait doesn't drift with viewport height.
          // min() with svh as a safety cap on short-viewport monitors.
          height: 'min(clamp(340px, 30vw, 520px), 58svh)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-person.webp"
          alt="Aleksandr Sizov"
          className="block h-full w-auto object-contain object-bottom"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-28"
          style={{ background: 'linear-gradient(to bottom, transparent, #070A12)' }}
        />
      </div>

      {/* Caption — kept directly attached to the portrait as one block */}
      <div className="text-center pt-1 pb-4 max-w-[380px]">
        <p className="text-[1.75rem] font-semibold leading-snug text-white/80 tracking-[-0.01em]">
          Aleksandr Sizov
        </p>
        <p className="mt-3 text-[1.125rem] leading-[1.6] text-white/50 italic">
          &ldquo;I approach every project from the client&apos;s side: business first, budget protected, and software delivered fast.&rdquo;
        </p>
        <p className="mt-3 text-[1.5rem] text-white/35 tracking-[0.025em]">
          Founder &amp; CEO of Runmade
        </p>
      </div>
    </div>
  )
}
