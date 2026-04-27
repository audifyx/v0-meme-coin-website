'use client'

export default function About() {
  return (
    <section id="about" className="bg-black text-white border-b-8 border-black relative overflow-hidden">
      {/* Diagonal white sections */}
      <div className="absolute top-0 left-0 w-full h-40 bg-white skew-y-2 z-0 -mt-12"></div>
      <div className="absolute bottom-0 right-0 w-full h-48 bg-white -skew-y-3 z-0 -mb-12"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-40 relative z-10">
        {/* Section header - dramatic overlapping */}
        <div className="mb-32 relative">
          <div className="absolute -top-20 left-0 text-9xl font-black text-white opacity-[0.15] leading-none whitespace-nowrap -ml-4">
            BELIEVE BELIEVE<br/>BELIEVE
          </div>
          <h2 className="text-10xl md:text-11xl font-black mb-0 text-white relative z-20 leading-none">
            ABOUT<br/>$UNT
          </h2>
        </div>

        {/* Two column vision/culture with overlapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-20 relative -mx-8 md:-mx-12">
          {/* Vision Card */}
          <div className="bg-white text-black p-12 md:p-16 border-8 border-white relative z-20 animate-fade-in-up">
            <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-black bg-black z-0"></div>
            <h3 className="text-5xl md:text-6xl font-black mb-6 relative z-10">THE<br/>VISION</h3>
            <div className="h-2 w-16 bg-black mb-8"></div>
            <p className="font-black leading-relaxed text-lg mb-6">
              $UNT is a free idol representing <span className="text-2xl">INDEPENDENCE</span>, <span className="text-2xl">LOVE</span>, <span className="text-2xl">CRAZINESS</span>, <span className="text-2xl">WEALTH</span>, <span className="text-2xl">FUN</span>.
            </p>
            <p className="font-black text-gray-700 text-xl">
              It&apos;s not just a token. It&apos;s a MOVEMENT born from the trenches.
            </p>
          </div>

          {/* Culture Card - overlapping */}
          <div className="bg-white text-black p-12 md:p-16 border-8 border-white relative z-10 -ml-0 md:-ml-12 mt-8 md:mt-0 animate-fade-in-up stagger-item-2">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-black bg-black z-0"></div>
            <h3 className="text-5xl md:text-6xl font-black mb-6 relative z-10">THE<br/>CULTURE</h3>
            <div className="h-2 w-16 bg-black mb-8"></div>
            <p className="font-black leading-relaxed text-lg mb-6">
              We STAY. We SHOW UP every day with new content, new energy, new moves.
            </p>
            <p className="font-black text-gray-700 text-xl">
              This is the <span className="text-3xl">$UNT CULT</span>. Together, we will flip the tables.
            </p>
          </div>
        </div>

        {/* Launch History - Dramatic timeline */}
        <div className="mb-20 relative animate-fade-in-up stagger-item-3">
          <h3 className="text-8xl md:text-9xl font-black mb-12 text-white">LAUNCH<br/>HISTORY</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Timeline connectors */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-2 bg-white z-0"></div>
            
            {/* Stat 1 */}
            <div className="relative z-10 bg-black border-8 border-white p-12 animate-fade-in-up">
              <div className="absolute -top-6 left-6 w-16 h-16 bg-white border-4 border-black z-20"></div>
              <p className="text-7xl md:text-8xl font-black text-white mb-3">$5K</p>
              <p className="font-black text-2xl text-white mb-2">LAUNCH PRICE</p>
              <p className="font-bold text-gray-300 text-lg">Day 1 start</p>
            </div>
            
            {/* Stat 2 */}
            <div className="relative z-10 bg-white border-8 border-black p-12 mt-8 md:mt-0 animate-fade-in-up stagger-item-2">
              <div className="absolute -top-6 left-6 w-16 h-16 bg-black border-4 border-white z-20"></div>
              <p className="text-7xl md:text-8xl font-black text-black mb-3">$1M</p>
              <p className="font-black text-2xl text-black mb-2">PEAK ACHIEVED</p>
              <p className="font-bold text-gray-700 text-lg">5 min to bond, 10 min to $200K</p>
            </div>
            
            {/* Stat 3 */}
            <div className="relative z-10 bg-black border-8 border-white p-12 animate-fade-in-up stagger-item-3">
              <div className="absolute -top-6 left-6 w-16 h-16 bg-white border-4 border-black z-20"></div>
              <p className="text-7xl md:text-8xl font-black text-white mb-3">$200K+</p>
              <p className="font-black text-2xl text-white mb-2">STRONG FLOOR</p>
              <p className="font-bold text-gray-300 text-lg">Community holding strong</p>
            </div>
          </div>
        </div>

        {/* The Relaunch - Full width dramatic section */}
        <div className="relative z-10 -mx-8 md:-mx-12 px-8 md:px-12 py-20 bg-white text-black border-8 border-white animate-fade-in-up stagger-item-4">
          <div className="absolute top-0 right-0 text-9xl font-black text-black opacity-[0.12] leading-none whitespace-nowrap -mt-12">
            COMEBACK<br/>STRONGER
          </div>
          
          <h3 className="text-8xl md:text-9xl font-black mb-6 relative z-20">THE<br/>RELAUNCH</h3>
          <p className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-widest mb-16 relative z-20">Stronger × Smarter × Better</p>
          
          <div className="space-y-8 font-black text-xl md:text-2xl leading-relaxed relative z-20">
            <div className="border-l-8 border-black pl-8">
              <p>
                We hit <span className="text-4xl">$1M</span> in market cap. We built momentum. We built community.
              </p>
            </div>
            
            <div className="border-l-8 border-black pl-8">
              <p>
                Then the system tried to stop us. X banned us <span className="text-3xl">7 TIMES</span>. Charts got nuked. But the community?
              </p>
              <p className="text-3xl text-black mt-4">STILL HERE. STILL STRONG. STILL BELIEVING.</p>
            </div>

            <div className="bg-black text-white p-12 border-8 border-black my-8 relative overflow-hidden">
              <p className="text-5xl md:text-6xl font-black mb-6 leading-tight">WE DID IT ONCE.</p>
              <p className="text-5xl md:text-6xl font-black">WE&apos;LL DO IT AGAIN.</p>
              <p className="mt-8 text-xl font-bold text-gray-300">
                This relaunch is smarter. The cult is organized. The movement is real.
              </p>
            </div>

            <div className="border-l-8 border-black pl-8">
              <p>
                We sent this to a million before. Now? We know what works. We know who&apos;s here. We know what we&apos;re building.
              </p>
            </div>

            <div className="border-t-8 border-black pt-8 mt-12">
              <p className="text-4xl md:text-5xl font-black text-black">
                Same vision. Same energy.<br/><span className="text-gray-700">Better execution.</span>
              </p>
              <p className="text-3xl font-black mt-6 text-gray-800">Welcome back to $UNT.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
