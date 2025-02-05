import { getGuides, getGuideBySlug } from '@/lib/content'
import GuideContent from '@/components/GuideContent'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const guides = await getGuides('quests')
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export default async function QuestGuidePage({
  params
}: {
  params: { slug: string }
}) {
  const guide = await getGuideBySlug('quests', params.slug)
  
  if (!guide) {
    notFound()
  }
  
  return <GuideContent guide={guide} />
}