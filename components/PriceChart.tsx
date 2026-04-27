'use client'

import { TrendingUp } from 'lucide-react'
import { getMockPriceData, formatPrice, formatUSD, formatPercent } from '@/lib/priceData'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function PriceChart() {
  const data = getMockPriceData()
  
  const formattedData = {
    current: formatPrice(data.current),
    change24h: formatPercent(data.change24h),
    high24h: formatPrice(data.high24h),
    low24h: formatPrice(data.low24h),
    volume: formatUSD(data.volume),
    marketCap: formatUSD(data.marketCap)
  }

  return (
    <section id="chart" className="bg-black text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-black mb-12 border-b-4 border-white pb-6">
          PRICE & CHART
        </h2>

        <div className="bg-white text-black border-4 border-white p-12 min-h-96 flex flex-col items-center justify-center">
          <p className="text-6xl font-black mb-6">📊</p>
          <p className="text-5xl font-black mb-4 text-center">COMING SOON</p>
          <p className="text-xl font-bold text-gray-600 text-center max-w-md">
            Real-time price data and interactive charts are being prepared. Stay tuned for live market updates.
          </p>
        </div>
      </div>
    </section>
  )
}
