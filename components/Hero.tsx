'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArticleModal from './ArticleModal'

export default function Hero() {
  const [isArticleOpen, setIsArticleOpen] = useState(false)

  return (
    <>
      <section id="hero" className="bg-white border-b-4 border-black overflow-hidden relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.05] bg-black blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.05] bg-black blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-8xl md:text-9xl font-black text-black leading-tight animate-fade-in-up">
                  $UNT
                </h1>
              </div>
              
              <div className="h-2 w-32 rounded-full bg-black animate-fade-in-up stagger-item-2 origin-left"></div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 border-4 border-black shadow-lg animate-fade-in-up stagger-item-3 hover:shadow-xl smooth-transition">
                  <p className="text-2xl font-black text-black leading-tight">
                    Romeo needs Juliet. Tom needs Jerry.<br />
                    <span className="text-gray-700">$UNC needs $UNT.</span>
                  </p>
                </div>
                
                <p className="text-lg font-bold text-black leading-relaxed animate-fade-in-up stagger-item-4 max-w-lg">
                  A free idol representing independence, love, care, craziness, wealth, and fun. Born from the trenches, rising to the top.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-fade-in-up stagger-item-5">
                <button className="group bg-black text-white px-10 py-6 font-black text-lg rounded-2xl border-4 border-black hover:bg-gray-900 smooth-transition hover:scale-105 shadow-lg overflow-hidden relative">
                  <span className="relative z-10">BUY NOW</span>
                  <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 smooth-transition"></div>
                </button>
                <button
                  onClick={() => setIsArticleOpen(true)}
                  className="group relative bg-white text-black px-10 py-6 font-black text-lg rounded-2xl border-4 border-black shadow-lg hover:shadow-xl smooth-transition hover:scale-105"
                >
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-black rounded-3xl blur-xl opacity-20 animate-glow-pulse"></div>
                
                <div className="relative bg-white rounded-3xl p-4 border-4 border-black shadow-2xl overflow-hidden">
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
