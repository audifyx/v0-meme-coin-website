'use client'

export default function About() {
  return (
    <section id="about" className="bg-white text-black border-b-4 border-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-96 -right-96 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        <div className="absolute -bottom-96 -left-96 w-96 h-96 bg-black rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="mb-16 animate-fade-in-down">
          <h2 className="text-6xl md:text-7xl font-black mb-4 text-black">
            ABOUT $UNT
          </h2>
          <div className="h-2 w-20 bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-black p-10 border-4 border-black hover-lift animate-fade-in-up rounded-2xl group">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-3xl font-black mb-4 group-hover:text-blue-600 transition-colors">THE VISION</h3>
            <p className="font-bold leading-relaxed mb-4 text-lg">
              $UNT is a free idol representing independence, love, care, craziness, wealth, and fun. It&apos;s not just a token—it&apos;s a movement born from the trenches.
            </p>
            <p className="font-bold text-gray-700">
              The potential to become a global icon evolving into merch, NFTs, and cultural movements.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 text-black p-10 border-4 border-black hover-lift animate-fade-in-up stagger-item-2 rounded-2xl group">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-3xl font-black mb-4 group-hover:text-purple-600 transition-colors">THE CULTURE</h3>
            <p className="font-bold leading-relaxed mb-4 text-lg">
              We stay. We show up every day with new content, new energy, and new moves.
            </p>
            <p className="font-bold text-gray-700">
              This is more than a token—this is the $UNT cult. All we need is support, because together, we will flip the tables.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 text-black p-10 border-4 border-black mb-8 hover-lift animate-fade-in-up stagger-item-3 rounded-2xl">
          <h3 className="text-3xl font-black mb-8">LAUNCH HISTORY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-4 border-yellow-300 text-center hover-lift transition-all animate-fade-in-up">
              <p className="text-5xl font-black text-yellow-500 mb-2">$5K</p>
              <p className="font-black text-lg mb-1">Launch Price</p>
              <p className="text-sm font-bold text-gray-600">Day 1 start</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-4 border-orange-300 text-center hover-lift transition-all animate-fade-in-up stagger-item-2">
              <p className="text-5xl font-black text-orange-500 mb-2">$1M</p>
              <p className="font-black text-lg mb-1">Peak Achieved</p>
              <p className="text-sm font-bold text-gray-600">5 min to bond, 10 min to $200K</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-4 border-red-300 text-center hover-lift transition-all animate-fade-in-up stagger-item-3">
              <p className="text-5xl font-black text-red-500 mb-2">$200K+</p>
              <p className="font-black text-lg mb-1">Strong Floor</p>
              <p className="text-sm font-bold text-gray-600">Community holding strong</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10 border-4 border-yellow-400 hover-lift animate-fade-in-up stagger-item-4 rounded-2xl">
          <h3 className="text-3xl font-black mb-6 text-yellow-400">THE RELAUNCH</h3>
          <p className="text-sm font-black text-yellow-300 mb-6">STRONGER. SMARTER. BETTER.</p>
          <div className="space-y-5 font-bold text-lg leading-relaxed">
            <p className="text-gray-100">
              The last launch proved $UNT has real potential. We hit <span className="text-yellow-300 font-black">$1M in market cap</span>. We built momentum. We built community.
            </p>
            <p className="text-gray-100">
              Then the system tried to stop us. X banned us 7 times. Charts got nuked. Our runs got halted. But the community? <span className="text-yellow-300">Still here. Still strong. Still believing.</span>
            </p>
            <div className="bg-yellow-400 text-black p-8 border-4 border-yellow-300 my-6 rounded-xl">
              <p className="font-black text-2xl mb-3">WE DID IT ONCE.</p>
              <p className="font-black text-2xl mb-4">WE&apos;LL DO IT AGAIN.</p>
              <p className="text-base">
                This relaunch is smarter. We&apos;ve learned. We&apos;ve built stronger infrastructure. The cult is organized. The movement is real.
              </p>
            </div>
            <p className="text-gray-100">
              We sent this to a million before. The infrastructure was new, the coordination was rough. Now? We know what works. We know who&apos;s here. We know what we&apos;re building.
            </p>
            <p className="text-yellow-300 text-xl font-black">
              Same vision. Same energy. Better execution. Welcome back to $UNT.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
