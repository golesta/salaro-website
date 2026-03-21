# Salaro.com

A modern, professional website for Salaro - 30 years of technology applied to AI.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (static export)
- **Icons**: Lucide React

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To build the project for production:

```bash
npm run build
```

This will generate a static export in the `out/` directory.

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your Vercel account and deploy.

### Option 2: GitHub Integration

1. Push this code to a GitHub repository
2. Connect the repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings

### Vercel Configuration

The `vercel.json` file is configured for:
- Static export build
- Next.js framework detection
- Output directory: `out/`

## Project Structure

```
salaro-com/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Navigation.js
│   ├── Hero.js
│   ├── Services.js
│   ├── About.js
│   ├── Projects.js
│   ├── Team.js
│   ├── Contact.js
│   └── Footer.js
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

## Design

- **Color Scheme**: Dark navy (#0f172a) background, white text, amber (#f59e0b) accents
- **Typography**: Inter font family
- **Layout**: Single-page scrolling with sticky navigation
- **Responsive**: Mobile-first design

## Features

- Sticky navigation with mobile hamburger menu
- Smooth scrolling between sections
- Responsive grid layouts
- Contact form (client-side only - add backend integration as needed)
- Professional, modern design
- SEO optimized

## Contact Form

The contact form currently logs to console. To make it functional:

1. Add a form submission service (e.g., Formspree, Netlify Forms, or custom API)
2. Update the `handleSubmit` function in `components/Contact.js`

## Customization

- Colors: Edit `tailwind.config.js`
- Content: Update component files in `components/`
- Styling: Modify `app/globals.css` or component styles