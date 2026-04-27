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
    <section className="bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 border-b-4 border-black relative overflow-hidden">
      {/* Floating playful shapes */}
      <div className="absolute top-10 right-10 w-28 h-28 rounded-full bg-green-300 opacity-30 animate-float-bob"></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 rounded-3xl bg-cyan-200 opacity-20 animate-float-bob" style={{ animationDelay: '0.6s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-blue-300 opacity-25 animate-float-bob" style={{ animationDelay: '1.2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 mb-4 animate-fade-in-down">
            HOW TO BUY
          </h2>
          <div className="h-3 w-24 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mb-8 animate-fade-in-up stagger-item-2"></div>
          <p className="text-xl font-bold text-gray-700 max-w-2xl mx-auto animate-fade-in-up stagger-item-3">
            Four easy steps to join the $UNT revolution 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            const colors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-blue-500', 'from-pink-500 to-purple-500', 'from-green-500 to-emerald-500']
            return (
              <div
                key={step.number}
                className="group animate-fade-in-up hover-lift-subtle"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`relative bg-gradient-to-br ${colors[idx]} rounded-3xl p-8 h-full border-4 border-white shadow-lg hover:shadow-2xl smooth-transition overflow-hidden`}>
                  {/* Step number badge */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-white border-4 border-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 smooth-transition">
                    <span className="text-black font-black text-3xl">{step.number}</span>
                  </div>

                  {/* Icon container */}
                  <div className="relative mb-6 mt-4">
                    <div className="inline-block p-4 bg-white/20 backdrop-blur-sm text-white group-hover:bg-white/40 smooth-transition rounded-2xl border-2 border-white/30">
                      <IconComponent size={40} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:scale-105 smooth-transition origin-left">
                    {step.title}
                  </h3>
                  <p className="font-bold text-white/80 text-base leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full smooth-transition origin-left"></div>

                  {/* Arrow connector */}
                  {step.number !== 4 && (
                    <div className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 text-white opacity-30 group-hover:opacity-100 smooth-transition">
                      <ArrowRight size={36} strokeWidth={2} />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center pt-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-white px-16 py-6 font-black text-lg rounded-2xl border-4 border-white inline-block shadow-lg hover:shadow-2xl smooth-transition hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">🚀 START BUYING NOW</span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 smooth-transition"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
