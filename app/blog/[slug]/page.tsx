import { generateMeta } from '@/app/lib/metadata.ts'
import { ArticleSchema, FAQSchema } from '@/app/components/SchemaOrg.tsx'

const posts: Record<string, any> = {
  'payoneer-jazzcash-guide': {
    title: 'How to Transfer Payoneer Money to JazzCash in Pakistan 2026',
    description:
      'Complete step by step guide to link your Payoneer account with JazzCash and withdraw money easily.',
    date: 'April 1, 2026',
    category: 'Payments',
    readTime: '5 min read',
    content: `
      Payoneer is the most popular payment method for Pakistani freelancers.
      In this guide you will learn how to link Payoneer with JazzCash step by step.

      Step 1: Login to your Payoneer account
      Step 2: Go to Withdraw > To Bank Account
      Step 3: Add JazzCash as your bank
      Step 4: Enter your JazzCash IBAN number
      Step 5: Submit and wait 1-3 business days
    `,
    faqs: [
      {
        question: 'Does Payoneer work with JazzCash?',
        answer:
          'Yes, Payoneer supports JazzCash withdrawals in Pakistan directly to your mobile wallet.',
      },
      {
        question: 'How long does Payoneer to JazzCash transfer take?',
        answer:
          'It usually takes 1 to 3 business days for the money to arrive in your JazzCash account.',
      },
      {
        question: 'What is the minimum withdrawal from Payoneer to JazzCash?',
        answer:
          'The minimum withdrawal amount is $20 or equivalent in PKR.',
      },
    ],
  },

  'fiverr-pakistan-beginners': {
    title: 'How to Start Fiverr in Pakistan — Beginner Guide 2026',
    description:
      'Learn how to create a Fiverr account, set up your gig, and get your first order from Pakistan.',
    date: 'April 5, 2026',
    category: 'Freelancing',
    readTime: '7 min read',
    content: `
      Fiverr is one of the best platforms to start earning online in Pakistan.
      You can offer any skill — writing, design, video editing, and more.

      Step 1: Go to fiverr.com and create a free account
      Step 2: Complete your profile with photo and bio
      Step 3: Create your first gig with a clear title
      Step 4: Add your skills and pricing
      Step 5: Share your gig and wait for orders
    `,
    faqs: [
      {
        question: 'Can I use Fiverr from Pakistan?',
        answer:
          'Yes, Fiverr is fully available in Pakistan and you can receive payments via Payoneer.',
      },
      {
        question: 'How do I get my first Fiverr order?',
        answer:
          'Optimize your gig title with keywords, add a clear description, and share your gig on social media.',
      },
      {
        question: 'What skills sell best on Fiverr from Pakistan?',
        answer:
          'Graphic design, content writing, video editing, SEO, and web development are top selling skills.',
      },
    ],
  },

  'upwork-profile-tips-pakistan': {
    title: 'How to Create a Winning Upwork Profile in Pakistan 2026',
    description:
      'Tips to build a strong Upwork profile that gets noticed and lands clients fast.',
    date: 'April 10, 2026',
    category: 'Freelancing',
    readTime: '6 min read',
    content: `
      Upwork is the world's largest freelancing platform and Pakistani freelancers
      are earning thousands of dollars every month on it.

      Step 1: Sign up at upwork.com with a professional email
      Step 2: Write a strong headline with your main skill
      Step 3: Write a bio that explains how you help clients
      Step 4: Add portfolio samples — even mock projects work
      Step 5: Take Upwork skill tests to boost your profile
    `,
    faqs: [
      {
        question: 'Is Upwork available in Pakistan?',
        answer:
          'Yes, Upwork is fully available in Pakistan with direct bank transfer payment options.',
      },
      {
        question: 'How long does it take to get first job on Upwork?',
        answer:
          'With a complete profile and strong proposals, most beginners get their first job within 2 to 4 weeks.',
      },
      {
        question: 'What is the best skill for Upwork in Pakistan?',
        answer:
          'Web development, mobile apps, content writing, and digital marketing are highest paying skills on Upwork.',
      },
    ],
  },

  'best-skills-pakistan-2026': {
    title: 'Best Skills to Learn for Online Earning in Pakistan 2026',
    description:
      'Top in-demand skills that Pakistani freelancers can learn to earn dollars online.',
    date: 'April 15, 2026',
    category: 'Skills',
    readTime: '4 min read',
    content: `
      Learning the right skill is the first step to earning online in Pakistan.
      Here are the top skills that are in high demand in 2026.

      1. Web Development — React, Next.js, WordPress
      2. Graphic Design — Logo, Branding, Social Media
      3. Content Writing — Blogs, Copywriting, SEO Writing
      4. Video Editing — YouTube, Reels, TikTok
      5. Digital Marketing — SEO, Facebook Ads, Google Ads
    `,
    faqs: [
      {
        question: 'Which skill is best for online earning in Pakistan?',
        answer:
          'Web development and digital marketing are the highest paying skills for online earning in Pakistan in 2026.',
      },
      {
        question: 'How long does it take to learn a freelancing skill?',
        answer:
          'Most skills can be learned to a basic level in 1 to 3 months with daily practice.',
      },
      {
        question: 'Where can I learn skills for free in Pakistan?',
        answer:
          'DigiSkills.pk, YouTube, Google Digital Garage, and Coursera offer free courses for Pakistani learners.',
      },
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = posts[params.slug]
  if (!post) return {}

  return generateMeta({
    title: post.title,
    description: post.description,
    slug: `blog/${params.slug}`,
  })
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-900">Post Not Found</h1>
        <a href="/blog" className="text-green-600 mt-4 block">
          ← Back to Blog
        </a>
      </main>
    )
  }

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        dateModified={post.date}
        slug={params.slug}
      />
      <FAQSchema faqs={post.faqs} />

      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* Back Button */}
        <a href="/blog" className="text-green-600 text-sm mb-6 block">
          ← Back to Blog
        </a>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600">{post.description}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {post.content.split('\n').filter(Boolean).map((line: string, i: number) => (
            <p key={i} className="text-gray-700 mb-4">
              {line.trim()}
            </p>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {post.faqs.map((faq: any) => (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </>
  )
}