'use client'

import { Wallet, Zap, FileText, ShoppingCart, ArrowRight } from 'lucide-react'

export default function HowToBuy() {
  const steps = [
    {
      number: 1,
      title: 'Connect Wallet',
      description: 'Link your wallet to the DEX',
      icon: Wallet,
      color: 'bg-blue-500',
    },
    {
      number: 2,
      title: 'Go to DEX',
      description: 'Head to Raydium or your preferred DEX',
      icon: Zap,
      color: 'bg-purple-500',
    },
    {
      number: 3,
      title: 'Paste Contract',
      description: 'Enter the $UNT contract address',
      icon: FileText,
      color: 'bg-pink-500',
    },
    {
      number: 4,
      title: 'Buy $UNT',
      description: 'Execute your purchase and hodl',
      icon: ShoppingCart,
      color: 'bg-green-500',
    },
  ]

  return (
    <section className="bg-white border-b-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full opacity-[0.02] bg-black blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-[0.02] bg-black blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Playful header with skew */}
        <div className="mb-24">
          <div className="space-y-2 mb-8">
            <h2 className="text-8xl md:text-9xl font-black text-black leading-tight transform -skew-y-3 animate-fade-in-down">
              HOW
            </h2>
            <h2 className="text-7xl md:text-8xl font-black text-black/50 leading-tight transform skew-y-2 animate-fade-in-down ml-12">
              TO BUY
            </h2>
          </div>
          <p className="text-2xl font-black text-black animate-fade-in-up stagger-item-3 ml-4">
            4 Steps. Get Rich. 🚀
          </p>
        </div>

        {/* Playful zigzag step layout */}
        <div className="space-y-16 mb-24 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            const isEven = idx % 2 === 0
            return (
              <div
                key={step.number}
                className={`group animate-fade-in-up flex gap-6 md:gap-10 items-stretch transform ${isEven ? '' : 'md:flex-row-reverse'} ${isEven ? 'md:-rotate-1 hover:rotate-0' : 'md:rotate-2 hover:rotate-0'} smooth-transition`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Step number badge - bold circle */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-28 h-28 bg-black border-4 border-black rounded-full flex items-center justify-center shadow-heavy group-hover:scale-125 group-hover:shadow-2xl smooth-transition relative z-20">
                    <span className="text-white font-black text-6xl">{step.number}</span>
                  </div>
                </div>

                {/* Content card - playful shape */}
                <div className="flex-1 relative group/card">
                  <div className="absolute -inset-3 bg-black rounded-3xl opacity-0 group-hover/card:opacity-10 blur-lg smooth-transition"></div>
                  <div className="relative bg-white border-4 border-black rounded-3xl p-10 shadow-light hover:shadow-2xl smooth-transition overflow-hidden h-full flex flex-col justify-center">
                    {/* Icon bubble - positioned at top right */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-black text-white rounded-full flex items-center justify-center group-hover/card:rotate-45 group-hover/card:scale-110 smooth-transition shadow-heavy">
                      <IconComponent size={48} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-4xl md:text-5xl font-black text-black mb-4 pr-20 group-hover/card:translate-x-2 smooth-transition leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-bold text-gray-700 text-lg leading-relaxed max-w-sm">
                      {step.description}
                    </p>

                    {/* Playful emoji accent */}
                    <div className="text-6xl mt-4 opacity-20 group-hover/card:opacity-40 smooth-transition">
                      {step.number === 1 ? '👛' : step.number === 2 ? '⚡' : step.number === 3 ? '📝' : '💰'}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bold playful CTA button */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block transform hover:scale-110 smooth-transition"
          >
            {/* Outer rotating ring effect */}
            <div className="absolute -inset-4 border-4 border-black rounded-full opacity-50 group-hover:opacity-100 group-hover:rotate-45 smooth-transition"></div>
            
            {/* Main button */}
            <div className="relative bg-black text-white px-24 py-10 font-black text-3xl rounded-full border-4 border-black shadow-heavy hover:shadow-2xl smooth-transition inline-block">
              <span className="block group-hover:scale-110 smooth-transition origin-center">
                BUY NOW
              </span>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-4 right-4 h-2 bg-white scale-x-0 group-hover:scale-x-100 smooth-transition origin-center rounded-full"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
