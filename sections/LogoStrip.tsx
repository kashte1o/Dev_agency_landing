const logos = [
  { src: "/images/logos/lava.svg", alt: "Lava", maxH: "56px", maxW: "240px" },
  { src: "/images/logos/paxful5450.logowik.com.svg", alt: "Paxful", maxH: "52px", maxW: "260px" },
  { src: "/images/logos/rwelogo.svg", alt: "RWE", maxH: "36px", maxW: "128px" },
]

export function LogoStrip() {
  return (
    <section
      aria-label="Trusted by great companies"
      className="border-b border-border bg-bg-base"
    >
      <div className="mx-auto max-w-[1440px] px-10 md:px-16 lg:px-20 py-10 md:py-12">
        <div className="flex flex-col items-center gap-8">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-text-secondary/60">
            Trusted by great companies
          </p>
          <div className="flex items-center justify-center gap-10 md:gap-16">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={{ maxHeight: logo.maxH, maxWidth: logo.maxW }}
                className="h-auto w-auto opacity-40 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
