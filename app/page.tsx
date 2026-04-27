import Header from '@/components/Header'
import TickerBanner from '@/components/TickerBanner'
import Hero from '@/components/Hero'
import HowToBuy from '@/components/HowToBuy'
import About from '@/components/About'
import PriceChart from '@/components/PriceChart'
import MemeWall from '@/components/MemeWall'
import UNTImageCreator from '@/components/UNTImageCreator'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <TickerBanner />
      <Header />
      <Hero />
      <HowToBuy />
      <About />
      <PriceChart />
      <MemeWall />
      <UNTImageCreator />
      <Footer />
    </main>
  )
}
