'use client'

import { Competition } from '@/types'

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

function PlacementBadge({ placement }: { placement: string }) {
  const p = placement.replace(/[a-z]+\.?$/, '').trim()
  let style = {}
  if (p === '1st' || p === '1') style = { background: 'var(--gold)', color: '#0A0A0A' }
  else if (p === '2nd' || p === '2') style = { background: '#999', color: '#0A0A0A' }
  else style = { background: '#8B5C2A', color: '#FFF' }

  return (
    <span
      className="inline-block text-xs font-bold tracking-widest px-2.5 py-1"
      style={style}
    >
      {placement}
    </span>
  )
}

export function CompetitionSection({ data }: CompetitionProps) {
  const items = data.length > 0 ? data : placeholderCompetitions

  return (
    <section id="competitions" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="block text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}>
            Career Timeline
          </span>
          <h2 className="font-bold leading-none mb-5" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}>
            Competition History
          </h2>
          <div className="w-14 h-0.5" style={{ background: 'var(--gold)' }} />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
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
              {items.map((item) => (
                <tr
                  key={item._id}
                  className="transition-colors duration-200"
                  style={{ borderBottom: '1px solid var(--border)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--card-alt)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--card)')}
                >
                  <td className="px-5 py-4 text-sm" style={{ color: 'var(--muted)', background: 'var(--card)' }}>{item.year}</td>
                  <td className="px-5 py-4" style={{ background: 'var(--card)' }}>
                    <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{item.competitionName}</span>
                  </td>
                  <td className="px-5 py-4 text-sm" style={{ color: 'var(--muted)', background: 'var(--card)' }}>{item.location}</td>
                  <td className="px-5 py-4 text-sm" style={{ color: 'var(--muted)', background: 'var(--card)' }}>{item.division}</td>
                  <td className="px-5 py-4" style={{ background: 'var(--card)' }}>
                    <PlacementBadge placement={item.placement} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
