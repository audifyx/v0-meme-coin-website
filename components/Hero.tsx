'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArticleModal from './ArticleModal'

export default function Hero() {
  const [isArticleOpen, setIsArticleOpen] = useState(false)

  return (
    <>
      <section id="hero" className="bg-gradient-to-br from-yellow-50 via-white to-pink-50 border-b-4 border-black overflow-hidden relative min-h-screen flex items-center">
        {/* Floating playful shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-300 opacity-30 animate-float-bob"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-3xl bg-pink-200 opacity-20 animate-float-bob" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-blue-200 opacity-25 animate-float-bob" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 leading-tight animate-fade-in-up animate-bounce-spin">
                  $UNT
                </h1>
              </div>
              
              <div className="h-3 w-32 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-fade-in-up stagger-item-2 origin-left glow-lg"></div>
              
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border-4 border-black shadow-lg animate-fade-in-up stagger-item-3 hover:shadow-xl smooth-transition">
                  <p className="text-2xl font-black text-black leading-tight">
                    Romeo needs Juliet. Tom needs Jerry.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">$UNC needs $UNT.</span>
                  </p>
                </div>
                
                <p className="text-lg font-bold text-black leading-relaxed animate-fade-in-up stagger-item-4 max-w-lg">
                  A free idol representing independence, love, care, craziness, wealth, and fun. 🚀 Born from the trenches, rising to the top.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-fade-in-up stagger-item-5">
                <button className="group relative bg-gradient-to-br from-pink-500 to-purple-600 text-white px-10 py-6 font-black text-lg rounded-2xl border-4 border-black shadow-lg hover:shadow-2xl smooth-transition hover:scale-105 overflow-hidden">
                  <span className="relative z-10">🔥 BUY NOW</span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 smooth-transition"></div>
                </button>
                <button
                  onClick={() => setIsArticleOpen(true)}
                  className="group relative bg-white text-black px-10 py-6 font-black text-lg rounded-2xl border-4 border-black shadow-lg hover:shadow-xl smooth-transition hover:scale-105"
                >
                  📖 READ LORE
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-3xl blur-xl opacity-40 animate-glow-pulse"></div>
                
                <div className="relative bg-white rounded-3xl p-4 border-4 border-black shadow-2xl overflow-hidden animate-bounce-spin">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051720_699-i5AvbEGml8Ymn0cV22lJrmLzCz7kAm.jpg"
                    alt="$UNT Character - Dinner Scene"
                    width={500}
                    height={400}
                    className="w-full rounded-2xl hover:scale-110 smooth-transition"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ArticleModal isOpen={isArticleOpen} onClose={() => setIsArticleOpen(false)} />
    </>
  )
}
