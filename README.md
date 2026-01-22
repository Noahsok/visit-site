# Visit Site

Contemporary art gallery and cocktail bar website.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Updating Content

All content lives in `content/site-content.json`. Edit that file to update:

- Current exhibition (artist, title, dates, image)
- Upcoming events
- Past exhibitions
- Artists list
- Bar photos
- Membership tiers
- Site settings (hours, address)

## Images

Put images in `public/images/`:
- `public/images/exhibitions/` - exhibition photos
- `public/images/bar/` - bar photos

Reference them in site-content.json like: `/images/exhibitions/artist-name.jpg`

## Deploy

Push to GitHub, Railway auto-deploys.
