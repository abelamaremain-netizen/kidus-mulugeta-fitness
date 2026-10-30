'use client'

import { MealPlan } from '@/types'

interface NutritionPromoProps {
  data: MealPlan[]
}

const defaultPlans: MealPlan[] = [
  { _id: '1', name: 'Shred & Cut Plan', price: 'Contact for pricing' },
  { _id: '2', name: 'Lean Bulk Plan', price: 'Contact for pricing' },
  { _id: '3', name: 'Competition Prep', price: 'Contact for pricing' },
  { _id: '4', name: 'Full Custom Plan', price: 'Contact for pricing' },
]

const planIcons: Record<number, JSX.Element> = {}

function PlanIcon({ index }: { index: number }) {
  const icons = [
    // Flame - cut
    <svg key="0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>,
    // Dumbbell - bulk
    <svg key="1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v6a6 6 0 0012 0V4M4 4h16"/></svg>,
    // Trophy - competition
    <svg key="2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M17 3H7l-2 7h14L17 3zM5 10s0 5 7 5 7-5 7-5"/></svg>,
    // Star - custom
    <svg key="3" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  ]
  return icons[index % icons.length]
}

const features = [
  'Custom macros calculated for your body & goals',
  'Bulking, cutting & maintenance plans available',
  'Ethiopian & international food-friendly recipes',
  'Weekly adjustments based on your progress',
  'Direct WhatsApp support from Kidus',
]

export function NutritionPromo({ data }: NutritionPromoProps) {
  const plans = data.length > 0 ? data : defaultPlans

  return (
    <section id="nutrition" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.94) 0%, rgba(201,168,76,0.12) 100%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text */}
          <div className="fade-up">
            <span
              className="block text-xs font-bold tracking-[4px] uppercase mb-3"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
            >
              Nutrition by Kidus
            </span>
            <h2
              className="font-bold leading-none mb-5"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: '#FFFFFF' }}
            >
              Eat Like<br />A Champion
            </h2>
            <div className="w-14 h-0.5 mb-7" style={{ background: 'var(--gold)' }} />
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.68)', maxWidth: '440px' }}>
              Kidus creates fully personalised nutrition plans based on your body, goals, and lifestyle.
              No generic templates — every plan is built specifically for you after a consultation.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  <div className="w-1.5 h-1.5 flex-shrink-0 rotate-45" style={{ background: 'var(--gold)' }} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block px-9 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: 'var(--gold)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Get Your Custom Plan →
            </a>
          </div>

          {/* Plans card */}
          <div
            className="fade-up p-10"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(201,168,76,0.3)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="text-3xl mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
            >
              Meal Plans
            </div>
            <div className="text-xs mb-7 tracking-widest" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Personalised for your body &amp; goals — contact Kidus to get started
            </div>
            <div className="flex flex-col mb-8">
              {plans.map((plan, index) => (
                <div
                  key={plan._id}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <span
                    className="flex items-center gap-3 text-sm font-medium"
                    style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}
                  >
                    <span style={{ color: 'var(--gold)' }}>
                      <PlanIcon index={index} />
                    </span>
                    {plan.name}
                  </span>
                  <span
                    className="text-sm font-bold tracking-wide"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
                  >
                    {plan.price}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="block w-full py-4 text-center text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: 'var(--gold)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Contact Kidus to Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
