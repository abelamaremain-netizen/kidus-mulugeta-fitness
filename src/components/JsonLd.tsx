export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kidus Mulugeta',
    jobTitle: 'IFBB Pro Bodybuilder & Fitness Coach',
    description:
      "Ethiopia's most decorated IFBB Pro bodybuilder and 3x National Champion. Online coaching, competition prep and personalised nutrition plans.",
    url: 'https://kidus-mulugeta-fitness.vercel.app',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=85',
    nationality: 'Ethiopian',
    knowsAbout: ['Bodybuilding', 'Nutrition', 'Competition Prep', 'Fitness Coaching', 'Posing'],
    offers: [
      {
        '@type': 'Offer',
        name: 'Online 1-on-1 Coaching',
        description: 'Personalised training and nutrition programming',
      },
      {
        '@type': 'Offer',
        name: 'Competition Prep',
        description: '16-week competition preparation program',
      },
      {
        '@type': 'Offer',
        name: 'Nutrition Coaching',
        description: 'Custom meal plans and macro targets',
      },
    ],
    sameAs: [
      'https://instagram.com/kidusmulugeta',
      'https://tiktok.com/@kidus.mulugeta',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
