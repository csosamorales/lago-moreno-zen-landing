'use client'
import React, { createContext, useContext } from 'react'
import type { Lang, Translations } from '@/i18n/types'
import { es } from '@/i18n/es'
import { en } from '@/i18n/en'

const translations: Record<Lang, Translations> = { es, en }

interface LanguageContextValue {
  lang: Lang
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  t: es,
})

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode
  initialLang: Lang
}) {
  return (
    <LanguageContext.Provider value={{ lang: initialLang, t: translations[initialLang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
