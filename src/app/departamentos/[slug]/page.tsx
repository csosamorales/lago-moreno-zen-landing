import { redirect } from 'next/navigation'

export default function DepartmentRedirect({ params }: { params: { slug: string } }) {
  redirect(`/es/departamentos/${params.slug}`)
}
