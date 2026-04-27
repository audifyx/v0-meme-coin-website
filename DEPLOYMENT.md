# $UNT Website Deployment Guide

## Overview
The $UNT website is built with Next.js 15 and ready for deployment to Vercel or any Node.js hosting platform.

## Current Features
- ✅ Pixel art aesthetic with white/black theme
- ✅ 8 generated character images
- ✅ Price data with mock chart (Recharts)
- ✅ Infinite scroll meme wall
- ✅ PFP Generator placeholder (ready for iframe integration)
- ✅ Responsive design
- ✅ X/Twitter integration (@UNTuniverse)

## Quick Deployment to Vercel

1. **Connect to GitHub** (if not already connected)
   - Push your code to a GitHub repository
   - Go to https://vercel.com/new
   - Import the GitHub repository

2. **Deploy**
   - Vercel will auto-detect Next.js
   - Click Deploy
   - Your site will be live in seconds

## Customization Before Deployment

### 1. Enable PFP Generator
When you have your PFP generator ready:
1. Update `components/PFPGenerator.tsx`
2. Change:
   ```typescript
   const PFP_GENERATOR_CONFIG = {
     ENABLED: true,
     URL: 'https://your-pfp-generator.com'
   }
   ```
3. Redeploy

### 2. Add Real Price Data
To connect real price data:
1. Update `lib/priceData.ts` with your API endpoint
2. Modify `getMockPriceData()` function to fetch from your API
3. Example providers: CoinGecko, Uniswap, custom backend

### 3. Add Contract Address
In `components/Footer.tsx`, update:
```jsx
Contract: 0x... | Built for the $UNT Cult
```

## SEO Optimization
The site includes:
- ✅ Meta tags and description
- ✅ OG tags ready for social sharing
- ✅ Mobile-responsive design
- ✅ Fast load times (Next.js optimizations)

## Performance Tips
- Images are optimized with Next.js Image component
- Recharts is lazy-loaded only when needed
- Infinite scroll loads 8 items at a time
- Static content is pre-rendered

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start
```

Visit http://localhost:3000

## File Structure
```
/app                    # Next.js app directory
  /page.tsx            # Main page
  /layout.tsx          # Root layout
/components            # React components
  /Header.tsx
  /Hero.tsx
  /About.tsx
  /PriceChart.tsx
  /MemeWall.tsx
  /PFPGenerator.tsx
  /Footer.tsx
/lib                   # Utilities
  /priceData.ts        # Price data & chart functions
  /utils.ts
/public               # Static assets
  /images
    /characters        # 8 character images
```

## Next Steps

1. **Add Meme Content** - Replace placeholder memes or add your own
2. **Connect Real Price Data** - Hook up your DEX or price API
3. **Enable PFP Generator** - Add your custom iframe URL
4. **Add Community Links** - Telegram, Discord, other social links
5. **Track Analytics** - Add your analytics provider
6. **Custom Domain** - Connect your domain on Vercel

## Support
If you need to update anything:
- Edit components directly
- Images are in `/public/images/characters/`
- Colors are controlled by Tailwind classes (white/black theme)
- No rounded corners - pure geometric pixel aesthetic

## Go Live Checklist
- [ ] Contract address added to footer
- [ ] X link verified (@UNTuniverse)
- [ ] Price data connected (or keeping mock)
- [ ] PFP generator enabled (or keeping placeholder)
- [ ] Images verified and loading
- [ ] Links tested
- [ ] Mobile responsive check
- [ ] Deployed to Vercel
- [ ] Custom domain configured (optional)
