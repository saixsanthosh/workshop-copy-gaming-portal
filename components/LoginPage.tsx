'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Chrome, Mail, Lock, Sparkles, ArrowRight } from 'lucide-react'
import FloatingParticles from './FloatingParticles'
import AnimatedBackground from './AnimatedBackground'

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status, router])

  const handleSignIn = async (provider: string) => {
    setIsLoading(true)
    await signIn(provider, { callbackUrl: '/dashboard' })
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AnimatedBackground />
      <FloatingParticles />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo/Brand Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-16 h-16 text-purple-400" />
            </motion.div>
            <h1 className="text-5xl font-bold mb-2 gradient-text">Welcome</h1>
            <p className="text-gray-400 text-lg">Sign in to continue your journey</p>
          </motion.div>

          {/* Login Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-[100%] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-20"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Choose your sign in method
              </h2>

              <div className="space-y-4">
                {/* GitHub Login */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredButton('github')}
                  onHoverEnd={() => setHoveredButton(null)}
                  onClick={() => handleSignIn('github')}
                  disabled={isLoading}
                  className="w-full relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl" />
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredButton === 'github' ? '100%' : '-100%' }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                  <div className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-gray-700 group-hover:border-gray-600 transition-colors">
                    <Github className="w-5 h-5" />
                    <span className="font-medium">Continue with GitHub</span>
                    <motion.div
                      animate={{ x: hoveredButton === 'github' ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Google Login */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredButton('google')}
                  onHoverEnd={() => setHoveredButton(null)}
                  onClick={() => handleSignIn('google')}
                  disabled={isLoading}
                  className="w-full relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl" />
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredButton === 'google' ? '100%' : '-100%' }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <div className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl">
                    <Chrome className="w-5 h-5" />
                    <span className="font-medium">Continue with Google</span>
                    <motion.div
                      animate={{ x: hoveredButton === 'google' ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-gray-400">or</span>
                  </div>
                </div>

                {/* Email Login (Demo - not functional) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/50"
                  >
                    Sign In
                  </motion.button>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-center text-sm text-gray-400"
              >
                <p>
                  Don't have an account?{' '}
                  <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                    Sign up
                  </button>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Security Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center text-sm text-gray-500"
          >
            <p className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Secured with industry-standard encryption
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
