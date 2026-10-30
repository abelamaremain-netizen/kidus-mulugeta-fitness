import {
  getHero,
  getAbout,
  getAccomplishment,
  getService,
  getTestimonial,
  getCompetition,
  getContact,
  getGalleries,
  getTransformations,
  getMealPlans,
} from '@/lib/queries'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { AccomplishmentSection } from '@/components/AccomplishmentSection'
import { NutritionPromo } from '@/components/NutritionPromo'
import { CoachingSection } from '@/components/CoachingSection'
import { GallerySection } from '@/components/GallerySection'
import { TransformationSection } from '@/components/TransformationSection'
import { TestimonialSection } from '@/components/TestimonialSection'
import { CompetitionSection } from '@/components/CompetitionSection'
import { ContactSection } from '@/components/ContactSection'

// Always fetch fresh data — never use cached version
export const revalidate = 0

export default async function Home() {
  let hero = [], about = [], accomplishments = [], services = [],
      testimonials = [], competitions = [], contact = [],
      galleries = [], transformations = [], mealPlans = []

  try {
    ;[hero, about, accomplishments, services, testimonials,
      competitions, contact, galleries, transformations, mealPlans] =
      await Promise.all([
        getHero(),
        getAbout(),
        getAccomplishment(),
        getService(),
        getTestimonial(),
        getCompetition(),
        getContact(),
        getGalleries(),
        getTransformations(),
        getMealPlans(),
      ])
  } catch (err) {
    console.error('Sanity fetch failed — using placeholder data', err)
  }

  return (
    <main>
      <HeroSection data={hero[0] ?? null} />
      <AboutSection data={about[0] ?? null} />
      <AccomplishmentSection data={accomplishments} />
      <GallerySection data={galleries} />
      <NutritionPromo data={mealPlans} />
      <CoachingSection data={services} />
      <TransformationSection data={transformations} />
      <TestimonialSection data={testimonials} />
      <CompetitionSection data={competitions} />
      <ContactSection data={contact[0] ?? null} />
    </main>
  )
}
