import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Dhyanshiv India',
  description:
    'Insights on compliance automation, corporate tech delivery, and enterprise workflows.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div>
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Blog & Insights
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
              Explore our latest articles on compliance, corporate technology, and
              enterprise workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center">
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-8 backdrop-blur transition hover:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold">{post.title}</h2>
                      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                        By {post.author} • {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
