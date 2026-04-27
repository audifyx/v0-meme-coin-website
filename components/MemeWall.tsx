'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const characterImages = [
  '/images/characters/unt-main.jpg',
  '/images/characters/unt-cool.jpg',
  '/images/characters/unt-dance.jpg',
  '/images/characters/unt-wink.jpg',
  '/images/characters/unt-vibe.jpg',
  '/images/characters/unt-party.jpg',
  '/images/characters/unt-flex.jpg',
  '/images/characters/unt-moon.jpg',
]

interface MemeItem {
  id: number
  image: string
}

export default function MemeWall() {
  const [memes, setMemes] = useState<MemeItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const observerTarget = useRef<HTMLDivElement>(null)
  const loadedCount = useRef(0)

  // Load initial memes
  useEffect(() => {
    loadMoreMemes()
  }, [])

  const loadMoreMemes = useCallback(() => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      const newMemes: MemeItem[] = []
      for (let i = 0; i < 8; i++) {
        const id = loadedCount.current++
        newMemes.push({
          id,
          image: characterImages[id % characterImages.length]
        })
      }
      setMemes(prev => [...prev, ...newMemes])
      setIsLoading(false)
    }, 300)
  }, [])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreMemes()
        }
      },
      { threshold: 0.1 }
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [isLoading, loadMoreMemes])

  return (
    <section id="memes" className="bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black mb-12 border-b-4 border-black pb-6">
          MEME WALL
        </h2>

        {/* Infinite scroll grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {memes.map(meme => (
            <div
              key={meme.id}
              className="bg-black border-4 border-black overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={meme.image}
                  alt={`Meme ${meme.id}`}
                  fill
                  className="object-cover group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="bg-white text-black p-4 border-t-4 border-black">
                <p className="font-bold text-sm">#UNT Meme {meme.id + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center mb-8">
            <div className="bg-black text-white px-8 py-4 font-bold border-4 border-black">
              LOADING...
            </div>
          </div>
        )}

        {/* Intersection observer target */}
        <div ref={observerTarget} className="h-4" />
      </div>
    </section>
  )
}
