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
            <PaxfulLogo />
          </div>
        </div>
      </div>
    </section>
  )
}

function PaxfulLogo() {
  return (
    <svg
      viewBox="0 0 152 32"
      className="h-7 w-auto text-text-primary/[0.22]"
      fill="currentColor"
      aria-label="Paxful"
      role="img"
    >
      <text
        x="0"
        y="25"
        fontFamily="'Arial Black', 'Arial', Helvetica, sans-serif"
        fontWeight="900"
        fontSize="24"
        letterSpacing="5"
      >
        PAXFUL
      </text>
    </svg>
  )
}
