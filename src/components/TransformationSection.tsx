'use client'

import { Transformation } from '@/types'
import { urlFor } from '@/sanity/lib/image'

interface TransformationProps {
  data: Transformation[]
}

const placeholderTransformations: Transformation[] = [
  {
    _id: '1',
    clientName: 'Samuel T.',
    duration: '12 weeks',
    weightLost: '-18kg fat',
    service: 'Competition Prep',
    quote: 'I placed 2nd at nationals. Nobody believed it was possible — Kidus did.',
    beforeImage: { asset: { _ref: '' } },
    afterImage: { asset: { _ref: '' } },
  },
  {
    _id: '2',
    clientName: 'Marcus L.',
    duration: '10 weeks',
    weightLost: '+6kg muscle',
    service: 'Lean Bulk Plan',
    quote: 'Every meal mapped to my macros. The results speak for themselves.',
    beforeImage: { asset: { _ref: '' } },
    afterImage: { asset: { _ref: '' } },
  },
  {
    _id: '3',
    clientName: 'Meron A.',
    duration: '8 weeks',
    weightLost: '-12kg',
    service: 'Nutrition Coaching',
    quote: 'I felt energised the whole time. He respected my culture and my body type.',
    beforeImage: { asset: { _ref: '' } },
    afterImage: { asset: { _ref: '' } },
  },
]

const placeholderBefore = [
  'https://images.unsplash.com/photo-1609899464726-209d74958e3d?w=400&h=550&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=550&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=550&fit=crop&q=80',
]

const placeholderAfter = [
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=550&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=550&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=550&fit=crop&q=80',
]

export function TransformationSection({ data }: TransformationProps) {
  const items = data.length > 0 ? data : placeholderTransformations

  return (
    <section id="transformations" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span
            className="block text-xs font-bold tracking-[4px] uppercase mb-3"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
          >
            Real Results
          </span>
          <h2
            className="font-bold leading-none mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}
          >
            Transformations
          </h2>
          <div className="w-14 h-0.5 mx-auto mb-5" style={{ background: 'var(--gold)' }} />
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
            These are real people who committed to the process. Every result is earned — no shortcuts.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-20">
          {items.map((item, index) => {
            const beforeUrl = item.beforeImage?.asset?._ref
              ? urlFor(item.beforeImage).width(400).height(550).fit('crop').url()
              : placeholderBefore[index % placeholderBefore.length]

            const afterUrl = item.afterImage?.asset?._ref
              ? urlFor(item.afterImage).width(400).height(550).fit('crop').url()
              : placeholderAfter[index % placeholderAfter.length]

            const isEven = index % 2 === 0

            return (
              <div
                key={item._id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-up ${isEven ? '' : 'lg:flex-row-reverse'}`}
                style={{ direction: isEven ? 'ltr' : 'rtl' }}
              >
                {/* Before / After images */}
                <div className="flex gap-3" style={{ direction: 'ltr' }}>
                  {/* Before */}
                  <div className="flex-1 relative">
                    <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                      <img
                        src={beforeUrl}
                        alt={`${item.clientName} before`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute top-3 left-3 px-3 py-1 text-xs font-bold tracking-widest uppercase"
                        style={{ background: 'rgba(0,0,0,0.8)', color: '#BBBBBB', fontFamily: 'var(--font-heading)' }}
                      >
                        Before
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex-1 relative">
                    <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                      <img
                        src={afterUrl}
                        alt={`${item.clientName} after`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute top-3 left-3 px-3 py-1 text-xs font-bold tracking-widest uppercase"
                        style={{ background: 'var(--gold)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
                      >
                        After
                      </div>
                    </div>
                    {/* Gold accent */}
                    <div
                      className="absolute bottom-[-12px] right-[-12px] w-2/3 h-2/3 pointer-events-none"
                      style={{ border: '2px solid var(--gold)', zIndex: 0 }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div style={{ direction: 'ltr' }}>
                  {/* Stats row */}
                  <div className="flex gap-6 mb-8">
                    <div>
                      <div
                        className="text-3xl font-bold leading-none"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
                      >
                        {item.weightLost}
                      </div>
                      <div className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--subtle)' }}>
                        Result
                      </div>
                    </div>
                    <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '24px' }}>
                      <div
                        className="text-3xl font-bold leading-none"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
                      >
                        {item.duration}
                      </div>
                      <div className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--subtle)' }}>
                        Duration
                      </div>
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
                  >
                    {item.clientName}
                  </h3>

                  {item.service && (
                    <div
                      className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 mb-6"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
                    >
                      {item.service}
                    </div>
                  )}

                  {item.quote && (
                    <blockquote className="relative pl-5 mb-8">
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.5"
                        style={{ background: 'var(--gold)' }}
                      />
                      <p className="text-base leading-relaxed italic" style={{ color: 'var(--muted)' }}>
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}

                  <a
                    href="#contact"
                    className="inline-block px-7 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                    style={{ background: 'var(--gold)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
                  >
                    Start Your Transformation →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
