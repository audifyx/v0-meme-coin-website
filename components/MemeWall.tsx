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
    <section id="memes" className="bg-white border-b-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.02] bg-black blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full opacity-[0.02] bg-black blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-4 animate-fade-in-down">
            MEME GALLERY
          </h2>
          <div className="h-2 w-24 rounded-full bg-black animate-fade-in-up stagger-item-2"></div>
        </div>

        {/* Horizontal carousel container */}
        <div className="relative group">
          {/* Left button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black text-white p-4 rounded-full border-4 border-black hover:bg-gray-900 smooth-transition hover-lift-subtle shadow-heavy opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={28} />
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
                <div className="relative w-full h-full overflow-hidden bg-gray-100 rounded-3xl border-4 border-black shadow-light group-hover/card:shadow-heavy smooth-transition">
                  <Image
                    src={image}
                    alt={`$UNT Meme ${index + 1}`}
                    fill
                    className="object-cover group-hover/card:scale-110 smooth-transition rounded-2xl"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-10 smooth-transition rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black text-white p-4 rounded-full border-4 border-black hover:bg-gray-900 smooth-transition hover-lift-subtle shadow-heavy opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  )
}
