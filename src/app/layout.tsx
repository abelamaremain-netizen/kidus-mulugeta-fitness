import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Bebas_Neue, Oswald } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { BackToTop } from '@/components/BackToTop'

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
  title: 'Kidus Mulugeta | Elite Bodybuilder & Coach',
  description:
    'IFBB Pro bodybuilder, 3x Ethiopian National Champion, certified nutrition coach. Explore coaching services and nutrition plans.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollAnimator />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
