import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: {
    default: 'Earn Online Pakistan 2026 — Complete Guide',
    template: '%s | Earn Online Pakistan',
  },
  description:
    'Learn how to earn money online in Pakistan 2026. Complete guide to Freelancing, Fiverr, Upwork, and payment methods for beginners.',

  metadataBase: new URL('https://earnonlinepk.com'),

  keywords: [
    'earn online pakistan',
    'online earning pakistan 2026',
    'fiverr pakistan',
    'upwork pakistan',
    'freelancing pakistan',
    'how to earn online in pakistan',
    'pakistan freelancer',
  ],

  authors: [{ name: 'Earn Online PK', url: 'https://earnonlinepk.com' }],
  creator: 'Earn Online PK',
  publisher: 'Earn Online PK',

  alternates: {
    canonical: 'https://earnonlinepk.com',
  },

  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://earnonlinepk.com',
    siteName: 'Earn Online Pakistan',
    title: 'Earn Online Pakistan 2026 — Complete Guide',
    description:
      'Complete guide to earning money online in Pakistan. Freelancing, Fiverr, Upwork, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Earn Online Pakistan — Complete Guide 2026',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Earn Online Pakistan 2026 — Complete Guide',
    description: 'Complete guide to earning money online in Pakistan.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  verification: {
    google: '<meta name="google-site-verification" content="-O8q-Z3gADMaXJOYRgMz6eKweZGYu6fXU7_5ktxMAnY" />',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-PK" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}