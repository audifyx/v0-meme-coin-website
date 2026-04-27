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
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-black mb-4 animate-fade-in-down">
            HOW TO BUY
          </h2>
          <div className="h-2 w-24 bg-black mx-auto mb-8 animate-fade-in-up stagger-item-2"></div>
          <p className="text-xl font-bold text-gray-700 max-w-2xl mx-auto animate-fade-in-up stagger-item-3">
            Four simple steps to join the revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="group animate-fade-in-up hover-lift-subtle"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative bg-white border-4 border-black p-10 h-full shadow-light hover:shadow-heavy smooth-transition overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.02] smooth-transition"></div>

                  {/* Step number badge */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-black border-4 border-black rounded-full flex items-center justify-center shadow-heavy group-hover:scale-110 smooth-transition">
                    <span className="text-white font-black text-3xl">{step.number}</span>
                  </div>

                  {/* Icon container */}
                  <div className="relative mb-6 mt-8">
                    <div className="inline-block p-4 bg-black text-white group-hover:bg-gray-900 smooth-transition">
                      <IconComponent size={36} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-black mb-3 group-hover:text-gray-800 smooth-transition">
                    {step.title}
                  </h3>
                  <p className="font-bold text-gray-700 text-base leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover:w-full smooth-transition origin-left"></div>

                  {/* Arrow connector */}
                  {step.number !== 4 && (
                    <div className="hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 text-black opacity-20 group-hover:opacity-100 smooth-transition">
                      <ArrowRight size={32} strokeWidth={2} />
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
            className="group relative bg-black text-white px-16 py-6 font-black text-lg border-4 border-black inline-block shadow-heavy hover-lift-subtle overflow-hidden"
          >
            <span className="relative z-10">START BUYING NOW</span>
            <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 smooth-transition"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
