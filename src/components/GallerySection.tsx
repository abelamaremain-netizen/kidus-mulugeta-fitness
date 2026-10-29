'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Gallery, GalleryPhoto } from '@/types'
import { urlFor } from '@/sanity/lib/image'

interface GalleryProps {
  data: Gallery[]
}

// Placeholder photos using Unsplash — replaced automatically when real photos uploaded in Sanity
const placeholderGalleries: Gallery[] = [
  {
    _id: '1',
    title: 'Competition',
    category: 'competition',
    photos: [
      { image: { asset: { _ref: '' } }, caption: 'African Bodybuilding Championships 2024', year: '2024' },
      { image: { asset: { _ref: '' } }, caption: 'Ethiopian National Championship 2023', year: '2023' },
      { image: { asset: { _ref: '' } }, caption: 'Middle East Open Pro 2023', year: '2023' },
      { image: { asset: { _ref: '' } }, caption: 'East Africa Open 2022', year: '2022' },
      { image: { asset: { _ref: '' } }, caption: 'Ethiopian National Championship 2022', year: '2022' },
      { image: { asset: { _ref: '' } }, caption: 'African Championships 2021', year: '2021' },
      { image: { asset: { _ref: '' } }, caption: 'Training Session', year: '2024' },
      { image: { asset: { _ref: '' } }, caption: 'Backstage Prep', year: '2023' },
      { image: { asset: { _ref: '' } }, caption: 'Morning Workout', year: '2024' },
      { image: { asset: { _ref: '' } }, caption: 'Posing Practice', year: '2023' },
      { image: { asset: { _ref: '' } }, caption: 'Stage Ready', year: '2024' },
      { image: { asset: { _ref: '' } }, caption: 'Peak Week', year: '2023' },
    ],
  },
]

const placeholderUrls = [
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=750&fit=crop&q=80',
  'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=750&fit=crop&q=80',
]

const categories = ['all', 'competition', 'training', 'lifestyle', 'stage']

function LightboxModal({
  photo,
  url,
  onClose,
  onPrev,
  onNext,
}: {
  photo: GalleryPhoto
  url: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 md:left-8 text-white p-3 transition-all"
        style={{ background: 'rgba(255,255,255,0.1)' }}
        aria-label="Previous photo"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <div
        className="relative max-w-4xl max-h-[85vh] mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ maxHeight: '80vh' }}>
          <img
            src={url}
            alt={photo.caption ?? 'Gallery photo'}
            className="object-contain max-h-[75vh] mx-auto"
            style={{ display: 'block' }}
          />
        </div>
        {(photo.caption || photo.year) && (
          <div className="mt-4 text-center">
            {photo.caption && (
              <p className="text-sm font-medium" style={{ color: '#F2F2F2' }}>{photo.caption}</p>
            )}
            {photo.year && (
              <p className="text-xs mt-1" style={{ color: 'var(--gold)' }}>{photo.year}</p>
            )}
          </div>
        )}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 md:right-8 text-white p-3 transition-all"
        style={{ background: 'rgba(255,255,255,0.1)' }}
        aria-label="Next photo"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2"
        aria-label="Close"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  )
}

export function GallerySection({ data }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightbox, setLightbox] = useState<{ photo: GalleryPhoto; url: string; index: number } | null>(null)

  const galleries = data.length > 0 ? data : placeholderGalleries

  // Flatten all photos across galleries, filtered by category
  const allPhotos: { photo: GalleryPhoto; url: string; category: string }[] = []
  galleries.forEach((gallery, gi) => {
    gallery.photos?.forEach((photo, pi) => {
      const url = photo.image?.asset?._ref
        ? urlFor(photo.image).width(600).height(750).fit('crop').url()
        : placeholderUrls[(gi * 6 + pi) % placeholderUrls.length]
      allPhotos.push({ photo, url, category: gallery.category })
    })
  })

  const filtered = activeCategory === 'all'
    ? allPhotos
    : allPhotos.filter((p) => p.category === activeCategory)

  const currentIndex = lightbox ? allPhotos.findIndex((p) => p.url === lightbox.url) : -1

  const openLightbox = (photo: GalleryPhoto, url: string, index: number) => {
    setLightbox({ photo, url, index })
  }

  const closeLightbox = () => setLightbox(null)

  const prevPhoto = () => {
    if (currentIndex > 0) {
      const prev = allPhotos[currentIndex - 1]
      setLightbox({ photo: prev.photo, url: prev.url, index: currentIndex - 1 })
    }
  }

  const nextPhoto = () => {
    if (currentIndex < allPhotos.length - 1) {
      const next = allPhotos[currentIndex + 1]
      setLightbox({ photo: next.photo, url: next.url, index: currentIndex + 1 })
    }
  }

  // Available categories from actual data
  const availableCategories = ['all', ...Array.from(new Set(galleries.map((g) => g.category)))]

  return (
    <section id="gallery" className="py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span
            className="block text-xs font-bold tracking-[4px] uppercase mb-3"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}
          >
            Behind The Scenes
          </span>
          <h2
            className="font-bold leading-none mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text)' }}
          >
            Photo Gallery
          </h2>
          <div className="w-14 h-0.5 mx-auto mb-5" style={{ background: 'var(--gold)' }} />
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
            On stage, in the gym, and behind the scenes — a look into Kidus&apos;s world.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 fade-up">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200"
              style={{
                fontFamily: 'var(--font-heading)',
                background: activeCategory === cat ? 'var(--gold)' : 'var(--card)',
                color: activeCategory === cat ? '#0A0A0A' : 'var(--muted)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--gold)' : 'var(--border)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Full-width masonry grid */}
      <div className="px-4 md:px-8">
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
        >
          {filtered.map(({ photo, url }, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(photo, url, index)}
            >
              <div style={{ aspectRatio: '3/4' }}>
                <img
                  src={url}
                  alt={photo.caption ?? 'Kidus Mulugeta'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
              >
                {photo.caption && (
                  <p className="text-xs font-medium text-white leading-tight">{photo.caption}</p>
                )}
                {photo.year && (
                  <p className="text-xs mt-0.5" style={{ color: 'var(--gold)' }}>{photo.year}</p>
                )}
              </div>
              {/* Gold border on hover */}
              <div
                className="absolute inset-0 border-2 border-transparent group-hover:border-[color:var(--gold)] transition-all duration-300 pointer-events-none"
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 px-6" style={{ color: 'var(--subtle)' }}>
            No photos in this category yet.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <LightboxModal
          photo={lightbox.photo}
          url={lightbox.url}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  )
}
