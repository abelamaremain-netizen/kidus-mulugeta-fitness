export interface Testimonial {
  _id: string
  quote: string
  authorName: string
  authorLocation: string
  rating: number
  avatar?: { asset: { _ref: string } }
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
}

export interface Service {
  _id: string
  name: string
  description: string
  slug: { current: string }
}

export interface Hero {
  _id: string
  tagLine: string
  description: string
  competitionWins: number
  yearsPro: number
  clientsCoached: number
  nationalTitles: number
  backgroundImage?: { asset: { _ref: string } }
}

export interface About {
  _id: string
  bio: string
  credentials: string[]
  profileImage?: { asset: { _ref: string } }
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
