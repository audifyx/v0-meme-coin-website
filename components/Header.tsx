'use client'

import Link from 'next/link'
import { Twitter } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-black sticky top-0 z-50 backdrop-blur-md bg-opacity-98">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="group relative">
            <div className="text-3xl font-black text-black smooth-transition group-hover:scale-110">
              $UNT
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            {[
              { href: '#hero', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#chart', label: 'Chart' },
              { href: '#image-gen', label: 'Create' },
              { href: '#memes', label: 'Memes' },
              { href: '#pfp', label: 'PFP Gen' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-black text-black text-sm uppercase tracking-wider"
              >
                <span className="smooth-transition group-hover:text-gray-700">{item.label}</span>
                <div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover:w-full smooth-transition origin-left"></div>
              </Link>
            ))}
          </nav>
        </div>
        <a
          href="https://x.com/UNTuniverse"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-black text-white px-8 py-3 font-black text-sm flex items-center gap-3 border-3 border-black smooth-transition hover-lift-subtle shadow-light overflow-hidden"
        >
          <Twitter size={18} className="group-hover:rotate-12 smooth-transition" />
          <span className="relative z-10">Follow X</span>
          <div className="absolute inset-0 bg-gray-900 -translate-x-full group-hover:translate-x-0 smooth-transition"></div>
        </a>
      </div>
    </header>
  )
}
