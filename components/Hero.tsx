'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArticleModal from './ArticleModal'

export default function Hero() {
  const [isArticleOpen, setIsArticleOpen] = useState(false)

  return (
    <>
      <section id="story" className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
                $UNT
              </h1>
              <p className="text-2xl font-bold text-pink-300 mb-4">
                The icon nobody expected.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Romeo needs Juliet. Tom needs Jerry. $UNC needs $UNT. This isn&apos;t just a token—it&apos;s a movement. Independence, love, care, craziness, wealth, and fun. All wrapped in one.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-3 font-black rounded hover:bg-pink-400 transition">
                BUY NOW
              </button>
              <button
                onClick={() => setIsArticleOpen(true)}
                className="border border-white text-white px-8 py-3 font-black rounded hover:border-pink-400 hover:text-pink-400 transition"
              >
                READ STORY
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="rounded overflow-hidden w-full max-w-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051720_699-i5AvbEGml8Ymn0cV22lJrmLzCz7kAm.jpg"
                alt="$UNT Character"
                width={400}
                height={400}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white/5 backdrop-blur border-y border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-pink-400">7x</p>
            <p className="text-sm font-bold text-gray-400">X Bans Survived</p>
          </div>
          <div>
            <p className="text-3xl font-black text-pink-400">$1M</p>
            <p className="text-sm font-bold text-gray-400">Peak (Day 1)</p>
          </div>
          <div>
            <p className="text-3xl font-black text-pink-400">Still Here</p>
            <p className="text-sm font-bold text-gray-400">The Community</p>
          </div>
        </div>
      </section>

      <ArticleModal isOpen={isArticleOpen} onClose={() => setIsArticleOpen(false)} />
    </>
  )
}
