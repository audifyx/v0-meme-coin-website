'use client'

export default function TickerBanner() {
  const messages = [
    '$UNT to the moon 🚀',
    'Buy $UNT NOW 💰',
    'Join the cult 👽',
    'We&apos;re not stopping 🔥',
  ]

  return (
    <div className="bg-black text-white border-b-8 border-white overflow-hidden relative shadow-2xl">
      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes ticker-pulse {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 
                        0 0 40px rgba(255, 255, 255, 0.2);
            letter-spacing: 0.12em;
          }
          50% {
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.8), 
                        0 0 60px rgba(255, 255, 255, 0.4),
                        0 0 80px rgba(255, 255, 255, 0.2);
            letter-spacing: 0.14em;
          }
        }
        
        .ticker-content {
          display: flex;
          animation: ticker-scroll 45s linear infinite;
          white-space: nowrap;
        }
        
        .ticker-item {
          padding: 0 5rem;
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          flex-shrink: 0;
          text-transform: uppercase;
          animation: ticker-pulse 4s ease-in-out infinite;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .ticker-item:hover {
          animation-play-state: paused;
          text-shadow: 0 0 50px rgba(255, 255, 255, 1), 
                      0 0 100px rgba(255, 255, 255, 0.6);
          letter-spacing: 0.18em;
          transform: scale(1.05);
        }
        
        .ticker-separator {
          display: inline-block;
          margin: 0 2rem;
          font-size: 2rem;
          opacity: 0.7;
        }
      `}</style>
      
      <div className="py-8 overflow-hidden backdrop-blur-sm bg-black border-t-4 border-white">
        <div className="ticker-content">
          {[...messages, ...messages, ...messages].map((msg, idx) => (
            <div key={idx} className="ticker-item">
              {msg} <span className="ticker-separator">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
