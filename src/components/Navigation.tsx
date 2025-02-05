import Link from 'next/link'
import { getGuides } from '@/lib/content'

export async function Navigation() {
  const [skills, quests] = await Promise.all([
    getGuides('skills'),
    getGuides('quests')
  ])
  
  return (
    <nav className="bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            First Hans Knowledge
          </Link>
          
          <div className="space-x-8">
            <Link href="/skills" className="hover:text-slate-300">
              Skills ({skills.length})
            </Link>
            <Link href="/quests" className="hover:text-slate-300">
              Quests ({quests.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}