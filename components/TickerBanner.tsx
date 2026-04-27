'use client'

export default function TickerBanner() {
  const messages = [
    '$UNT to the moon 🚀',
    'Buy $UNT NOW 💰',
    'Join the cult 👽',
    'We&apos;re not stopping 🔥',
  ]

  return (
    <div className="bg-black text-white border-b-4 border-black overflow-hidden relative">
      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .ticker-content {
          display: flex;
          animation: ticker-scroll 30s linear infinite;
          white-space: nowrap;
        }
        
        .ticker-item {
          padding: 0 3rem;
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }
      `}</style>
      
      <div className="py-4 overflow-hidden">
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
