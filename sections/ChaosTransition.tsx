'use client'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from 'framer-motion'
import { LayoutGrid, Zap, Users } from 'lucide-react'
import type { chaosOrder as ChaosOrderType } from '@/content/home'

// ─── Geometry ────────────────────────────────────────────────────
// viewBox 0 0 1280 700  (preserveAspectRatio="none" → fills container)
// Left zone  :   0 – 480   (pills right-edge at x=472)
// Center     : 480 – 800   (node at x=640, y=350)
// Right zone : 800 – 1280  (pillars left-edge at x=808)

const VB_W  = 1280
const VB_H  = 700
const PILL_X   = 488   // line starts here (pill right edge ~480 + 8px gap)
const CENTER_X = 640
const CENTER_Y = 350
const PILLAR_X = 808   // line ends here (pillar left edge − 4px gap)

// 8 pill y-centres, evenly distributed in the container height
const PILL_Y: number[] = Array.from({ length: 8 }, (_, i) =>
  Math.round(70 + i * ((VB_H - 140) / 7)),
) // [70, 150, 260, 350, 440, 550, 630] approx

// 3 pillar y-centres
const PILLAR_Y = [163, 350, 538]

function chaosPath(y: number) {
  const cp1x = PILL_X   + 70
  const cp2x = CENTER_X - 70
  return `M ${PILL_X},${y} C ${cp1x},${y} ${cp2x},${CENTER_Y} ${CENTER_X},${CENTER_Y}`
}
function pillarPath(y: number) {
  const cp1x = CENTER_X + 70
  const cp2x = PILLAR_X - 70
  return `M ${CENTER_X},${CENTER_Y} C ${cp1x},${CENTER_Y} ${cp2x},${y} ${PILLAR_X},${y}`
}

// ─── Pillar config ────────────────────────────────────────────────
const PILLAR_CFG = [
  { Icon: LayoutGrid, dot: '#3B82F6', text: '#93C5FD', scrollStart: 0.60, scrollEnd: 0.78 },
  { Icon: Zap,        dot: '#84CC16', text: '#BEF264', scrollStart: 0.70, scrollEnd: 0.88 },
  { Icon: Users,      dot: '#F59E0B', text: '#FCD34D', scrollStart: 0.80, scrollEnd: 0.98 },
] as const

// ─── Sub-components (useTransform at component level, not in .map) ─

function ChaosPill({
  word,
  index,
  progress,
}: {
  word: string
  index: number
  progress: MotionValue<number>
}) {
  const appear   = index * 0.027           // 0, 0.027, 0.054 …
  const opacity  = useTransform(progress, [appear, appear + 0.1, 0.72, 0.82], [0, 1, 1, 0.4])
  const x        = useTransform(progress, [appear, appear + 0.12], [-14, 0])
  const y        = PILL_Y[index] ?? CENTER_Y

  return (
    <div
      className="absolute"
      style={{ top: y, right: '62.5%', transform: 'translateY(-50%)' }}
    >
      <motion.div style={{ opacity, x }}>
        <span className="
          inline-flex items-center
          rounded-full
          border border-white/[0.13]
          bg-white/[0.055]
          px-3 py-[5px]
          text-[0.78rem] font-medium tracking-[0.01em] text-white/60
          whitespace-nowrap
        ">
          {word}
        </span>
      </motion.div>
    </div>
  )
}

function SvgChaosLine({
  index,
  progress,
}: {
  index: number
  progress: MotionValue<number>
}) {
  const y = PILL_Y[index] ?? CENTER_Y
  const d = chaosPath(y)

  const drawStart   = 0.20 + index * 0.016
  const drawEnd     = drawStart + 0.18
  const pulseStart  = 0.40 + index * 0.010
  const pulseEnd    = pulseStart + 0.13

  const dashOffset   = useTransform(progress, [drawStart, drawEnd],               [1, 0])
  const lineOpacity  = useTransform(progress, [drawStart, drawStart + 0.04, 0.72, 0.82], [0, 0.32, 0.32, 0.28])
  const pulseOffset  = useTransform(progress, [pulseStart, pulseEnd],             [1.07, -0.07])
  const pulseOpacity = useTransform(
    progress,
    [pulseStart, pulseStart + 0.03, pulseEnd - 0.03, pulseEnd],
    [0, 1, 1, 0],
  )

  return (
    <g>
      {/* Static dot at pill exit */}
      <motion.circle
        cx={PILL_X}
        cy={y}
        r={2.5}
        fill="rgba(255,255,255,0.3)"
        style={{ opacity: lineOpacity }}
      />
      {/* Line draw */}
      <motion.path
        d={d}
        pathLength={1}
        fill="none"
        stroke="white"
        strokeWidth="0.9"
        strokeDasharray="1"
        style={{ strokeDashoffset: dashOffset, opacity: lineOpacity }}
      />
      {/* Energy pulse */}
      <motion.path
        d={d}
        pathLength={1}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="0.06 0.94"
        style={{ strokeDashoffset: pulseOffset, opacity: pulseOpacity }}
      />
    </g>
  )
}

function SvgPillarLine({
  index,
  progress,
}: {
  index: number
  progress: MotionValue<number>
}) {
  const y   = PILLAR_Y[index] ?? CENTER_Y
  const d   = pillarPath(y)
  const cfg = PILLAR_CFG[index]!

  const drawStart  = cfg.scrollStart - 0.06
  const drawEnd    = drawStart + 0.16

  const dashOffset  = useTransform(progress, [drawStart, drawEnd], [1, 0])
  const lineOpacity = useTransform(progress, [drawStart, drawStart + 0.05], [0, 0.35])
  const dotOpacity  = useTransform(progress, [drawEnd - 0.04, drawEnd], [0, 0.7])

  return (
    <g>
      <motion.path
        d={d}
        pathLength={1}
        fill="none"
        stroke="white"
        strokeWidth="0.9"
        strokeDasharray="1"
        style={{ strokeDashoffset: dashOffset, opacity: lineOpacity }}
      />
      {/* Dot at pillar end */}
      <motion.circle
        cx={PILLAR_X}
        cy={y}
        r={3}
        fill={cfg.dot}
        style={{ opacity: dotOpacity }}
      />
    </g>
  )
}

function CenterNode({ progress }: { progress: MotionValue<number> }) {
  const scale   = useTransform(progress, [0.45, 0.62], [0, 1])
  const opacity = useTransform(progress, [0.45, 0.60, 1.0], [0, 1, 0.65])

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative flex h-5 w-5 items-center justify-center"
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute h-5 w-5 rounded-full bg-accent/25"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
        />
        {/* Core dot */}
        <div className="relative z-10 h-[10px] w-[10px] rounded-full bg-accent" />
      </motion.div>
    </div>
  )
}

function PillarItem({
  label,
  index,
  progress,
}: {
  label: string
  index: number
  progress: MotionValue<number>
}) {
  const cfg     = PILLAR_CFG[index]!
  const opacity = useTransform(progress, [cfg.scrollStart, cfg.scrollEnd], [0, 1])
  const x       = useTransform(progress, [cfg.scrollStart, cfg.scrollEnd], [18, 0])
  const y       = PILLAR_Y[index] ?? CENTER_Y
  const Icon    = cfg.Icon

  return (
    <div
      className="absolute"
      style={{ top: y, left: '62.5%', transform: 'translateY(-50%)' }}
    >
      <motion.div style={{ opacity, x }} className="flex items-center gap-3">
        <div
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: cfg.dot + '1F', border: `1px solid ${cfg.dot}55` }}
        >
          <Icon size={14} style={{ color: cfg.dot }} />
        </div>
        <span
          className="text-[1.05rem] font-semibold whitespace-nowrap"
          style={{ color: cfg.text }}
        >
          {label}
        </span>
      </motion.div>
    </div>
  )
}

// ─── Static fallback (mobile + prefers-reduced-motion) ────────────
function StaticDiagram({ chaosOrder }: { chaosOrder: typeof ChaosOrderType }) {
  const pillars = [
    { label: chaosOrder.pillars.organize, cfg: PILLAR_CFG[0]! },
    { label: chaosOrder.pillars.automate, cfg: PILLAR_CFG[1]! },
    { label: chaosOrder.pillars.serve,    cfg: PILLAR_CFG[2]! },
  ]
  return (
    <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-10">

      {/* Chaos pills */}
      <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end sm:gap-2">
        {chaosOrder.chaosWords.map((w) => (
          <span
            key={w}
            className="
              inline-flex items-center
              rounded-full
              border border-white/[0.13] bg-white/[0.055]
              px-3 py-[5px]
              text-[0.78rem] font-medium text-white/60
            "
          >
            {w}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="hidden sm:block text-white/20 text-xl" aria-hidden>
        ──→
      </div>

      {/* Pillars */}
      <div className="flex flex-col gap-4">
        {pillars.map(({ label, cfg }) => {
          const Icon = cfg.Icon
          return (
            <div key={label} className="flex items-center gap-3">
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: cfg.dot + '1F', border: `1px solid ${cfg.dot}55` }}
              >
                <Icon size={14} style={{ color: cfg.dot }} />
              </div>
              <span className="text-[1.05rem] font-semibold" style={{ color: cfg.text }}>
                {label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────
interface ChaosTransitionProps {
  chaosOrder: typeof ChaosOrderType
}

export function ChaosTransition({ chaosOrder }: ChaosTransitionProps) {
  const ref             = useRef<HTMLDivElement>(null)
  const prefersReduced  = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'center center'],
  })

  const leftHeadingOpacity  = useTransform(scrollYProgress, [0, 0.15, 0.55, 0.68], [0, 1, 1, 0])
  const rightHeadingOpacity = useTransform(scrollYProgress, [0.70, 0.85], [0, 1])

  const pillarsData = [
    { label: chaosOrder.pillars.organize },
    { label: chaosOrder.pillars.automate },
    { label: chaosOrder.pillars.serve },
  ]

  return (
    <section
      id="chaos-order"
      className="relative overflow-hidden bg-[#0D1117]"
      aria-label="From chaos to structured systems"
    >
      {/* Subtle grain — matches hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '256px 256px',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-10 py-24 md:px-16 md:py-32 lg:px-20"
      >

        {/* ── Headings (desktop only, scroll-animated) ───────── */}
        {!prefersReduced && (
          <div className="mb-16 hidden items-end justify-between md:flex">
            <motion.p
              style={{ opacity: leftHeadingOpacity }}
              className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-white/30"
            >
              {chaosOrder.headingLeft}
            </motion.p>
            <motion.p
              style={{ opacity: rightHeadingOpacity }}
              className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-white/30"
            >
              {chaosOrder.headingRight}
            </motion.p>
          </div>
        )}

        {/* ── Desktop animated diagram ──────────────────────── */}
        {prefersReduced ? (
          /* Reduced-motion: static final state */
          <div className="hidden md:block">
            <StaticDiagram chaosOrder={chaosOrder} />
          </div>
        ) : (
          <div
            className="relative hidden md:block"
            style={{ height: VB_H }}
          >
            {/* Full-width SVG overlay */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              preserveAspectRatio="none"
              aria-hidden
            >
              {chaosOrder.chaosWords.map((_, i) => (
                <SvgChaosLine key={i} index={i} progress={scrollYProgress} />
              ))}
              {[0, 1, 2].map((i) => (
                <SvgPillarLine key={i} index={i} progress={scrollYProgress} />
              ))}
            </svg>

            {/* Chaos pills */}
            {chaosOrder.chaosWords.map((word, i) => (
              <ChaosPill
                key={word}
                word={word}
                index={i}
                progress={scrollYProgress}
              />
            ))}

            {/* Center convergence node */}
            <CenterNode progress={scrollYProgress} />

            {/* Pillar items */}
            {pillarsData.map((p, i) => (
              <PillarItem
                key={p.label}
                label={p.label}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>
        )}

        {/* ── Mobile: static diagram ────────────────────────── */}
        <div className="md:hidden">
          <StaticDiagram chaosOrder={chaosOrder} />
        </div>

      </div>
    </section>
  )
}
