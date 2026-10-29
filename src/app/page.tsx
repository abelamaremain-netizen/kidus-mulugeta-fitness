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

export default async function Home() {
  let hero = [], about = [], accomplishments = [], services = [],
      testimonials = [], competitions = [], contact = [],
      galleries = [], transformations = []

  try {
    ;[hero, about, accomplishments, services, testimonials,
      competitions, contact, galleries, transformations] =
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
      <NutritionPromo />
      <CoachingSection data={services} />
      <TransformationSection data={transformations} />
      <TestimonialSection data={testimonials} />
      <CompetitionSection data={competitions} />
      <ContactSection data={contact[0] ?? null} />
    </main>
  )
}
