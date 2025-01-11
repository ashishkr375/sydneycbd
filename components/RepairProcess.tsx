'use client'

import { motion } from 'framer-motion'
import { Phone, Wrench, CheckCircle, Clock } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: "Book or Walk In",
    description: "Call us or visit our store in Sydney CBD. No appointment needed!",
    image: "https://sydneycbd.repair/wp-content/uploads/2024/09/Conveniently-Located-in-Sydney-CBD-red.png"
  },
  {
    icon: Clock,
    title: "Free Diagnosis",
    description: "Our experts will diagnose your device and provide a fixed quote",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Wrench,
    title: "Quick Repair",
    description: "Most repairs completed within 30-60 minutes while you wait",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: CheckCircle,
    title: "Quality Check",
    description: "Thorough testing before return with 90-day warranty",
    gradient: "from-green-500 to-emerald-500"
  }
]

export default function RepairProcess() {
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
            Simple Repair Process
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Get your device fixed in 4 easy steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`bg-gradient-to-br ${step.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-white/60">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 