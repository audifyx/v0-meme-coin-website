'use client'

export default function About() {
  return (
    <section id="about" className="bg-black text-white border-b-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.05] bg-white blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.05] bg-white blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black mb-4 animate-fade-in-down">
            ABOUT $UNT
          </h2>
          <div className="h-2 w-24 bg-white animate-fade-in-up stagger-item-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="group bg-gradient-to-br from-white to-gray-100 text-black p-12 border-4 border-white hover-lift-subtle animate-fade-in-up shadow-heavy smooth-transition overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-0 group-hover:opacity-5 rounded-full blur-2xl smooth-transition"></div>
            <h3 className="text-3xl font-black mb-5 group-hover:text-gray-800 smooth-transition">THE VISION</h3>
            <div className="h-1 w-12 bg-black mb-6 group-hover:w-16 smooth-transition origin-left"></div>
            <p className="font-bold leading-relaxed mb-4 text-lg">
              $UNT is a free idol representing independence, love, care, craziness, wealth, and fun. It&apos;s not just a token—it&apos;s a movement born from the trenches.
            </p>
            <p className="font-bold text-gray-700">
              The potential to become a global icon evolving into merch, NFTs, and cultural movements.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white to-gray-100 text-black p-12 border-4 border-white hover-lift-subtle animate-fade-in-up stagger-item-2 shadow-heavy smooth-transition overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-0 group-hover:opacity-5 rounded-full blur-2xl smooth-transition"></div>
            <h3 className="text-3xl font-black mb-5 group-hover:text-gray-800 smooth-transition">THE CULTURE</h3>
            <div className="h-1 w-12 bg-black mb-6 group-hover:w-16 smooth-transition origin-left"></div>
            <p className="font-bold leading-relaxed mb-4 text-lg">
              We stay. We show up every day with new content, new energy, and new moves.
            </p>
            <p className="font-bold text-gray-700">
              This is more than a token—this is the $UNT cult. All we need is support, because together, we will flip the tables.
            </p>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white to-gray-100 text-black p-12 border-4 border-white mb-8 hover-lift-subtle animate-fade-in-up stagger-item-3 shadow-heavy smooth-transition overflow-hidden relative">
          <div className="absolute top-0 left-1/2 w-32 h-32 bg-black opacity-0 group-hover:opacity-5 rounded-full blur-2xl smooth-transition -translate-x-1/2"></div>
          <h3 className="text-3xl font-black mb-8 group-hover:text-gray-800 smooth-transition">LAUNCH HISTORY</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group/item bg-white border-4 border-black p-8 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up">
              <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
              <p className="text-5xl font-black text-gray-800 mb-2">$5K</p>
              <p className="font-black text-lg mb-1">Launch Price</p>
              <p className="text-sm font-bold text-gray-600">Day 1 start</p>
            </div>
            <div className="group/item bg-white border-4 border-black p-8 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up stagger-item-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
              <p className="text-5xl font-black text-gray-800 mb-2">$1M</p>
              <p className="font-black text-lg mb-1">Peak Achieved</p>
              <p className="text-sm font-bold text-gray-600">5 min to bond, 10 min to $200K</p>
            </div>
            <div className="group/item bg-white border-4 border-black p-8 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up stagger-item-3">
              <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
              <p className="text-5xl font-black text-gray-800 mb-2">$200K+</p>
              <p className="font-black text-lg mb-1">Strong Floor</p>
              <p className="text-sm font-bold text-gray-600">Community holding strong</p>
            </div>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-white to-gray-100 text-black p-12 border-4 border-white hover-lift-subtle animate-fade-in-up stagger-item-4 shadow-heavy smooth-transition overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-black opacity-0 group-hover:opacity-20 rounded-full blur-3xl smooth-transition"></div>
          <h3 className="text-3xl font-black mb-8 group-hover:text-gray-800 smooth-transition">THE RELAUNCH</h3>
          <p className="text-sm font-black text-gray-600 uppercase tracking-widest mb-8">STRONGER. SMARTER. BETTER.</p>
          <div className="space-y-6 font-bold text-lg leading-relaxed">
            <p className="group-hover:text-gray-800 smooth-transition">
              The last launch proved $UNT has real potential. We hit <span className="font-black">$1M in market cap</span>. We built momentum. We built community.
            </p>
            <p className="group-hover:text-gray-800 smooth-transition">
              Then the system tried to stop us. X banned us 7 times. Charts got nuked. Our runs got halted. But the community? <span className="font-black">Still here. Still strong. Still believing.</span>
            </p>
            <div className="bg-black text-white p-8 border-4 border-black my-6 relative overflow-hidden group/inner">
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover/inner:opacity-20 smooth-transition"></div>
              <p className="font-black text-2xl mb-4 relative z-10">WE DID IT ONCE. WE&apos;LL DO IT AGAIN.</p>
              <p className="relative z-10">
                This relaunch is smarter. We&apos;ve learned from the pressure. We&apos;ve built stronger infrastructure. The cult is organized. The movement is real.
              </p>
            </div>
            <p className="group-hover:text-gray-800 smooth-transition">
              We sent this to a million before. The infrastructure was new, the coordination was rough. Now? We know what works. We know who&apos;s here. We know what we&apos;re building.
            </p>
            <p className="text-2xl font-black group-hover:text-gray-800 smooth-transition border-t-4 border-black pt-6">
              Same vision. Same energy. Better execution. Welcome back to $UNT.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
