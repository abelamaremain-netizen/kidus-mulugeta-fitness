import { getHero, getAbout, getAccomplishment, getService, getTestimonial, getCompetition, getContact } from '@/lib/queries'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { AccomplishmentSection } from '@/components/AccomplishmentSection'
import { NutritionPromo } from '@/components/NutritionPromo'
import { CoachingSection } from '@/components/CoachingSection'
import { TestimonialSection } from '@/components/TestimonialSection'
import { CompetitionSection } from '@/components/CompetitionSection'
import { ContactSection } from '@/components/ContactSection'

export default async function Home() {
  // Fetch all data in parallel for performance
  const [hero, about, accomplishments, services, testimonials, competitions, contact] =
    await Promise.all([
      getHero(),
      getAbout(),
      getAccomplishment(),
      getService(),
      getTestimonial(),
      getCompetition(),
      getContact(),
    ])

  return (
    <main>
      <HeroSection data={hero[0] ?? null} />
      <AboutSection data={about[0] ?? null} />
      <AccomplishmentSection data={accomplishments} />
      <NutritionPromo />
      <CoachingSection data={services} />
      <TestimonialSection data={testimonials} />
      <CompetitionSection data={competitions} />
      <ContactSection data={contact[0] ?? null} />
    </main>
  )
}
