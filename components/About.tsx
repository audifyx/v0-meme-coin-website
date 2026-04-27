'use client'

export default function About() {
  return (
    <section id="about" className="bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black mb-12 border-b-4 border-white pb-6">
          ABOUT $UNT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white text-black p-8 border-4 border-white">
            <h3 className="text-2xl font-black mb-4">THE VISION</h3>
            <p className="font-bold leading-relaxed mb-4">
              $UNT is a free idol representing independence, love, care, craziness, wealth, and fun. It&apos;s not just a token—it&apos;s a movement born from the trenches.
            </p>
            <p className="font-bold text-gray-600">
              The potential to become a global icon evolving into merch, NFTs, and cultural movements.
            </p>
          </div>

          <div className="bg-white text-black p-8 border-4 border-white">
            <h3 className="text-2xl font-black mb-4">THE CULTURE</h3>
            <p className="font-bold leading-relaxed mb-4">
              We stay. We show up every day with new content, new energy, and new moves.
            </p>
            <p className="font-bold text-gray-600">
              This is more than a token—this is the $UNT cult. All we need is support, because together, we will flip the tables.
            </p>
          </div>
        </div>

        <div className="bg-white text-black p-8 border-4 border-white">
          <h3 className="text-2xl font-black mb-6">KEY MILESTONES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-black pl-6">
              <p className="text-4xl font-black text-gray-400">$5K</p>
              <p className="font-bold">Launch Price</p>
              <p className="text-sm font-bold text-gray-600">Holding strong at start</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <p className="text-4xl font-black text-gray-400">$1M</p>
              <p className="font-bold">Peak on Day 1</p>
              <p className="text-sm font-bold text-gray-600">Rapid momentum</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <p className="text-4xl font-black text-gray-400">$200K+</p>
              <p className="font-bold">Current Floor</p>
              <p className="text-sm font-bold text-gray-600">Strong community support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
