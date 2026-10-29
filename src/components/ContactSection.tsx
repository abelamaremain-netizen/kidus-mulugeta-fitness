'use client'

import { Contact } from '@/types'
import { useState } from 'react'

interface ContactProps {
  data: Contact | null
}

const services = [
  'Online 1-on-1 Coaching',
  'Competition Prep',
  'Nutrition Coaching',
  'Training Programs',
  'Posing Masterclass',
  'Group Bootcamp',
  'General Enquiry',
]

export function ContactSection({ data }: ContactProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--card)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    padding: '13px 16px',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
  }

  const socialLinks = [
    {
      label: 'Instagram',
      href: data?.instagramUrl ?? 'https://instagram.com/kidusmulugeta',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: data?.tiktokUrl ?? 'https://tiktok.com/@kidus.mulugeta',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 100 8 4 4 0 000-8zm0 0V4h4s.5 4 4 4"/>
        </svg>
      ),
    },
    {
      label: 'YouTube',
      href: data?.youtubeUrl ?? 'https://youtube.com/@kidusmulugeta',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Info */}
          <div>
            <span className="block text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Get In Touch
            </span>
            <h2 className="font-bold leading-none mb-5" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}>
              Let&apos;s Build<br />Your Best
            </h2>
            <div className="w-14 h-0.5 mb-7" style={{ background: 'var(--gold)' }} />
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--muted)' }}>
              Ready to work together? Kidus personally reviews every enquiry and responds within 24 hours.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-6 mb-10">
              {[
                {
                  label: 'Email',
                  value: data?.email ?? 'kidus@kidusmulugeta.com',
                  icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                },
                {
                  label: 'WhatsApp',
                  value: data?.whatsapp ?? '+251 91 234 5678',
                  icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.003 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                },
                {
                  label: 'Based In',
                  value: data?.location ?? 'Addis Ababa, Ethiopia · Coaching Online Worldwide',
                  icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--gold)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: 'var(--gold)' }}>{item.label}</div>
                    <div className="text-sm" style={{ color: 'var(--muted)' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 flex items-center justify-center transition-all duration-200"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--subtle)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#0A0A0A' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--subtle)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>First Name</label>
                <input type="text" placeholder="John" required style={inputStyle} />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>Last Name</label>
                <input type="text" placeholder="Doe" required style={inputStyle} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>Email</label>
              <input type="email" placeholder="john@example.com" required style={inputStyle} />
            </div>
            <div className="mb-4">
              <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>I&apos;m Interested In</label>
              <select required style={inputStyle}>
                <option value="" disabled>Select a service</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>Your Goals</label>
              <textarea
                placeholder="Where are you now? Where do you want to be?"
                required
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: submitted ? '#2a7a2a' : 'var(--gold)', color: '#0A0A0A' }}
            >
              {submitted ? '✓ Enquiry Sent!' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
