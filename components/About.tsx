'use client'

import { Twitter, ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="bg-black text-white border-b-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.05] bg-white blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.05] bg-white blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-7xl md:text-8xl font-black mb-6 animate-fade-in-down leading-tight">
                ABOUT $UNT
              </h2>
              <div className="h-2 w-32 rounded-full bg-white animate-fade-in-up stagger-item-2"></div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-item-3">
              <a
                href="https://x.com/UNTuniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-black rounded-2xl border-4 border-white hover:bg-gray-100 smooth-transition hover-lift-subtle shadow-heavy relative overflow-hidden"
              >
                <Twitter size={24} />
                <span>X COMMUNITY</span>
              </a>
              <a
                href="https://raydium.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-black border-4 border-white rounded-2xl hover:bg-gray-900 smooth-transition hover-lift-subtle shadow-heavy relative overflow-hidden"
              >
                <ExternalLink size={24} />
                <span>TRADE NOW</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group relative animate-fade-in-up">
            {/* Background glow effect */}
            <div className="absolute -inset-1 bg-white rounded-3xl opacity-0 group-hover:opacity-10 blur-lg smooth-transition"></div>
            
            <div className="relative bg-gradient-to-br from-white to-gray-100 text-black p-10 rounded-3xl border-4 border-white hover-lift-subtle shadow-heavy smooth-transition overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-black opacity-0 group-hover:opacity-5 rounded-full blur-3xl smooth-transition"></div>
              <h3 className="text-4xl font-black mb-6 group-hover:text-gray-800 smooth-transition">THE VISION</h3>
              <div className="h-1 w-16 rounded-full bg-black mb-8 group-hover:w-20 smooth-transition origin-left"></div>
              <p className="font-bold leading-relaxed mb-5 text-lg">
                $UNT is a free idol representing independence, love, care, craziness, wealth, and fun. It&apos;s not just a token—it&apos;s a movement born from the trenches.
              </p>
              <p className="font-bold text-gray-700 text-base">
                The potential to become a global icon evolving into merch, NFTs, and cultural movements.
              </p>
            </div>
          </div>

          <div className="group relative animate-fade-in-up stagger-item-2">
            {/* Background glow effect */}
            <div className="absolute -inset-1 bg-white rounded-3xl opacity-0 group-hover:opacity-10 blur-lg smooth-transition"></div>
            
            <div className="relative bg-gradient-to-br from-white to-gray-100 text-black p-10 rounded-3xl border-4 border-white hover-lift-subtle shadow-heavy smooth-transition overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-black opacity-0 group-hover:opacity-5 rounded-full blur-3xl smooth-transition"></div>
              <h3 className="text-4xl font-black mb-6 group-hover:text-gray-800 smooth-transition">THE CULTURE</h3>
              <div className="h-1 w-16 rounded-full bg-black mb-8 group-hover:w-20 smooth-transition origin-left"></div>
              <p className="font-bold leading-relaxed mb-5 text-lg">
                We stay. We show up every day with new content, new energy, and new moves.
              </p>
              <p className="font-bold text-gray-700 text-base">
                This is more than a token—this is the $UNT cult. All we need is support, because together, we will flip the tables.
              </p>
            </div>
          </div>
        </div>

        <div className="group relative mb-16 animate-fade-in-up stagger-item-3">
          {/* Background glow effect */}
          <div className="absolute -inset-1 bg-white rounded-3xl opacity-0 group-hover:opacity-10 blur-lg smooth-transition"></div>
          
          <div className="relative bg-gradient-to-br from-white to-gray-100 text-black p-12 rounded-3xl border-4 border-white hover-lift-subtle shadow-heavy smooth-transition overflow-hidden">
            <div className="absolute top-0 left-1/2 w-40 h-40 bg-black opacity-0 group-hover:opacity-10 rounded-full blur-3xl smooth-transition -translate-x-1/2"></div>
            <h3 className="text-4xl font-black mb-12 group-hover:text-gray-800 smooth-transition">LAUNCH HISTORY</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group/item bg-black text-white rounded-2xl p-10 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up border-4 border-black">
                <div className="absolute top-0 left-0 w-full h-2 bg-white scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
                <p className="text-6xl font-black mb-3">$5K</p>
                <p className="font-black text-lg mb-2 text-gray-300">Launch Price</p>
                <p className="text-sm font-bold text-gray-400">Day 1 start</p>
              </div>
              <div className="group/item bg-black text-white rounded-2xl p-10 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up stagger-item-2 border-4 border-black">
                <div className="absolute top-0 left-0 w-full h-2 bg-white scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
                <p className="text-6xl font-black mb-3">$1M</p>
                <p className="font-black text-lg mb-2 text-gray-300">Peak Achieved</p>
                <p className="text-sm font-bold text-gray-400">5 min to bond, 10 min to $200K</p>
              </div>
              <div className="group/item bg-black text-white rounded-2xl p-10 hover-lift smooth-transition relative overflow-hidden animate-fade-in-up stagger-item-3 border-4 border-black">
                <div className="absolute top-0 left-0 w-full h-2 bg-white scale-x-0 group-hover/item:scale-x-100 smooth-transition origin-left"></div>
                <p className="text-6xl font-black mb-3">$200K+</p>
                <p className="font-black text-lg mb-2 text-gray-300">Strong Floor</p>
                <p className="text-sm font-bold text-gray-400">Community holding strong</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative animate-fade-in-up stagger-item-4">
          {/* Background glow effect */}
          <div className="absolute -inset-1 bg-white rounded-3xl opacity-0 group-hover:opacity-10 blur-lg smooth-transition"></div>
          
          <div className="relative bg-gradient-to-br from-white to-gray-100 text-black p-12 rounded-3xl border-4 border-white hover-lift-subtle shadow-heavy smooth-transition overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-black opacity-0 group-hover:opacity-20 rounded-full blur-3xl smooth-transition"></div>
            <h3 className="text-4xl font-black mb-3 group-hover:text-gray-800 smooth-transition">THE RELAUNCH</h3>
            <p className="text-sm font-black text-gray-600 uppercase tracking-widest mb-10">Stronger. Smarter. Better.</p>
            
            <div className="space-y-8 font-bold text-lg leading-relaxed relative z-10">
              <p className="group-hover:text-gray-800 smooth-transition">
                The last launch proved $UNT has real potential. We hit <span className="font-black text-xl">$1M in market cap</span>. We built momentum. We built community.
              </p>
              <p className="group-hover:text-gray-800 smooth-transition">
                Then the system tried to stop us. X banned us 7 times. Charts got nuked. Our runs got halted. But the community? <span className="font-black text-xl">Still here. Still strong. Still believing.</span>
              </p>
              
              <div className="bg-black text-white p-10 rounded-2xl border-4 border-black my-8 relative overflow-hidden group/inner">
                <div className="absolute inset-0 bg-white opacity-0 group-hover/inner:opacity-5 smooth-transition"></div>
                <p className="font-black text-3xl mb-4 relative z-10 leading-tight">WE DID IT ONCE.</p>
                <p className="font-black text-3xl mb-6 relative z-10 leading-tight">WE&apos;LL DO IT AGAIN.</p>
                <p className="relative z-10 font-bold text-base">
                  This relaunch is smarter. We&apos;ve learned from the pressure. We&apos;ve built stronger infrastructure. The cult is organized. The movement is real.
                </p>
              </div>
              
              <p className="group-hover:text-gray-800 smooth-transition">
                We sent this to a million before. The infrastructure was new, the coordination was rough. Now? We know what works. We know who&apos;s here. We know what we&apos;re building.
              </p>
              <p className="text-2xl font-black group-hover:text-gray-800 smooth-transition border-t-4 border-black pt-8">
                Same vision. Same energy. Better execution. Welcome back to $UNT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
