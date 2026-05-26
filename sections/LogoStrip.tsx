const logos = [
  { src: "/images/logos/lava.svg", alt: "Lava" },
  { src: "/images/logos/paxful5450.logowik.com.svg", alt: "Paxful" },
  { src: "/images/logos/rwelogo.svg", alt: "RWE" },
]

export function LogoStrip() {
  return (
    <section
      aria-label="Trusted by great companies"
      className="border-b border-border bg-bg-base"
    >
      <div className="mx-auto max-w-[1440px] px-10 md:px-16 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <p className="text-[0.75rem] md:text-[0.875rem] font-bold uppercase tracking-[0.18em] text-text-secondary/60">
            Trusted by great companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14 lg:gap-20">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-14 w-[88px] md:h-[110px] md:w-[200px] lg:h-[120px] lg:w-[240px] items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain opacity-40 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
