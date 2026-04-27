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
    <section className="bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black text-black mb-4 text-center">
          HOW TO BUY $UNT
        </h2>
        <p className="text-xl font-bold text-center text-black mb-12 max-w-2xl mx-auto">
          Four simple steps to join the revolution
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="relative bg-white border-4 border-black p-8 hover:shadow-lg transition-shadow duration-300 group animate-fade-in-up"
              >
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-black border-4 border-black rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-3xl">{step.number}</span>
                </div>

                <div className="mt-8">
                  <div className="mb-4 inline-block p-3 bg-black text-white rounded-lg">
                    <IconComponent size={32} strokeWidth={3} />
                  </div>

                  <h3 className="text-2xl font-black text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="font-bold text-black text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {step.number !== 4 && (
                  <div className="hidden lg:block absolute -right-7 top-1/2 transform -translate-y-1/2 w-14 h-1 bg-black"></div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-12 py-4 font-black text-lg border-4 border-black inline-block hover:bg-gray-900 transition-colors duration-300 animate-fade-in-up"
          >
            START BUYING NOW
          </a>
        </div>
      </div>
    </section>
  )
}
