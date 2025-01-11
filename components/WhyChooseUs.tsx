'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Wrench, Award, DollarSign, ThumbsUp } from 'lucide-react'
import Image from 'next/image'

const reasons = [
  {
    icon: Shield,
    title: "Certified Technicians",
    description: "Our team of South Korean experts brings years of experience and specialized training",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most repairs completed within 30-60 minutes while you wait",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Wrench,
    title: "Quality Parts",
    description: "We use only genuine or high-quality compatible parts for all repairs",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "90-Day Warranty",
    description: "All our repairs are backed by our comprehensive warranty",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Best price guarantee with no hidden fees or surprises",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: ThumbsUp,
    title: "47,000+ Happy Customers",
    description: "Join thousands of satisfied customers who trust us with their devices",
    gradient: "from-pink-500 to-rose-500"
  }
]

export default function WhyChooseUs() {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Sydney CBD Repair Centre?
            </h2>
            <p className="text-white/60 mb-8">
              Experience the difference with Sydney's most trusted phone repair service
            </p>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className={`bg-gradient-to-br ${reason.gradient} w-12 h-12 rounded-lg flex items-center justify-center shrink-0`}>
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{reason.title}</h3>
                    <p className="text-white/60">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8">
              <Image
                src="https://i.postimg.cc/8C2hWLPq/image.png"
                alt="Our Repair Process"
                width={600}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 