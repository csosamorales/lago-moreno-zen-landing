import { notFound } from 'next/navigation'
import { apartments, getApartment } from '@/data/apartments'
import DepartmentClient from './DepartmentClient'

export function generateStaticParams() {
  return apartments.map((a) => ({ slug: a.slug }))
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const apt = getApartment(params.slug)
  if (!apt) notFound()
  return <DepartmentClient apartment={apt} />
}
