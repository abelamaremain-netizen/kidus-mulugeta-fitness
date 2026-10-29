import { client } from '../sanity/lib/client'
import { Testimonial, Accomplishment, About, Hero, Competition, Service, Contact } from '../types/index'

export async function getTestimonial(): Promise<Testimonial[]> {
  return await client.fetch(`*[_type == "testimonial"] | order(_createdAt desc)`)
}

export async function getAccomplishment(): Promise<Accomplishment[]> {
  return await client.fetch(`*[_type == "accomplishment"] | order(year desc)`)
}

export async function getAbout(): Promise<About[]> {
  return await client.fetch(`*[_type == "about"][0..0]`)
}

export async function getHero(): Promise<Hero[]> {
  return await client.fetch(`*[_type == "hero"][0..0]`)
}

export async function getService(): Promise<Service[]> {
  return await client.fetch(`*[_type == "service"] | order(_createdAt asc)`)
}

export async function getCompetition(): Promise<Competition[]> {
  return await client.fetch(`*[_type == "competition"] | order(year desc)`)
}

export async function getContact(): Promise<Contact[]> {
  return await client.fetch(`*[_type == "contact"][0..0]`)
}
