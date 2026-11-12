'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from './section-heading'
import { profile, services } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Designer with an eye for bold visuals"
          description="I blend creative flair with disciplined execution — turning briefs into eye-catching designs that help brands stand out and get noticed."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Profile image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/60">
              <div className="relative aspect-[4/3]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <div className="absolute bottom-3 left-3 rounded-lg bg-background/80 px-3 py-1.5 text-sm font-medium backdrop-blur">
                {profile.location}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {profile.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className="h-full border-border/60 bg-card/60">
                    <CardContent className="p-4">
                      <p className="text-2xl font-bold text-primary sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio + services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {profile.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/50 hover:bg-accent/40"
                >
                  <service.icon className="mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
