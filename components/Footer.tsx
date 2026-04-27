'use client'

import { Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.02] bg-black blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.02] bg-black blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up group">
            <h3 className="text-4xl font-black text-black mb-4 group-hover:scale-110 smooth-transition origin-left">$UNT</h3>
            <p className="font-bold text-gray-700 text-lg leading-relaxed">
              A global icon born from the trenches. The future is $UNT.
            </p>
          </div>

          {/* Links */}
          <div className="animate-fade-in-up stagger-item-2">
            <h4 className="text-2xl font-black text-black mb-6">NAVIGATE</h4>
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
                    className="group/link font-black text-black hover:text-gray-700 smooth-transition relative inline-block"
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover/link:w-full smooth-transition origin-left"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="animate-fade-in-up stagger-item-3">
            <h4 className="text-2xl font-black text-black mb-6">COMMUNITY</h4>
            <a
              href="https://x.com/UNTuniverse"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-black border-3 border-black hover:border-black smooth-transition hover-lift-subtle shadow-light relative overflow-hidden"
            >
              <Twitter size={22} className="group-hover/btn:rotate-12 smooth-transition" />
              <span className="relative z-10">@UNTuniverse</span>
              <div className="absolute inset-0 bg-gray-900 -translate-x-full group-hover/btn:translate-x-0 smooth-transition"></div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-black pt-12">
          <p className="font-black text-black text-center md:text-left mb-6 text-sm uppercase tracking-widest">
            Contract: Coming Soon | Built for the $UNT Cult
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-bold text-gray-700 mb-4 md:mb-0 text-sm">
              © 2026 $UNT. All rights reserved.
            </p>
            <p className="font-bold text-gray-700 text-sm">
              Built by{' '}
              <a
                href="https://x.com/para1laxx"
                target="_blank"
                rel="noopener noreferrer"
                className="group/creator text-black hover:text-gray-700 smooth-transition relative inline-block"
              >
                @para1laxx
                <div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover/creator:w-full smooth-transition origin-left"></div>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
