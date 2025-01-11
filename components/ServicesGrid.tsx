'use client'

import { motion } from 'framer-motion'
import { Smartphone, Watch, Tablet, Cpu, Battery, Shield } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Smartphone,
    title: "All iPhones",
    description: "Why Pay More?",
    image: "/iphone-repair.jpg",
    action: "☎️ Fix iPhones",
    stock: "In Stock"
  },
  {
    icon: Smartphone,
    title: "ALL GALAXY",
    description: "Expect more",
    image: "/galaxy-repair.jpg",
    action: "⚡Fix Galaxy",
    stock: "In Stock"
  },
  {
    icon: Smartphone,
    title: "ALL GOOGLE PIXELS",
    description: "Expect more",
    image: "/pixel-repair.jpg",
    action: "⚡Fix Google Pixels",
    stock: "In Stock"
  },
  // Add more services...
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                z: 50
              }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl" />
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full mb-4">
                  {service.stock}
                </span>

                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  {service.action}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 