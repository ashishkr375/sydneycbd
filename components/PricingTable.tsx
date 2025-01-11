'use client'

import { motion } from 'framer-motion'
import { Check, X, Phone, Shield, Clock } from 'lucide-react'

const pricingPlans = [
  {
    name: "Screen Repair",
    devices: [
      { model: "iPhone 15 Pro Max", price: "399" },
      { model: "iPhone 14 Pro", price: "359" },
      { model: "Samsung S24 Ultra", price: "389" },
      { model: "Google Pixel 8 Pro", price: "349" },
    ],
    features: [
      "Genuine/High Quality Parts",
      "90-Day Warranty",
      "30-Min Service",
      "Free Diagnosis"
    ]
  },
  {
    name: "Battery Replacement",
    devices: [
      { model: "iPhone 15 Pro Max", price: "129" },
      { model: "iPhone 14 Pro", price: "119" },
      { model: "Samsung S24 Ultra", price: "129" },
      { model: "Google Pixel 8 Pro", price: "119" },
    ],
    features: [
      "Original Batteries",
      "90-Day Warranty",
      "30-Min Service",
      "Battery Health Report"
    ]
  },
  {
    name: "Water Damage",
    devices: [
      { model: "All iPhones", price: "from 99" },
      { model: "All Samsung", price: "from 99" },
      { model: "All Google Pixel", price: "from 99" },
      { model: "Other Brands", price: "from 99" },
    ],
    features: [
      "Ultrasonic Cleaning",
      "Component-Level Repair",
      "Data Recovery",
      "Free Diagnosis"
    ]
  }
]

export default function PricingTable() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Quality repairs at competitive prices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{plan.name}</h3>
              
              <div className="space-y-4 mb-8">
                {plan.devices.map((device) => (
                  <div key={device.model} className="flex justify-between items-center">
                    <span className="text-white/80">{device.model}</span>
                    <span className="text-white font-semibold">${device.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Includes:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/70">
                      <Check className="w-5 h-5 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Book Repair
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/60">
            * Prices may vary depending on model and condition. Contact us for exact pricing.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 