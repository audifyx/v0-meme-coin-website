'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Why is $UNT different from every other token?',
      answer: 'Because $UNC needs $UNT. This isn\'t just a token—it\'s a movement. We have community, culture, and persistence. We\'ve survived 7 X bans, chart nukes, and system pressure. We\'re still here.'
    },
    {
      question: 'What happened in the last launch?',
      answer: 'We hit $5K to $1M in 24 hours. We proved the potential. Then came the suppression—7 bans, charts offline, everything nuked. But the community held. Now we\'re back stronger.'
    },
    {
      question: 'How many times was the project banned?',
      answer: '7 times on X/Twitter. Each time, we came back. It shows the power of the community and the threat we pose to the system that tried to silence us.'
    },
    {
      question: 'Is this financial advice?',
      answer: 'No. Do your own research. This is a community movement with a shared vision. We\'re not promising returns—we\'re building something real.'
    },
    {
      question: 'Where can I buy $UNT?',
      answer: 'On Solana DEXes like Raydium, using the contract address. Follow the "How to Get $UNT" section above for step-by-step instructions.'
    },
    {
      question: 'What makes the community so strong?',
      answer: 'Because we\'ve been tested. 7 bans couldn\'t kill us. Charts being nuked didn\'t stop us. It\'s not blind faith—it\'s conviction. We\'ve earned our place.'
    }
  ]

  return (
    <section className="bg-white py-20 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-black text-black mb-12 border-b-4 border-black pb-6">
          QUESTIONS FROM THE CULT
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-4 border-black">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white text-black p-6 font-black text-left hover:bg-black hover:text-white transition flex items-center justify-between"
              >
                <span className="text-xl">{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="bg-white text-black p-6 border-t-4 border-black font-bold">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
