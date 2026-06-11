'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

// SVG Components
function GrowthArrow({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M20 70 L50 30 L80 60"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 45 L80 60 L68 68"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function OrbitingDots({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="3" fill={color} />
      <motion.circle
        cx="50"
        cy="20"
        r="2.5"
        fill={color}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '50px 50px' }}
      />
      <motion.circle
        cx="80"
        cy="50"
        r="2.5"
        fill={color}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '50px 50px' }}
      />
      <motion.circle
        cx="50"
        cy="80"
        r="2.5"
        fill={color}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '50px 50px' }}
      />
      <circle cx="50" cy="50" r="25" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <circle cx="50" cy="50" r="15" stroke={color} strokeWidth="1" opacity="0.2" />
    </svg>
  )
}

function ConversionFunnel({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M15 20 L85 20 L60 50 L40 50 L15 85"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="40" y1="50" x2="60" y2="50" stroke={color} strokeWidth="2" opacity="0.6" />
    </svg>
  )
}

function SignalWaves({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="20" cy="80" r="3" fill={color} />
      <path d="M20 70 Q35 55 50 70" stroke={color} strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M20 60 Q40 35 60 60" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M20 50 Q45 15 70 50" stroke={color} strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  )
}

function CursorClick({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M15 15 L15 60 L35 45 L50 75 L60 70 L45 40 L65 40 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.circle
        cx="35"
        cy="45"
        r="4"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  )
}

function Envelope({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="15" y="30" width="70" height="50" stroke={color} strokeWidth="2.5" rx="3" />
      <path d="M15 30 L50 60 L85 30" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M50 60 L85 35" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  )
}

function BarChart({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="20" y="55" width="12" height="25" stroke={color} strokeWidth="2" fill="none" />
      <rect x="40" y="40" width="12" height="40" stroke={color} strokeWidth="2" fill="none" />
      <rect x="60" y="25" width="12" height="55" stroke={color} strokeWidth="2" fill="none" />
      <line x1="15" y1="82" x2="77" y2="82" stroke={color} strokeWidth="2" />
    </svg>
  )
}

function Hashtag({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <line x1="30" y1="25" x2="30" y2="75" stroke={color} strokeWidth="2.5" />
      <line x1="70" y1="25" x2="70" y2="75" stroke={color} strokeWidth="2.5" />
      <line x1="25" y1="40" x2="75" y2="40" stroke={color} strokeWidth="2.5" />
      <line x1="25" y1="60" x2="75" y2="60" stroke={color} strokeWidth="2.5" />
    </svg>
  )
}

function Target({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="35" stroke={color} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="24" stroke={color} strokeWidth="2" opacity="0.7" />
      <circle cx="50" cy="50" r="12" stroke={color} strokeWidth="2" opacity="0.5" />
      <circle cx="50" cy="50" r="4" fill={color} />
    </svg>
  )
}

function Lightning({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 10 L70 45 L55 45 L65 90 L30 60 L45 60 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HexGrid({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M30 25 L45 15 L60 25 L60 45 L45 55 L30 45 Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M60 25 L75 15 L90 25 L90 45 L75 55 L60 45 Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M45 55 L60 45 L75 55 L75 75 L60 85 L45 75 Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}

function CurrencyCircle({ color, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="2.5" />
      <path
        d="M50 35 L50 65 M42 42 Q50 38 58 42 Q60 44 60 50 Q60 56 58 58 Q50 62 42 58"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function MarketingDecorations() {
  const { theme } = useTheme()
  const shouldReduce = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)
  
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
  }, [])
  
  const isDark = theme === 'dark'
  const baseColor = isDark ? '#993c25' : '#7A2E1C'
  const baseOpacity = isDark ? 1 : 0.6

  const decorations = [
    { component: GrowthArrow, top: '5%', left: '2%', size: 100, opacity: 0.08 },
    { component: OrbitingDots, top: '12%', right: '3%', size: 85, opacity: 0.1 },
    { component: ConversionFunnel, top: '25%', left: '1.5%', size: 60, opacity: 0.07 },
    { component: SignalWaves, top: '38%', right: '2.5%', size: 70, opacity: 0.08 },
    { component: CursorClick, top: '52%', left: '3%', size: 50, opacity: 0.09 },
    { component: Envelope, top: '62%', right: '4%', size: 65, opacity: 0.08 },
    { component: BarChart, top: '68%', left: '1.5%', size: 75, opacity: 0.07 },
    { component: Hashtag, top: '78%', right: '2%', size: 45, opacity: 0.08 },
    { component: Target, top: '85%', left: '2.5%', size: 70, opacity: 0.08 },
    { component: Lightning, top: '20%', left: '45%', size: 35, opacity: 0.06 },
    { component: HexGrid, top: '48%', left: '46%', size: 80, opacity: 0.06 },
    { component: CurrencyCircle, top: '35%', left: '1.5%', size: 55, opacity: 0.07 },
  ]

  const floatVariants = (duration) => ({
    initial: { opacity: 0, y: 0 },
    animate: shouldReduce
      ? { opacity: baseOpacity }
      : {
          opacity: baseOpacity,
          y: [0, -12, 0],
        },
    transition: shouldReduce
      ? { duration: 0 }
      : {
          y: {
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 0.8,
            delay: Math.random() * 2,
          },
        },
  })

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        display: isDesktop ? 'block' : 'none',
      }}
    >
      {decorations.map(({ component: SVG, top, left, right, size, opacity }, i) => (
        <motion.div
          key={i}
          variants={floatVariants(6 + Math.random() * 6)}
          initial="initial"
          animate="animate"
          whileHover={
            !shouldReduce
              ? {
                  opacity: 0.5,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }
              : {}
          }
          style={{
            position: 'absolute',
            top,
            left: left || 'auto',
            right: right || 'auto',
            opacity: opacity * baseOpacity,
            pointerEvents: 'none',
            cursor: 'default',
          }}
        >
          <SVG color={baseColor} size={size} />
        </motion.div>
      ))}
    </div>
  )
}
