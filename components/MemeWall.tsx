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
    <section id="memes" className="bg-white border-b-8 border-black relative overflow-hidden">
      {/* Diagonal sections */}
      <div className="absolute top-0 left-0 w-full h-48 bg-black skew-y-3 z-0"></div>
      <div className="absolute bottom-0 right-0 w-full h-40 bg-black -skew-y-2 z-0"></div>

      <div className="max-w-full mx-auto px-0 py-0 relative z-10">
        {/* Header */}
        <div className="px-8 md:px-12 py-24 relative">
          <div className="absolute -top-12 right-0 text-9xl font-black text-black opacity-[0.12] leading-none whitespace-nowrap">
            MEMESMEMESMEMES
          </div>
          <h2 className="text-10xl md:text-11xl font-black text-black relative z-20">
            MEME<br/>GALLERY
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative group px-0 py-0 overflow-hidden -mt-8">
          {/* Left button - dramatic */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-black text-white p-5 md:p-6 border-6 border-black hover:bg-gray-900 smooth-transition hover-lift shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={40} strokeWidth={3} />
          </button>

          {/* Scrollable carousel */}
          <div
            ref={scrollContainer}
            className="flex gap-8 overflow-x-auto scroll-smooth px-32 py-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {characterImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-96 cursor-pointer group/card animate-fade-in-up hover-lift"
                style={{ animationDelay: `${(index % 4) * 80}ms` }}
              >
                <div className="relative w-full h-full overflow-hidden bg-gray-100 border-8 border-black shadow-2xl group-hover/card:shadow-2xl smooth-transition">
                  <Image
                    src={image}
                    alt={`$UNT Meme ${index + 1}`}
                    fill
                    className="object-cover group-hover/card:scale-125 smooth-transition"
                  />
                  {/* Bold overlay on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-20 smooth-transition"></div>
                </div>
                {/* Decorative box */}
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-4 border-black bg-black group-hover/card:bg-white smooth-transition"></div>
              </div>
            ))}
          </div>

          {/* Right button - dramatic */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-black text-white p-5 md:p-6 border-6 border-black hover:bg-gray-900 smooth-transition hover-lift shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={40} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  )
}
