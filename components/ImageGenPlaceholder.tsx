'use client'

export default function ImageGenPlaceholder() {
  return (
    <section id="image-gen" className="bg-black border-b-4 border-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black mb-12 border-b-4 border-white pb-6">
          $UNT IMAGE CREATOR
        </h2>

        <div className="bg-white text-black border-4 border-white p-12">
          <div className="bg-gray-100 border-4 border-black min-h-96 flex items-center justify-center flex-col">
            <p className="text-6xl font-black mb-4">🎨</p>
            <p className="text-3xl font-black mb-4 text-center">CREATE $UNT IMAGES</p>
            <p className="text-lg font-bold text-gray-600 mb-8 text-center max-w-md">
              Generate custom $UNT character images with AI. Your custom image generator will be embedded here.
            </p>
            <div className="bg-black text-white px-8 py-4 font-black border-4 border-black">
              GENERATOR IFRAME READY FOR EMBEDDING
            </div>
            <p className="text-sm font-bold text-gray-500 mt-6 text-center">
              Update the iframe src in ImageGenPlaceholder.tsx with your custom generator URL
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
