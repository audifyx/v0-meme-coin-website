import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PriceChart from '@/components/PriceChart'
import ImageGenerator from '@/components/ImageGenerator'
import MemeWall from '@/components/MemeWall'
import PFPGenerator from '@/components/PFPGenerator'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <About />
      <PriceChart />
      <ImageGenerator />
      <MemeWall />
      <PFPGenerator />
      <Footer />
    </main>
  )
}
