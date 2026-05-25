const logos = [
  { src: "/images/logos/lava.svg", alt: "Lava", maxW: "max-w-[110px]" },
  { src: "/images/logos/paxful5450.logowik.com.svg", alt: "Paxful", maxW: "max-w-[100px]" },
  { src: "/images/logos/rwelogo.svg", alt: "RWE", maxW: "max-w-[72px]" },
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
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className={`flex h-9 items-center justify-center ${logo.maxW} w-full`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain opacity-35 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
