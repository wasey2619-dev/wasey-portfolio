'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Twitter, Dribbble, MapPin, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { profile, techMarquee } from '@/lib/portfolio-data'

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  'X / Twitter': Twitter,
  Dribbble: Dribbble,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 md:pb-24 md:pt-36"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent)] blur-2xl"
        aria-hidden
      />
      <div
        className="absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-5">
            <Badge
              variant="outline"
              className="gap-2 rounded-full border-primary/40 bg-primary/10 px-3 py-1.5 text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {profile.available ? 'Available for work' : 'Currently booked'}
            </Badge>
          </motion.div>

          <motion.p
            variants={item}
            className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.firstName}</span>.
            <br />
            I craft <span className="text-gradient">visuals</span> that brands
            remember.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline} Based in {profile.location}, I help small
            businesses and restaurants stand out with logos, flyers and social
            media creatives — from first sketch to final export.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View my work
                <ArrowDown className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.resumeUrl}>
                <Download className="mr-1.5 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              {profile.email}
            </a>
            <div className="flex items-center gap-2">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons] ?? Github
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/60 p-2 shadow-xl backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="rounded-xl bg-background/80 px-3 py-2 backdrop-blur">
                  <p className="text-sm font-semibold">{profile.shortName}</p>
                  <p className="text-xs text-muted-foreground">{profile.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            className="absolute -right-4 top-10 hidden rounded-xl border border-border/60 bg-card/80 px-3 py-2 shadow-lg backdrop-blur sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-xs text-muted-foreground">Designs</p>
            <p className="text-lg font-bold text-primary">80+</p>
          </motion.div>
          <motion.div
            className="absolute -left-4 bottom-24 hidden rounded-xl border border-border/60 bg-card/80 px-3 py-2 shadow-lg backdrop-blur sm:block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <p className="text-xs text-muted-foreground">Clients</p>
            <p className="text-lg font-bold text-primary">20+</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative mx-auto mt-16 max-w-6xl overflow-hidden md:mt-24"
      >
        <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Tools I design with every day
        </p>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
