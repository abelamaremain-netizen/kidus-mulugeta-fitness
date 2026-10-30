import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Bebas_Neue, Oswald } from 'next/font/google'
import './globals.css'
import { SiteShell } from '@/components/SiteShell'
import { JsonLd } from '@/components/JsonLd'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Kidus Mulugeta | IFBB Pro Bodybuilder & Coach — Ethiopia',
  description:
    'Kidus Mulugeta is Ethiopia\'s most decorated IFBB Pro bodybuilder and 3x National Champion. Offering online coaching, competition prep, posing masterclass and personalised nutrition plans worldwide.',
  keywords: [
    'Kidus Mulugeta',
    'Ethiopian bodybuilder',
    'IFBB Pro Ethiopia',
    'bodybuilding coach Ethiopia',
    'online bodybuilding coach',
    'competition prep coach',
    'nutrition coach Ethiopia',
    'Ethiopian National Champion bodybuilding',
  ],
  authors: [{ name: 'Kidus Mulugeta' }],
  creator: 'Kidus Mulugeta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kidus-mulugeta-fitness.vercel.app',
    siteName: 'Kidus Mulugeta',
    title: 'Kidus Mulugeta | IFBB Pro Bodybuilder & Coach — Ethiopia',
    description:
      'Ethiopia\'s most decorated IFBB Pro bodybuilder. 3x National Champion. Online coaching, competition prep and personalised nutrition plans worldwide.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&h=630&fit=crop&q=85',
        width: 1200,
        height: 630,
        alt: 'Kidus Mulugeta — IFBB Pro Bodybuilder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kidus Mulugeta | IFBB Pro Bodybuilder & Coach',
    description: 'Ethiopia\'s most decorated IFBB Pro bodybuilder. Online coaching & nutrition plans.',
    images: ['https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&h=630&fit=crop&q=85'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col">
        <JsonLd />
        <SiteShell>
          {children}
        </SiteShell>
      </body>
    </html>
  )
}
