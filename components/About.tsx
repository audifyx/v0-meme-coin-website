'use client'

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white border-b-4 border-black relative overflow-hidden">
      {/* Floating playful elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-purple-400 opacity-20 animate-float-bob"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 rounded-3xl bg-blue-400 opacity-15 animate-float-bob" style={{ animationDelay: '0.7s' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-4 animate-fade-in-down text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
            ABOUT $UNT
          </h2>
          <div className="h-3 w-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-fade-in-up stagger-item-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="group bg-white/10 backdrop-blur-sm text-white p-8 rounded-3xl border-4 border-purple-300/50 hover:border-purple-300 hover-lift-subtle animate-fade-in-up shadow-heavy smooth-transition overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400 opacity-0 group-hover:opacity-10 rounded-full blur-3xl smooth-transition"></div>
            <h3 className="text-3xl font-black mb-5 group-hover:text-purple-200 smooth-transition">🎯 THE VISION</h3>
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-6 group-hover:w-16 smooth-transition origin-left"></div>
            <p className="font-bold leading-relaxed mb-4 text-lg">
              $UNT is a free idol representing independence, love, care, craziness, wealth, and fun. It&apos;s not just a token—it&apos;s a movement born from the trenches.
            </p>
            <p className="font-bold text-purple-100">
              The potential to become a global icon evolving into merch, NFTs, and cultural movements.
            </p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm text-white p-8 rounded-3xl border-4 border-blue-300/50 hover:border-blue-300 hover-lift-subtle animate-fade-in-up stagger-item-2 shadow-heavy smooth-transition overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-0 group-hover:opacity-10 rounded-full blur-3xl smooth-transition"></div>
            <h3 className="text-3xl font-black mb-5 group-hover:text-blue-200 smooth-transition">🔥 THE CULTURE</h3>
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mb-6 group-hover:w-16 smooth-transition origin-left"></div>
            <p className="font-bold leading-relaxed mb-4 text-lg">
              We stay. We show up every day with new content, new energy, and new moves.
            </p>
            <p className="font-bold text-blue-100">
              This is more than a token—this is the $UNT cult. All we need is support, because together, we will flip the tables.
            </p>
          </div>
        </div>

        <div className="group bg-white/10 backdrop-blur-sm text-white p-8 rounded-3xl border-4 border-pink-300/50 hover:border-pink-300 mb-8 hover-lift-subtle animate-fade-in-up stagger-item-3 shadow-heavy smooth-transition overflow-hidden relative">
          <div className="absolute top-0 left-1/2 w-32 h-32 bg-pink-400 opacity-0 group-hover:opacity-10 rounded-full blur-3xl smooth-transition -translate-x-1/2"></div>
          <h3 className="text-3xl font-black mb-8 group-hover:text-pink-200 smooth-transition">📈 LAUNCH HISTORY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group/item bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up border-4 border-pink-300/30">
              <div className="absolute top-0 left-0 w-full h-1 bg-pink-300 scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
              <p className="text-5xl font-black text-white mb-2">$5K</p>
              <p className="font-black text-lg mb-1 text-pink-100">Launch Price</p>
              <p className="text-sm font-bold text-pink-200">Day 1 start</p>
            </div>
            <div className="group/item bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up stagger-item-2 border-4 border-blue-300/30">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-300 scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
              <p className="text-5xl font-black text-white mb-2">$1M</p>
              <p className="font-black text-lg mb-1 text-blue-100">Peak Achieved</p>
              <p className="text-sm font-bold text-blue-200">5 min to bond, 10 min to $200K</p>
            </div>
            <div className="group/item bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up stagger-item-3 border-4 border-purple-300/30">
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-300 scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
              <p className="text-5xl font-black text-white mb-2">$200K+</p>
              <p className="font-black text-lg mb-1 text-purple-100">Strong Floor</p>
              <p className="text-sm font-bold text-purple-200">Community holding strong</p>
            </div>
          </div>
        </div>

        <div className="group bg-white/10 backdrop-blur-sm text-white p-8 rounded-3xl border-4 border-yellow-300/50 hover:border-yellow-300 hover-lift-subtle animate-fade-in-up stagger-item-4 shadow-heavy smooth-transition overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400 opacity-0 group-hover:opacity-10 rounded-full blur-3xl smooth-transition"></div>
          <h3 className="text-3xl font-black mb-8 group-hover:text-yellow-200 smooth-transition">🚀 THE RELAUNCH</h3>
          <p className="text-sm font-black text-yellow-300 uppercase tracking-widest mb-8">STRONGER. SMARTER. BETTER.</p>
          <div className="space-y-6 font-bold text-lg leading-relaxed">
            <p className="group-hover:text-yellow-100 smooth-transition">
              The last launch proved $UNT has real potential. We hit <span className="font-black text-yellow-200">$1M in market cap</span>. We built momentum. We built community.
            </p>
            <p className="group-hover:text-yellow-100 smooth-transition">
              Then the system tried to stop us. X banned us 7 times. Charts got nuked. Our runs got halted. But the community? <span className="font-black text-yellow-200">Still here. Still strong. Still believing.</span>
            </p>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-black p-8 rounded-2xl border-4 border-yellow-300/50 my-6 relative overflow-hidden group/inner">
              <div className="absolute inset-0 bg-black opacity-0 group-hover/inner:opacity-10 smooth-transition"></div>
              <p className="font-black text-2xl mb-4 relative z-10">🔥 WE DID IT ONCE. WE&apos;LL DO IT AGAIN.</p>
              <p className="relative z-10 font-bold">
                This relaunch is smarter. We&apos;ve learned from the pressure. We&apos;ve built stronger infrastructure. The cult is organized. The movement is real.
              </p>
            </div>
            <p className="group-hover:text-yellow-100 smooth-transition">
              We sent this to a million before. The infrastructure was new, the coordination was rough. Now? We know what works. We know who&apos;s here. We know what we&apos;re building.
            </p>
            <p className="text-2xl font-black group-hover:text-yellow-100 smooth-transition border-t-4 border-yellow-300/50 pt-6">
              Same vision. Same energy. Better execution. Welcome back to $UNT. 💪
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
