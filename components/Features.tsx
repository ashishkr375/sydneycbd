'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Wrench, Award, DollarSign, Star } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Expert Technicians",
    description: "Highly skilled team from South Korea with years of experience",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    title: "30-Min Repairs",
    description: "Most repairs completed while you wait",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Wrench,
    title: "Quality Parts",
    description: "Genuine and high-quality replacement parts",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "90-Day Warranty",
    description: "All repairs backed by our comprehensive warranty",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: DollarSign,
    title: "Best Price",
    description: "Competitive pricing with no hidden fees",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Star,
    title: "47K+ Customers",
    description: "Trusted by thousands of satisfied customers",
    gradient: "from-pink-500 to-rose-500"
  }
]

export default function Features() {
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
            Why Choose Us
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Experience the best phone repair service in Sydney CBD
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

