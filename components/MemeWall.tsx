'use client'

import Image from 'next/image'

const characterImages = [
  {
    src: '/images/characters/unt-main.jpg',
    label: '$UNT Main',
  },
  {
    src: '/images/characters/unt-cool.jpg',
    label: '$UNT Cool',
  },
  {
    src: '/images/characters/unt-dance.jpg',
    label: '$UNT Dance',
  },
  {
    src: '/images/characters/unt-wink.jpg',
    label: '$UNT Wink',
  },
  {
    src: '/images/characters/unt-vibe.jpg',
    label: '$UNT Vibe',
  },
  {
    src: '/images/characters/unt-party.jpg',
    label: '$UNT Party',
  },
  {
    src: '/images/characters/unt-flex.jpg',
    label: '$UNT Flex',
  },
  {
    src: '/images/characters/unt-moon.jpg',
    label: '$UNT Moon',
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
