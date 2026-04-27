'use client'

export default function TickerBanner() {
  const messages = [
    '$UNT to the moon 🚀',
    'Buy $UNT NOW 💰',
    'Join the cult 👽',
    'We&apos;re not stopping 🔥',
  ]

  return (
    <div className="bg-yellow-400 text-black border-b-4 border-black overflow-hidden">
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
          animation: ticker-scroll 20s linear infinite;
          white-space: nowrap;
        }
        
        .ticker-item {
          padding: 0 2rem;
          font-size: 1.25rem;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
      `}</style>
      
      <div className="py-3 overflow-hidden">
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
