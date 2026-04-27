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

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-7xl md:text-8xl font-black text-black mb-6 animate-fade-in-down leading-tight">
            HOW TO BUY
          </h2>
          <div className="h-2 w-32 rounded-full bg-black mx-auto mb-8 animate-fade-in-up stagger-item-2"></div>
          <p className="text-xl font-bold text-gray-700 max-w-2xl mx-auto animate-fade-in-up stagger-item-3">
            Four simple steps to join the revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="group animate-fade-in-up hover-lift"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="relative bg-white rounded-3xl p-10 h-full border-4 border-black shadow-light hover:shadow-heavy smooth-transition overflow-hidden">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.02] smooth-transition"></div>

                  {/* Step number badge - larger and more prominent */}
                  <div className="absolute -top-8 -left-8 w-20 h-20 bg-black border-4 border-black rounded-full flex items-center justify-center shadow-heavy group-hover:scale-125 group-hover:-top-10 group-hover:-left-10 smooth-transition">
                    <span className="text-white font-black text-4xl">{step.number}</span>
                  </div>

                  {/* Icon container - larger */}
                  <div className="relative mb-8 mt-8">
                    <div className="inline-block p-5 bg-black text-white group-hover:bg-gray-900 smooth-transition rounded-3xl">
                      <IconComponent size={44} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-black text-black mb-4 group-hover:text-gray-800 smooth-transition leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-bold text-gray-700 text-base leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-2 bg-black w-0 group-hover:w-full smooth-transition origin-left"></div>

                  {/* Arrow connector */}
                  {step.number !== 4 && (
                    <div className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 text-black opacity-30 group-hover:opacity-100 smooth-transition scale-125">
                      <ArrowRight size={36} strokeWidth={2} />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '320ms' }}>
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black text-white px-20 py-8 font-black text-2xl rounded-3xl border-4 border-black inline-block shadow-heavy hover-lift overflow-hidden"
          >
            <span className="relative z-10">START BUYING NOW</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 smooth-transition"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
