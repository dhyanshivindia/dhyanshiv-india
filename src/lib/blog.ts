import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image?: string
  tags: string[]
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/blog/posts')

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const files = fs.readdirSync(postsDirectory)
    const posts: BlogPost[] = []

    for (const file of files) {
      if (!file.endsWith('.mdx')) continue

      const slug = file.replace('.mdx', '')
      const fullPath = path.join(postsDirectory, file)
      const fileContent = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContent)

      posts.push({
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Dhyanshiv India',
        image: data.image,
        tags: data.tags || [],
        content,
      })
    }

    // Sort by date descending
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Dhyanshiv India',
      image: data.image,
      tags: data.tags || [],
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const files = fs.readdirSync(postsDirectory)
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace('.mdx', ''))
  } catch (error) {
    console.error('Error reading blog post slugs:', error)
    return []
  }
}
