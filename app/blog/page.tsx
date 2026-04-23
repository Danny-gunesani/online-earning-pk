import { generateMeta } from '@/app/lib/metadata.ts'

export const metadata = generateMeta({
  title: 'Blog — Earn Online in Pakistan Guides 2026',
  description:
    'Step by step guides on how to earn money online in Pakistan. Fiverr, Upwork, Payoneer, and more.',
  slug: 'blog',
})

const posts = [
  {
    slug: 'payoneer-jazzcash-guide',
    title: 'How to Transfer Payoneer Money to JazzCash in Pakistan 2026',
    description:
      'Complete step by step guide to link your Payoneer account with JazzCash and withdraw money easily.',
    date: 'April 1, 2026',
    category: 'Payments',
    readTime: '5 min read',
  },
  {
    slug: 'fiverr-pakistan-beginners',
    title: 'How to Start Fiverr in Pakistan — Beginner Guide 2026',
    description:
      'Learn how to create a Fiverr account, set up your gig, and get your first order from Pakistan.',
    date: 'April 5, 2026',
    category: 'Freelancing',
    readTime: '7 min read',
  },
  {
    slug: 'upwork-profile-tips-pakistan',
    title: 'How to Create a Winning Upwork Profile in Pakistan 2026',
    description:
      'Tips to build a strong Upwork profile that gets noticed and lands clients fast.',
    date: 'April 10, 2026',
    category: 'Freelancing',
    readTime: '6 min read',
  },
  {
    slug: 'best-skills-pakistan-2026',
    title: 'Best Skills to Learn for Online Earning in Pakistan 2026',
    description:
      'Top in-demand skills that Pakistani freelancers can learn to earn dollars online.',
    date: 'April 15, 2026',
    category: 'Skills',
    readTime: '4 min read',
  },
]

const categoryColors: Record<string, string> = {
  Payments: 'bg-blue-100 text-blue-700',
  Freelancing: 'bg-green-100 text-green-700',
  Skills: 'bg-purple-100 text-purple-700',
}

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Earn Online Pakistan — Guides
        </h1>
        <p className="text-gray-600 text-lg">
          Practical step by step guides to start earning online from Pakistan.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-gray-200 rounded-xl p-6 hover:shadow-md transition group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}
              >
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.readTime}</span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
              {post.title}
            </h2>

            <p className="text-gray-600 text-sm">{post.description}</p>

            <div className="mt-4 text-green-600 text-sm font-semibold">
              Read More →
            </div>
          </a>
        ))}
      </div>

    </main>
  )
}