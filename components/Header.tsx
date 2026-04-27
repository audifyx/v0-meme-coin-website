'use client'

import Link from 'next/link'
import { Twitter } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-4xl font-black text-black">
            $UNT
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#hero" className="font-bold text-black hover:underline">
              Home
            </Link>
            <Link href="#about" className="font-bold text-black hover:underline">
              About
            </Link>
            <Link href="#chart" className="font-bold text-black hover:underline">
              Chart
            </Link>
            <Link href="#image-gen" className="font-bold text-black hover:underline">
              Create
            </Link>
            <Link href="#memes" className="font-bold text-black hover:underline">
              Memes
            </Link>
            <Link href="#pfp" className="font-bold text-black hover:underline">
              PFP Gen
            </Link>
          </nav>
        </div>
        <a
          href="https://x.com/UNTuniverse"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 font-bold flex items-center gap-2 hover:bg-gray-800 border-2 border-black"
        >
          <Twitter size={20} />
          <span>Follow</span>
        </a>
      </div>
    </header>
  )
}
