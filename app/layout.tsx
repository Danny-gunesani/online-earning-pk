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
    'Learn how to earn money online in Pakistan. Complete guide to Freelancing, Fiverr, Upwork, and payment methods.',
  metadataBase: new URL('https://earnonlinepk.com'),
  keywords: [
    'earn online pakistan',
    'online earning pakistan 2026',
    'fiverr pakistan',
    'upwork pakistan',
    'freelancing pakistan',
  ],
  authors: [{ name: 'Earn Online PK' }],
  creator: 'Earn Online PK',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}