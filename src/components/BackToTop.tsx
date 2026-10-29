'use client'

import { useState, useEffect } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-7 right-7 z-50 w-11 h-11 flex items-center justify-center transition-all duration-300"
      style={{
        background: 'var(--gold)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  )
}
