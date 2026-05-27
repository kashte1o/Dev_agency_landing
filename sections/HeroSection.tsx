import { HeroCta } from '@/components/ui/HeroCta'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { cn } from '@/lib/utils'
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
      className="relative min-h-screen w-full overflow-hidden bg-bg-dark flex flex-col"
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

      {/* ── Content — vertically centered between header and bottom.
          The section keeps `min-h-screen` so the dark fill extends from y=0
          and the fixed navbar's 55% tint sits over `#070A12`, not over the
          light body bg. The inner pt-[130px] clears the navbar visually. */}
      <div className="relative z-10 flex flex-1 items-center w-full pt-[80px] md:pt-[130px]">
        <div
          className="mx-auto w-full max-w-[1320px]"
          style={{
            paddingLeft: 'clamp(24px, 4vw, 80px)',
            paddingRight: 'clamp(24px, 4vw, 80px)',
            paddingTop: 'clamp(24px, 3vh, 64px)',
            paddingBottom: 'clamp(40px, 6vh, 96px)',
          }}
        >
          <div
            className="grid grid-cols-1 items-center md:grid-cols-[1.35fr_1fr]"
            style={{ columnGap: 'clamp(40px, 5vw, 96px)', rowGap: 'clamp(32px, 5vw, 64px)' }}
          >

            {/* ── LEFT ──────────────────────────────────────── */}
            <div className="flex flex-col gap-7 md:gap-8">

              {isAvailable && availableText && (
                <div>
                  <StatusBadge label={availableText} />
                </div>
              )}

              <h1
                className="font-bold text-white tracking-[-0.025em] leading-[1.05]"
                style={{ fontSize: 'clamp(2.5rem, 3.6vw, 4.5rem)' }}
              >
                {hero.heading}
              </h1>

              {/* Body paragraphs (replaces former subheading) */}
              <div className="flex flex-col gap-5 max-w-[640px]">
                {hero.bodyParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="leading-[1.65] text-white/55"
                    style={{ fontSize: 'clamp(1.1rem, 1.05vw, 1.3rem)' }}
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
                {/* Secondary CTA — ghost-dark style + masked text-scroll hover (same as nav Let's talk) */}
                <a
                  href={hero.secondaryCta.href}
                  className={cn(
                    'nav-cta',
                    'inline-flex items-center justify-center gap-2 font-medium select-none cursor-pointer',
                    'rounded-[var(--radius-btn)] border border-white/12 text-white/50',
                    'hover:bg-white/[0.06] hover:border-white/20 hover:text-white/70',
                    'transition-colors duration-[350ms]',
                    'px-7 py-[14px] text-[0.95rem]',
                    'md:px-12 md:py-[26px] md:text-[1.1rem] md:rounded-[10px]',
                  )}
                >
                  <span style={{ display: 'inline-block', overflow: 'hidden', height: '1.25em' }}>
                    <span
                      className="nav-cta-text-group"
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <span style={{ display: 'block', lineHeight: '1.25em' }}>
                        {hero.secondaryCta.label}
                      </span>
                      <span style={{ display: 'block', lineHeight: '1.25em' }} aria-hidden="true">
                        {hero.secondaryCta.label}
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* ── RIGHT: portrait + caption as one connected block ───── */}
            <div className="hidden md:block">
              <PersonPhoto />
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom fade ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10"
        style={{
          height: 'clamp(72px, 10vh, 140px)',
          background: 'linear-gradient(to bottom, transparent, rgba(7,10,18,0.75))',
        }}
      />
    </section>
  )
}

function PersonPhoto() {
  return (
    <div className="flex flex-col items-center mx-auto" style={{ maxWidth: '440px' }}>
      {/* Portrait — width-scaled height with a hard cap; no svh dependency that
          drifts the head off-screen on shorter monitors */}
      <div
        className="relative w-full select-none flex items-center justify-center"
        style={{
          height: 'clamp(320px, 24vw, 460px)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-person.webp"
          alt="Aleksandr Sizov"
          className="block h-full w-auto"
          style={{
            objectFit: 'contain',
            objectPosition: 'center bottom',
            maxHeight: '100%',
            maxWidth: '100%',
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0"
          style={{
            height: 'clamp(56px, 7vw, 96px)',
            background: 'linear-gradient(to bottom, transparent, #070A12)',
          }}
        />
      </div>

      {/* Caption — explicit gap keeps portrait + name + quote + role as one unit */}
      <div
        className="text-center max-w-[380px]"
        style={{ marginTop: 'clamp(8px, 1vw, 18px)', paddingBottom: 'clamp(0px, 0.5vw, 8px)' }}
      >
        <p
          className="font-semibold text-white/80 tracking-[-0.01em]"
          style={{ fontSize: 'clamp(1.2rem, 1.35vw, 1.6rem)', lineHeight: 1.25 }}
        >
          Aleksandr Sizov
        </p>
        <p
          className="text-white/50 italic"
          style={{
            marginTop: 'clamp(8px, 0.7vw, 14px)',
            fontSize: 'clamp(0.95rem, 0.95vw, 1.1rem)',
            lineHeight: 1.55,
          }}
        >
          &ldquo;I approach every project from the client&apos;s side: business first, budget protected, and software delivered fast.&rdquo;
        </p>
        <p
          className="text-white/35 tracking-[0.025em]"
          style={{
            marginTop: 'clamp(8px, 0.7vw, 14px)',
            fontSize: 'clamp(1.05rem, 1.15vw, 1.4rem)',
            lineHeight: 1.3,
          }}
        >
          Founder &amp; CEO of Runmade
        </p>
      </div>
    </div>
  )
}
