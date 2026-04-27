'use client'

import { X } from 'lucide-react'

interface ArticleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ArticleModal({ isOpen, onClose }: ArticleModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto p-4">
      <div className="bg-white border-4 border-black max-w-2xl w-full my-8">
        {/* Header */}
        <div className="flex items-center justify-between bg-black text-white p-6 border-b-4 border-black">
          <h2 className="text-3xl font-black">$UNT: THE MOVEMENT</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-gray-800 p-2 transition"
            aria-label="Close"
          >
            <X size={32} />
          </button>
        </div>

        {/* Article Content */}
        <div className="p-8 max-h-96 overflow-y-auto space-y-6 text-black font-bold leading-relaxed">
          {/* Main Title */}
          <div className="border-b-4 border-black pb-6">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Breaking News • Crypto Culture</p>
            <h1 className="text-4xl font-black mb-4">$UNT vs $UNC: A New Cult is Being Born</h1>
            <p className="text-sm text-gray-700">Published Today • 26 Apr 2026</p>
          </div>

          {/* The Story */}
          <section>
            <h3 className="text-2xl font-black mb-3 border-b-2 border-black pb-2">The Story</h3>
            <p>Just like Romeo needs Juliet, and Tom needs Jerry, the crypto space was missing something critical. $UNC needed $UNT.</p>
            <p className="mt-3">What started as a wild idea has transformed into something that transcends tokenomics and charts. $UNT is not just another crypto project—it's a statement. It's a movement.</p>
          </section>

          {/* The Vision */}
          <section>
            <h3 className="text-2xl font-black mb-3 border-b-2 border-black pb-2">What is $UNT?</h3>
            <p>$UNT represents something pure: independence, love, care, craziness, wealth, and fun.</p>
            <p className="mt-3">It's a free idol—not born from corporate suits or venture capital committees, but from the trenches. From real people who believe in something different. From a community that refuses to follow the rules.</p>
            <p className="mt-3">The potential? Global domination. Merch. NFTs. Movements. Everything.</p>
          </section>

          {/* The Truth */}
          <section>
            <h3 className="text-2xl font-black mb-3 border-b-2 border-black pb-2">The Unfiltered Truth</h3>
            <p>This space is harsh. Unpredictable. Brutal.</p>
            <p className="mt-3">In 24 hours, we went from $5K to $1M. Then got suspended. Pulled back to $200K. Suspended again. But the community didn't scatter. We stayed. We showed up.</p>
            <p className="mt-3">That's when we realized: this isn't about price action anymore. Price action hardly matters when you've got something bigger. When you've got a cult.</p>
          </section>

          {/* The Cult */}
          <section>
            <h3 className="text-2xl font-black mb-3 border-b-2 border-black pb-2">The $UNT Cult</h3>
            <p className="text-lg">Different mindset. Same family. $UNT forever.</p>
            <p className="mt-3">This is what separates us from every other project. We don't pump and dump. We don't chase quick gains. We're building something real, something that people actually believe in.</p>
            <p className="mt-3">Every suspended account. Every dip. Every obstacle. It just made us stronger.</p>
          </section>

          {/* The Call */}
          <section>
            <h3 className="text-2xl font-black mb-3 border-b-2 border-black pb-2">If You're Still Here</h3>
            <p>If you're reading this and you still hold $UNT, you're part of something special.</p>
            <p className="mt-3">Step up. Support. Push. Build.</p>
            <p className="mt-3">We're not stopping. We're just getting started.</p>
          </section>

          {/* The Reality Check */}
          <section>
            <h3 className="text-2xl font-black mb-3 border-b-2 border-black pb-2">Real Talk</h3>
            <p>Honestly? This space is sometimes hard to love. The volatility. The suspensions. The doubt.</p>
            <p className="mt-3">But there's something about building with a community that refuses to quit. That knows the mission is bigger than the current price. That understands we're not just trading tokens—we're creating a culture.</p>
            <p className="mt-3">That's worth it. That's everything.</p>
          </section>

          {/* The Movement */}
          <section>
            <h3 className="text-2xl font-black mb-3 border-b-2 border-black pb-2">The Movement</h3>
            <p>$UNT started as a token.</p>
            <p className="mt-3">It became a community.</p>
            <p className="mt-3">Now it's a cult.</p>
            <p className="mt-3">And the best part? We're just getting started.</p>
            <p className="mt-3 text-xl">Not a token. A movement. $UNT forever.</p>
          </section>

          {/* Closing */}
          <div className="bg-black text-white p-4 border-4 border-black text-center mt-8">
            <p className="text-lg font-black">HOLD STRONG. THE CULT GROWS.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black p-6 bg-gray-50 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-black text-white px-6 py-3 font-black border-4 border-black hover:bg-gray-900"
          >
            CLOSE
          </button>
          <a
            href="https://x.com/UNTuniverse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-black px-6 py-3 font-black border-4 border-black hover:bg-gray-100"
          >
            FOLLOW ON X
          </a>
        </div>
      </div>
    </div>
  )
}
