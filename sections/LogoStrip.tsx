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
      <div className="mx-auto max-w-[1440px] px-10 md:px-16 lg:px-20 py-10 md:py-12">
        <div className="flex flex-col items-center gap-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-text-secondary/40">
            Trusted by great companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-14 md:gap-20">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto opacity-25 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
