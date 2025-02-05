import { getGuides, getGuideBySlug } from '@/lib/content'
import GuideContent from '@/components/GuideContent'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const guides = await getGuides('skills')
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export default async function SkillGuidePage({
  params
}: {
  params: { slug: string }
}) {
  const guide = await getGuideBySlug('skills', params.slug)
  
  if (!guide) {
    notFound()
  }
  
  return <GuideContent guide={guide} />
}