'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "How long does a screen replacement take?",
    answer: "Most screen replacements are completed within 30-60 minutes. However, some repairs might take longer depending on the model and complexity."
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer: "Yes, we offer a 90-day warranty on all our repairs. This covers any defects in parts or workmanship."
  },
  {
    question: "What brands do you repair?",
    answer: "We repair all major brands including Apple, Samsung, Google Pixel, Huawei, OnePlus, ROG, and more. Our technicians are trained to work on the latest models."
  },
  {
    question: "Are your replacement parts genuine?",
    answer: "We use high-quality parts that match or exceed OEM specifications. For certain models, we offer both genuine and premium aftermarket options."
  },
  {
    question: "Do I need an appointment?",
    answer: "Walk-ins are welcome, but we recommend booking an appointment to ensure immediate service. You can call us or use our online booking system."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Find answers to common questions about our repair services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 