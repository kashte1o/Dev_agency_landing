import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,4vw,5rem)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
