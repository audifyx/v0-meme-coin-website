'use client'

import Image from 'next/image'

const characterImages = [
  {
    src: '/images/characters/unt-main.jpg',
    label: '$UNT #1',
  },
  {
    src: '/images/characters/unt-cool.jpg',
    label: '$UNT #2',
  },
  {
    src: '/images/characters/unt-dance.jpg',
    label: '$UNT #3',
  },
  {
    src: '/images/characters/unt-wink.jpg',
    label: '$UNT #4',
  },
  {
    src: '/images/characters/unt-vibe.jpg',
    label: '$UNT #5',
  },
  {
    src: '/images/characters/unt-party.jpg',
    label: '$UNT #6',
  },
  {
    src: '/images/characters/unt-flex.jpg',
    label: '$UNT #7',
  },
  {
    src: '/images/characters/unt-moon.jpg',
    label: '$UNT #8',
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
