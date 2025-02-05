import { getGuides } from '@/lib/content'
import { QuestGuide } from '@/lib/types'
import Link from 'next/link'

export default async function QuestsPage() {
  const guides = await getGuides('quests') as QuestGuide[]
  
  return (
    <div className="prose max-w-none">
      <h1>Quest Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map(guide => (
          <Link 
            key={guide.slug}
            href={`/quests/${guide.slug}`}
            className="no-underline"
          >
            <div className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
              <h3 className="mt-0 mb-2">{guide.title}</h3>
              <div className="text-sm text-slate-600">
                <p>Difficulty: {guide.difficulty}</p>
                <p>Length: {guide.length}</p>
                <p>Quest Points: {guide.questPoints}</p>
                {guide.membersOnly && <p>Members Only</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}