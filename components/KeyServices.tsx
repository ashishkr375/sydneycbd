'use client'

import { motion } from 'framer-motion'
import { PhoneIcon } from 'lucide-react'

const services = [
  { name: 'Galaxy Repair', icon: PhoneIcon },
  { name: 'iPhone Repair', icon: PhoneIcon },
  { name: 'Google Pixel Repair', icon: PhoneIcon },
]

export default function KeyServices() {
  return (
    <section id="services" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p>Expert repairs for all models</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

