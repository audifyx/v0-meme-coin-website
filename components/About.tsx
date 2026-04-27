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
        {/* Header with playful skew */}
        <div className="mb-24 relative">
          <h2 className="text-7xl md:text-9xl font-black mb-8 animate-fade-in-down leading-tight transform -skew-y-2">
            ABOUT
          </h2>
          <h2 className="text-5xl md:text-7xl font-black mb-12 animate-fade-in-down text-white/60 transform skew-y-3">
            $UNT
          </h2>
          
          {/* Action Buttons - positioned playfully */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-item-3 md:absolute md:-right-4 md:top-0 md:flex-col">
            <a
              href="https://x.com/UNTuniverse"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-black text-sm rounded-full border-3 border-white hover:rotate-3 smooth-transition hover-lift shadow-heavy relative overflow-hidden"
            >
              <Twitter size={20} />
              <span>FOLLOW</span>
            </a>
            <a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-black text-white px-6 py-3 font-black text-sm border-3 border-white rounded-full hover:-rotate-3 smooth-transition hover-lift shadow-heavy relative overflow-hidden"
            >
              <ExternalLink size={20} />
              <span>TRADE</span>
            </a>
          </div>
        </div>

        {/* Playful asymmetric card layout */}
        <div className="space-y-10 mb-20">
          {/* Vision Card - rotated left */}
          <div className="group relative animate-fade-in-up transform md:-rotate-2 md:ml-0">
            <div className="absolute -inset-2 bg-white rounded-3xl opacity-0 group-hover:opacity-20 blur-xl smooth-transition"></div>
            <div className="relative bg-white text-black p-10 rounded-3xl border-4 border-white shadow-heavy smooth-transition overflow-hidden group-hover:shadow-2xl group-hover:scale-102">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-black opacity-10 rounded-full blur-2xl group-hover:opacity-20 smooth-transition"></div>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-5xl font-black mb-4 group-hover:translate-x-2 smooth-transition">THE VISION</h3>
                  <div className="h-2 w-24 rounded-full bg-black mb-6 group-hover:w-32 smooth-transition"></div>
                  <p className="font-bold text-lg leading-relaxed mb-4">
                    $UNT is a free idol representing independence, love, care, craziness, wealth, and fun.
                  </p>
                  <p className="font-bold text-gray-700">
                    It&apos;s not just a token—it&apos;s a movement born from the trenches, ready to evolve into merch, NFTs, and global culture.
                  </p>
                </div>
                <div className="text-8xl font-black text-black/5 group-hover:text-black/10 smooth-transition">
                  💭
                </div>
              </div>
            </div>
          </div>

          {/* Culture Card - rotated right, offset */}
          <div className="group relative animate-fade-in-up transform md:rotate-2 md:ml-12 mt-8">
            <div className="absolute -inset-2 bg-white rounded-3xl opacity-0 group-hover:opacity-20 blur-xl smooth-transition"></div>
            <div className="relative bg-white text-black p-10 rounded-3xl border-4 border-white shadow-heavy smooth-transition overflow-hidden group-hover:shadow-2xl group-hover:scale-102">
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-black opacity-10 rounded-full blur-2xl group-hover:opacity-20 smooth-transition"></div>
              <div className="flex items-start justify-between gap-6">
                <div className="text-8xl font-black text-black/5 group-hover:text-black/10 smooth-transition">
                  🔥
                </div>
                <div className="flex-1">
                  <h3 className="text-5xl font-black mb-4 group-hover:-translate-x-2 smooth-transition text-right">THE CULTURE</h3>
                  <div className="h-2 w-24 rounded-full bg-black mb-6 ml-auto group-hover:w-32 smooth-transition"></div>
                  <p className="font-bold text-lg leading-relaxed mb-4 text-right">
                    We show up every day with new content, new energy, new moves.
                  </p>
                  <p className="font-bold text-gray-700 text-right">
                    This is more than a token—this is the $UNT cult. Together, we&apos;ll flip the tables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Launch History - Playful grid layout */}
        <div className="mb-20">
          <h3 className="text-6xl md:text-7xl font-black mb-12 animate-fade-in-down transform -skew-x-2">
            LAUNCH HISTORY
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* $5K Card - top left, rotated */}
            <div className="animate-fade-in-up transform md:-rotate-3 hover:rotate-0 smooth-transition">
              <div className="group bg-black text-white rounded-3xl p-8 border-4 border-black shadow-heavy hover:shadow-2xl smooth-transition relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 smooth-transition"></div>
                <p className="text-6xl font-black mb-2 relative z-10">$5K</p>
                <p className="font-black text-lg text-gray-300 relative z-10">Launch</p>
                <p className="text-xs font-bold text-gray-400 relative z-10">Day 1</p>
              </div>
            </div>

            {/* $1M Card - center, larger and raised */}
            <div className="animate-fade-in-up stagger-item-2 transform md:-translate-y-8 hover:translate-y-0 smooth-transition">
              <div className="group bg-white text-black rounded-3xl p-10 border-4 border-white shadow-heavy hover:shadow-2xl smooth-transition relative overflow-hidden h-full">
                <div className="absolute -inset-2 bg-black opacity-0 group-hover:opacity-10 blur-lg smooth-transition"></div>
                <p className="text-7xl font-black mb-2 relative z-10">$1M</p>
                <p className="font-black text-xl text-black relative z-10">PEAK</p>
                <p className="text-sm font-bold text-gray-700 relative z-10">Lightning fast 🔥</p>
              </div>
            </div>

            {/* $200K+ Card - bottom right, rotated */}
            <div className="animate-fade-in-up stagger-item-3 transform md:rotate-3 hover:rotate-0 smooth-transition">
              <div className="group bg-black text-white rounded-3xl p-8 border-4 border-black shadow-heavy hover:shadow-2xl smooth-transition relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 smooth-transition"></div>
                <p className="text-6xl font-black mb-2 relative z-10">$200K+</p>
                <p className="font-black text-lg text-gray-300 relative z-10">Floor</p>
                <p className="text-xs font-bold text-gray-400 relative z-10">Community Holding</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Relaunch - Bold & Playful */}
        <div className="relative animate-fade-in-up stagger-item-4">
          <div className="space-y-6 relative z-10">
            {/* Playful header */}
            <div className="space-y-4">
              <h3 className="text-7xl md:text-8xl font-black leading-tight transform skew-y-2">
                THE
              </h3>
              <h3 className="text-8xl md:text-9xl font-black leading-tight transform -skew-y-3 text-white/70">
                RELAUNCH
              </h3>
            </div>

            {/* Narrative with playful highlights */}
            <div className="space-y-8 pt-8">
              <div className="group relative">
                <div className="absolute -inset-4 bg-white rounded-2xl opacity-0 group-hover:opacity-5 smooth-transition"></div>
                <p className="text-xl md:text-2xl font-black leading-relaxed relative z-10 text-white/90">
                  The last launch proved $UNT has real potential. We hit 
                  <span className="inline-block bg-white text-black px-4 py-2 mx-2 rounded-full font-black text-2xl transform hover:rotate-3 smooth-transition">
                    $1M
                  </span>
                  in market cap.
                </p>
              </div>

              <div className="group relative">
                <div className="absolute -inset-4 bg-white rounded-2xl opacity-0 group-hover:opacity-5 smooth-transition"></div>
                <p className="text-xl md:text-2xl font-black leading-relaxed relative z-10 text-white/90">
                  Then the system tried to stop us. X banned us 7 times. Charts got nuked. But the community?
                  <span className="block text-3xl md:text-4xl font-black text-white mt-2">
                    STILL. HERE. STILL. STRONG.
                  </span>
                </p>
              </div>

              {/* Big callout box - rotated */}
              <div className="my-10 transform md:-rotate-2 group hover:rotate-0 smooth-transition">
                <div className="bg-white text-black p-10 md:p-14 rounded-3xl border-4 border-white shadow-heavy relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-black opacity-5 rounded-full blur-2xl group-hover:opacity-10 smooth-transition"></div>
                  <p className="text-5xl md:text-7xl font-black leading-tight relative z-10">
                    WE DID IT<br/>ONCE.<br/>
                    <span className="text-white/70">WE&apos;LL DO IT AGAIN.</span>
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-4 bg-white rounded-2xl opacity-0 group-hover:opacity-5 smooth-transition"></div>
                <p className="text-xl md:text-2xl font-black leading-relaxed relative z-10 text-white/90">
                  Same vision. Same energy. 
                  <span className="text-3xl block mt-2 text-white">
                    BETTER EXECUTION.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
