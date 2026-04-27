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
    <section className="bg-black text-white border-b-4 border-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-4">
            HOW TO BUY
          </h2>
          <p className="text-2xl font-bold text-yellow-400">
            Four simple steps to join the revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black border-4 border-white p-8 rounded-2xl hover-lift h-full">
                  {/* Step number badge */}
                  <div className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center absolute -top-7 -left-7 border-4 border-black`}>
                    <span className="text-white font-black text-2xl">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 mt-4 p-4 ${step.color} rounded-xl inline-block`}>
                    <IconComponent size={40} strokeWidth={2} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-bold text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow connector */}
                  {step.number !== 4 && (
                    <div className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 text-white opacity-30 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={32} />
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
            className="bg-yellow-400 text-black px-16 py-5 font-black text-xl border-4 border-yellow-400 inline-block hover:bg-white smooth-transition hover-lift shadow-2xl rounded-xl"
          >
            START BUYING NOW
          </a>
          <p className="text-gray-400 font-bold text-sm mt-4">
            Contract: Soon™
          </p>
        </div>
      </div>
    </section>
  )
}
