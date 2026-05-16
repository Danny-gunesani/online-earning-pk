import { MetadataRoute } from 'next'

// Yahan apne blog posts add karte raho
const blogPosts = [
  { slug: 'payoneer-jazzcash-guide', date: '2026-04-01' },
  { slug: 'fiverr-pakistan-beginners', date: '2026-04-05' },
  { slug: 'upwork-profile-tips-pakistan', date: '2026-04-10' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: 'https://online-earning-pk-xtsm.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: 'https://online-earning-pk-xtsm.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  const blogPages = blogPosts.map((post) => ({
    url: `https://online-earning-pk-xtsm.vercel.app/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}