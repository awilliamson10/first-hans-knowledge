// src/lib/content.ts
import { cache } from 'react'
import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { Guide, SkillGuide, QuestGuide } from './types'

// Cache at build time for static generation
export const getGuides = cache(async (type: 'skills' | 'quests'): Promise<Guide[]> => {
  const directory = path.join(process.cwd(), 'content', type)
  const files = await readdir(directory)
  
  const guides = await Promise.all(
    files
      .filter(file => file.endsWith('.md') && !file.startsWith('_'))
      .map(async file => {
        const fullPath = path.join(directory, file)
        const source = await readFile(fullPath, 'utf8')
        const { data, content } = matter(source)
        
        return {
          ...data,
          slug: file.replace('.md', ''),
          content,
          category: type
        } as Guide
      })
  )
  
  return guides
})

// Individual guide fetcher
export const getGuideBySlug = cache(async (
  type: 'skills' | 'quests',
  slug: string
): Promise<Guide | null> => {
  try {
    const fullPath = path.join(process.cwd(), 'content', type, `${slug}.md`)
    const source = await readFile(fullPath, 'utf8')
    const { data, content } = matter(source)
    
    return {
      ...data,
      slug,
      content,
      category: type
    } as Guide
  } catch {
    return null
  }
})