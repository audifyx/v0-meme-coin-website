import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PriceChart from '@/components/PriceChart'
import MemeWall from '@/components/MemeWall'
import UNTImageCreator from '@/components/UNTImageCreator'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black via-slate-900 to-black">
      <Header />
      <Hero />
      <About />
      <PriceChart />
      <MemeWall />
      <UNTImageCreator />
      <Footer />
    </main>
  )
}
