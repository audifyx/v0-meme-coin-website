import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowToBuy from '@/components/HowToBuy'
import PriceChart from '@/components/PriceChart'
import MemeWall from '@/components/MemeWall'
import FAQ from '@/components/FAQ'
import UNTImageCreator from '@/components/UNTImageCreator'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Repeating tagline banner */}
      <div className="bg-black text-white py-3 border-b-4 border-black overflow-hidden">
        <div className="inline-block whitespace-nowrap animate-scroll text-sm font-black">
          <span>★ $UNC NEEDS $UNT ★ NOT A TOKEN, A MOVEMENT ★ 7 BANS, STILL HERE ★ $1M ON DAY 1 ★ COMMUNITY IS STRENGTH ★ $UNC NEEDS $UNT ★ NOT A TOKEN, A MOVEMENT ★ 7 BANS, STILL HERE ★ $1M ON DAY 1 ★ COMMUNITY IS STRENGTH ★</span>
        </div>
      </div>

      <Header />
      <Hero />
      <About />
      <HowToBuy />
      <PriceChart />
      <MemeWall />
      <FAQ />
      <UNTImageCreator />
      <Footer />
    </main>
  )
}
