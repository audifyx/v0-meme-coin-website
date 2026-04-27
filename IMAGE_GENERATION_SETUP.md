# $UNT Image Generator Integration Guide

## Overview
The Image Generator component is fully built and ready for API integration. It has a clean white/black design matching your site and includes 6 preset scenarios plus custom prompt support.

## Current Status
- **UI**: Complete and functional
- **Image Generation**: Placeholder mode (simulated 2-second generation)
- **Styling**: Matches $UNT white/black aesthetic with bold 4px borders

## Integration Steps

### Step 1: Choose Your Image Generation Provider

Pick one of these options:

#### Option A: Vercel AI SDK (Recommended)
Uses the AI Gateway with providers like Fal for image generation
```bash
pnpm add ai @ai-sdk/fal
```

#### Option B: Direct Provider API
- **Fal AI**: `https://api.fal.ai/v1/image-generation`
- **Stability AI**: Stable Diffusion API
- **OpenAI DALL-E**: `https://api.openai.com/v1/images/generations`
- **Midjourney**: Via API wrapper

#### Option C: Custom Backend
Build your own endpoint that handles image generation

### Step 2: Create API Route

Create `/app/api/generate-image/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()
    
    // Your image generation logic here
    // Example with Fal AI:
    // const imageUrl = await generateImageWithFal(prompt)
    
    return NextResponse.json({ 
      imageUrl: 'your-generated-image-url',
      prompt 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 })
  }
}
```

### Step 3: Enable in ImageGenerator Component

Edit `/components/ImageGenerator.tsx`:

Uncomment the API call section (lines 67-78):

```typescript
const response = await fetch('/api/generate-image', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: fullPrompt })
})
const data = await response.json()
setGeneratedImages(prev => prev.map(img => 
  img.id === newImage.id ? { ...img, url: data.imageUrl, loading: false } : img
))
```

And comment out the simulated delay section (lines 59-65).

## Preset Scenarios Included

1. **Luxury Jet** - Private jet interior with champagne
2. **Casino Win** - Poker table with winning cards
3. **Yacht Life** - Luxury yacht at sunset
4. **Mansion Style** - High-end mansion setting
5. **High Fashion** - Designer photoshoot aesthetic
6. **World Traveler** - First class travel

## Customization

### Change Character Details
Edit the prompt prefix in the `handleGenerateImage` function:
```typescript
const fullPrompt = `$UNT character style - ${prompt}. [YOUR CUSTOM DESCRIPTOR HERE]`
```

### Add More Presets
Add to `PRESET_PROMPTS` array:
```typescript
{
  name: 'Your Scenario',
  prompt: 'Detailed prompt description...'
}
```

### Adjust Generation Settings
Modify the simulated delay or add parameters:
```typescript
const response = await fetch('/api/generate-image', {
  method: 'POST',
  body: JSON.stringify({ 
    prompt: fullPrompt,
    style: 'illustration', // Add custom params
    quality: 'high'
  })
})
```

## Testing
1. Click a preset scenario button
2. You should see a "GENERATING..." state for 2 seconds
3. The image placeholder shows "Ready to download when generated"
4. Once API is connected, images will appear in the grid

## Important Notes

- Image generation costs vary by provider (typically $0.01-$0.10 per image)
- Consider rate limiting to prevent abuse
- Cache generated images to reduce API costs
- Add user authentication if needed
- Consider adding download functionality

## Support

For help with specific image generation APIs:
- **Fal AI**: https://docs.fal.ai/
- **OpenAI**: https://platform.openai.com/docs/guides/images
- **Stability AI**: https://platform.stability.ai/docs
