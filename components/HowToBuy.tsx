'use client'

export default function HowToBuy() {
  const steps = [
    { step: '01', title: 'GET A WALLET', desc: 'Download Phantom or Solflare. The $UNT requires a home.' },
    { step: '02', title: 'FUND IT', desc: 'Buy SOL on any exchange. The motherland accepts Solana.' },
    { step: '03', title: 'SWAP FOR $UNT', desc: 'Use the contract address on Raydium or Jupiter DEX.' },
    { step: '04', title: 'HODL THE VISION', desc: 'Sit on it. The community does not approve of selling.' },
  ]

  return (
    <section id="buy" className="bg-black border-y border-white/10 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-white/40 text-xs font-bold tracking-widest mb-3">✦ GETTING STARTED</p>
            <h2 className="text-6xl md:text-7xl font-black text-white">HOW TO BUY</h2>
          </div>
          <p className="text-white/40 text-sm font-bold hidden md:block">four steps. no excuses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {steps.map((s) => (
            <div key={s.step} className="bg-black p-8 hover:bg-white/5 transition group">
              <div className="text-white/20 font-black text-5xl mb-6 group-hover:text-white/40 transition">{s.step}</div>
              <div className="text-white font-black text-sm tracking-widest mb-3">{s.title}</div>
              <div className="text-white/40 text-sm leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
