'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useReducedMotion } from 'framer-motion'

export default function BackgroundEffects() {
  const { theme } = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const isDark = theme === 'dark'

  // Color palette based on theme
  const colors = isDark
    ? {
        blobPrimary: '#993c25',
        blobSecondary: '#B8492D',
        blobTertiary: '#FF6B35',
        blobOpacity: 0.35,
        gridColor: 'rgba(153,60,37,0.25)',
        particleColor: 'rgba(153,60,37,0.8)',
        scanlineColor: 'rgba(153,60,37,0.5)',
        gradientColor1: 'rgba(153,60,37,0.15)',
        gradientColor2: 'rgba(184,73,45,0.12)',
        gradientColor3: 'rgba(153,60,37,0.1)',
        cornerGlowPrimary: 'rgba(153,60,37,0.35)',
        cornerGlowSecondary: 'rgba(184,73,45,0.3)',
      }
    : {
        blobPrimary: 'rgba(153,60,37,0.12)',
        blobSecondary: 'rgba(184,73,45,0.1)',
        blobTertiary: 'rgba(255,107,53,0.08)',
        blobOpacity: 0.12,
        gridColor: 'rgba(153,60,37,0.12)',
        particleColor: 'rgba(153,60,37,0.35)',
        scanlineColor: 'transparent',
        gradientColor1: 'rgba(153,60,37,0.06)',
        gradientColor2: 'rgba(184,73,45,0.05)',
        gradientColor3: 'rgba(153,60,37,0.04)',
        cornerGlowPrimary: 'rgba(153,60,37,0.12)',
        cornerGlowSecondary: 'rgba(184,73,45,0.1)',
      }

  // Blob animation variants
  const blobVariants = {
    animate: {
      x: [0, 30, -20, 0],
      y: [0, -40, 20, 0],
    },
  }

  // Particle animation generator
  const getParticleVariants = (duration, delay) => ({
    animate: {
      y: ['100vh', '-10vh'],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    },
  })

  // Scanline animation variants
  const scanlineVariants = {
    animate: {
      y: ['-100vh', '100vh'],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  }

  // Generate particles array
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 10,
  }))

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Gradient mesh overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, ${colors.gradientColor1} 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, ${colors.gradientColor2} 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, ${colors.gradientColor3} 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Animated dot grid */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${colors.gridColor} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow blobs */}
      {!prefersReducedMotion && (
        <>
          {/* Blob 1 - Top left */}
          <motion.div
            variants={blobVariants}
            animate="animate"
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: 600,
              height: 600,
              borderRadius: '50%',
              background: colors.blobPrimary,
              filter: 'blur(120px)',
              opacity: colors.blobOpacity,
              left: '10%',
              top: '20%',
              pointerEvents: 'none',
            }}
          />

          {/* Blob 2 - Right center */}
          <motion.div
            variants={blobVariants}
            animate="animate"
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{
              position: 'absolute',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: colors.blobSecondary,
              filter: 'blur(140px)',
              opacity: colors.blobOpacity,
              right: '15%',
              top: '40%',
              pointerEvents: 'none',
            }}
          />

          {/* Blob 3 - Bottom center */}
          <motion.div
            variants={blobVariants}
            animate="animate"
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            style={{
              position: 'absolute',
              width: 700,
              height: 700,
              borderRadius: '50%',
              background: colors.blobTertiary,
              filter: 'blur(150px)',
              opacity: colors.blobOpacity * 0.7,
              left: '50%',
              bottom: '-10%',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
            }}
          />

          {/* Blob 4 - Bottom right */}
          <motion.div
            variants={blobVariants}
            animate="animate"
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{
              position: 'absolute',
              width: 550,
              height: 550,
              borderRadius: '50%',
              background: colors.blobPrimary,
              filter: 'blur(130px)',
              opacity: colors.blobOpacity * 0.8,
              right: '5%',
              bottom: '10%',
              pointerEvents: 'none',
            }}
          />

          {/* Blob 5 - Left bottom */}
          <motion.div
            variants={blobVariants}
            animate="animate"
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            style={{
              position: 'absolute',
              width: 450,
              height: 450,
              borderRadius: '50%',
              background: colors.blobSecondary,
              filter: 'blur(110px)',
              opacity: colors.blobOpacity * 0.6,
              left: '30%',
              bottom: '20%',
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      {/* Floating particles */}
      {!prefersReducedMotion &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={getParticleVariants(particle.duration, particle.delay).animate}
            transition={getParticleVariants(particle.duration, particle.delay).transition}
            style={{
              position: 'fixed',
              left: `${particle.x}%`,
              width: particle.size,
              height: particle.size,
              borderRadius: '50%',
              background: colors.particleColor,
              filter: 'blur(1px)',
              pointerEvents: 'none',
            }}
          />
        ))}

      {/* Scanning line effect (dark mode only, when motion is allowed) */}
      {isDark && !prefersReducedMotion && (
        <motion.div
          variants={scanlineVariants}
          animate="animate"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: colors.scanlineColor,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Corner glow - top left */}
      <div
        style={{
          position: 'fixed',
          top: -50,
          left: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.cornerGlowPrimary} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Corner glow - bottom right */}
      <div
        style={{
          position: 'fixed',
          bottom: -50,
          right: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.cornerGlowSecondary} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
