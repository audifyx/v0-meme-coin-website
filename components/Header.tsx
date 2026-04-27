'use client'

import Link from 'next/link'
import { Twitter } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-black/90 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-black text-white tracking-tight hover:opacity-80 transition">
            $UNT
          </Link>
          <nav className="hidden md:flex gap-8">
            {[
              { href: '#hero', label: 'HOME' },
              { href: '#about', label: 'ABOUT' },
              { href: '#chart', label: 'CHART' },
              { href: '#image-gen', label: 'CREATE' },
              { href: '#memes', label: 'GALLERY' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/60 hover:text-white text-xs font-bold tracking-widest transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://x.com/UNTuniverse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 text-xs font-bold tracking-widest transition"
          >
            <Twitter size={14} />
            X
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 text-xs font-bold tracking-widest transition"
          >
            DEX
          </a>
          <a
            href="https://x.com/i/communities/2020491205914902586"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 text-xs font-bold tracking-widest hover:bg-white/90 transition"
          >
            COMMUNITY
          </a>
        </div>
      </div>
    </header>
  )
}
