import { generateMeta } from '@/app/lib/metadata'
import { ArticleSchema, FAQSchema } from '@/app/components/SchemaOrg'

const posts: Record<string, any> = {
  'payoneer-jazzcash-guide': {
    title: 'How to Transfer Payoneer Money to JazzCash in Pakistan 2026',
    description:
      'Complete step by step guide to link your Payoneer account with JazzCash and withdraw money easily in Pakistan.',
    date: 'April 1, 2026',
    category: 'Payments',
    readTime: '8 min read',
    content: `
      If you are a freelancer in Pakistan, Payoneer is probably your main source of receiving international payments. But the real question is how do you get that money into your hands? The easiest way is to transfer it directly to JazzCash.

      What is Payoneer?
      Payoneer is an international payment platform used by freelancers worldwide. It is supported by Fiverr, Upwork, Amazon, and many other platforms. Pakistani freelancers use Payoneer to receive dollars from international clients.

      What is JazzCash?
      JazzCash is Pakistan's most popular mobile wallet. You can use it to send money, pay bills, and receive international transfers. It is owned by Jazz and works on any mobile number.

      Requirements Before You Start
      Before transferring money from Payoneer to JazzCash, make sure you have these things ready. First you need a verified Payoneer account with at least $20 balance. Second you need an active JazzCash account with your CNIC verified. Third you need your JazzCash IBAN number which starts with PK.

      How to Find Your JazzCash IBAN
      Open your JazzCash app on your mobile. Go to My Account section. Tap on Bank Account Details. You will see your IBAN number starting with PK36. Copy this number because you will need it in the next step.

      Step 1 — Login to Payoneer
      Go to payoneer.com and login to your account with your email and password.

      Step 2 — Go to Withdraw Section
      On your Payoneer dashboard, click on the Withdraw button at the top. Then select To Bank Account from the dropdown menu.

      Step 3 — Add JazzCash as Your Bank
      If you have not added JazzCash before, click on Add Bank Account. Select Pakistan as your country. Enter your full name as it appears on your CNIC. Enter your JazzCash IBAN number carefully.

      Step 4 — Enter Withdrawal Amount
      Enter the amount you want to withdraw. The minimum withdrawal amount is $20. Payoneer charges a small fee of around $1.50 to $3 per withdrawal.

      Step 5 — Confirm and Submit
      Review all the details carefully. Click on Withdraw Now to submit your request. You will receive a confirmation email from Payoneer.

      How Long Does It Take?
      After submitting your withdrawal request, the money usually arrives in your JazzCash account within 1 to 3 business days. Sometimes it can be faster depending on the day and time of your request.

      Payoneer to JazzCash Fees
      Payoneer charges a withdrawal fee of approximately 1.5 to 2 percent of the total amount. For example if you withdraw $100, you will receive around $98 after fees.

      Tips to Save Money on Withdrawals
      Always withdraw larger amounts to save on fees. Instead of withdrawing $20 multiple times, wait until you have $100 or more. This way you pay less fees overall.
    `,
    faqs: [
      {
        question: 'Does Payoneer work with JazzCash in Pakistan?',
        answer:
          'Yes, Payoneer supports direct withdrawal to JazzCash in Pakistan. You need your JazzCash IBAN number to add it as a bank account in Payoneer.',
      },
      {
        question: 'How long does Payoneer to JazzCash transfer take?',
        answer:
          'It usually takes 1 to 3 business days for the money to arrive in your JazzCash account after submitting the withdrawal request.',
      },
      {
        question: 'What is the minimum withdrawal from Payoneer to JazzCash?',
        answer:
          'The minimum withdrawal amount from Payoneer to JazzCash is $20 or equivalent in PKR.',
      },
      {
        question: 'What are Payoneer withdrawal fees in Pakistan?',
        answer:
          'Payoneer charges approximately 1.5 to 2 percent fee on each withdrawal. For $100 withdrawal you receive around $98 after fees.',
      },
      {
        question: 'Can I withdraw Payoneer to Easypaisa instead of JazzCash?',
        answer:
          'Yes, you can also withdraw Payoneer money to Easypaisa using the same process by adding your Easypaisa IBAN number.',
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
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}

  return generateMeta({
    title: post.title,
    description: post.description,
    slug: `blog/${slug}`,
  })
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]

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
        slug={slug}
      />
      <FAQSchema faqs={post.faqs} />

      <main className="max-w-4xl mx-auto px-4 py-10">

        <a href="/blog" className="text-green-600 text-sm mb-6 block">
          ← Back to Blog
        </a>

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

        <div className="prose prose-lg max-w-none mb-12">
          {post.content.split('\n').filter(Boolean).map((line: string, i: number) => (
            <p key={i} className="text-gray-700 mb-4">
              {line.trim()}
            </p>
          ))}
        </div>

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