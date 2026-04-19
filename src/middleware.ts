import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const langs = ['es', 'en'] as const

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLangPrefix = langs.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  if (!hasLangPrefix) {
    const url = request.nextUrl.clone()
    url.pathname = `/es${pathname}`
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\..*|api).*)'],
}
