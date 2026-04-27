'use client'

export default function About() {
  return (
    <section id="about" className="bg-black border-b border-white/10 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <p className="text-white/40 text-xs font-bold tracking-widest mb-3">✦ THE VISION</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none">ABOUT $UNT</h2>
            <p className="text-white/50 text-lg font-bold md:max-w-xs md:text-right">A free idol built from the trenches.</p>
          </div>
        </div>

        {/* Vision & Culture */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10 mb-px">
          <div className="bg-white p-10 group hover:bg-white/95 transition">
            <p className="text-black/40 text-xs font-bold tracking-widest mb-4">THE VISION</p>
            <h3 className="text-3xl font-black text-black mb-6">Independence.<br/>Love. Chaos.</h3>
            <p className="text-black/70 leading-relaxed mb-4">$UNT is a free idol representing independence, love, care, craziness, wealth, and fun.</p>
            <p className="text-black/50 leading-relaxed">Not just a token — a movement evolving into merch, NFTs, and global culture.</p>
          </div>
          <div className="bg-black p-10 border border-white/10 group hover:bg-white/5 transition">
            <p className="text-white/40 text-xs font-bold tracking-widest mb-4">THE CULTURE</p>
            <h3 className="text-3xl font-black text-white mb-6">New content.<br/>New energy.</h3>
            <p className="text-white/70 leading-relaxed mb-4">We show up every day with new content, new energy, new moves.</p>
            <p className="text-white/50 leading-relaxed">This is more than a token — this is the $UNT movement. Together, we reshape culture.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-white/10 mb-16">
          <div className="bg-black p-8 hover:bg-white/5 transition">
            <div className="text-4xl font-black text-white mb-2">$5K</div>
            <div className="text-white/40 text-xs font-bold tracking-widest">LAUNCH</div>
          </div>
          <div className="bg-white p-8">
            <div className="text-4xl font-black text-black mb-2">$1M+</div>
            <div className="text-black/40 text-xs font-bold tracking-widest">PEAK</div>
          </div>
          <div className="bg-black p-8 hover:bg-white/5 transition">
            <div className="text-4xl font-black text-white mb-2">$200K+</div>
            <div className="text-white/40 text-xs font-bold tracking-widest">FLOOR</div>
          </div>
        </div>

        {/* Relaunch */}
        <div className="border border-white/10 p-10 md:p-16">
          <p className="text-white/40 text-xs font-bold tracking-widest mb-8">THE RELAUNCH</p>
          <p className="text-2xl md:text-3xl font-bold text-white/70 leading-relaxed mb-6">
            The last launch proved $UNT has real potential. We hit <span className="text-white font-black">$1M</span> in market cap.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white/70 leading-relaxed mb-10">
            Banned 7 times. Charts nuked. Community? <span className="text-white font-black">Still here.</span>
          </p>
          <div className="text-4xl md:text-6xl font-black text-white leading-tight">
            WE DID IT ONCE.<br/>
            <span className="text-white/30">WE'LL DO IT AGAIN.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
