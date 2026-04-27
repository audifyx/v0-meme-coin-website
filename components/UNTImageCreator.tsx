'use client'

import Image from 'next/image'

export default function UNTImageCreator() {
  return (
    <section id="image-gen" className="bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black mb-8 border-b-4 border-black pb-6">
          CREATE $UNT IMAGES
        </h2>

        {/* Preview Image */}
        <div className="mb-12 flex justify-center">
          <div className="border-4 border-black w-full max-w-2xl overflow-hidden bg-gray-100">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260427_051649_661-r2oJ5RTK3FSKw4kDGAWa1BUN3gpAvr.jpg"
              alt="$UNT Image Creator Preview"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Creator Section */}
        <div className="space-y-6">
          {/* Description */}
          <div className="bg-white text-black border-4 border-black p-8">
            <p className="text-lg font-bold leading-relaxed">
              Generate unlimited custom $UNT character images. From luxury lifestyle scenes to epic battles, 
              create the perfect visual for your collection. Use the creator below to design your unique $UNT moment.
            </p>
          </div>

          {/* Embedded Creator */}
          <div className="bg-white border-4 border-black overflow-hidden">
            <iframe
              src="https://perchance.org/mp86fexf39"
              title="$UNT Image Creator"
              className="w-full min-h-[800px] md:min-h-[900px] border-none"
              allow="fullscreen"
            />
          </div>

          {/* Instructions */}
          <div className="bg-black text-white border-4 border-white p-8">
            <h3 className="text-2xl font-black mb-4">HOW TO USE</h3>
            <div className="space-y-3 font-bold">
              <p>✦ Select your luxury scenario or describe your vision</p>
              <p>✦ Customize details - style, setting, mood</p>
              <p>✦ Generate your unique $UNT image</p>
              <p>✦ Save & share with the community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
