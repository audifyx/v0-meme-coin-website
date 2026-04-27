'use client'

import { Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <h3 className="text-4xl font-black text-black mb-4">$UNT</h3>
            <p className="font-bold text-black">
              A global icon born from the trenches. The future is $UNT.
            </p>
          </div>

          {/* Links */}
          <div className="animate-fade-in-up stagger-item-2">
            <h4 className="text-xl font-black text-black mb-4">NAVIGATE</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="font-bold text-black hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="font-bold text-black hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#chart" className="font-bold text-black hover:underline">
                  Chart
                </Link>
              </li>
              <li>
                <Link href="#image-gen" className="font-bold text-black hover:underline">
                  Create
                </Link>
              </li>
              <li>
                <Link href="#memes" className="font-bold text-black hover:underline">
                  Memes
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="animate-fade-in-up stagger-item-3">
            <h4 className="text-xl font-black text-black mb-4">COMMUNITY</h4>
            <a
              href="https://x.com/UNTuniverse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold border-2 border-black hover:bg-gray-800 smooth-transition hover-lift"
            >
              <Twitter size={20} />
              <span>@UNTuniverse</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-black pt-8">
          <p className="font-black text-black text-center md:text-left mb-4">
            Contract: Coming Soon | Built for the $UNT Cult
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-bold text-black mb-4 md:mb-0">
              © 2026 $UNT. All rights reserved.
            </p>
            <p className="font-bold text-black">
              Built by{' '}
              <a
                href="https://x.com/para1laxx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @para1laxx
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
