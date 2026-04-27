'use client'

import { Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white border-t-4 border-black relative overflow-hidden">
      {/* Floating playful elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-400 opacity-20 animate-float-bob"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-3xl bg-purple-400 opacity-15 animate-float-bob" style={{ animationDelay: '0.9s' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up group">
            <h3 className="text-5xl font-black mb-4 group-hover:scale-110 smooth-transition origin-left text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              $UNT
            </h3>
            <p className="font-bold text-blue-100 text-lg leading-relaxed">
              A global icon born from the trenches. The future is $UNT. 🚀
            </p>
          </div>

          {/* Links */}
          <div className="animate-fade-in-up stagger-item-2">
            <h4 className="text-2xl font-black text-white mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">NAVIGATE</h4>
            <ul className="space-y-3">
              {[
                { href: '#hero', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#chart', label: 'Chart' },
                { href: '#image-gen', label: 'Create' },
                { href: '#memes', label: 'Memes' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group/link font-black text-blue-100 hover:text-cyan-300 smooth-transition relative inline-block"
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 w-0 group-hover/link:w-full smooth-transition origin-left rounded-full"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="animate-fade-in-up stagger-item-3">
            <h4 className="text-2xl font-black text-white mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">COMMUNITY</h4>
            <a
              href="https://x.com/UNTuniverse"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 font-black rounded-2xl border-4 border-white hover:shadow-2xl smooth-transition hover-lift-subtle shadow-lg relative overflow-hidden"
            >
              <Twitter size={24} className="group-hover/btn:rotate-12 smooth-transition" />
              <span className="relative z-10">@UNTuniverse</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover/btn:opacity-20 smooth-transition"></div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-blue-400/30 pt-12 rounded-t-3xl">
          <p className="font-black text-center md:text-left mb-6 text-sm uppercase tracking-widest text-cyan-300">
            Contract: Coming Soon | Built for the $UNT Cult 💪
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-bold text-blue-200 mb-4 md:mb-0 text-sm">
              © 2026 $UNT. Born from the trenches. Rising to the top.
            </p>
            <p className="font-bold text-blue-200 text-sm">
              Built with 💜 by{' '}
              <a
                href="https://x.com/para1laxx"
                target="_blank"
                rel="noopener noreferrer"
                className="group/creator text-cyan-300 hover:text-pink-300 smooth-transition relative inline-block"
              >
                @para1laxx
                <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 w-0 group-hover/creator:w-full smooth-transition origin-left rounded-full"></div>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
