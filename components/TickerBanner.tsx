'use client'

export default function TickerBanner() {
  const messages = [
    '$UNT to the moon 🚀',
    'Buy $UNT NOW 💰',
    'Join the cult 👽',
    'We&apos;re not stopping 🔥',
  ]

  return (
    <div className="bg-black text-white border-b-4 border-black overflow-hidden relative shadow-heavy">
      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes ticker-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3);
          }
        }
        
        .ticker-content {
          display: flex;
          animation: ticker-scroll 40s linear infinite;
          white-space: nowrap;
        }
        
        .ticker-item {
          padding: 0 4rem;
          font-size: 1.75rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          flex-shrink: 0;
          text-transform: uppercase;
          animation: ticker-glow 3s ease-in-out infinite;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .ticker-item:hover {
          animation-play-state: paused;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.9);
          letter-spacing: 0.15em;
        }
      `}</style>
      
      <div className="py-6 overflow-hidden backdrop-blur-sm">
        <div className="ticker-content">
          {[...messages, ...messages, ...messages].map((msg, idx) => (
            <div key={idx} className="ticker-item">
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
