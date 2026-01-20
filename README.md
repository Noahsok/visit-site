# Visit Site

Contemporary art gallery and cocktail bar website, powered by Sanity CMS.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file with:

```
SANITY_API_TOKEN=your_token_here
```

### 3. Deploy Sanity Studio

First, install the Sanity CLI globally:

```bash
npm install -g sanity
```

Then deploy the schema to Sanity:

```bash
npx sanity deploy
```

This will give you a URL like `https://visit-site.sanity.studio` where you can edit content.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com and import the repo
3. Add the `SANITY_API_TOKEN` environment variable
4. Deploy

## Content Types

- **Exhibitions** - Current and past shows
- **Artists** - List of artists you've worked with
- **Events** - Upcoming events
- **Bar Page** - Photos and copy for the bar page
- **Membership Page** - Copy and tier info
- **Site Settings** - Hours, address, social links

## Editing Content

Go to your Sanity Studio (after deploying) to add/edit content. Changes appear on the site within 60 seconds.
