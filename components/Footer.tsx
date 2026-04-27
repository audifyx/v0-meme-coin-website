'use client'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-black text-white mb-4">$UNT</h3>
            <p className="text-white/40 text-sm leading-relaxed">A free idol representing independence, love, care, craziness, wealth, and fun.</p>
          </div>
          <div>
            <p className="text-white/40 text-xs font-bold tracking-widest mb-6">LINKS</p>
            <div className="space-y-3">
              {[
                { label: 'How to Buy', href: '#buy' },
                { label: 'About', href: '#about' },
                { label: 'Chart', href: '#chart' },
                { label: 'Gallery', href: '#memes' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="block text-white/50 hover:text-white text-sm font-bold tracking-wide transition">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/40 text-xs font-bold tracking-widest mb-6">COMMUNITY</p>
            <div className="space-y-3">
              <a href="https://x.com/UNTuniverse" target="_blank" className="block text-white/50 hover:text-white text-sm font-bold tracking-wide transition">X (Twitter)</a>
              <a href="https://x.com/i/communities/2020491205914902586" target="_blank" className="block text-white/50 hover:text-white text-sm font-bold tracking-wide transition">Community</a>
              <a href="https://dexscreener.com" target="_blank" className="block text-white/50 hover:text-white text-sm font-bold tracking-wide transition">Dexscreener</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-white/20 text-xs">$UNT is a meme token. Not financial advice.</p>
          <p className="text-white/20 text-xs">Built by Audifyx Studios</p>
        </div>
      </div>
    </footer>
  )
}
