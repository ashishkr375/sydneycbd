'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-6 w-72"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <div className="space-y-4">
              <a 
                href="tel:0280114119"
                className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <div className="text-sm font-medium">Call Us Now</div>
                  <div className="text-xs opacity-90">(02) 8011 4119</div>
                </div>
              </a>
              <a 
                href="#contact"
                className="flex items-center gap-3 bg-blue-500 text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <div>
                  <div className="text-sm font-medium">Send Message</div>
                  <div className="text-xs opacity-90">We'll reply within 24h</div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  )
} 