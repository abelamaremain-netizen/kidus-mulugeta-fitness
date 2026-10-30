'use client'

import { Hero } from '@/types'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

interface HeroProps {
  data: Hero | null
}

export function HeroSection({ data }: HeroProps) {
  const stats = [
    { value: data?.competitionWins ? `${data.competitionWins}+` : '12+', label: 'Competition Wins' },
    { value: data?.yearsPro ?? 8, label: 'Years Pro' },
    { value: data?.clientsCoached ? `${data.clientsCoached}+` : '500+', label: 'Clients Coached' },
    { value: data?.nationalTitles ?? 3, label: 'National Titles' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-stretch overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {data?.backgroundImage?.asset?._ref ? (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${urlFor(data.backgroundImage).width(1600).url()})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
              filter: 'brightness(0.75)',
            }}
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: 'linear-gradient(135deg, #141414 0%, #2A2A2A 100%)' }}
          />
        )}
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.75) 35%, rgba(10,10,10,0.05) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col justify-center pt-[calc(72px+60px)] pb-24">
        {/* Tag */}
        <div
          className="inline-block self-start px-3 py-1 text-xs font-bold tracking-widest uppercase mb-6 fade-up"
          style={{ background: 'var(--gold)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
        >
          IFBB Pro · Ethiopia&apos;s Champion
        </div>

        {/* Name */}
        <h1
          className="font-bold leading-none mb-2 text-white"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(64px, 11vw, 136px)',
            lineHeight: 0.92,
            letterSpacing: '2px',
          }}
        >
          KIDUS
          <br />
          <span style={{ color: 'var(--gold)' }}>MULUGETA</span>
        </h1>

        {/* Tagline */}
        <p
          className="font-light tracking-[6px] uppercase mt-4 mb-6"
          style={{
            fontSize: 'clamp(13px, 2vw, 19px)',
            color: 'rgba(255,255,255,0.72)',
          }}
        >
          {data?.tagLine ?? 'Built From The Ground Up'}
        </p>

        {/* Description */}
        <p
          className="max-w-md mb-10 leading-relaxed"
          style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)' }}
        >
          {data?.description ??
            'From Addis Ababa to the world stage — IFBB Pro bodybuilder, certified nutrition coach, and living proof that discipline rewrites destiny.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="#about"
            className="px-9 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200"
            style={{ background: 'var(--gold)', color: '#0A0A0A' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Discover My Story
          </Link>
          <a
            href="https://kidus-nutrition.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-3.5 text-sm font-bold tracking-widest uppercase border-2 transition-all duration-200"
            style={{ borderColor: '#FFF', color: '#FFF', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.color = '#0A0A0A' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FFF' }}
          >
            Get My Nutrition Plans
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-bold leading-none"
                style={{ fontFamily: 'var(--font-geist-sans)', fontSize: '40px', color: 'var(--gold)' }}
              >
                {stat.value}
              </div>
              <div
                className="mt-1 text-xs tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.48)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
