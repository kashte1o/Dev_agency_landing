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
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-text-secondary/60">
            Trusted by great companies
          </p>
          <div className="flex items-center justify-center gap-12 md:gap-20">
            {logos.map((logo) => (
              <div key={logo.alt} className="flex h-12 w-32 items-center justify-center">
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
