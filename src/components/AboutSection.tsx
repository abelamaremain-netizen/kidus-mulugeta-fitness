'use client'

import { About } from '@/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface AboutProps {
  data: About | null
}

export function AboutSection({ data }: AboutProps) {
  const credentials = data?.credentials ?? [
    'IFBB Professional Card — Men\'s Bodybuilding',
    'Certified Sports Nutrition Coach (ISSA)',
    '3x Ethiopian National Bodybuilding Champion',
    'African Bodybuilding Championship — Top 5 Finalist',
  ]

  return (
    <section id="about" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[560px]">
              {data?.profileImage?.asset?._ref ? (
                <Image
                  src={urlFor(data.profileImage).width(700).url()}
                  alt="Kidus Mulugeta"
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-sm"
                  style={{ background: 'var(--card)', color: 'var(--subtle)', border: '1px solid var(--border)' }}
                >
                  Profile image coming soon
                </div>
              )}
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
              <div className="text-3xl font-bold leading-none">{data?.yearsExperience ?? 8}</div>
              <div className="text-[9px] font-bold tracking-widest uppercase mt-1">Years<br/>Pro</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span
              className="block text-xs font-bold tracking-[4px] uppercase mb-3"
              style={{ color: 'var(--gold)' }}
            >
              The Story
            </span>
            <h2
              className="font-bold leading-none mb-5"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}
            >
              Who Is Kidus?
            </h2>
            <div className="w-14 h-0.5 mb-7" style={{ background: 'var(--gold)' }} />

            <p className="mb-5 leading-[1.9] text-[15px]" style={{ color: 'var(--muted)' }}>
              {data?.bio ??
                'Born and raised in Addis Ababa, Ethiopia, Kidus Mulugeta discovered bodybuilding at 17 with nothing but a makeshift gym, iron will, and a hunger to compete. What started as personal transformation became a calling.'}
            </p>
            <p className="mb-8 leading-[1.9] text-[15px]" style={{ color: 'var(--muted)' }}>
              Today Kidus is Ethiopia&apos;s most decorated IFBB Pro bodybuilder — a 3-time National Champion
              who has competed on stages across Africa, Europe, and the Middle East.
            </p>

            {/* Credentials */}
            <ul className="flex flex-col gap-3 mb-10">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 flex-shrink-0 rotate-45"
                    style={{ background: 'var(--gold)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{cred}</span>
                </li>
              ))}
            </ul>

            <a
              href="#coaching"
              className="inline-block px-9 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: 'var(--gold)', color: '#0A0A0A' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
