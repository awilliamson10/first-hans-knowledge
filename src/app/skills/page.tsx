import { getGuides } from '@/lib/content'
import { SkillGuide } from '@/lib/types'
import Link from 'next/link'

export default async function SkillsPage() {
  const guides = await getGuides('skills') as SkillGuide[]
  
  return (
    <div className="prose max-w-none">
      <h1>Skill Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map(guide => (
          <Link 
            key={guide.slug}
            href={`/skills/${guide.slug}`}
            className="no-underline"
          >
            <div className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
              <h3 className="mt-0 mb-2">{guide.title}</h3>
              <div className="text-sm text-slate-600">
                <p>Level Requirement: {guide.levelRequirement}</p>
                {guide.membersOnly && <p>Members Only</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
