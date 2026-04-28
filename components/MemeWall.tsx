'use client'

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

      {/* ── Empty Grid Placeholder ── */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="border-4 border-dashed border-black py-20 text-center bg-gray-50"
          style={{ boxShadow: '8px 8px 0px #000000' }}>
          <p className="text-black font-black text-2xl uppercase tracking-widest">
            Gallery Content Removed
          </p>
          <p className="text-gray-500 font-bold mt-2">
            Awaiting new propaganda assets...
          </p>
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
