'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArticleModal from './ArticleModal'

export default function Hero() {
  const [isArticleOpen, setIsArticleOpen] = useState(false)

  return (
    <>
      <section id="hero" className="bg-white border-b-8 border-black overflow-visible relative pt-0 pb-0">
        {/* Dramatic diagonal sections */}
        <div className="absolute top-0 right-0 w-full h-1/3 bg-black z-0"></div>
        <div className="absolute top-1/3 left-0 w-full h-20 bg-black z-0"></div>

        <div className="relative z-10">
          <div className="max-w-full mx-auto px-0 py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen items-center">
              {/* Left column - overlapping bold text */}
              <div className="relative px-8 md:px-12 py-20 md:py-32">
                {/* Background decorative text */}
                <div className="absolute top-0 left-0 text-9xl md:text-10xl font-black text-black opacity-5 leading-none whitespace-nowrap -ml-4">
                  $UNC<br/>CULT
                </div>

                <div className="relative z-20 space-y-0">
                  {/* Main headline - massive */}
                  <h1 className="text-10xl md:text-11xl font-black leading-[0.85] text-black mb-6 animate-fade-in-up">
                    $UNT
                  </h1>

                  {/* Overlapping decorative text behind main content */}
                  <div className="relative -mt-16 mb-8">
                    <p className="text-7xl md:text-8xl font-black text-black opacity-[0.15] leading-none italic whitespace-nowrap">
                      MOVEMENT
                    </p>
                  </div>

                  {/* Key message with border accent */}
                  <div className="border-l-8 border-black pl-8 mb-12 animate-fade-in-up stagger-item-2">
                    <p className="text-3xl md:text-5xl font-black text-black leading-tight mb-4">
                      Romeo needs<br/>Juliet.<br/>Tom needs<br/>Jerry.
                    </p>
                    <p className="text-4xl md:text-6xl font-black text-black leading-tight">
                      $UNC needs<br/><span className="text-black">$UNT.</span>
                    </p>
                  </div>

                  {/* Subtext */}
                  <p className="text-xl md:text-2xl font-black text-black leading-tight animate-fade-in-up stagger-item-3 uppercase tracking-widest mb-12">
                    Independence × Love<br/>Craziness × Wealth × Fun
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-item-4">
                    <button className="group bg-black text-white px-12 md:px-16 py-7 md:py-8 font-black text-2xl md:text-3xl border-4 border-black hover:bg-gray-900 smooth-transition hover-lift shadow-heavy relative overflow-hidden uppercase tracking-wider">
                      <span className="relative z-10">BUY $UNT</span>
                      <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 smooth-transition"></div>
                    </button>
                    <button
                      onClick={() => setIsArticleOpen(true)}
                      className="group bg-white text-black px-12 md:px-16 py-7 md:py-8 font-black text-2xl md:text-3xl border-4 border-black hover:bg-black hover:text-white smooth-transition hover-lift shadow-heavy uppercase tracking-wider relative overflow-hidden"
                    >
                      <span className="relative z-10">LORE</span>
                      <div className="absolute inset-0 bg-black -translate-x-full group-hover:-translate-x-0 smooth-transition"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column - image with dramatic overlays */}
              <div className="relative h-screen lg:h-auto lg:min-h-screen flex items-center justify-center overflow-hidden">
                {/* Large background text */}
                <div className="absolute top-0 right-0 text-9xl md:text-10xl font-black text-black opacity-[0.12] leading-none whitespace-nowrap pointer-events-none -mt-12">
                  BORN FROM<br/>THE<br/>TRENCHES
                </div>

                {/* Decorative boxes */}
                <div className="absolute top-12 right-12 w-32 h-32 border-8 border-black bg-transparent z-20"></div>
                <div className="absolute top-32 right-20 w-20 h-20 bg-black z-20"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 border-8 border-black bg-transparent z-20"></div>

                {/* Image container with dramatic shadow */}
                <div className="relative z-30 w-full max-w-2xl px-8 animate-fade-in-up stagger-item-2">
                  <div className="absolute -inset-12 bg-black opacity-20 -z-10 rotate-1"></div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051720_699-i5AvbEGml8Ymn0cV22lJrmLzCz7kAm.jpg"
                    alt="$UNT Character - Dinner Scene"
                    width={600}
                    height={500}
                    className="w-full border-8 border-black hover-scale shadow-2xl relative z-10"
                    priority
                  />
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 border-4 border-black bg-white z-0"></div>
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
