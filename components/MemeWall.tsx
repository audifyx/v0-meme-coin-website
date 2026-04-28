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
      className="bg-white border-b-4 border-black"
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
      </div>

      {/* ── Centered grid ── */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            justifyItems: 'center',
          }}
        >
          {characterImages.map((item, index) => (
            <div
              key={index}
              className="w-full group cursor-pointer"
              style={{ animationDelay: `${(index % 8) * 60}ms` }}
            >
              {/* Propaganda card */}
              <div
                className="relative w-full overflow-hidden bg-black border-4 border-black"
                style={{
                  boxShadow: '8px 8px 0px #000000',
                  transition: 'box-shadow 0.15s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '12px 12px 0px #EF4444'
                  el.style.transform = 'translate(-4px, -4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '8px 8px 0px #000000'
                  el.style.transform = 'translate(0, 0)'
                }}
              >
                {/* Image */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Red overlay on hover */}
                  <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Label bar */}
                <div className="bg-black border-t-4 border-black px-4 py-2 flex items-center justify-between">
                  <span className="text-white font-black text-sm tracking-widest uppercase">
                    {item.label}
                  </span>
                  <span className="text-red-500 font-black text-xs tracking-widest">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom stamp ── */}
        <div className="mt-16 flex justify-center">
          <div
            className="border-4 border-black px-10 py-4 text-center"
            style={{ boxShadow: '6px 6px 0px #EF4444' }}
          >
            <p className="text-black font-black text-xl uppercase tracking-[0.25em]">
              $UNT — The People&apos;s Coin
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
// Cache bust: Mon Apr 27 20:16:47 EDT 2026
