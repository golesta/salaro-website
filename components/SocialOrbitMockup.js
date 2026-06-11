"use client"

import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTheme } from 'next-themes'

const socialIcons = [
  { id: 'linkedin', bg: '#0A66C2', icon: 'in', angle: 300, distance: 160 },
  { id: 'instagram', bg: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', icon: '📷', angle: 200, distance: 150 },
  { id: 'tiktok', bg: '#010101', icon: '♪', angle: 30, distance: 155 },
  { id: 'facebook', bg: '#1877F2', icon: 'f', angle: 160, distance: 170 },
  { id: 'threads', bg: '#000000', icon: '@', angle: 100, distance: 145 },
]

export default function SocialOrbitMockup({ size = 400 }) {
  const prefersReduced = useReducedMotion()
  const { theme } = useTheme()
  const [scale, setScale] = useState(1)
  const isDark = theme === 'dark'

  useEffect(() => {
    // responsive scale for small screens
    const handle = () => setScale(window.innerWidth < 640 ? 0.7 : 1)
    handle()
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  const center = size / 2

  const hubPulse = prefersReduced
    ? {}
    : { animate: { scale: [1, 1.08, 1] }, transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }

  const ringRotate = prefersReduced
    ? {}
    : { animate: { rotate: 360 }, transition: { duration: 30, repeat: Infinity, ease: 'linear' } }

  const scatterAnim = (delay = 0) => (prefersReduced ? {} : { animate: { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }, transition: { duration: 2, repeat: Infinity, delay } })

  const cardFloat = prefersReduced ? {} : { animate: { y: [0, -6, 0] }, transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }

  const notifEntrance = prefersReduced
    ? { initial: { y: 0, opacity: 1 } }
    : { initial: { y: -20, opacity: 0 }, animate: { y: [0, -5, 0], opacity: [1, 1, 1] }, transition: { delay: 0.5, duration: 0.6 } }

  const wrapperStyle = {
    width: size,
    height: size,
    position: 'relative',
    display: 'block',
    margin: '0 auto',
    transform: `scale(${scale})`,
    pointerEvents: 'none',
    background: 'transparent',
  }

  const centerHubStyle = {
    width: 100,
    height: 100,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6)',
    boxShadow: '0 0 40px rgba(139,92,246,0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    left: center,
    top: center,
    transform: 'translate(-50%, -50%)',
  }

  const iconBaseStyle = (bg) => ({
    width: 48,
    height: 48,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 700,
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    cursor: 'default',
    userSelect: 'none',
    pointerEvents: 'none',
    background: bg,
  })

  const ringStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateZ(0)',
    pointerEvents: 'none',
  }

  // small teal/mint dots random-ish positions
  const scatterDots = [
    { x: center + 120, y: center - 40, delay: 0 },
    { x: center - 130, y: center + 10, delay: 0.5 },
    { x: center + 60, y: center + 120, delay: 1 },
    { x: center - 20, y: center - 120, delay: 1.5 },
    { x: center + 10, y: center - 160, delay: 0.8 },
    { x: center - 150, y: center - 60, delay: 1.2 },
  ]

  return (
    <div style={wrapperStyle} aria-hidden>
      {/* Orbit ring */}
      <motion.svg
        {...ringRotate}
        style={ringStyle}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
      >
        <circle
          cx={center}
          cy={center}
          r={Math.min(center - 28, center - 28)}
          stroke="#CBD5E1"
          strokeWidth={2}
          strokeDasharray="6 8"
          fill="none"
          opacity={0.9}
        />
      </motion.svg>

      {/* Scatter dots */}
      {scatterDots.map((d, i) => (
        <motion.div
          key={i}
          {...scatterAnim(i * 0.2)}
          style={{
            position: 'absolute',
            left: d.x,
            top: d.y,
            width: 8,
            height: 8,
            borderRadius: 8,
            background: '#5EEAD4',
            opacity: 0.6,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Floating stat card (top-left) */}
      <motion.div
        {...cardFloat}
        style={{
          position: 'absolute',
          top: '5%',
          left: '-6%',
          background: '#fff',
          borderRadius: 16,
          padding: '12px 20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          pointerEvents: 'none',
          minWidth: 140,
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 800, background: 'linear-gradient(90deg,#8B5CF6,#EC4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>+340%</div>
        <div style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>d'engagement</div>
      </motion.div>

      {/* Notification card (top center-right) */}
      <motion.div
        {...notifEntrance}
        style={{
          position: 'absolute',
          top: '-6%',
          left: '30%',
          background: '#fff',
          borderRadius: 16,
          padding: '10px 14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          pointerEvents: 'none',
        }}
      >
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#8B5CF6,#EC4899,#3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          <Star size={16} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>Post publié !</div>
          <div style={{ fontSize: 12, color: '#6B7280' }}>Instagram • Il y a 2 min</div>
        </div>
      </motion.div>

      {/* Center hub */}
      <motion.div {...hubPulse} style={centerHubStyle}>
        <div style={{ pointerEvents: 'none', fontSize: 28 }} aria-hidden>
          ✦
        </div>
      </motion.div>

      {/* Orbit icons */}
      {socialIcons.map((s, i) => {
        const floatAnim = prefersReduced
          ? {}
          : { animate: { y: [0, -8, 0] }, transition: { duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 } }

        const orbitAnim = prefersReduced
          ? { initial: { rotate: s.angle } }
          : {
              initial: { rotate: s.angle },
              animate: { rotate: [s.angle, s.angle + 360] },
              transition: { duration: 18 + i * 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 },
            }

        return (
          <motion.div
            key={s.id}
            {...orbitAnim}
            style={{
              position: 'absolute',
              left: center,
              top: center,
              width: 0,
              height: 0,
              transform: 'translate(-50%, -50%)',
              transformOrigin: 'center center',
              pointerEvents: 'none',
            }}
          >
            <motion.div
              {...floatAnim}
              style={{
                ...iconBaseStyle(s.bg),
                position: 'absolute',
                left: s.distance,
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span style={{ fontSize: 18, lineHeight: '18px' }}>{s.icon}</span>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
