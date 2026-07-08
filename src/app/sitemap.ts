import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { getPostSlugs } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dhyanshivindia.in'

  // Static pages
  const staticPages = [
    '/',
    '/about',
    '/services',
    '/blog',
    '/portfolio',
    '/pricing',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/refund-policy',
    '/copyright',
    '/signin',
  ]

  // Service pages
  const services = [
    'compliance-automation',
    'corporate-tech',
    'automated-payments',
    'security-trust-ops',
    'workflow-automation',
    'support-service-ops',
  ]

  // Blog pages
  const blogSlugs = await getPostSlugs()

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '/' ? 'daily' : 'weekly',
    priority: page === '/' ? 1.0 : 0.8,
  }))

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticEntries, ...serviceEntries, ...blogEntries]
}
