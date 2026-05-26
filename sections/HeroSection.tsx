import { HeroCta } from '@/components/ui/HeroCta'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import type { hero as HeroDataType } from '@/content/home'

interface HeroSectionProps {
  hero: typeof HeroDataType
  availableText: string
  isAvailable: boolean
}

export function HeroSection({ hero, availableText, isAvailable }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#070A12] flex flex-col"
      aria-label="Hero"
      style={{
        // Fits below the fixed header without leaving large empty space.
        // Uses svh (small viewport height) so mobile browser chrome doesn't shift the fold.
        minHeight: 'calc(100svh - var(--header-h))',
        marginTop: 'var(--header-h)',
      }}
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

      {/* ── Content — vertically centered between header and bottom ─ */}
      <div className="relative z-10 flex flex-1 items-center w-full">
        <div
          className="mx-auto w-full max-w-[1440px] px-10 md:px-16 lg:px-20"
          style={{
            paddingTop: 'clamp(32px, 4vh, 72px)',
            paddingBottom: 'clamp(32px, 4vh, 72px)',
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] items-center"
            style={{ columnGap: 'clamp(40px, 5vw, 96px)', rowGap: 'clamp(40px, 6vw, 80px)' }}
          >
            {/* ── LEFT: headline + body + CTAs ───────────────── */}
            <div className="flex flex-col" style={{ gap: 'clamp(20px, 2.2vw, 36px)' }}>
              {isAvailable && availableText && (
                <div>
                  <StatusBadge label={availableText} />
                </div>
              )}

              <h1
                className="font-bold text-white tracking-[-0.025em]"
                style={{
                  fontSize: 'clamp(2.25rem, 4.6vw, 5rem)',
                  lineHeight: 1.05,
                }}
              >
                {hero.heading}
              </h1>

              <div
                className="flex flex-col max-w-[640px]"
                style={{ gap: 'clamp(12px, 1.2vw, 20px)' }}
              >
                {hero.bodyParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-white/55"
                    style={{
                      fontSize: 'clamp(1rem, 1.1vw, 1.32rem)',
                      lineHeight: 1.6,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div
                className="flex flex-wrap items-center"
                style={{ gap: 'clamp(12px, 1.2vw, 20px)', marginTop: 'clamp(4px, 0.5vw, 8px)' }}
              >
                <HeroCta href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </HeroCta>
                <Button
                  href={hero.secondaryCta.href}
                  variant="ghost-dark"
                  className="md:rounded-[10px]"
                  style={{
                    paddingInline: 'clamp(20px, 2.2vw, 48px)',
                    paddingBlock: 'clamp(12px, 1.5vw, 26px)',
                    fontSize: 'clamp(0.95rem, 0.95vw, 1.1rem)',
                  }}
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>

            {/* ── RIGHT: portrait + caption as ONE vertical group ─ */}
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
          height: 'clamp(80px, 12vh, 160px)',
          background: 'linear-gradient(to bottom, transparent, rgba(7,10,18,0.75))',
        }}
      />
    </section>
  )
}

function PersonPhoto() {
  return (
    <div className="flex flex-col items-center mx-auto" style={{ maxWidth: 'clamp(300px, 30vw, 480px)' }}>
      {/* Portrait — height scales with viewport width, image keeps aspect ratio */}
      <div
        className="relative select-none flex items-end justify-center w-full"
        style={{ height: 'clamp(360px, 36vw, 540px)' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-person.webp"
          alt="Aleksandr Sizov"
          className="block h-full w-auto object-contain object-bottom"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0"
          style={{
            height: 'clamp(64px, 8vw, 120px)',
            background: 'linear-gradient(to bottom, transparent, #070A12)',
          }}
        />
      </div>

      {/* Caption — locked to portrait, fluid spacing */}
      <div
        className="text-center max-w-[380px]"
        style={{ marginTop: 'clamp(8px, 0.8vw, 16px)' }}
      >
        <p
          className="font-semibold text-white/80 tracking-[-0.01em]"
          style={{ fontSize: 'clamp(1.25rem, 1.55vw, 1.75rem)', lineHeight: 1.25 }}
        >
          Aleksandr Sizov
        </p>
        <p
          className="text-white/50 italic"
          style={{
            marginTop: 'clamp(8px, 0.8vw, 14px)',
            fontSize: 'clamp(0.95rem, 1vw, 1.125rem)',
            lineHeight: 1.55,
          }}
        >
          &ldquo;I approach every project from the client&apos;s side: business first, budget protected, and software delivered fast.&rdquo;
        </p>
        <p
          className="text-white/35 tracking-[0.025em]"
          style={{
            marginTop: 'clamp(8px, 0.8vw, 14px)',
            fontSize: 'clamp(1.05rem, 1.25vw, 1.5rem)',
            lineHeight: 1.3,
          }}
        >
          Founder &amp; CEO of Runmade
        </p>
      </div>
    </div>
  )
}
