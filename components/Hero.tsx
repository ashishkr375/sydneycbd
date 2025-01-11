'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, Shield, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-6 inline-block"
            >
              <span className="text-white/90">🏆 #1 Phone Repair Specialist in Sydney CBD</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Post Your Phone Today.
              <span className="text-yellow-400"> See How Fast It's Returned!</span>
            </h1>

            <p className="text-xl text-white/80 mb-8">
              Fast, reliable repairs by highly skilled technicians from South Korea. All major brands supported.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:80114119"
                  className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>CALL 8011 4119</span>
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://g.co/kgs/SWtJMeG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Find Us</span>
                </a>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Clock, text: "30-Min Repairs" },
                { icon: Shield, text: "90-Day Warranty" },
                { icon: Phone, text: "All Brands" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-2 bg-white/5 rounded-lg p-3"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-white/90 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8">
              <Image
                src="https://i.postimg.cc/cJDtdYPp/Sydney-CBDrepair-Centre-Team-Front-Smile-854x553.jpg"
                alt="Phone Repair"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

