const logos = [
  { src: "/images/logos/lava.svg", alt: "Lava", maxH: "28px", maxW: "120px" },
  { src: "/images/logos/paxful5450.logowik.com.svg", alt: "Paxful", maxH: "26px", maxW: "130px" },
  { src: "/images/logos/rwelogo.svg", alt: "RWE", maxH: "18px", maxW: "64px" },
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
