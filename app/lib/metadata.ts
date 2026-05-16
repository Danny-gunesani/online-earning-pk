import { Metadata } from 'next'

const BASE_URL = 'https://online-earning-pk-xtsm.vercel.app'
const SITE_NAME = 'Earn Online Pakistan'

export function generateMeta({
  title,
  description,
  slug = '',
  image = '/og-image.jpg',
}: {
  title: string
  description: string
  slug?: string
  image?: string
}): Metadata {
  const url = `${BASE_URL}/${slug}`

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}