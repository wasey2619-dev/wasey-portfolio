'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Loader2, CheckCircle2, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SectionHeading } from './section-heading'
import { profile } from '@/lib/portfolio-data'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(2, 'Add a short subject'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Tell me a bit more (10+ characters)'),
  company: z.string().optional(), // honeypot
})

type FormValues = z.infer<typeof schema>

const budgets = ['< $1k', '$1k – $5k', '$5k – $15k', '$15k+', "Let's discuss"]

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours', href: null },
]

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', budget: '', message: '', company: '' },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      toast.success('Message sent!', {
        description: data.message ?? 'I will get back to you soon.',
      })
      setSubmitted(true)
      reset()
    } catch (err) {
      toast.error('Could not send message', {
        description:
          err instanceof Error ? err.message : 'Please try again in a moment.',
      })
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/40 bg-muted/20 px-4 py-20 sm:px-6 md:py-28"
    >
      <div
        className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's create something great"
          description="Have a design project in mind, or just want to say hello? I'm always open to discussing new opportunities and creative ideas."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Contact details</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Prefer a direct line? Reach me through any of these.
              </p>
              <div className="mt-5 space-y-3">
                {contactInfo.map((info) => {
                  const Inner = (
                    <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/40 p-3 transition-colors hover:border-primary/40">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <info.icon className="h-4 w-4 text-primary" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="truncate text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  )
                  return info.href ? (
                    <a key={info.label} href={info.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    <div key={info.label}>{Inner}</div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <p className="font-semibold">Available for new projects</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Currently accepting freelance work and long-term collaborations.
                Booking starts in 1–2 weeks.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur sm:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </span>
                <h3 className="text-xl font-semibold">Message sent!</h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll reply to your email within
                  24 hours. In the meantime, feel free to browse my work.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-2"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Honeypot field (hidden from users) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  {...register('company')}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">
                      Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject">
                    Subject <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    aria-invalid={!!errors.subject}
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated budget</Label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <BudgetChip key={b} value={b} register={register} />
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline and goals..."
                    aria-invalid={!!errors.message}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function BudgetChip({
  value,
  register,
}: {
  value: string
  register: ReturnType<typeof useForm<FormValues>>['register']
}) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        value={value}
        className="peer sr-only"
        {...register('budget')}
      />
      <span className="inline-flex rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary/15 peer-checked:text-primary hover:border-primary/50">
        {value}
      </span>
    </label>
  )
}
