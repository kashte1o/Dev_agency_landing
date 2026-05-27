const logos = [
  { src: "/images/logos/lava.svg",                   alt: "Lava" },
  { src: "/images/logos/Gymshark_idjQqXJS_o_1.svg",  alt: "Gymshark" },
  { src: "/images/logos/Huel_idf70Rt9LQ_0.svg",      alt: "Huel" },
  { src: "/images/logos/hubspot.svg",                alt: "HubSpot" },
  { src: "/images/logos/monzo-logo.svg",             alt: "Monzo" },
  { src: "/images/logos/shopify-2.svg",              alt: "Shopify" },
  { src: "/images/logos/trustpilot-1.svg",           alt: "Trustpilot" },
  { src: "/images/logos/rwelogo.svg",                alt: "RWE" },
  { src: "/images/logos/Symbol.svg",                 alt: "Symbol" },
  { src: "/images/logos/idBbC2W5qu_logos.svg",       alt: "Partner" },
]

// Item box and right-gap kept in sync via clamp; per-item margin (not CSS `gap`)
// guarantees the duplicate set lines up exactly at -50% for a jump-free loop.
const ITEM_HEIGHT = 'clamp(56px, 9vw, 120px)'
const ITEM_WIDTH  = 'clamp(88px, 17vw, 240px)'
const ITEM_GAP    = 'clamp(24px, 5vw, 80px)'

export function LogoStrip() {
  // Duplicate the list so translateX(-50%) yields a seamless loop.
  const track = [...logos, ...logos]

  return (
    <section
      aria-label="Trusted by great companies"
      className="border-b border-border bg-bg-base"
    >
      <div className="mx-auto w-full max-w-[1440px] px-10 md:px-16 lg:px-20 pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <p className="text-[1.5rem] md:text-[1.75rem] font-bold uppercase tracking-[0.18em] text-text-secondary/60 text-center">
            Trusted by great companies
          </p>

          {/* Marquee viewport: edge fade via gradient mask (~30% on each side),
              center fully opaque. Overflow hidden clips the looping track. */}
          <div
            className="logo-marquee w-full overflow-hidden"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
            }}
          >
            <div className="logo-marquee-track flex items-center w-max will-change-transform">
              {track.map((logo, i) => (
                <div
                  key={i}
                  aria-hidden={i >= logos.length || undefined}
                  className="flex shrink-0 items-center justify-center"
                  style={{
                    height: ITEM_HEIGHT,
                    width: ITEM_WIDTH,
                    marginRight: ITEM_GAP,
                  }}
                >
                  <img
                    src={logo.src}
                    alt={i < logos.length ? logo.alt : ''}
                    className="max-h-full max-w-full object-contain opacity-40 grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
