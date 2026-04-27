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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Price Stats */}
          <div className="space-y-4">
            <div className="bg-white text-black p-6 border-4 border-white">
              <p className="text-sm font-bold mb-2">CURRENT PRICE</p>
              <p className="text-4xl font-black">{formattedData.current}</p>
            </div>
            <div className="bg-white text-black p-6 border-4 border-white flex items-center gap-2">
              <TrendingUp className="text-green-500" size={32} />
              <div>
                <p className="text-sm font-bold">24H CHANGE</p>
                <p className="text-2xl font-black text-green-500">{formattedData.change24h}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white text-black p-4 border-4 border-white">
                <p className="text-xs font-bold mb-2">24H HIGH</p>
                <p className="text-xl font-black">{formattedData.high24h}</p>
              </div>
              <div className="bg-white text-black p-4 border-4 border-white">
                <p className="text-xs font-bold mb-2">24H LOW</p>
                <p className="text-xl font-black">{formattedData.low24h}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white text-black p-4 border-4 border-white">
                <p className="text-xs font-bold mb-2">VOLUME</p>
                <p className="text-lg font-black">{formattedData.volume}</p>
              </div>
              <div className="bg-white text-black p-4 border-4 border-white">
                <p className="text-xs font-bold mb-2">MARKET CAP</p>
                <p className="text-lg font-black">{formattedData.marketCap}</p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white text-black border-4 border-white p-8 min-h-96">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#000" />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 12, fontWeight: 'bold' }}
                  />
                  <YAxis 
                    tick={{ fontSize: 12, fontWeight: 'bold' }}
                    tickFormatter={(value) => `$${value.toFixed(5)}`}
                  />
                  <Tooltip 
                    formatter={(value: number) => formatPrice(value)}
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '2px solid #000',
                      fontWeight: 'bold'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#000" 
                    strokeWidth={2}
                    dot={{ fill: '#000', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
