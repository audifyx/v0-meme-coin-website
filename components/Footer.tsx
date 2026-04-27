'use client'

import { Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t-8 border-black relative overflow-hidden">
      {/* Diagonal sections */}
      <div className="absolute top-0 left-0 w-full h-32 bg-black skew-y-3 z-0"></div>

      <div className="max-w-full mx-auto px-0 relative z-10">
        <div className="px-8 md:px-12 py-32 relative">
          {/* Header */}
          <div className="mb-20 relative">
            <div className="absolute -top-12 left-0 text-8xl font-black text-black opacity-[0.12] leading-none whitespace-nowrap">
              STAY STRONG
            </div>
            <h3 className="text-9xl md:text-10xl font-black text-black relative z-20 mb-12">
              $UNT
            </h3>
            <p className="font-black text-2xl text-gray-800 max-w-2xl">
              Born from the trenches. Rising to the top. A global movement.
            </p>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Navigate */}
            <div className="animate-fade-in-up">
              <h4 className="text-4xl font-black text-black mb-8 uppercase">Navigate</h4>
              <ul className="space-y-4">
                {[
                  { href: '#hero', label: 'HOME' },
                  { href: '#about', label: 'ABOUT' },
                  { href: '#chart', label: 'CHART' },
                  { href: '#image-gen', label: 'CREATE' },
                  { href: '#memes', label: 'MEMES' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group/link font-black text-xl text-black hover:text-gray-700 smooth-transition relative inline-block"
                    >
                      {item.label}
                      <div className="absolute bottom-0 left-0 h-2 bg-black w-0 group-hover/link:w-full smooth-transition origin-left"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Join Cult */}
            <div className="animate-fade-in-up stagger-item-2">
              <h4 className="text-4xl font-black text-black mb-8 uppercase">Join The Cult</h4>
              <a
                href="https://x.com/UNTuniverse"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex flex-col gap-4 bg-black text-white px-12 py-10 font-black border-6 border-black shadow-2xl hover-lift relative overflow-hidden"
              >
                <Twitter size={40} className="group-hover/btn:rotate-12 smooth-transition" />
                <span className="text-2xl uppercase tracking-wider relative z-10">@UNTuniverse</span>
                <div className="absolute inset-0 bg-gray-900 -translate-x-full group-hover/btn:translate-x-0 smooth-transition"></div>
              </a>
            </div>

            {/* Mission */}
            <div className="animate-fade-in-up stagger-item-3">
              <h4 className="text-4xl font-black text-black mb-8 uppercase">Mission</h4>
              <div className="bg-black text-white p-8 border-6 border-black">
                <p className="font-black text-xl leading-tight">
                  INDEPENDENCE<br/>
                  LOVE<br/>
                  CRAZINESS<br/>
                  WEALTH<br/>
                  FUN
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t-8 border-black pt-12">
            <p className="font-black text-black text-center mb-8 text-xl uppercase tracking-widest">
              CONTRACT: COMING SOON
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-black text-gray-800 text-lg">
                © 2026 $UNT. BUILT FOR THE CULT.
              </p>
              <p className="font-black text-lg">
                Built by{' '}
                <a
                  href="https://x.com/para1laxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/creator text-black hover:text-gray-700 smooth-transition relative inline-block border-b-4 border-black pb-1"
                >
                  @para1laxx
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
