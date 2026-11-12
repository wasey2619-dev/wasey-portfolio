import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name is too long'),
  email: z.string().email('Please enter a valid email').max(120),
  subject: z.string().min(2, 'Subject is required').max(120).optional().or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long'),
  budget: z.string().max(40).optional().or(z.literal('')),
  // Honeypot — must be empty
  company: z.string().max(0).optional().or(z.literal('')),
})

// Try to save to the database, but never fail the request if the DB
// is unavailable (e.g. on serverless hosts where SQLite isn't set up).
// This keeps the contact form working everywhere.
async function trySave(data: {
  name: string
  email: string
  subject: string | null
  message: string
  budget: string | null
}): Promise<string | null> {
  try {
    const { db } = await import('@/lib/db')
    const record = await db.message.create({ data })
    return record.id
  } catch (err) {
    console.error('[contact] db save failed (non-fatal):', err)
    return null
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]
      return NextResponse.json(
        { ok: false, error: firstError?.message ?? 'Invalid input' },
        { status: 400 }
      )
    }

    const { name, email, subject, message, budget } = parsed.data

    const id = await trySave({
      name,
      email,
      subject: subject || null,
      message,
      budget: budget || null,
    })

    return NextResponse.json({
      ok: true,
      id,
      message: 'Thanks for reaching out! I will get back to you within 24 hours.',
    })
  } catch (err) {
    console.error('[contact] error', err)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { db } = await import('@/lib/db')
    const count = await db.message.count()
    return NextResponse.json({ ok: true, count })
  } catch (err) {
    console.error('[contact] error', err)
    return NextResponse.json({ ok: true, count: 0 })
  }
}
