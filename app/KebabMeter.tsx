'use client'

import { motion } from 'framer-motion'

export default function KebabMeter() {
  const level = {
    label: 'Well Grilled',
    value: 60,
    emoji: '🔥',
    color: 'from-green-400 to-green-500',
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <motion.h2
        className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-700 to-amber-700 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Kebab Meter
      </motion.h2>

      <p className="text-slate-600 mb-10">
        Current kebab status: perfectly cooked.
      </p>

      <motion.div
        className="text-7xl mb-6"
        animate={{ rotate: [0, 8, -8, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
      >
        🔥
      </motion.div>

      <div className="text-2xl font-semibold text-slate-800 mb-6">
        Well Grilled
      </div>

      <div className="w-full h-5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-green-500"
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>

      <div className="mt-4 text-slate-500 font-medium">
        Heat level: 60%
      </div>

      <p className="mt-8 text-xs text-slate-400">
        This indicator is for entertainment purposes only.
      </p>
    </section>
  )
}
