import { LanguageProvider } from '@/context/LanguageContext'
import type { Lang } from '@/i18n/types'

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang: Lang = params.lang === 'en' ? 'en' : 'es'
  return <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
}
