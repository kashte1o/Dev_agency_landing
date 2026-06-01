'use client'
import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

const TARGET = 4.3

export function ProofLine() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? TARGET : 0)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setVal(TARGET)
      setRevealed(true)
      return
    }
    const controls = animate(0, TARGET, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
      onComplete: () => setRevealed(true),
    })
    return () => controls.stop()
  }, [inView, reduce])

  return (
    <div
      ref={ref}
      className="flex w-full max-w-3xl flex-col items-center gap-2.5 text-center"
    >
      <p className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-[15px] text-text-primary/75 md:text-[17px]">
        <span className="relative inline-flex items-baseline">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 blur-2xl transition-opacity duration-700"
            style={{
              background:
                'radial-gradient(circle, rgba(59,130,246,0.32) 0%, transparent 70%)',
              opacity: revealed ? 1 : 0.4,
            }}
          />
          <span className="relative text-4xl font-bold tracking-tight text-accent tabular-nums md:text-[44px]">
            ${val.toFixed(1)}M
          </span>
        </span>
        <span className="leading-snug">
          in additional revenue generated through custom software we built
        </span>
      </p>
    </div>
  )
}
