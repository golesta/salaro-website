'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = mounted ? resolvedTheme : 'dark'
  const isDark = activeTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-brand/40 hover:bg-brand/10 dark:bg-[#161616] dark:hover:bg-[#1F1F1F]"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
            className="flex"
          >
            <Moon className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
            className="flex"
          >
            <Sun className="h-5 w-5 text-[#993c25]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
