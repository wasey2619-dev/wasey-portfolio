'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Twitter, Dribbble, Heart } from 'lucide-react'

import { profile, navLinks } from '@/lib/portfolio-data'

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  'X / Twitter': Twitter,
  Dribbble: Dribbble,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]"
        >
          {/* Brand */}
          <div className="space-y-3">
            <a href="#home" className="flex items-center gap-2 text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                {profile.initials}
              </span>
              {profile.shortName}
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              {profile.role}. Crafting bold, eye-catching visuals — logos,
              flyers and social media creatives from {profile.location}.
            </p>
            <div className="flex gap-2 pt-1">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons] ?? Github
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Navigate</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Get in touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {profile.email}
                </a>
              </li>
              <li className="text-muted-foreground">{profile.phone}</li>
              <li className="text-muted-foreground">{profile.location}</li>
            </ul>
            <a
              href="#home"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to top
            </a>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with
            <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
            using Next.js, Tailwind &amp; shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}
