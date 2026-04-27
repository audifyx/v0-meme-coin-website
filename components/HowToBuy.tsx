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
    <section className="bg-white border-b-8 border-black relative overflow-visible">
      {/* Diagonal sections */}
      <div className="absolute top-0 right-0 w-full h-40 bg-black -skew-y-2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-black skew-y-3 z-0"></div>

      <div className="max-w-full mx-auto px-0 py-0 relative z-10">
        {/* Header */}
        <div className="px-8 md:px-12 py-24 relative">
          <div className="absolute top-0 left-0 text-9xl font-black text-black opacity-[0.12] leading-none -mt-8">
            BUY BUY BUY
          </div>
          <h2 className="text-10xl md:text-11xl font-black text-black mb-0 relative z-20">
            HOW<br/>TO BUY
          </h2>
        </div>

        {/* Steps grid - asymmetrical with overlaps */}
        <div className="px-8 md:px-12 py-0 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 -mt-12">
            {steps.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <div
                  key={step.number}
                  className="animate-fade-in-up hover-lift"
                  style={{ 
                    animationDelay: `${idx * 80}ms`,
                    marginTop: idx % 2 === 1 ? '48px' : '0'
                  }}
                >
                  <div className="relative bg-black border-8 border-black p-12 h-full shadow-2xl overflow-hidden group hover:border-white smooth-transition">
                    {/* Step badge - large and bold */}
                    <div className="absolute -top-8 -left-8 w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-heavy z-30">
                      <span className="text-black font-black text-4xl">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-8 mt-6">
                      <IconComponent size={48} className="text-white" strokeWidth={1.5} />
                    </div>

                    {/* Content - white text on black */}
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-bold text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-4 border-white bg-black"></div>

                    {/* Arrow - large and dramatic */}
                    {step.number !== 4 && (
                      <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 text-white opacity-30 group-hover:opacity-100 group-hover:translate-x-2 smooth-transition z-40">
                        <ArrowRight size={48} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-8 md:px-12 py-20 relative">
          <div className="text-left animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block relative"
            >
              <div className="bg-black text-white px-20 py-8 font-black text-3xl border-8 border-black shadow-2xl hover:border-white smooth-transition hover-lift relative overflow-hidden">
                <span className="relative z-10 uppercase tracking-wider">START BUYING NOW</span>
                <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 smooth-transition"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
