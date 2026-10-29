'use client'

export function Footer() {
  const quickLinks = ['About', 'Achievements', 'Coaching', 'Testimonials', 'Competitions', 'Contact']
  const services = ['Online Coaching', 'Competition Prep', 'Posing Masterclass', 'Group Bootcamp']
  const nutritionLinks = ['Meal Plans', 'Shred & Cut', 'Lean Bulk', 'Competition Prep', 'Custom Plan']

  const linkStyle = { color: '#888' }
  const hoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'var(--gold)')
  const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#888')

  return (
    <footer style={{ background: '#111111', borderTop: '3px solid var(--gold)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-widest mb-3" style={{ color: '#F2F2F2' }}>
              KIDUS <span style={{ color: 'var(--gold)' }}>MULUGETA</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: '#888' }}>
              IFBB Pro Bodybuilder · Certified Nutrition Coach · 3x Ethiopian National Champion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[3px] uppercase mb-5" style={{ color: '#F2F2F2' }}>Quick Links</h4>
            {quickLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm mb-2 transition-colors"
                style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{l}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[3px] uppercase mb-5" style={{ color: '#F2F2F2' }}>Services</h4>
            {services.map((l) => (
              <a key={l} href="#coaching" className="block text-sm mb-2 transition-colors"
                style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{l}</a>
            ))}
          </div>

          {/* Nutrition */}
          <div>
            <h4 className="text-xs font-bold tracking-[3px] uppercase mb-5" style={{ color: '#F2F2F2' }}>Nutrition Site</h4>
            {nutritionLinks.map((l) => (
              <a key={l} href="https://kidus-nutrition.com" target="_blank" rel="noopener noreferrer"
                className="block text-sm mb-2 transition-colors"
                style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{l}</a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6"
          style={{ borderTop: '1px solid #222' }}>
          <p className="text-xs" style={{ color: '#555' }}>
            © 2026 <span style={{ color: 'var(--gold)' }}>Kidus Mulugeta</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
