'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const characterImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_045616_551-xDCMa6HTmXrgDG0GKmMC7bWlhKf2yE.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051720_699-Q9rbse9bV1HQpj2X5e9NDTksyH276m.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051649_661-r2oJ5RTK3FSKw4kDGAWa1BUN3gpAvr.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051652_172-5eZjwJxN9dnmxiJlhSZTOqOuoCAnK2.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051710_094-8g0uzgMpxCxG5OoVMvYc57fqVIerFS.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051718_657-iba9yfKgseOvznEtwWkwdIyTB3nzsS.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051643_235-JyEEhFTHMnaXxt5D3VFCC1D78mH9Js.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051701_627-6qrnrYr5mTfeFjWA1M2CeorV0Xp76s.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051726_389-9Wvl7dIi5o25zynGuK48c7ELhVKvjU.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051657_735-LG9QKscCKhUwL6ic6ojxCuLigc0buA.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051654_374-v1v75wP0DOofcWDX1lZdG1IoHcmv03.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051722_988-Z61HLJZgHGxEsyF03JVovUqGpaY7wW.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051659_035-hpTsQgMEB7wb2A2AWw6ZX8nJVcScB7.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051700_463-G44LaOr2YzG6B10q73dQD9Cz9MIIgs.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051656_409-vuifEaZUUPKlZjj01NvZXCIG6l5hpl.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051713_895-FPezJR7FUOgJbShEHdQBjtfl7QEXEV.jpg',
]

export default function MemeWall() {
  const scrollContainer = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 400
      if (direction === 'left') {
        scrollContainer.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="memes" className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 border-b-4 border-black relative overflow-hidden">
      {/* Floating playful shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-300 opacity-25 animate-float-bob"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-3xl bg-purple-200 opacity-20 animate-float-bob" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-indigo-300 opacity-20 animate-float-bob" style={{ animationDelay: '1.4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-4 animate-fade-in-down text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
            MEME GALLERY 🎨
          </h2>
          <div className="h-3 w-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-fade-in-up stagger-item-2"></div>
        </div>

        {/* Horizontal carousel container */}
        <div className="relative group">
          {/* Left button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full border-4 border-white hover:scale-110 smooth-transition hover-lift-subtle shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Scrollable carousel */}
          <div
            ref={scrollContainer}
            className="flex gap-6 overflow-x-auto scroll-smooth px-20"
            style={{ scrollBehavior: 'smooth' }}
          >
            {characterImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-96 cursor-pointer group/card animate-fade-in-up hover-lift"
                style={{ animationDelay: `${(index % 4) * 80}ms` }}
              >
                <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl border-4 border-white shadow-lg group-hover/card:shadow-2xl smooth-transition">
                  <Image
                    src={image}
                    alt={`$UNT Meme ${index + 1}`}
                    fill
                    className="object-cover group-hover/card:scale-120 smooth-transition rounded-2xl"
                  />
                  {/* Colorful overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/card:opacity-100 smooth-transition rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-full border-4 border-white hover:scale-110 smooth-transition hover-lift-subtle shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
