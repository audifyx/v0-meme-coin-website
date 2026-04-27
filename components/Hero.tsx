'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArticleModal from './ArticleModal'

export default function Hero() {
  const [isArticleOpen, setIsArticleOpen] = useState(false)

  return (
    <>
      <section id="hero" className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-black text-black mb-6">
                $UNT
              </h1>
              <p className="text-xl font-bold text-black mb-6 leading-relaxed">
                Romeo needs Juliet. Tom needs Jerry. <span className="text-2xl">$UNC needs $UNT.</span>
              </p>
              <p className="text-lg font-bold text-black mb-8">
                A free idol representing independence, love, care, craziness, wealth, and fun.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-8 py-4 font-black text-lg border-4 border-black hover:bg-gray-900">
                  BUY NOW
                </button>
                <button
                  onClick={() => setIsArticleOpen(true)}
                  className="bg-white text-black px-8 py-4 font-black text-lg border-4 border-black hover:bg-gray-100"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051720_699-i5AvbEGml8Ymn0cV22lJrmLzCz7kAm.jpg"
              alt="$UNT Character - Dinner Scene"
              width={500}
              height={400}
              className="w-full max-w-md border-4 border-black"
              priority
            />
          </div>
          </div>
        </div>
      </section>
      <ArticleModal isOpen={isArticleOpen} onClose={() => setIsArticleOpen(false)} />
    </>
  )
}
