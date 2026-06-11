import './globals.css'
import { ThemeProvider } from 'next-themes'
import BackgroundEffects from '../components/BackgroundEffects'

export const metadata = {
  title: 'Salaro — Design & User-Focused Digital Agency',
  description: 'Crafting digital experiences that engage, convert, and grow your business. Web development, design, e-commerce, AI, and digital marketing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#F9F5F3] text-[#1A1A1A] transition-colors duration-300 dark:bg-[#080808] dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <BackgroundEffects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}