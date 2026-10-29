'use client'

import { Testimonial } from '@/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface TestimonialProps {
  data: Testimonial[]
}

const placeholderTestimonials: Testimonial[] = [
  { _id: '1', quote: 'Kidus changed my entire approach to nutrition. Within 12 weeks I lost 18kg of fat while keeping every kilo of muscle. I placed 2nd at nationals. Nobody believed it — he did.', authorName: 'Samuel T.', authorLocation: 'Competitive Bodybuilder · Addis Ababa', rating: 5 },
  { _id: '2', quote: 'I bought the Lean Bulk meal plan and I\'m blown away. Every meal is mapped to my macros, the recipes taste good, and I\'ve put on 6kg of lean mass in 10 weeks. Worth every penny.', authorName: 'Marcus L.', authorLocation: 'Online Client · London, UK', rating: 5 },
  { _id: '3', quote: 'The posing masterclass alone was worth it. Kidus gave me detailed video feedback within 24 hours and the difference between my first and second show was night and day.', authorName: 'Daniel K.', authorLocation: "Men's Physique · Dubai", rating: 5 },
  { _id: '4', quote: 'As an Ethiopian living abroad, Kidus included familiar ingredients in my meal plan. I dropped 12kg in 8 weeks and felt energised the whole time.', authorName: 'Meron A.', authorLocation: 'Nutrition Client · Toronto', rating: 5 },
  { _id: '5', quote: 'I\'ve had online coaches before but none gave me this level of attention. Weekly video reviews, instant replies, and a program that actually progressed. Kidus genuinely cares.', authorName: 'James O.', authorLocation: '1-on-1 Coaching · Nairobi', rating: 4 },
  { _id: '6', quote: 'Signed up for the bootcamp on a whim and it completely rewired my mindset. Down 10kg and I love training now.', authorName: 'Fatima H.', authorLocation: 'Bootcamp Graduate · Stockholm', rating: 5 },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= rating ? 'var(--gold)' : 'var(--border)', fontSize: '13px' }}>★</span>
      ))}
    </div>
  )
}

export function TestimonialSection({ data }: TestimonialProps) {
  const items = data.length > 0 ? data : placeholderTestimonials

  return (
    <section id="testimonials" className="py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="block text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Client Results
          </span>
          <h2 className="font-bold leading-none mb-5" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}>
            What They Say
          </h2>
          <div className="w-14 h-0.5 mx-auto mb-5" style={{ background: 'var(--gold)' }} />
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
            Real words from real people who committed to the process and changed their lives.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <article
              key={item._id}
              className="p-8 border-t-[3px] transition-all duration-300"
              style={{
                background: index === 0 ? 'var(--card-alt)' : 'var(--card)',
                border: '1px solid var(--border)',
                borderTopColor: index === 0 ? 'var(--gold)' : 'transparent',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderTopColor = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.borderTopColor = index === 0 ? 'var(--gold)' : 'transparent')}
            >
              {/* Quote mark */}
              <div
                className="font-bold leading-none mb-3 select-none"
                style={{ fontSize: '72px', color: 'var(--gold)', opacity: 0.25, lineHeight: 0.65 }}
              >
                &ldquo;
              </div>

              <Stars rating={item.rating} />

              <p className="text-sm leading-[1.85] mb-6 italic" style={{ color: 'var(--muted)' }}>
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {item.avatar?.asset?._ref ? (
                  <Image
                    src={urlFor(item.avatar).width(88).height(88).url()}
                    alt={item.authorName}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                    style={{ border: '2px solid var(--gold)' }}
                  />
                ) : (
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: 'var(--gold)', color: '#0A0A0A' }}
                  >
                    {item.authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{item.authorName}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--subtle)' }}>{item.authorLocation}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
