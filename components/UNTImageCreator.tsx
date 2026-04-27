'use client'

import Image from 'next/image'

const CREATOR_URL = 'https://perchance.org/mp86fexf39'

export default function UNTImageCreator() {
  const openCreator = () => {
    window.open(CREATOR_URL, '_blank')
  }

  return (
    <section id="image-gen" className="bg-black border-b-4 border-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black mb-12 border-b-4 border-white pb-6">
          CREATE $UNT IMAGES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Preview Image */}
          <div className="flex justify-center">
            <div className="border-4 border-white overflow-hidden max-w-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051649_661-r2oJ5RTK3FSKw4kDGAWa1BUN3gpAvr.jpg"
                alt="$UNT Image Creator Preview"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>

          {/* Creator Section */}
          <div className="space-y-6">
            <div>
              <p className="text-2xl font-black mb-4">GENERATE UNLIMITED $UNT IMAGES</p>
              <p className="text-lg font-bold mb-6">
                Create custom $UNT in any scenario, outfit, or vibe. Powered by AI, unlimited generations, completely free.
              </p>
            </div>

            <button
              onClick={openCreator}
              className="w-full bg-white text-black px-8 py-6 font-black text-xl border-4 border-white hover:bg-gray-100 transition"
            >
              OPEN IMAGE CREATOR →
            </button>

            <div className="bg-white text-black p-6 border-4 border-white">
              <p className="font-black text-sm mb-3">HOW TO CREATE</p>
              <ul className="space-y-2 text-sm font-bold">
                <li>• Describe your $UNT vision</li>
                <li>• Customize style, outfit, setting</li>
                <li>• Generate your unique image</li>
                <li>• Share with the community</li>
              </ul>
            </div>

            <p className="text-sm font-bold text-gray-300">
              Opens in new tab • No login • Free & unlimited
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
