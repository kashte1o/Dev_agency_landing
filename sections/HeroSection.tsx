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
      className="relative min-h-screen w-full overflow-hidden bg-[#0B1020] flex flex-col"
      aria-label="Hero"
    >

      {/* ── Ambient top glow ──────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 52% at 50% -6%, rgba(59,130,246,0.13) 0%, transparent 62%)',
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
        className="relative z-10 flex flex-1 items-center"
        style={{ paddingTop: `${NAV_H_MOBILE}px` }}
      >
        <div
          className="w-full"
          // desktop pt via inline style to keep values DRY with NAV_H_DESKTOP
          style={{}}
        >
          {/* inner wrapper that applies desktop top padding */}
          <div
            className="mx-auto w-full max-w-[1440px] px-10 md:px-16 lg:px-20 py-12 md:py-0"
            style={
              {
                // On md+: extra top padding = half the extra navbar height vs mobile
                // Centering is handled by flex items-center above
              } as React.CSSProperties
            }
          >
            {/*
              Grid: 60% left / 40% right (grid-cols-[3fr_2fr])
              On 1440px inner ~1240px:
                left ≈ 744px  → H1 at 68–78px fits comfortably in 2–3 lines
                right ≈ 496px → placeholder fills the column nicely
            */}
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

                {/*
                  H1: target 2–3 lines on large desktop.
                  At xl (1280px+) with ~744px column: 2 lines.
                  At lg (1024–1279px) with ~640px column: 2–3 lines.
                  At md (768–1023px) with ~520px column: 3–4 lines.
                */}
                <h1 className="
                  font-bold text-white tracking-[-0.025em] leading-[1.05]
                  text-[2.5rem]
                  sm:text-[3rem]
                  md:text-[3.5rem]
                  lg:text-[4rem]
                  xl:text-[4.625rem]
                  2xl:text-[5.125rem]
                ">
                  {hero.heading}
                </h1>

                {/* Subheadline */}
                <p className="
                  leading-[1.65] text-white/55
                  text-[1.2rem]
                  md:text-[1.26rem]
                  lg:text-[1.32rem]
                  xl:text-[1.38rem]
                  max-w-[680px]
                ">
                  {hero.subheading}
                </p>

                {/* CTAs — 2× the previous size on desktop */}
                <div className="flex flex-wrap items-center gap-4 md:gap-5 pt-2">
                  <Button
                    href={hero.primaryCta.href}
                    variant="primary"
                    className="
                      px-7 py-[14px] text-[0.95rem]
                      md:px-12 md:py-[26px] md:text-[1.1rem] md:font-semibold md:rounded-[10px]
                    "
                  >
                    {hero.primaryCta.label}
                  </Button>
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

                {/* Microcopy */}
                <p className="text-[0.92rem] tracking-[0.04em] text-white/22">
                  No commitment&nbsp;&nbsp;·&nbsp;&nbsp;Response within 1 business day
                </p>
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
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(11,16,32,0.75))' }}
      />
    </section>
  )
}

function PersonPhoto() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto flex h-[min(600px,72vh)] max-w-[480px] select-none items-end justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-person.webp"
          alt="Aleksandr Sizov"
          className="block h-full w-auto object-contain object-bottom"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-28"
          style={{ background: 'linear-gradient(to bottom, transparent, #0B1020)' }}
        />
      </div>

      {/* Caption */}
      <div className="text-center pt-1 pb-4">
        <p className="text-[1.75rem] font-semibold leading-snug text-white/80 tracking-[-0.01em]">
          Aleksandr Sizov
        </p>
        <p className="mt-[3px] text-[1.5rem] text-white/35 tracking-[0.025em]">
          Founder &amp; CEO of Runmade
        </p>
      </div>
    </div>
  )
}
