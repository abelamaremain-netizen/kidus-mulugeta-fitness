'use client'

import { Competition } from '@/types'
import { urlFor } from '@/sanity/lib/image'

interface CompetitionProps {
  data: Competition[]
}

const placeholderCompetitions: Competition[] = [
  { _id: '1', year: '2024', competitionName: 'African Bodybuilding Championships', location: 'Nairobi, Kenya', division: "Men's Open +90kg", placement: '1st' },
  { _id: '2', year: '2023', competitionName: 'Ethiopian National Championship', location: 'Addis Ababa', division: "Men's Open", placement: '1st' },
  { _id: '3', year: '2023', competitionName: 'Middle East Open Pro', location: 'Dubai, UAE', division: "Men's Open", placement: '2nd' },
  { _id: '4', year: '2022', competitionName: 'Ethiopian National Championship', location: 'Addis Ababa', division: "Men's Open", placement: '1st' },
  { _id: '5', year: '2022', competitionName: 'East Africa Open', location: 'Kampala, Uganda', division: "Men's Open +90kg", placement: '1st' },
  { _id: '6', year: '2021', competitionName: 'Ethiopian National Championship', location: 'Addis Ababa', division: "Men's Open", placement: '1st' },
  { _id: '7', year: '2021', competitionName: 'African Bodybuilding Championships', location: 'Cairo, Egypt', division: "Men's Open +90kg", placement: '3rd' },
  { _id: '8', year: '2020', competitionName: 'East Africa Open', location: 'Dar es Salaam', division: "Men's Open", placement: '2nd' },
  { _id: '9', year: '2019', competitionName: 'Ethiopian National Championship', location: 'Addis Ababa', division: "Men's Open", placement: '2nd' },
  { _id: '10', year: '2018', competitionName: 'Ethiopian National Championship', location: 'Addis Ababa', division: "Men's Open", placement: '1st' },
]

const placeholderPhotos = [
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=500&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=500&fit=crop&q=80',
]

function PlacementBadge({ placement }: { placement: string }) {
  let style = {}
  if (placement.includes('1')) style = { background: 'var(--gold)', color: '#0A0A0A' }
  else if (placement.includes('2')) style = { background: '#999', color: '#0A0A0A' }
  else style = { background: '#8B5C2A', color: '#FFF' }
  return (
    <span
      className="inline-block text-xs font-bold tracking-widest px-2.5 py-1"
      style={{ ...style, fontFamily: 'var(--font-heading)' }}
    >
      {placement}
    </span>
  )
}

export function CompetitionSection({ data }: CompetitionProps) {
  const items = data.length > 0 ? data : placeholderCompetitions

  // Separate items with photos from those without
  const withPhotos = items.filter((c) => c.photo?.asset?._ref)
  const allItems = items

  return (
    <section id="competitions" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 fade-up">
          <span
            className="block text-xs font-bold tracking-[4px] uppercase mb-3"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
          >
            Career Timeline
          </span>
          <h2
            className="font-bold leading-none mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}
          >
            Competition History
          </h2>
          <div className="w-14 h-0.5" style={{ background: 'var(--gold)' }} />
        </div>

        {/* Photo cards for competitions that have photos */}
        {(withPhotos.length > 0 || data.length === 0) && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 fade-up">
            {(withPhotos.length > 0 ? withPhotos : items.slice(0, 6)).map((item, index) => {
              const photoUrl = item.photo?.asset?._ref
                ? urlFor(item.photo).width(400).height(500).fit('crop').url()
                : placeholderPhotos[index % placeholderPhotos.length]

              return (
                <div key={item._id} className="relative overflow-hidden group cursor-pointer">
                  <div style={{ aspectRatio: '4/5' }}>
                    <img
                      src={photoUrl}
                      alt={item.competitionName}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)' }}
                  >
                    <PlacementBadge placement={item.placement} />
                    <p className="text-sm font-semibold mt-2 text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.competitionName}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--gold)' }}>
                      {item.year} · {item.location}
                    </p>
                  </div>
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[color:var(--gold)] transition-all duration-300 pointer-events-none" />
                </div>
              )
            })}
          </div>
        )}

        {/* Full table */}
        <div className="overflow-x-auto fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ background: 'var(--card)', borderBottom: '2px solid var(--gold)' }}>
                {['Year', 'Competition', 'Location', 'Division', 'Placement'].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-4 text-xs font-bold tracking-[3px] uppercase"
                    style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allItems.map((item) => (
                <tr
                  key={item._id}
                  className="transition-colors duration-200"
                  style={{ borderBottom: '1px solid var(--border)', background: 'var(--card)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--card-alt)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--card)')}
                >
                  <td className="px-5 py-4 text-sm" style={{ color: 'var(--muted)' }}>{item.year}</td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
                      {item.competitionName}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm" style={{ color: 'var(--muted)' }}>{item.location}</td>
                  <td className="px-5 py-4 text-sm" style={{ color: 'var(--muted)' }}>{item.division}</td>
                  <td className="px-5 py-4"><PlacementBadge placement={item.placement} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
