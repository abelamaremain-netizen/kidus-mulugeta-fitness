'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollAnimator } from './ScrollAnimator'
import { BackToTop } from './BackToTop'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) return <>{children}</>

  return (
    <>
      <Navbar />
      <ScrollAnimator />
      {children}
      <Footer />
      <BackToTop />
    </>
  )
}
