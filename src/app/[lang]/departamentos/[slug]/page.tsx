import { notFound } from 'next/navigation'
import { apartments, getApartment } from '@/data/apartments'
import DepartmentClient from './DepartmentClient'

export function generateStaticParams() {
  const langs = ['es', 'en']
  return langs.flatMap((lang) =>
    apartments.map((a) => ({ lang, slug: a.slug }))
  )
}

export default function DepartmentPage({
  params,
}: {
  params: { lang: string; slug: string }
}) {
  const apt = getApartment(params.slug)
  if (!apt) notFound()
  return <DepartmentClient apartment={apt} />
}
