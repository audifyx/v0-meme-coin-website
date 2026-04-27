'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="text-3xl font-black text-black">
          $UNT
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#story" className="text-black font-bold hover:underline transition">
            Story
          </Link>
          <Link href="#chart" className="text-black font-bold hover:underline transition">
            Chart
          </Link>
          <Link href="#memes" className="text-black font-bold hover:underline transition">
            Memes
          </Link>
          <Link href="#create" className="text-black font-bold hover:underline transition">
            Create
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="https://x.com/UNTuniverse"
          target="_blank"
          className="text-black font-black px-6 py-2 border-2 border-black hover:bg-black hover:text-white transition"
        >
          Follow X
        </Link>
      </div>

      {/* Banner Image */}
      <div className="w-full border-b-4 border-black overflow-hidden bg-black">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051720_699-i5AvbEGml8Ymn0cV22lJrmLzCz7kAm.jpg"
          alt="$UNT Banner"
          width={1200}
          height={300}
          className="w-full h-48 object-cover"
          priority
        />
      </div>
    </header>
  )
}
