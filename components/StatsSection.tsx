'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Customers', value: '47K+' },
  { label: 'Devices Fixed', value: '76K+' },
  { label: 'Years in Top 3', value: '6' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

