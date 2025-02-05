import { MDXRemote } from 'next-mdx-remote/rsc'
import { Guide } from '@/lib/types'

interface GuideContentProps {
  guide: Guide
}

export function GuideContent({ guide }: GuideContentProps) {
  return (
    <article className="prose prose-slate max-w-none">
      <div className="mb-8">
        <h1>{guide.title}</h1>
        <div className="flex gap-4 text-sm text-slate-600">
          <span>Category: {guide.category}</span>
          {guide.membersOnly && <span>Members Only</span>}
          <span>Last Updated: {guide.lastUpdated}</span>
        </div>
      </div>
      
      <MDXRemote source={guide.content} />
      
      <div className="mt-8 pt-4 border-t">
        
          href={`https://github.com/your-repo/first-hans-knowledge/edit/main/content/${guide.category}/${guide.slug}.md`}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit this page on GitHub
        </a>
      </div>
    </article>
  )
}