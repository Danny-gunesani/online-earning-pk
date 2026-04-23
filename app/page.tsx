import { generateMeta } from '@/app/lib/metadata.ts'
import { FAQSchema } from '@/app/components/SchemaOrg'

export const metadata = generateMeta({
  title: 'Earn Online in Pakistan 2026 — Complete Beginner Guide',
  description:
    'Learn how to earn money online in Pakistan. Complete guide to Freelancing, Fiverr, Upwork, and payment methods.',
  slug: '',
})

const faqs = [
  {
    question: 'How to earn money online in Pakistan?',
    answer:
      'You can earn online in Pakistan through freelancing, blogging, YouTube, and affiliate marketing.',
  },
  {
    question: 'Does Fiverr work in Pakistan?',
    answer:
      'Yes, Fiverr works in Pakistan. You can receive payments via Payoneer linked to your local bank.',
  },
  {
    question: 'What do I need to start earning online in Pakistan?',
    answer:
      'You only need a laptop or mobile, internet connection, and one skill to get started.',
  },
]

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Earn Money Online in Pakistan 2026
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your complete guide to Freelancing, Fiverr, Upwork, and getting
            paid in Pakistan.
          </p>
          <a
            href="/blog"
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Read Guides →
          </a>
        </section>

        {/* Topics Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Freelancing',
                desc: 'Start earning on Fiverr and Upwork from Pakistan.',
                href: '/blog/fiverr-pakistan-beginners',
                icon: '💼',
              },
              {
                title: 'Payments',
                desc: 'How to receive international payments in Pakistan.',
                href: '/blog/payoneer-jazzcash-guide',
                icon: '💳',
              },
              {
                title: 'Skills',
                desc: 'Best skills to learn for online earning in Pakistan.',
                href: '/blog/best-skills-pakistan-2026',
                icon: '🎯',
              },
            ].map((topic) => (
              <a
                key={topic.title}
                href={topic.href}
                className="block border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm">{topic.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
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
        </section>

      </main>
    </>
  )
}