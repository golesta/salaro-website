'use client'

import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring, useTransform, motion, useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 120 })
  const transformedValue = useTransform(springValue, (latest) => latest.toFixed(decimals))
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    return transformedValue.on('change', (latest) => {
      setDisplay(latest)
    })
  }, [transformedValue])

  return (
    <motion.div ref={ref} className={className}>
      <span className="font-heading text-4xl font-semibold text-brand dark:text-brand-light">
        {display}
        {suffix}
      </span>
    </motion.div>
  )
}
