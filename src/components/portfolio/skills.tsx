'use client'

import { motion } from 'framer-motion'

import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { SectionHeading } from './section-heading'
import { skillCategories } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-border/40 bg-muted/20 px-4 py-20 sm:px-6 md:py-28"
    >
      <div
        className="absolute -right-32 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills & tools"
          title="A versatile creative toolkit"
          description="Years of hands-on client work have given me depth across design software, branding, print layout and a touch of Python automation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <Card className="h-full border-border/60 bg-card/60 backdrop-blur transition-colors hover:border-primary/40">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </span>
                    <h3 className="text-base font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div key={skill.name}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{skill.name}</span>
                          <span className="font-medium tabular-nums text-foreground/80">
                            {skill.level}%
                          </span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                          <Progress
                            value={skill.level}
                            className="h-1.5"
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
