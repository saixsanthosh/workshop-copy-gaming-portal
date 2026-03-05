'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function FloatingParticles() {
  const particles = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 20,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y - 20}vh`, `${particle.y}vh`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.5)`,
          }}
        />
      ))}
    </div>
  )
}
