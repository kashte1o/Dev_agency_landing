'use client'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { staggerContainer, fadeUp, VIEWPORT } from '@/lib/motion'
import type { projects as ProjectsType } from '@/content/home'

interface ProjectsSectionProps {
  projects: typeof ProjectsType
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" background="base">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-10 md:gap-14"
        >
          <motion.div variants={fadeUp} className="flex max-w-3xl flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              {projects.heading}
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
              {projects.subline}
            </p>
          </motion.div>

          <ul className="flex flex-col gap-5 md:gap-6">
            {projects.cases.map((c, i) => (
              <motion.li
                key={c.title}
                variants={fadeUp}
                className="group relative grid grid-cols-1 gap-8 rounded-[24px] border border-border bg-bg-surface p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_28px_-12px_rgba(59,130,246,0.18)] md:grid-cols-12 md:items-start md:gap-12 md:p-12 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                {/* Left: index + tag + title + body */}
                <div className="flex flex-col gap-5 md:col-span-7">
                  <div className="flex items-baseline gap-3">
                    <span
                      aria-hidden
                      className="font-mono text-[1.05rem] font-semibold text-accent"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-text-secondary">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-text-primary [text-wrap:balance] md:text-[30px]">
                    {c.title}
                  </h3>
                  <p className="text-[16px] leading-[1.65] text-text-primary/80 md:text-[17px]">
                    {c.body}
                  </p>
                </div>

                {/* Right: outcomes */}
                <div className="md:col-span-5 md:border-l md:border-border md:pl-10">
                  <p className="mb-5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-secondary/70">
                    {projects.outcomesLabel}
                  </p>
                  <ul className="flex flex-col gap-4">
                    {c.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-3 text-[16px] leading-snug text-text-primary md:text-[17px]"
                      >
                        <span
                          aria-hidden
                          className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                        />
                        <span className="font-medium">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </Section>
  )
}
