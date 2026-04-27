'use client'

import { useState } from 'react'

// Configuration for PFP Generator - Update this to point to your generator URL
const PFP_GENERATOR_CONFIG = {
  ENABLED: false, // Set to true when you have a generator URL
  URL: '' // Add your PFP generator URL here
}

export default function PFPGenerator() {
  const [showInstructions, setShowInstructions] = useState(!PFP_GENERATOR_CONFIG.ENABLED)

  return (
    <section id="pfp" className="bg-black border-b-4 border-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black mb-12 border-b-4 border-white pb-6">
          $UNT PFP GENERATOR
        </h2>

        {PFP_GENERATOR_CONFIG.ENABLED && PFP_GENERATOR_CONFIG.URL ? (
          // Active PFP Generator
          <div className="bg-white border-4 border-white overflow-hidden">
            <iframe
              title="$UNT PFP Generator"
              className="w-full min-h-[600px]"
              src={PFP_GENERATOR_CONFIG.URL}
              allowFullScreen
            />
          </div>
        ) : (
          // Placeholder with instructions
          <div className="space-y-8">
            <div className="bg-white text-black border-4 border-white p-8">
              <div className="bg-gray-100 border-4 border-black min-h-96 flex items-center justify-center flex-col">
                <p className="text-6xl font-black mb-4">🎨</p>
                <p className="text-3xl font-black mb-4 text-center">PFP GENERATOR</p>
                <p className="text-lg font-bold text-gray-600 mb-8 text-center max-w-md">
                  Create your own $UNT profile picture. Your custom generator will appear here.
                </p>
                <button
                  onClick={() => setShowInstructions(!showInstructions)}
                  className="bg-black text-white px-8 py-4 font-black border-4 border-black hover:bg-gray-800"
                >
                  {showInstructions ? 'HIDE' : 'SHOW'} INSTRUCTIONS
                </button>
              </div>
            </div>

            {showInstructions && (
              <div className="bg-white text-black border-4 border-white p-8">
                <h3 className="text-2xl font-black mb-6 border-b-4 border-black pb-4">
                  HOW TO ENABLE YOUR PFP GENERATOR
                </h3>
                <div className="space-y-4 font-bold">
                  <div className="border-l-4 border-black pl-6">
                    <p className="text-lg font-black mb-2">STEP 1: Get Your Generator URL</p>
                    <p className="text-gray-600">
                      Deploy your PFP generator and get its URL (could be on Vercel, custom domain, etc.)
                    </p>
                  </div>
                  <div className="border-l-4 border-black pl-6">
                    <p className="text-lg font-black mb-2">STEP 2: Update Configuration</p>
                    <p className="text-gray-600 mb-3">
                      Edit `/components/PFPGenerator.tsx` and update:
                    </p>
                    <div className="bg-gray-100 p-4 border-2 border-black font-mono text-sm overflow-x-auto">
                      <code>{`const PFP_GENERATOR_CONFIG = {
  ENABLED: true,
  URL: 'https://your-pfp-generator.com'
}`}</code>
                    </div>
                  </div>
                  <div className="border-l-4 border-black pl-6">
                    <p className="text-lg font-black mb-2">STEP 3: Deploy</p>
                    <p className="text-gray-600">
                      Push your changes and the generator will appear automatically
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
