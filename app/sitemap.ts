import { MetadataRoute } from 'next'

const blogPosts = [
  { slug: 'payoneer-jazzcash-guide', date: '2026-04-01' },
  { slug: 'fiverr-pakistan-beginners', date: '2026-04-05' },
  { slug: 'upwork-profile-tips-pakistan', date: '2026-04-10' },
  { slug: 'best-skills-pakistan-2026', date: '2026-04-15' },
]

const BASE_URL = 'https://online-earning-pk-xtsm.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}