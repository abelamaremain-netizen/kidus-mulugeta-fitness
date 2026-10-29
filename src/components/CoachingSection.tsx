'use client'

import { Service } from '@/types'
import { urlFor } from '@/sanity/lib/image'

interface CoachingProps {
  data: Service[]
}

const placeholderServices: Service[] = [
  { _id: '1', name: 'Online 1-on-1 Coaching', description: 'Personalised training and nutrition programming, weekly check-ins, form video reviews, and direct messaging access throughout the week.', slug: { current: 'online-coaching' }, price: 'From $150/month' },
  { _id: '2', name: 'Competition Prep', description: 'Full peak-week protocol, stage presentation coaching, posing sessions, and a complete 16-week prep roadmap for your federation and class.', slug: { current: 'competition-prep' }, price: 'From $200/month' },
  { _id: '3', name: 'Nutrition Coaching', description: 'Custom macro targets, meal timing, supplement guidance, and ongoing weekly adjustments until you hit your goal — no cookie-cutter plans.', slug: { current: 'nutrition-coaching' }, price: 'From $80/month' },
  { _id: '4', name: 'Training Programs', description: 'Downloadable 12-week hypertrophy programs built around progressive overload and proven training philosophy.', slug: { current: 'training-programs' }, price: 'From $49' },
  { _id: '5', name: 'Posing Masterclass', description: 'Video-based posing coaching covering mandatory poses, transitions, and stage presence. Individual feedback within 48 hours.', slug: { current: 'posing-masterclass' }, price: 'From $75' },
  { _id: '6', name: 'Group Bootcamp', description: 'Intensive 4-week group challenges run online. High accountability, community support, and live Q&As with Kidus.', slug: { current: 'group-bootcamp' }, price: 'From $39' },
]

const placeholderImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop&q=80',
]

function ServiceIcon({ slug }: { slug: string }) {
  const props = {
    viewBox: '0 0 24 24', width: 22, height: 22, fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.5,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  }
  if (slug === 'competition-prep') return <svg {...props}><path d="M12 2a5 5 0 100 10A5 5 0 0012 2zm-8 18c0-4 3.6-7 8-7s8 3 8 7"/></svg>
  if (slug === 'nutrition-coaching') return <svg {...props}><path d="M4 6h16M4 12h16M4 18h10"/></svg>
  if (slug === 'training-programs') return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
  if (slug === 'posing-masterclass') return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  if (slug === 'group-bootcamp') return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
  return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
}

export function CoachingSection({ data }: CoachingProps) {
  const items = data.length > 0 ? data : placeholderServices

  return (
    <section id="coaching" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 fade-up">
          <span
            className="block text-xs font-bold tracking-[4px] uppercase mb-3"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
          >
            Work With Kidus
          </span>
          <h2
            className="font-bold leading-none mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}
          >
            Coaching<br />Services
          </h2>
          <div className="w-14 h-0.5 mb-5" style={{ background: 'var(--gold)' }} />
          <p className="text-base max-w-lg" style={{ color: 'var(--muted)' }}>
            Whether you&apos;re stepping on stage for the first time or chasing your pro card, Kidus builds your complete game plan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((service, index) => {
            const imgUrl = service.image?.asset?._ref
              ? urlFor(service.image).width(600).height(400).fit('crop').url()
              : placeholderImages[index % placeholderImages.length]

            return (
              <article
                key={service._id}
                className="overflow-hidden transition-all duration-300 cursor-pointer group fade-up"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  transitionDelay: `${index * 0.05}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px var(--shadow)'
                  e.currentTarget.style.borderColor = 'var(--gold)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                  <img
                    src={imgUrl}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }}
                  />
                  {/* Icon */}
                  <div
                    className="absolute bottom-4 left-4 flex items-center justify-center"
                    style={{
                      width: '44px', height: '44px',
                      background: 'var(--gold)',
                      color: '#0A0A0A',
                    }}
                  >
                    <ServiceIcon slug={service.slug.current} />
                  </div>
                  {/* Price badge */}
                  {service.price && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 text-xs font-bold tracking-widest"
                      style={{ background: 'rgba(0,0,0,0.8)', color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
                    >
                      {service.price}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--subtle)' }}>
                    {service.description}
                  </p>
                  <span
                    className="text-xs font-bold tracking-[3px] uppercase inline-flex items-center gap-2"
                    style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
                  >
                    Apply Now →
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
