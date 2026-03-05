'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { LogOut, User } from 'lucide-react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold gradient-text">Dashboard</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center gap-2 px-6 py-3 bg-red-500/20 hover:bg-red-500/30 rounded-xl transition-all"
            >
              <LogOut size={20} />
              Sign Out
            </motion.button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {session?.user?.image ? (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-purple-500"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <User size={40} className="text-purple-400" />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Welcome, {session?.user?.name || 'User'}!
                </h2>
                <p className="text-gray-400">{session?.user?.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Projects', value: '12' },
                { label: 'Tasks', value: '48' },
                { label: 'Completed', value: '36' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold gradient-text">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
