import { client } from '../sanity/lib/client'
import {
  Testimonial,
  Accomplishment,
  About,
  Hero,
  Competition,
  Service,
  Contact,
  Gallery,
  Transformation,
} from '../types/index'

export async function getTestimonial(): Promise<Testimonial[]> {
  return await client.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id, quote, authorName, authorLocation, rating,
      avatar { asset { _ref } }
    }`
  )
}

export async function getAccomplishment(): Promise<Accomplishment[]> {
  return await client.fetch(
    `*[_type == "accomplishment"] | order(year desc) {
      _id, year, title, event, location, placement
    }`
  )
}

export async function getAbout(): Promise<About[]> {
  return await client.fetch(
    `*[_type == "about"][0..0] {
      _id, bio, credentials, yearsExperience,
      profileImage { asset { _ref } },
      additionalImages[] {
        caption,
        image { asset { _ref } }
      }
    }`
  )
}

export async function getHero(): Promise<Hero[]> {
  return await client.fetch(
    `*[_type == "hero"][0..0] {
      _id, tagLine, description,
      competitionWins, yearsPro, clientsCoached, nationalTitles,
      backgroundImage { asset { _ref } }
    }`
  )
}

export async function getService(): Promise<Service[]> {
  return await client.fetch(
    `*[_type == "service"] | order(_createdAt asc) {
      _id, name, description, price,
      slug { current },
      image { asset { _ref } }
    }`
  )
}

export async function getCompetition(): Promise<Competition[]> {
  return await client.fetch(
    `*[_type == "competition"] | order(year desc) {
      _id, year, competitionName, location, division, placement,
      photo { asset { _ref } }
    }`
  )
}

export async function getContact(): Promise<Contact[]> {
  return await client.fetch(
    `*[_type == "contact"][0..0] {
      _id, email, whatsapp, location,
      instagramUrl, tiktokUrl, youtubeUrl
    }`
  )
}

export async function getGalleries(): Promise<Gallery[]> {
  return await client.fetch(
    `*[_type == "gallery"] | order(_createdAt asc) {
      _id, title, category,
      photos[] {
        caption, year,
        image { asset { _ref } }
      }
    }`
  )
}

export async function getTransformations(): Promise<Transformation[]> {
  return await client.fetch(
    `*[_type == "transformation"] | order(_createdAt desc) {
      _id, clientName, duration, weightLost, quote, service,
      beforeImage { asset { _ref } },
      afterImage { asset { _ref } }
    }`
  )
}
