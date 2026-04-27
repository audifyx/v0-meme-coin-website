'use client'

export default function About() {
  return (
    <section id="story" className="py-20 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-black text-black mb-12 border-b-4 border-black pb-6">
          THE RELAUNCH
        </h2>

        <div className="space-y-12">
          {/* Last Launch Info */}
          <div className="bg-white text-black border-4 border-black p-8">
            <h3 className="text-2xl font-black mb-4">LAST LAUNCH HISTORY</h3>
            <p className="font-bold mb-6">
              We proved $UNT could hit $1M in market cap. We showed the world what was possible in 24 hours. Then the system tried to stop us.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center border-l-4 border-black pl-4">
                <p className="text-4xl font-black">5m</p>
                <p className="text-xs font-bold">To Bond</p>
              </div>
              <div className="text-center border-l-4 border-black pl-4">
                <p className="text-4xl font-black">10m</p>
                <p className="text-xs font-bold">To $200K</p>
              </div>
              <div className="text-center border-l-4 border-black pl-4">
                <p className="text-4xl font-black">24h</p>
                <p className="text-xs font-bold">To $1M</p>
              </div>
            </div>
          </div>

          {/* The Suppression */}
          <div className="bg-white text-black border-4 border-black p-8">
            <h3 className="text-2xl font-black mb-4">WHAT HAPPENED NEXT</h3>
            <div className="space-y-4 font-bold">
              <p>
                <span className="font-black">7 X SUSPENSIONS.</span> We got banned and came back 7 times.
              </p>
              <p>
                <span className="font-black">CHARTS NUKED.</span> CoinGecko, DexTools, every tracker went offline.
              </p>
              <p>
                <span className="font-black">RUNS HALTED.</span> Just as momentum built, we hit walls.
              </p>
              <p className="pt-4 border-t-4 border-black">
                But you know what didn&apos;t get nuked? The community. Still here. Still holding. Still believing.
              </p>
            </div>
          </div>

          {/* The Return */}
          <div className="bg-white text-black border-4 border-black p-8">
            <h3 className="text-2xl font-black mb-4">WHY WE&apos;RE BACK STRONGER</h3>
            <ul className="space-y-3 font-bold">
              <li className="flex gap-3">
                <span className="font-black">→</span>
                We know what works now. No learning curve.
              </li>
              <li className="flex gap-3">
                <span className="font-black">→</span>
                The community is organized. We&apos;ve built infrastructure.
              </li>
              <li className="flex gap-3">
                <span className="font-black">→</span>
                This isn&apos;t hype anymore. This is a movement.
              </li>
              <li className="flex gap-3">
                <span className="font-black">→</span>
                We did it once. We&apos;ll do it again—bigger.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
