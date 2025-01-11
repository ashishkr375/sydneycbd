'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Phone } from 'lucide-react'

const announcements = [
  "📢 Post Your Phone Today. 👀 See How Fast It's Returned!",
  "🚈 Convenient Sydney Light Rail - Get Off at [Chinatown] Stop ❤️",
  "📢 OPEN (6 Days): Mon-Fri 10am-6pm, Sat: 10am-2pm",
  "🎁 Happy New Year! Open As Usual!"
]

export default function AnnouncementBanner() {
  return (
    <div className="fixed top-[0px] left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="py-2 whitespace-nowrap"
        >
          <span className="inline-flex gap-8">
            {announcements.map((text, i) => (
              <span key={i} className="mx-4 text-sm font-medium">{text}</span>
            ))}
          </span>
        </motion.div>
      </div>
    </div>
  )
} 