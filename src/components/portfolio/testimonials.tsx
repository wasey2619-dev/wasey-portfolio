'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from './section-heading'
import { testimonials } from '@/lib/portfolio-data'

export function Testimonials() {
  const [index, setIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(1)
  const [paused, setPaused] = React.useState(false)

  const count = testimonials.length

  const go = React.useCallback(
    (dir: number) => {
      setDirection(dir)
      setIndex((prev) => (prev + dir + count) % count)
    },
    [count]
  )

  React.useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 6000)
    return () => clearInterval(id)
  }, [paused, go])

  const active = testimonials[index]

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from collaborators"
          description="I care deeply about the people I work with. Here's what a few of them had to say."
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur sm:p-12">
            <Quote className="absolute right-6 top-6 h-16 w-16 text-primary/10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-base font-bold text-primary">
                    {active.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{active.name}</p>
                    <p className="text-sm text-muted-foreground">{active.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? 'w-6 bg-primary'
                      : 'w-1.5 bg-border hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
