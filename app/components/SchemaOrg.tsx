// Article schema — har blog post mein use karo
export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  slug,
}: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  slug: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified,
    url: `https://earnonlinepk.com/blog/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'Earn Online Pakistan',
      url: 'https://earnonlinepk.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Earn Online Pakistan',
      logo: {
        '@type': 'ImageObject',
        url: 'https://earnonlinepk.com/logo.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema — Google mein featured snippet milta hai!
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}