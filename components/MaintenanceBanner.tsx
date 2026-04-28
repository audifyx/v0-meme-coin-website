'use client'

export default function MaintenanceBanner() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
      
      {/* Banner */}
      <div className="relative z-10 text-center px-8 py-16 border border-white/20 bg-black/60 max-w-lg w-full mx-4">
        <p className="text-white/40 text-xs font-bold tracking-widest mb-6">✦ STATUS</p>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          COMING<br/>SOON
        </h1>
        <div className="w-16 h-px bg-white/20 mx-auto my-6"></div>
        <p className="text-white/50 font-bold tracking-wide">Site will be back soon.</p>
        <p className="text-white/30 text-sm mt-3">Follow <a href="https://x.com/UNTuniverse" target="_blank" className="text-white/50 hover:text-white transition underline">@UNTuniverse</a> for updates.</p>
      </div>
    </div>
  )
}
