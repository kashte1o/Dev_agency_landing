import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoMarkProps {
  variant?: 'light' | 'dark'   // kept for API compatibility — image works on both
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  pulse?: boolean
  intro?: boolean
  /**
   * Set true only when this LogoMark is above the fold on initial render
   * (i.e. the navbar). Other usages (footer, mobile drawer) should leave
   * it false so Next.js can lazy-load the variant instead of emitting a
   * preload hint for every instance.
   */
  priority?: boolean
}

// Width/height pairs — aspect ratio ~5.3:1 matches the logo file
const sizeMap = {
  sm: { width: 180, height: 49 },
  md: { width: 312, height: 84 },
  lg: { width: 468, height: 125 },
  xl: { width: 420, height: 114 },
}

export function LogoMark({
  size = 'sm',
  pulse = false,
  intro = false,
  className,
  priority = false,
}: LogoMarkProps) {
  const { width, height } = sizeMap[size]

  return (
    <Link
      href="/"
      aria-label="Runmade — home"
      className={cn(
        'relative inline-flex items-center select-none',
        pulse && 'logo-pulse',
        className,
      )}
      style={{ width, height }}
    >
      <Image
        src="/images/logo.png"
        alt="Runmade"
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1536px) 468px, (min-width: 1280px) 312px, 180px"
        className="object-contain object-left relative z-[1]"
      />
      {intro && (
        <>
          <span aria-hidden className="logo-intro-sweep" />
          <span aria-hidden className="logo-intro-flash" />
        </>
      )}
    </Link>
  )
}
