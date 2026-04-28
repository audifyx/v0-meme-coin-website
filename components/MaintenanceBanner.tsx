'use client'

import { useEffect, useState } from 'react'

export default function MaintenanceBanner() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(d => d.length >= 3 ? '' : d + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      {/* Animated gold orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)', animation: 'floatOrb1 8s ease-in-out infinite' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', animation: 'floatOrb2 10s ease-in-out infinite' }} />
        <div className="absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-2xl w-full mx-4" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
        {/* Top line */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
          <span className="text-xs font-black tracking-[0.4em]" style={{ color: '#D4AF37' }}>✦ $UNT ✦</span>
          <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
        </div>

        {/* Main text */}
        <h1 className="font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', letterSpacing: '-0.02em', animation: 'glowPulse 3s ease-in-out infinite' }}>
          COMING
        </h1>
        <h1 className="font-black leading-none mb-10" style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #D4AF37 0%, #FFF5CC 50%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'shimmerText 3s ease-in-out infinite' }}>
          SOON
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12" style={{ background: '#D4AF37' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4AF37' }} />
          <div className="h-px w-12" style={{ background: '#D4AF37' }} />
        </div>

        {/* Subtitle */}
        <p className="text-white/50 font-bold tracking-[0.2em] text-sm mb-2 uppercase">
          Site will be back soon{dots}
        </p>
        <p className="text-white/20 text-xs tracking-widest">
          Follow{' '}
          <a href="https://x.com/UNTuniverse" target="_blank" className="transition" style={{ color: '#D4AF37' }}>
            @UNTuniverse
          </a>{' '}
          for updates
        </p>

        {/* Bottom badges */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <a href="https://x.com/UNTuniverse" target="_blank"
            className="border px-5 py-2 text-xs font-black tracking-widest text-white/60 hover:text-white transition"
            style={{ borderColor: 'rgba(212,175,55,0.3)' }}>
            X / TWITTER
          </a>
          <a href="https://x.com/i/communities/2037521607527391725" target="_blank"
            className="px-5 py-2 text-xs font-black tracking-widest transition"
            style={{ background: '#D4AF37', color: '#000' }}>
            COMMUNITY
          </a>
        </div>
      </div>

      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -40px) scale(1.1); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.1); }
          50% { text-shadow: 0 0 40px rgba(255,255,255,0.2); }
        }
        @keyframes shimmerText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}
