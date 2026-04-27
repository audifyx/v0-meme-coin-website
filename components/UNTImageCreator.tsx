'use client'

import Image from 'next/image'

export default function UNTImageCreator() {
  return (
    <section id="create" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-black text-white mb-12 text-center">
          CREATE $UNT IMAGES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051649_661-r2oJ5RTK3FSKw4kDGAWa1BUN3gpAvr.jpg"
              alt="$UNT Creator"
              width={400}
              height={400}
              className="w-full"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">
                Generate Unlimited $UNT Images
              </h3>
              <p className="text-gray-300">
                Create custom $UNT visuals in any scenario, outfit, or vibe. Powered by AI, completely free, unlimited generations.
              </p>
            </div>

            <button
              onClick={() => window.open('https://perchance.org/mp86fexf39', '_blank')}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 font-black text-lg rounded transition"
            >
              OPEN CREATOR →
            </button>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded p-6">
              <p className="font-black text-white mb-3">HOW TO USE</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Describe your $UNT image</li>
                <li>• Customize style and vibe</li>
                <li>• Generate instantly</li>
                <li>• Share with community</li>
              </ul>
            </div>

            <p className="text-xs text-gray-500">
              Opens in new tab • No login required • Free
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
