'use client'

import { useEffect, useState } from 'react'

export default function MaintenanceBanner() {
  const [frame, setFrame] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const fi = setInterval(() => setFrame(f => (f + 1) % 60), 80)
    const di = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 500)
    return () => { clearInterval(fi); clearInterval(di) }
  }, [])

  // Stick figure walking/building animation frames
  const phase = Math.floor(frame / 10) % 6

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden" style={{ background: '#000', fontFamily: "'Courier New', monospace" }}>

      {/* Starfield */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.9 ? 2 : 1,
              height: Math.random() > 0.9 ? 2 : 1,
              left: `${(i * 1.618 * 7.3) % 100}%`,
              top: `${(i * 1.618 * 4.7) % 100}%`,
              opacity: 0.1 + (i % 5) * 0.1,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i % 10) * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* 3D Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: '45%' }}>
        <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Perspective grid lines going to horizon */}
          {Array.from({ length: 12 }).map((_, i) => {
            const x = (i / 11) * 800
            return <line key={`v${i}`} x1={x} y1={0} x2={400} y2={-50} stroke="url(#gridFade)" strokeWidth="0.5" />
          })}
          {Array.from({ length: 10 }).map((_, i) => {
            const y = (i / 9) * 300
            const spread = (y / 300) * 400
            return <line key={`h${i}`} x1={400 - spread} y1={y} x2={400 + spread} y2={y} stroke="url(#gridFade)" strokeWidth="0.5" />
          })}
        </svg>
      </div>

      {/* Floating construction blocks */}
      {[
        { x: '10%', y: '60%', size: 40, delay: 0 },
        { x: '80%', y: '55%', size: 30, delay: 1 },
        { x: '15%', y: '40%', size: 20, delay: 2 },
        { x: '75%', y: '45%', size: 25, delay: 0.5 },
      ].map((block, i) => (
        <div key={i} className="absolute" style={{
          left: block.x, top: block.y,
          animation: `floatBlock 4s ease-in-out infinite`,
          animationDelay: `${block.delay}s`
        }}>
          <svg width={block.size} height={block.size} viewBox="0 0 40 40">
            <rect x="2" y="2" width="36" height="36" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
            <line x1="2" y1="2" x2="12" y2="12" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            <line x1="38" y1="2" x2="48" y2="12" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            <rect x="12" y="12" width="36" height="36" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </div>
      ))}

      {/* Animated stick figure building */}
      <div className="absolute" style={{
        left: '50%', bottom: '28%',
        transform: 'translateX(-50%)',
        animation: 'builderBob 0.8s ease-in-out infinite'
      }}>
        <svg width="120" height="160" viewBox="0 0 120 160">
          {/* Shadow */}
          <ellipse cx="60" cy="155" rx="25" ry="5" fill="#D4AF37" opacity="0.2" />

          {/* Body */}
          <circle cx="60" cy="30" r="12" fill="none" stroke="#fff" strokeWidth="2" />

          {/* Torso */}
          <line x1="60" y1="42" x2="60" y2="90" stroke="#fff" strokeWidth="2" />

          {/* Arms - animated hammering */}
          {phase < 3 ? (
            <>
              {/* Right arm up (hammer raised) */}
              <line x1="60" y1="55" x2="90" y2="40" stroke="#fff" strokeWidth="2" />
              <line x1="90" y1="40" x2="105" y2="30" stroke="#D4AF37" strokeWidth="3" />
              {/* Left arm out for balance */}
              <line x1="60" y1="55" x2="30" y2="65" stroke="#fff" strokeWidth="2" />
            </>
          ) : (
            <>
              {/* Right arm down (hammering) */}
              <line x1="60" y1="55" x2="88" y2="75" stroke="#fff" strokeWidth="2" />
              <line x1="88" y1="75" x2="100" y2="85" stroke="#D4AF37" strokeWidth="3" />
              {/* Left arm balanced */}
              <line x1="60" y1="55" x2="32" y2="50" stroke="#fff" strokeWidth="2" />
            </>
          )}

          {/* Legs */}
          <line x1="60" y1="90" x2={45 + (phase % 2 === 0 ? -5 : 5)} y2="130" stroke="#fff" strokeWidth="2" />
          <line x1="60" y1="90" x2={75 + (phase % 2 === 0 ? 5 : -5)} y2="130" stroke="#fff" strokeWidth="2" />

          {/* Feet */}
          <line x1={45 + (phase % 2 === 0 ? -5 : 5)} y1="130" x2={35 + (phase % 2 === 0 ? -5 : 5)} y2="140" stroke="#fff" strokeWidth="2" />
          <line x1={75 + (phase % 2 === 0 ? 5 : -5)} y1="130" x2={85 + (phase % 2 === 0 ? 5 : -5)} y2="140" stroke="#fff" strokeWidth="2" />

          {/* Hard hat */}
          <rect x="48" y="14" width="24" height="6" rx="3" fill="#D4AF37" />
          <rect x="44" y="18" width="32" height="3" rx="1" fill="#D4AF37" />

          {/* Impact sparks when hammering */}
          {phase >= 3 && (
            <>
              <line x1="100" y1="85" x2="112" y2="78" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />
              <line x1="100" y1="85" x2="108" y2="95" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />
              <line x1="100" y1="85" x2="115" y2="88" stroke="#fff" strokeWidth="1" opacity="0.6" />
            </>
          )}
        </svg>
      </div>

      {/* Building blocks being placed */}
      <div className="absolute" style={{ left: '55%', bottom: '18%' }}>
        <svg width="200" height="80" viewBox="0 0 200 80">
          <rect x="0" y="40" width="50" height="40" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.7" />
          <rect x="50" y="40" width="50" height="40" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" />
          <rect x="100" y="40" width="50" height="40" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.3" />
          <rect x="10" y="0" width="50" height="40" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3" />
          <rect x="60" y="0" width="50" height="40" fill="none" stroke="#fff" strokeWidth="1" opacity="0.2" style={{ animation: 'blockAppear 2s ease-in-out infinite' }} />
        </svg>
      </div>

      {/* Main Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingBottom: '15%' }}>
        <div className="text-center">
          {/* Top label */}
          <div className="flex items-center justify-center gap-4 mb-8" style={{ animation: 'fadeInDown 1s ease-out' }}>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-xs font-black tracking-[0.4em]" style={{ color: '#D4AF37' }}>UNDER CONSTRUCTION</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </div>

          {/* Big title */}
          <div style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}>
            <div className="font-black leading-none" style={{
              fontSize: 'clamp(4rem, 14vw, 9rem)',
              letterSpacing: '-0.03em',
              color: '#fff',
              textShadow: '0 0 60px rgba(212,175,55,0.3)'
            }}>
              COMING
            </div>
            <div className="font-black leading-none" style={{
              fontSize: 'clamp(4rem, 14vw, 9rem)',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #D4AF37, #FFF5CC, #D4AF37)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              SOON
            </div>
          </div>

          {/* Subtitle */}
          <div className="mt-8 space-y-2" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
            <p className="font-bold tracking-[0.2em] text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              REBUILDING THE $UNT UNIVERSE{dots}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-10" style={{ animation: 'fadeInUp 1s ease-out 0.9s both' }}>
            <a href="https://x.com/UNTuniverse" target="_blank"
              className="text-xs font-black tracking-widest transition-all hover:opacity-80"
              style={{ border: '1px solid rgba(212,175,55,0.4)', color: 'rgba(255,255,255,0.6)', padding: '10px 20px' }}>
              X / TWITTER
            </a>
            <a href="https://x.com/i/communities/2037521607527391725" target="_blank"
              className="text-xs font-black tracking-widest transition-all hover:opacity-80"
              style={{ background: '#D4AF37', color: '#000', padding: '10px 20px' }}>
              COMMUNITY
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.8; }
        }
        @keyframes floatBlock {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes builderBob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-4px); }
        }
        @keyframes blockAppear {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}
