# $UNT Custom Image Generator UI Prompt

Copy and paste this entire prompt to your AI to build a custom image generator interface tailored for $UNT:

---

## CUSTOM IMAGE GENERATOR BUILD PROMPT

Create a custom AI image generator UI component for the $UNT token project with the following specifications:

### Design System
- **Color Scheme**: Pure white background with black borders and text (pixel-perfect aesthetic)
- **Typography**: Bold, black, sans-serif fonts. All text should be uppercase and powerful
- **Borders**: 4px solid black borders on all major elements (no rounded corners)
- **Layout**: Clean, minimalist white/black design. No gradients or soft colors

### Character Reference
The UI should generate images of a female character with these signature traits:
- Blonde hair with a pink bow
- Black sunglasses
- Pink/coral lips
- Pearl necklace
- Represents wealth, independence, style, and luxury
- Reference images: This character appears in luxury/aspirational scenarios (jets, yachts, casinos, mansions, first class travel, etc.)

### Image Generation Prompts & Categories
The generator should include preset categories and custom prompts. Examples of preset luxury scenarios:

1. **Luxury Jet** - Character on private jet with champagne, money, sunset view
2. **Casino Royale** - Character at poker table with chips and playing cards
3. **Yacht Life** - Character on luxury yacht in the ocean with luxury goods
4. **Mansion Style** - Character in luxurious mansion with designer items
5. **First Class** - Character in first class airplane cabin with champagne
6. **High Fashion** - Character in haute couture outfit at exclusive event
7. **World Traveler** - Character with vintage suitcases and luxury travel theme
8. **Crypto Wealth** - Character surrounded by digital wealth symbols and luxury

### UI Components
- **Header**: "$UNT IMAGE CREATOR" in bold black text with white background
- **Prompt Input Section**: Large text area for custom prompts with white background, black border, black text
- **Preset Buttons**: Grid of 4-6 preset category buttons (white bg, black border, black text, 4px borders)
- **Generate Button**: Large call-to-action button "CREATE IMAGE" (black bg, white text, 4px black border, all caps)
- **Gallery/Display Area**: Show generated images in a clean grid or carousel format with black borders
- **Loading State**: Show "GENERATING..." message or animated spinner while creating images
- **Image History/Gallery**: Display previously generated images in a grid below the generator
- **Download Button**: Allow users to download generated images with "$UNT" watermark

### Branding Elements
- Include "$UNT" logo/text prominently
- Add "$UNT CULT" messaging
- Use the character's visual as a visual guide (blonde, pink bow, sunglasses, luxury vibes)
- Maintain the white/black/bold aesthetic throughout

### Technical Specifications
- Build as a React component (Next.js compatible)
- Use responsive design for mobile and desktop
- Integrate with an AI image generation API (Fal AI, Stability AI, DALL-E, Midjourney API, etc.)
- Accept custom text prompts from users
- Include loading states and error handling
- Generate images with consistent character style across different scenarios
- Store/cache generated images for gallery view

### Styling Guidelines
- Use Tailwind CSS with white (#ffffff), black (#000000), and gray only
- 4px borders on interactive elements
- No rounded corners (keep geometric)
- Bold fonts (font-black, font-bold)
- Maximum 2 font families
- Responsive grid layouts

### User Flow
1. User sees preset category buttons or enters custom prompt
2. User clicks "CREATE IMAGE" button
3. Show loading state
4. Display generated image in gallery
5. Allow user to download, regenerate, or try another prompt
6. Maintain history of generated images in gallery

---

**Important**: The final component should be deliverable as a standalone React/Next.js app or iframe-embeddable HTML/React component that can be embedded into the main $UNT website at this URL section: `https://yoursite.com/#image-gen`

Generate images that capture the luxury, confidence, and aspirational vibe of the $UNT character across different premium scenarios.
