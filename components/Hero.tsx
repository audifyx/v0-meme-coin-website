'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArticleModal from './ArticleModal'

export default function Hero() {
  const [isArticleOpen, setIsArticleOpen] = useState(false)

  return (
    <>
      <section id="hero" className="bg-black text-white border-b-4 border-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left space-y-6">
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black text-sm tracking-wider animate-fade-in-up">
                JOINING THE REVOLUTION
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black text-white mb-2 animate-fade-in-up stagger-item-2 leading-tight">
                $UNT
              </h1>
              
              <div className="h-1 w-20 bg-yellow-400 animate-fade-in-up stagger-item-3"></div>
              
              <p className="text-2xl font-black text-yellow-400 animate-fade-in-up stagger-item-4 leading-snug">
                Romeo needs Juliet.<br />Tom needs Jerry.<br /><span className="text-white">$UNC needs $UNT.</span>
              </p>
              
              <p className="text-lg font-bold text-gray-300 animate-fade-in-up stagger-item-5 max-w-md leading-relaxed">
                A free idol representing independence, love, care, craziness, wealth, and fun. More than a token. A movement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up stagger-item-6">
                <button className="bg-yellow-400 text-black px-10 py-4 font-black text-lg border-4 border-yellow-400 hover:bg-white smooth-transition hover-lift shadow-lg">
                  BUY NOW
                </button>
                <button
                  onClick={() => setIsArticleOpen(true)}
                  className="bg-transparent text-white px-10 py-4 font-black text-lg border-4 border-white hover:bg-white hover:text-black smooth-transition hover-lift"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
            
            <div className="flex justify-center animate-fade-in-right relative">
              <div className="absolute inset-0 bg-yellow-400 opacity-20 rounded-lg blur-2xl"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051720_699-i5AvbEGml8Ymn0cV22lJrmLzCz7kAm.jpg"
                alt="$UNT Character - Dinner Scene"
                width={500}
                height={400}
                className="w-full max-w-md border-8 border-yellow-400 hover-scale relative z-10 shadow-2xl"
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
