import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoMarkProps {
  variant?: 'light' | 'dark'   // kept for API compatibility — image works on both
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  pulse?: boolean
}

// Width/height pairs — aspect ratio ~5.3:1 matches the logo file
const sizeMap = {
  sm: { width: 176, height: 48 },
  md: { width: 208, height: 56 },
  lg: { width: 240, height: 64 },
  xl: { width: 280, height: 76 },
}

export function LogoMark({
  size = 'sm',
  pulse = false,
  className,
}: LogoMarkProps) {
  const { width, height } = sizeMap[size]

  return (
    <a
      href="/"
      aria-label="Runmade — home"
      className={cn(
        'inline-flex items-center select-none',
        pulse && 'logo-pulse',
        className,
      )}
    >
      <Image
        src="/images/logo.png"
        alt="Runmade"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </a>
  )
}
