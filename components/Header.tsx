'use client'

import Link from 'next/link'
import { Twitter, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const CA = '6QxEWmorqGxGxRZsmNxghB9aZYNXZjudtovE5L4Qpump'

export default function Header() {
  const [copied, setCopied] = useState(false)

  const copyCA = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Banner Image */}
      <div className="w-full h-32 md:h-48 overflow-hidden relative">
        <img src="/banner-cult.jpg" alt="$UNT Banner" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">$UNT</h1>
        </div>
      </div>

      {/* CA Bar */}
      <div className="bg-black border-b border-white/10 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-white/40 text-xs font-bold tracking-widest">CA</span>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 w-full sm:w-auto">
            <code className="font-mono text-xs text-white/80 truncate max-w-[200px] sm:max-w-none">{CA}</code>
            <button onClick={copyCA} className="flex-shrink-0 flex items-center gap-1 bg-white text-black px-3 py-1 text-xs font-black hover:bg-gray-200 transition">
              {copied ? <><Check size={12} /> COPIED</> : <><Copy size={12} /> COPY</>}
            </button>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="bg-black/90 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-xl font-black text-white tracking-tight hover:opacity-80 transition">
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
                <Link key={item.href} href={item.href} className="text-white/60 hover:text-white text-xs font-bold tracking-widest transition">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://x.com/UNTuniverse" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 text-xs font-bold tracking-widest transition">
              <Twitter size={14} /> X
            </a>
            <a href={`https://dexscreener.com/solana/${CA}`} target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 text-xs font-bold tracking-widest transition">
              DEX
            </a>
            <a href="https://x.com/i/communities/2037521607527391725" target="_blank" rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 text-xs font-bold tracking-widest hover:bg-white/90 transition">
              COMMUNITY
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
