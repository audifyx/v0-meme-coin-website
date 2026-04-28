'use client'

import Image from 'next/image'

const characterImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_045616_551-xDCMa6HTmXrgDG0GKmMC7bWlhKf2yE.jpg',
    label: '$UNT #1',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051720_699-Q9rbse9bV1HQpj2X5e9NDTksyH276m.jpg',
    label: '$UNT #2',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051649_661-r2oJ5RTK3FSKw4kDGAWa1BUN3gpAvr.jpg',
    label: '$UNT #3',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051652_172-5eZjwJxN9dnmxiJlhSZTOqOuoCAnK2.jpg',
    label: '$UNT #4',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051710_094-8g0uzgMpxCxG5OoVMvYc57fqVIerFS.jpg',
    label: '$UNT #5',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051718_657-iba9yfKgseOvznEtwWkwdIyTB3nzsS.jpg',
    label: '$UNT #6',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051643_235-JyEEhFTHMnaXxt5D3VFCC1D78mH9Js.jpg',
    label: '$UNT #7',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051701_627-6qrnrYr5mTfeFjWA1M2CeorV0Xp76s.jpg',
    label: '$UNT #8',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051726_389-9Wvl7dIi5o25zynGuK48c7ELhVKvjU.jpg',
    label: '$UNT #9',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051657_735-LG9QKscCKhUwL6ic6ojxCuLigc0buA.jpg',
    label: '$UNT #10',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051654_374-v1v75wP0DOofcWDX1lZdG1IoHcmv03.jpg',
    label: '$UNT #11',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051722_988-Z61HLJZgHGxEsyF03JVovUqGpaY7wW.jpg',
    label: '$UNT #12',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051659_035-hpTsQgMEB7wb2A2AWw6ZX8nJVcScB7.jpg',
    label: '$UNT #13',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051700_463-G44LaOr2YzG6B10q73dQD9Cz9MIIgs.jpg',
    label: '$UNT #14',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051656_409-vuifEaZUUPKlZjj01NvZXCIG6l5hpl.jpg',
    label: '$UNT #15',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051713_895-FPezJR7FUOgJbShEHdQBjtfl7QEXEV.jpg',
    label: '$UNT #16',
  },
]

export default function MemeWall() {
  return (
    <section
      id="memes"
      className="bg-white border-b-4 border-black overflow-hidden"
    >
      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 text-center">
        <div className="inline-block border-4 border-black bg-black px-8 py-3 mb-6"
          style={{ boxShadow: '6px 6px 0px #EF4444' }}>
          <span className="text-white text-sm font-black tracking-[0.3em] uppercase">
            Propaganda Wall
          </span>
        </div>
        <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight text-black">
          MEME GALLERY
        </h2>
        <div className="mt-4 mx-auto h-2 w-32 bg-red-500"></div>
        <p className="mt-8 text-black font-bold text-xl uppercase tracking-widest max-w-2xl mx-auto">
          THE OFFICIAL PROPAGANDA OF THE $UNT CULT. INDEPENDENCE. LOVE. CHAOS.
        </p>
      </div>

      {/* ── Centered Grid ── */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {characterImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white border-4 border-black transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: '8px 8px 0px #000000' }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden border-b-4 border-black bg-gray-100">
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Red Overlay on Hover */}
                <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Label Bar */}
              <div className="bg-black p-4 flex justify-between items-center">
                <span className="text-white font-black text-lg tracking-tighter uppercase">
                  {image.label}
                </span>
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs font-black">{index + 1}</span>
                </div>
              </div>

              {/* Hover Shadow Shift */}
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* ── Bottom Stamp ── */}
        <div className="mt-20 text-center">
          <div className="inline-block border-4 border-black p-6 bg-white"
            style={{ boxShadow: '10px 10px 0px #EF4444' }}>
            <p className="text-black font-black text-3xl md:text-4xl uppercase italic tracking-tighter">
              $UNT — The People's Coin
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
// Force redeploy: Mon Apr 27 20:26:34 EDT 2026
