'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Gunnar H",
    role: "Google Review",
    image: "https://i.postimg.cc/ZYjNcGfb/image.png",
    text: "These guys were fantastic in their communication, patience, knowledge, work quality, service and, believe it or not, with all that they were the best at pricing.",
    rating: 5
  },
  {
    name: "Tony M",
    role: "Facebook Review",
    image: "https://i.postimg.cc/4yFmgTMp/image.png",
    text: "Within 1 hour David replaced the screen and got it working. Excellent friendly service. I would highly recommend Sydney CBD Repair Centre!",
    rating: 5
  },
  // Add more testimonials...
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
            👮 Trusted by More than 47K Customers
          </h2>
          <p className="text-white/60">
            See what our customers say about us
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="min-w-full px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-white/60">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setCurrentIndex(Math.min(testimonials.length - 1, currentIndex + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

