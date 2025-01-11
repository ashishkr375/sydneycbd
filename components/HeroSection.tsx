'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Post Your Phone Today. See How Fast It's Returned!</h2>
          <p className="text-xl mb-8 text-white">Expert repairs for all major brands. Fast, reliable, and hassle-free.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
        <div className="md:w-1/2 relative h-96">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src="/broken-phone.png"
              alt="Broken Phone"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute inset-0"
          >
            <Image
              src="/fixed-phone.png"
              alt="Fixed Phone"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-10 left-0 right-0 text-center"
      >
        <h3 className="text-2xl font-semibold mb-2 text-white">Special Offer</h3>
        <p className="text-xl text-white">Magnetic Ring Holder Shockproof Cover Case for $29.99</p>
      </motion.div>
    </section>
  )
}

