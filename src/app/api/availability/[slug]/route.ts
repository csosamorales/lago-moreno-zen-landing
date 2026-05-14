import { NextResponse } from 'next/server'

// iCal URLs from Airbnb — store these in .env.local, never committed to git.
// Each apartment's iCal export URL from Airbnb contains an auth token.
const ICAL_URLS: Record<string, string | undefined> = {
  'zen-i': process.env.ICAL_ZEN_I,
  'zen-ii': process.env.ICAL_ZEN_II,
  'zen-iii': process.env.ICAL_ZEN_III,
  'mono-zen': process.env.ICAL_MONO_ZEN,
  'zen-iv': process.env.ICAL_ZEN_IV,
}

/**
 * Parses an iCal string and returns all booked dates as YYYY-MM-DD strings.
 * Iterates over each VEVENT block and expands DTSTART–DTEND ranges.
 */
function parseIcal(text: string): string[] {
  const dates = new Set<string>()

  const toDate = (s: string): Date =>
    new Date(`${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}T00:00:00Z`)

  const blocks = text.split('BEGIN:VEVENT')
  for (const block of blocks.slice(1)) {
    const startMatch = block.match(/DTSTART[^:\r\n]*:(\d{8})/)
    const endMatch = block.match(/DTEND[^:\r\n]*:(\d{8})/)
    if (!startMatch || !endMatch) continue

    const start = toDate(startMatch[1])
    const end = toDate(endMatch[1])

    const cur = new Date(start)
    while (cur < end) {
      dates.add(cur.toISOString().slice(0, 10))
      cur.setUTCDate(cur.getUTCDate() + 1)
    }
  }

  return Array.from(dates)
}

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const url = ICAL_URLS[params.slug]

  if (!url) {
    return NextResponse.json({ dates: [] })
  }

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // cache for 1 hour
    })

    if (!res.ok) {
      return NextResponse.json({ dates: [] })
    }

    const text = await res.text()
    return NextResponse.json({ dates: parseIcal(text) })
  } catch {
    return NextResponse.json({ dates: [] })
  }
}
