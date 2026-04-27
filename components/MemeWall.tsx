'use client'

import { useRef } from 'react'
import Image from 'next/image'

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
      scrollContainer.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="memes" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-black text-white mb-12 text-center">
          MEME GALLERY
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded transition"
          >
            ←
          </button>

          <div
            ref={scrollContainer}
            className="flex gap-4 overflow-x-auto scroll-smooth px-16"
            style={{ scrollBehavior: 'smooth' }}
          >
            {characterImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-96 rounded overflow-hidden hover:scale-105 transition">
                <Image src={image} alt={`Meme ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
