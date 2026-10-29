// Shared image type
export interface SanityImage {
  asset: { _ref: string }
}

export interface Testimonial {
  _id: string
  quote: string
  authorName: string
  authorLocation: string
  rating: number
  avatar?: SanityImage
}

export interface Accomplishment {
  _id: string
  year: string
  title: string
  event: string
  location: string
  placement: string
}

export interface Competition {
  _id: string
  year: string
  competitionName: string
  location: string
  division: string
  placement: string
  photo?: SanityImage
}

export interface Service {
  _id: string
  name: string
  description: string
  slug: { current: string }
  image?: SanityImage
  price?: string
}

export interface Hero {
  _id: string
  tagLine: string
  description: string
  competitionWins: number
  yearsPro: number
  clientsCoached: number
  nationalTitles: number
  backgroundImage?: SanityImage
}

export interface AboutPhoto {
  image: SanityImage
  caption?: string
}

export interface About {
  _id: string
  bio: string
  credentials: string[]
  profileImage?: SanityImage
  additionalImages?: AboutPhoto[]
  yearsExperience: number
}

export interface Contact {
  _id: string
  email: string
  whatsapp: string
  location: string
  instagramUrl?: string
  tiktokUrl?: string
  youtubeUrl?: string
}

export interface GalleryPhoto {
  image: SanityImage
  caption?: string
  year?: string
}

export interface Gallery {
  _id: string
  title: string
  category: 'competition' | 'training' | 'lifestyle' | 'stage'
  photos: GalleryPhoto[]
}

export interface Transformation {
  _id: string
  clientName: string
  duration: string
  weightLost: string
  beforeImage: SanityImage
  afterImage: SanityImage
  quote?: string
  service?: string
}
