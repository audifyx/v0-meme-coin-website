'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'

interface GeneratedImage {
  id: string
  prompt: string
  url?: string
  loading: boolean
}

const PRESET_PROMPTS = [
  {
    name: 'Luxury Jet',
    prompt: 'Blonde girl with pink bow wearing sunglasses, on a private jet, gold accents, luxury interior, champagne glass, confident smile'
  },
  {
    name: 'Casino Win',
    prompt: 'Blonde girl with pink bow, sunglasses, at casino poker table, holding winning cards, stacks of chips, glamorous pink dress'
  },
  {
    name: 'Yacht Life',
    prompt: 'Blonde girl with pink bow sunglasses on luxury yacht, champagne, sunset, elegant white outfit, pearl necklace'
  },
  {
    name: 'Mansion Style',
    prompt: 'Blonde girl with pink bow, sunglasses, in mansion, gold decorations, luxury furniture, confident pose, pink accessories'
  },
  {
    name: 'High Fashion',
    prompt: 'Blonde girl with pink bow, sunglasses, high fashion photoshoot, designer clothes, luxury accessories, glamorous setting'
  },
  {
    name: 'World Traveler',
    prompt: 'Blonde girl with pink bow, sunglasses, traveling first class, luxury hotel, global locations, adventure mood'
  },
]

export default function ImageGenerator() {
  const [customPrompt, setCustomPrompt] = useState('')
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateImage = async (prompt: string) => {
    const fullPrompt = `$UNT character style - ${prompt}. Blonde girl with pink bow, black sunglasses, confident expression, illustration art style, luxury theme`
    
    const newImage: GeneratedImage = {
      id: Date.now().toString(),
      prompt: prompt,
      loading: true
    }
    
    setGeneratedImages(prev => [newImage, ...prev])
    setIsGenerating(true)

    // API integration point - ready for actual image generation API
    // Replace with your actual image generation endpoint
    try {
      // Simulated delay - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Once you have an actual API, uncomment and use:
      // const response = await fetch('/api/generate-image', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ prompt: fullPrompt })
      // })
      // const data = await response.json()
      // setGeneratedImages(prev => prev.map(img => 
      //   img.id === newImage.id ? { ...img, url: data.imageUrl, loading: false } : img
      // ))
      
      // For now, show placeholder
      setGeneratedImages(prev => prev.map(img => 
        img.id === newImage.id ? { ...img, loading: false } : img
      ))
    } catch (error) {
      console.log('[v0] Image generation error:', error)
      setGeneratedImages(prev => prev.map(img => 
        img.id === newImage.id ? { ...img, loading: false } : img
      ))
    }
    
    setIsGenerating(false)
  }

  return (
    <section id="image-gen" className="bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black mb-4 border-b-4 border-black pb-6">
          $UNT IMAGE GENERATOR
        </h2>
        <p className="text-lg font-bold text-gray-600 mb-12">
          Create stunning $UNT character images in luxury scenarios. Use our presets or write your own prompt.
        </p>

        {/* Custom Prompt Section */}
        <div className="bg-black text-white border-4 border-black p-8 mb-12">
          <label className="block text-sm font-bold mb-4">CUSTOM PROMPT</label>
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="Describe your $UNT image... (e.g., 'at a fancy dinner with celebrities')"
            className="w-full bg-white text-black border-4 border-white p-4 font-bold resize-none focus:outline-none focus:ring-2 focus:ring-white mb-4"
            rows={4}
          />
          <button
            onClick={() => customPrompt && handleGenerateImage(customPrompt)}
            disabled={isGenerating || !customPrompt}
            className={`w-full py-4 px-6 font-black text-lg border-4 border-white transition-all ${
              isGenerating || !customPrompt
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {isGenerating ? 'GENERATING...' : 'GENERATE IMAGE'}
          </button>
        </div>

        {/* Preset Prompts */}
        <div className="mb-12">
          <h3 className="text-2xl font-black mb-6 border-b-4 border-black pb-4">
            PRESET SCENARIOS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRESET_PROMPTS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => handleGenerateImage(preset.prompt)}
                disabled={isGenerating}
                className="bg-white text-black border-4 border-black p-6 hover:bg-black hover:text-white transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Sparkles className="mb-3 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-lg">{preset.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Generated Images Gallery */}
        {generatedImages.length > 0 && (
          <div>
            <h3 className="text-2xl font-black mb-6 border-b-4 border-black pb-4">
              GENERATED IMAGES ({generatedImages.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-black border-4 border-black overflow-hidden"
                >
                  <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center">
                    {image.loading ? (
                      <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                        <div className="animate-spin mb-4">
                          <Sparkles size={40} className="text-black" />
                        </div>
                        <p className="font-bold text-black">GENERATING...</p>
                      </div>
                    ) : image.url ? (
                      <img
                        src={image.url}
                        alt={image.prompt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-white flex items-center justify-center">
                        <p className="font-bold text-black text-center px-4">
                          Ready to download when generated
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="bg-white text-black p-4 border-t-4 border-black">
                    <p className="text-xs font-bold line-clamp-2">{image.prompt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-12 bg-white border-4 border-black p-8">
          <h4 className="text-xl font-black mb-4 border-b-4 border-black pb-4">
            HOW IT WORKS
          </h4>
          <div className="space-y-4 font-bold text-gray-700">
            <p>1. Choose a preset scenario or write your own custom prompt</p>
            <p>2. Click GENERATE to create your unique $UNT character image</p>
            <p>3. Download and share your creation with the community</p>
            <p>4. Images are generated in the signature $UNT aesthetic</p>
          </div>
        </div>
      </div>
    </section>
  )
}
