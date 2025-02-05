import { getGuideBySlug } from '@/lib/content'
import GuideContent from '@/components/GuideContent'
import { notFound } from 'next/navigation'

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