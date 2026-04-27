export default function HowToBuy() {
  return (
    <section className="bg-white py-20 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-black text-black mb-16 border-b-4 border-black pb-6">
          HOW TO GET $UNT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="border-4 border-black p-8 bg-white">
            <p className="text-6xl font-black text-black mb-4">01</p>
            <h3 className="text-2xl font-black text-black mb-4">GET A WALLET</h3>
            <p className="font-bold text-black">
              Download Phantom, MetaMask, or any Solana-compatible wallet.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border-4 border-black p-8 bg-white">
            <p className="text-6xl font-black text-black mb-4">02</p>
            <h3 className="text-2xl font-black text-black mb-4">FUND YOUR WALLET</h3>
            <p className="font-bold text-black">
              Buy SOL or another token. $UNT is on Solana network.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-4 border-black p-8 bg-white">
            <p className="text-6xl font-black text-black mb-4">03</p>
            <h3 className="text-2xl font-black text-black mb-4">SWAP FOR $UNT</h3>
            <p className="font-bold text-black">
              Use DEX like Raydium. Paste contract address. Swap SOL for $UNT.
            </p>
          </div>

          {/* Step 4 */}
          <div className="border-4 border-black p-8 bg-white">
            <p className="text-6xl font-black text-black mb-4">04</p>
            <h3 className="text-2xl font-black text-black mb-4">HOLD & HODL</h3>
            <p className="font-bold text-black">
              You now own a piece of the movement. Welcome to $UNT.
            </p>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-16 bg-black text-white border-4 border-black p-8">
          <p className="text-sm font-bold mb-2">CONTRACT ADDRESS</p>
          <p className="text-2xl font-black break-all">
            COMING SOON
          </p>
          <p className="text-xs font-bold mt-2 text-gray-400">Copy & paste into your DEX</p>
        </div>
      </div>
    </section>
  )
}
