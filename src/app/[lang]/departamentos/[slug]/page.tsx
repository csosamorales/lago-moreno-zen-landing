import { readdir } from 'fs/promises'
import path from 'path'
import { notFound } from 'next/navigation'
import { apartments, getApartment } from '@/data/apartments'
import DepartmentClient from './DepartmentClient'

export function generateStaticParams() {
  const langs = ['es', 'en']
  return langs.flatMap((lang) =>
    apartments.map((a) => ({ lang, slug: a.slug }))
  )
}

export default async function DepartmentPage({
  params,
}: {
  params: { lang: string; slug: string }
}) {
  const apt = getApartment(params.slug)
  if (!apt) notFound()

  const aptFolder = path.join(process.cwd(), 'public', 'apartments', params.slug)
  let images: string[] = []
  try {
    const files = await readdir(aptFolder)
    images = files
      .filter((f) => /\.(jpe?g|webp|png|gif)$/i.test(f))
      .map((f) => `/apartments/${params.slug}/${f}`)
  } catch {}

  return <DepartmentClient apartment={apt} images={images} />
}
