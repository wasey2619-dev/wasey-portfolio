'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './section-heading'
import { experiences } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-border/40 bg-muted/20 px-4 py-20 sm:px-6 md:py-28"
    >
      <div
        className="absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience & journey"
          description="The roles and training that shaped how I design and deliver — each one taught me something I still use today."
        />

        <div className="relative mt-14">
          {/* Vertical line */}
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[19px]"
            aria-hidden
          />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Node */}
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background sm:h-10 sm:w-10">
                  <span className="flex h-3 w-3 rounded-full bg-primary sm:h-3.5 sm:w-3.5" />
                  <Briefcase className="absolute h-4 w-4 text-primary opacity-0" />
                </span>

                <div className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1.5 sm:items-end">
                      <Badge variant="secondary" className="font-medium">
                        {exp.period}
                      </Badge>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
