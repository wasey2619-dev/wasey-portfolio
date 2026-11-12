'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, ArrowUpRight, Dribbble } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from './section-heading'
import { projects, type Project } from '@/lib/portfolio-data'

const categories = ['All', 'Branding', 'Flyer', 'Social Media', 'Python'] as const
type Category = (typeof categories)[number]

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge className="border-primary/40 bg-primary/15 text-primary">
            {project.category}
          </Badge>
          <Badge variant="secondary" className="bg-background/70 backdrop-blur">
            {project.year}
          </Badge>
        </div>
        <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} repository`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:rotate-12 group-hover:text-primary" />
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted/60 px-2 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [active, setActive] = React.useState<Category>('All')

  const filtered = React.useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  )

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Designs I'm proud of"
          description="A curated selection of creatives and brand work I've designed for clients. Each one helped a business stand out and connect with its audience."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                active === cat
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="projects-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Want to see more? I have plenty of other creatives and client work.
          </p>
          <Button asChild variant="outline">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <Dribbble className="mr-1.5 h-4 w-4" />
              See more on Dribbble
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
