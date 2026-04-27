'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="text-2xl font-black text-white">
          $UNT
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#story" className="text-white font-bold hover:text-pink-400 transition">
            Story
          </Link>
          <Link href="#chart" className="text-white font-bold hover:text-pink-400 transition">
            Chart
          </Link>
          <Link href="#memes" className="text-white font-bold hover:text-pink-400 transition">
            Memes
          </Link>
          <Link href="#create" className="text-white font-bold hover:text-pink-400 transition">
            Create
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="https://x.com/UNTuniverse"
          target="_blank"
          className="text-white font-black px-6 py-2 border border-white/30 hover:border-pink-400 hover:text-pink-400 transition rounded"
        >
          Follow X
        </Link>
      </div>
    </header>
  )
}
