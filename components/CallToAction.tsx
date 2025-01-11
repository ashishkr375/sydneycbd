'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-yellow-400 text-black py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-lg font-semibold">Chat With a Human, Not a Bot!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Contact Us Now
        </motion.button>
      </div>
    </motion.div>
  )
}

