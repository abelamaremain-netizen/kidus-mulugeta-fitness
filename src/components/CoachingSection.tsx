'use client'

import { Service } from '@/types'

interface CoachingProps {
  data: Service[]
}

const placeholderServices: Service[] = [
  { _id: '1', name: 'Online 1-on-1 Coaching', description: 'Personalised training and nutrition programming, weekly check-ins, form video reviews, and direct messaging access throughout the week.', slug: { current: 'online-coaching' } },
  { _id: '2', name: 'Competition Prep', description: 'Full peak-week protocol, stage presentation coaching, posing sessions, and a complete 16-week prep roadmap for your federation and class.', slug: { current: 'competition-prep' } },
  { _id: '3', name: 'Nutrition Coaching', description: 'Custom macro targets, meal timing, supplement guidance, and ongoing weekly adjustments until you hit your goal — no cookie-cutter plans.', slug: { current: 'nutrition-coaching' } },
  { _id: '4', name: 'Training Programs', description: 'Downloadable 12-week hypertrophy programs built around progressive overload and proven training philosophy.', slug: { current: 'training-programs' } },
  { _id: '5', name: 'Posing Masterclass', description: 'Video-based posing coaching covering mandatory poses, transitions, and stage presence. Individual feedback within 48 hours.', slug: { current: 'posing-masterclass' } },
  { _id: '6', name: 'Group Bootcamp', description: 'Intensive 4-week group challenges run online. High accountability, community support, and live Q&As with Kidus.', slug: { current: 'group-bootcamp' } },
]

function ServiceIcon({ slug }: { slug: string }) {
  const props = { viewBox: '0 0 24 24', width: 22, height: 22, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  if (slug === 'competition-prep') return <svg {...props}><path d="M12 2a5 5 0 100 10A5 5 0 0012 2zm-8 18c0-4 3.6-7 8-7s8 3 8 7"/></svg>
  if (slug === 'nutrition-coaching') return <svg {...props}><path d="M4 6h16M4 12h16M4 18h10"/></svg>
  if (slug === 'training-programs') return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
  if (slug === 'posing-masterclass') return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  if (slug === 'group-bootcamp') return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
  // default: online-coaching
  return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
}

export function CoachingSection({ data }: CoachingProps) {
  const items = data.length > 0 ? data : placeholderServices

  return (
    <section id="coaching" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="block text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}>
            Work With Kidus
          </span>
          <h2 className="font-bold leading-none mb-5" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}>
            Coaching<br />Services
          </h2>
          <div className="w-14 h-0.5 mb-5" style={{ background: 'var(--gold)' }} />
          <p className="text-base max-w-lg" style={{ color: 'var(--muted)' }}>
            Whether you&apos;re stepping on stage for the first time or chasing your pro card, Kidus builds your complete game plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((service) => (
            <article
              key={service._id}
              className="p-9 transition-all duration-300 cursor-pointer"
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderBottom: '3px solid transparent' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderBottomColor = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 12px 36px var(--shadow)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderBottomColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="flex items-center justify-center mb-6"
                style={{ width: '52px', height: '52px', background: 'var(--bg-alt)', border: '1px solid var(--border)', color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
              >
                <ServiceIcon slug={service.slug.current} />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--subtle)' }}>
                {service.description}
              </p>
              <span className="text-xs font-bold tracking-[3px] uppercase" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}>
                Apply Now →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
