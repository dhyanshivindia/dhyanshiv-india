import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: `${post.title} | Dhyanshiv India Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const mdxComponents = {
    h1: (props: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />
    ),
    h3: (props: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-3" {...props} />
    ),
    p: (props: any) => (
      <p className="text-lg leading-7 mb-4 text-zinc-700 dark:text-zinc-300" {...props} />
    ),
    a: (props: any) => (
      <a className="text-cyan-600 hover:text-cyan-700 underline dark:text-cyan-400" {...props} />
    ),
    ul: (props: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-zinc-700 dark:text-zinc-300" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-zinc-700 dark:text-zinc-300" {...props} />
    ),
    li: (props: any) => <li className="ml-4" {...props} />,
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 border-cyan-500 pl-4 italic my-6 text-zinc-600 dark:text-zinc-400"
        {...props}
      />
    ),
    code: (props: any) => (
      <code
        className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm font-mono"
        {...props}
      />
    ),
    pre: (props: any) => (
      <pre
        className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-auto mb-4"
        {...props}
      />
    ),
  }

  return (
    <div>
      <section className="relative py-16 sm:py-24 lg:py-32 border-b border-zinc-200 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-zinc-800 mb-8"
          >
            <span>←</span> Back to blog
          </Link>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-300">
            {post.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <div>
              <span className="font-semibold">{post.author}</span>
            </div>
            <div>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cyan-100 px-3 py-1 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-16 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-6 py-3 font-semibold text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            ← Back to all posts
          </Link>
        </div>
      </section>
    </div>
  )
}
