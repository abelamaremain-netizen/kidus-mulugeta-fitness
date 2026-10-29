'use client'

import { About } from '@/types'
import { urlFor } from '@/sanity/lib/image'

interface AboutProps {
  data: About | null
}

const placeholderAdditional = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=500&fit=crop&q=80',
]

export function AboutSection({ data }: AboutProps) {
  const credentials = data?.credentials ?? [
    "IFBB Professional Card — Men's Bodybuilding",
    'Certified Sports Nutrition Coach (ISSA)',
    '3x Ethiopian National Bodybuilding Champion',
    'African Bodybuilding Championship — Top 5 Finalist',
  ]

  const profileUrl = data?.profileImage?.asset?._ref
    ? urlFor(data.profileImage).width(700).height(580).fit('crop').url()
    : 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=580&fit=crop&q=85'

  const additionalPhotos = data?.additionalImages?.length
    ? data.additionalImages.map((p) =>
        p.image?.asset?._ref
          ? urlFor(p.image).width(400).height(500).fit('crop').url()
          : ''
      ).filter(Boolean)
    : placeholderAdditional

  return (
    <section id="about" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Top: main image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Main image */}
          <div className="relative fade-up">
            <div className="relative w-full overflow-hidden" style={{ height: '580px' }}>
              <img
                src={profileUrl}
                alt="Kidus Mulugeta"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Gold accent border */}
            <div
              className="absolute bottom-[-18px] right-[-18px] w-[58%] h-[58%] pointer-events-none"
              style={{ border: '3px solid var(--gold)', zIndex: 0 }}
            />
            {/* Years badge */}
            <div
              className="absolute top-6 left-[-22px] z-10 px-4 py-3 text-center"
              style={{ background: 'var(--gold)', color: '#0A0A0A' }}
            >
              <div
                className="text-3xl font-bold leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {data?.yearsExperience ?? 8}
              </div>
              <div
                className="text-xs font-bold tracking-widest uppercase mt-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Years<br />Pro
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <span
              className="block text-xs font-bold tracking-[4px] uppercase mb-3"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
            >
              The Story
            </span>
            <h2
              className="font-bold leading-none mb-5"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}
            >
              Who Is Kidus?
            </h2>
            <div className="w-14 h-0.5 mb-7" style={{ background: 'var(--gold)' }} />

            <p className="mb-5 leading-[1.9] text-[15px]" style={{ color: 'var(--muted)' }}>
              {data?.bio ??
                'Born and raised in Addis Ababa, Ethiopia, Kidus Mulugeta discovered bodybuilding at 17 with nothing but a makeshift gym, iron will, and a hunger to compete. What started as personal transformation became a calling.'}
            </p>
            <p className="mb-8 leading-[1.9] text-[15px]" style={{ color: 'var(--muted)' }}>
              Today Kidus is Ethiopia&apos;s most decorated IFBB Pro bodybuilder — a 3-time National Champion who has competed on stages across Africa, Europe, and the Middle East.
            </p>

            {/* Credentials */}
            <ul className="flex flex-col gap-3 mb-10">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 flex-shrink-0 rotate-45" style={{ background: 'var(--gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{cred}</span>
                </li>
              ))}
            </ul>

            <a
              href="#coaching"
              className="inline-block px-9 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: 'var(--gold)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Work With Me
            </a>
          </div>
        </div>

        {/* Bottom: additional photos grid */}
        {additionalPhotos.length > 0 && (
          <div className="fade-up">
            <div
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-0.5" style={{ background: 'var(--gold)' }} />
              <span
                className="text-xs font-bold tracking-[4px] uppercase"
                style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
              >
                More Photos
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {additionalPhotos.map((url, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={url}
                    alt={`Kidus Mulugeta photo ${i + 1}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[color:var(--gold)] transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
