'use client'

const CA = '6QxEWmorqGxGxRZsmNxghB9aZYNXZjudtovE5L4Qpump'

export default function PriceChart() {
  return (
    <section id="chart" className="bg-black border-b border-white/10 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-white/40 text-xs font-bold tracking-widest mb-3">✦ LIVE DATA</p>
          <h2 className="text-5xl md:text-6xl font-black text-white">CHART</h2>
        </div>

        {/* DEX links */}
        <div className="flex flex-wrap gap-3 mb-8">
          <a href={`https://dexscreener.com/solana/${CA}`} target="_blank"
            className="border border-white/20 text-white/60 hover:text-white hover:border-white/40 px-5 py-2 text-xs font-bold tracking-widest transition">
            DEXSCREENER ↗
          </a>
          <a href={`https://www.dextools.io/app/en/solana/pair-explorer/${CA}`} target="_blank"
            className="border border-white/20 text-white/60 hover:text-white hover:border-white/40 px-5 py-2 text-xs font-bold tracking-widest transition">
            DEXTOOLS ↗
          </a>
          <a href={`https://raydium.io/swap/?outputCurrency=${CA}`} target="_blank"
            className="bg-white text-black px-5 py-2 text-xs font-bold tracking-widest hover:bg-white/90 transition">
            BUY ON RAYDIUM ↗
          </a>
          <a href={`https://jup.ag/swap/SOL-${CA}`} target="_blank"
            className="bg-white text-black px-5 py-2 text-xs font-bold tracking-widest hover:bg-white/90 transition">
            BUY ON JUPITER ↗
          </a>
        </div>

        {/* Embedded DEX chart */}
        <div className="w-full h-[500px] border border-white/10 overflow-hidden">
          <iframe
            src={`https://dexscreener.com/solana/${CA}?embed=1&theme=dark&trades=0&info=0`}
            className="w-full h-full"
            style={{ border: 'none' }}
            title="$UNT Chart"
          />
        </div>
      </div>
    </section>
  )
}
