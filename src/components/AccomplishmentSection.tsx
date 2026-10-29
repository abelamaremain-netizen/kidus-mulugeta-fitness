'use client'

import { Accomplishment } from '@/types'

interface AccomplishmentProps {
  data: Accomplishment[]
}

const placeholderData: Accomplishment[] = [
  { _id: '1', year: '2024', title: 'African Bodybuilding Championships', event: "Men's Open +90kg", location: 'Nairobi, Kenya', placement: '1st Place' },
  { _id: '2', year: '2023', title: 'Ethiopian National Championship', event: "Men's Open", location: 'Addis Ababa, Ethiopia', placement: '1st Place' },
  { _id: '3', year: '2023', title: 'Middle East Open Pro', event: "Men's Open", location: 'Dubai, UAE', placement: '2nd Place' },
  { _id: '4', year: '2022', title: 'Ethiopian National Championship', event: "Men's Open", location: 'Addis Ababa, Ethiopia', placement: '1st Place' },
  { _id: '5', year: '2022', title: 'East Africa Open', event: "Men's Open +90kg", location: 'Kampala, Uganda', placement: '1st Place' },
  { _id: '6', year: '2021', title: 'Ethiopian National Championship', event: "Men's Open", location: 'Addis Ababa, Ethiopia', placement: '1st Place' },
]

function placementStyle(placement: string) {
  if (placement.includes('1st')) return { background: 'var(--gold)', color: '#0A0A0A' }
  if (placement.includes('2nd')) return { background: '#999999', color: '#0A0A0A' }
  return { background: '#8B5C2A', color: '#FFFFFF' }
}

const stats = [
  { value: '12+', label: 'Competition Wins' },
  { value: '3x', label: 'National Champion' },
  { value: '8', label: 'Years Pro' },
  { value: '500+', label: 'Athletes Coached' },
]

export function AccomplishmentSection({ data }: AccomplishmentProps) {
  const items = data.length > 0 ? data : placeholderData

  return (
    <section id="achievements" className="py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="block text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}>
            Trophy Case
          </span>
          <h2 className="font-bold leading-none mb-5" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}>
            Accomplishments
          </h2>
          <div className="w-14 h-0.5 mx-auto mb-5" style={{ background: 'var(--gold)' }} />
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Built on years of sacrifice and relentless pursuit of excellence on the world&apos;s most competitive stages.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mb-px">
          {items.map((item) => (
            <article
              key={item._id}
              className="relative overflow-hidden p-9 transition-all duration-300 group"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              {/* Gold left bar on hover */}
              <div
                className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full transition-all duration-500"
                style={{ background: 'var(--gold)' }}
              />
              <div className="text-xs tracking-[3px] font-bold mb-2" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}>
                {item.year}
              </div>
              <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text)' }}>
                {item.title}
              </h3>
              <p className="text-xs mb-4" style={{ color: 'var(--subtle)' }}>
                {item.event} · {item.location}
              </p>
              <span
                className="inline-block text-xs font-bold tracking-widest px-3 py-1"
                style={placementStyle(item.placement)}
              >
                {item.placement}
              </span>
            </article>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-px">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-10 text-center transition-all duration-300 border-t-[3px] border-transparent hover:border-t-[color:var(--gold)]"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="font-bold leading-none mb-2" style={{ fontSize: '54px', color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--subtle)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
