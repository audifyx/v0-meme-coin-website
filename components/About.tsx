'use client'

export default function About() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-black text-white mb-16 text-center">
          THE RELAUNCH
        </h2>

        <div className="space-y-12">
          {/* Last Launch Info */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded p-8">
            <h3 className="text-2xl font-black text-pink-300 mb-4">Last Launch History</h3>
            <p className="text-gray-300 mb-6">
              We proved $UNT could hit $1M in market cap. We showed the world what was possible in 24 hours. Then the system tried to stop us.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-pink-400 font-black text-2xl">5m</p>
                <p className="text-xs text-gray-400">To Bond</p>
              </div>
              <div className="text-center">
                <p className="text-pink-400 font-black text-2xl">10m</p>
                <p className="text-xs text-gray-400">To $200K</p>
              </div>
              <div className="text-center">
                <p className="text-pink-400 font-black text-2xl">24h</p>
                <p className="text-xs text-gray-400">To $1M</p>
              </div>
            </div>
          </div>

          {/* The Suppression */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded p-8">
            <h3 className="text-2xl font-black text-white mb-4">What Happened Next</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-pink-400 font-black">7 X suspensions.</span> We got banned and came back 7 times.
              </p>
              <p>
                <span className="text-pink-400 font-black">Charts nuked.</span> CoinGecko, DexTools, every tracker went offline.
              </p>
              <p>
                <span className="text-pink-400 font-black">Runs halted.</span> Just as momentum built, we hit walls.
              </p>
              <p className="pt-2 border-t border-white/10">
                But you know what didn&apos;t get nuked? The community. Still here. Still holding. Still believing.
              </p>
            </div>
          </div>

          {/* The Return */}
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur border border-pink-500/30 rounded p-8">
            <h3 className="text-2xl font-black text-white mb-4">Why We&apos;re Back Stronger</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-pink-400 font-black">→</span>
                We know what works now. No learning curve.
              </li>
              <li className="flex gap-3">
                <span className="text-pink-400 font-black">→</span>
                The community is organized. We&apos;ve built infrastructure.
              </li>
              <li className="flex gap-3">
                <span className="text-pink-400 font-black">→</span>
                This isn&apos;t hype anymore. This is a movement.
              </li>
              <li className="flex gap-3">
                <span className="text-pink-400 font-black">→</span>
                We did it once. We&apos;ll do it again—bigger.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
