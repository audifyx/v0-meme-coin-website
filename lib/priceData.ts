// Mock price data - Replace with real API calls
export interface PriceData {
  current: number
  change24h: number
  high24h: number
  low24h: number
  volume: number
  marketCap: number
  chartData: Array<{ time: string; price: number }>
}

// Generate mock chart data
export const generateMockChartData = (days: number = 7) => {
  const data = []
  const now = Date.now()
  const dayMs = 24 * 60 * 60 * 1000
  
  for (let i = days; i >= 0; i--) {
    const time = new Date(now - i * dayMs)
    const basePrice = 0.00042
    const volatility = Math.sin(i * 0.5) * 0.0002 + Math.random() * 0.00005
    const price = basePrice + volatility
    
    data.push({
      time: time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: Math.max(price, 0.0001)
    })
  }
  
  return data
}

export const getMockPriceData = (): PriceData => {
  return {
    current: 0.00042,
    change24h: 156.32,
    high24h: 0.00051,
    low24h: 0.00018,
    volume: 2400000,
    marketCap: 420000,
    chartData: generateMockChartData(7)
  }
}

// Format functions
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(8)}`
}

export const formatUSD = (value: number): string => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K`
  }
  return `$${value.toFixed(0)}`
}

export const formatPercent = (value: number): string => {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}
