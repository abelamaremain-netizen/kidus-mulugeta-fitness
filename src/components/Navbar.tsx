'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('km-theme') as 'dark' | 'light' | null
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('km-theme', next)
  }

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#coaching', label: 'Coaching' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]
 
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px var(--shadow)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-widest" style={{ color: 'var(--text)', fontFamily: 'var(--font-geist-sans)' }}>
          KIDUS <span style={{ color: 'var(--gold)' }}>MULUGETA</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: 'var(--gold)', color: '#0A0A0A' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Get A Plan
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border"
            style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--gold)' }}
          >
            {theme === 'dark' ? (
              // Sun icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              // Moon icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span className="block w-6 h-0.5 transition-all" style={{ background: 'var(--text)' }} />
            <span className="block w-6 h-0.5 transition-all" style={{ background: 'var(--text)' }} />
            <span className="block w-6 h-0.5 transition-all" style={{ background: 'var(--text)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 border-t"
          style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(12px)', borderColor: 'var(--border)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-semibold tracking-widest uppercase border-b transition-colors"
              style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="block mt-4 py-4 text-center text-sm font-bold tracking-widest uppercase"
            style={{ background: 'var(--gold)', color: '#0A0A0A' }}
          >
            Get A Plan
          </a>
        </div>
      )}
    </nav>
  )
}
