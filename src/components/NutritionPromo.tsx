'use client'

export function NutritionPromo() {
  const plans = [
    {
      name: 'Shred & Cut Plan', price: '$49',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>,
    },
    {
      name: 'Lean Bulk Plan', price: '$49',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v6a6 6 0 0012 0V4M4 4h16"/></svg>,
    },
    {
      name: 'Competition Prep', price: '$99',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M17 3H7l-2 7h14L17 3zM5 10s0 5 7 5 7-5 7-5"/></svg>,
    },
    {
      name: 'Full Custom Plan', price: '$149',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>,
    },
  ]

  const features = [
    'Custom macros calculated for your body & goals',
    'Bulking, cutting & maintenance plans available',
    'Ethiopian & international food-friendly recipes',
    'Weekly adjustments based on your progress',
    'Direct WhatsApp support from Kidus',
  ]

  return (
    <section
      id="nutrition"
      className="relative py-28 overflow-hidden"
    >
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text side */}
          <div className="fade-up">
            <span
              className="block text-xs font-bold tracking-[4px] uppercase mb-3"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
            >
              Nutrition by Kidus
            </span>
            <h2
              className="font-bold leading-none mb-5"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 6vw, 72px)',
                color: '#FFFFFF',
              }}
            >
              Eat Like<br />A Champion
            </h2>
            <div className="w-14 h-0.5 mb-7" style={{ background: 'var(--gold)' }} />
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.68)', maxWidth: '440px' }}>
              Everything Kidus used to build his championship physique — broken down into actionable,
              personalised meal plans you can start today.
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
              href="https://kidus-nutrition.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: 'var(--gold)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Visit Nutrition Site →
            </a>
          </div>

          {/* Pricing card */}
          <div
            className="fade-up delay-2 p-10"
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
              Starting from — choose your goal
            </div>
            <div className="flex flex-col mb-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex items-center justify-between py-3.5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <span
                    className="flex items-center gap-3 text-sm font-medium"
                    style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}
                  >
                    <span style={{ color: 'var(--gold)' }}>{plan.icon}</span>
                    {plan.name}
                  </span>
                  <span
                    className="text-xl font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
                  >
                    {plan.price}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://kidus-nutrition.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 text-center text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: 'var(--gold)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Get Your Plan Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
