'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Animated Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: [0, 0.5, 0], pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${90 + i * 30}deg, transparent, rgba(139, 92, 246, 0.1), transparent)`,
            transform: `translateY(${i * 20}%)`,
          }}
        />
      ))}
    </div>
  )
}
