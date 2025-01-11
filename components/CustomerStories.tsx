'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const stories = [
  {
    title: "A Story Of Arthur's Galaxy Note 20 Ultra",
    location: "From Byron Bay",
    image: "https://i.postimg.cc/ZYjNcGfb/image.png",
    description: "Arthur's phone had a cracked screen and wasn't turning on. We fixed it within 2 hours!",
    rating: 5
  },
  {
    title: "Mark's 2000km ROG Phone 7 Journey",
    location: "From Melbourne",
    image: "https://i.postimg.cc/4yFmgTMp/image.png",
    description: "Mark trusted us with his gaming phone, shipping it from Melbourne. Complete repair in 24 hours!",
    rating: 5
  },
  {
    title: "iPhone 13 Pro - Apple Said No, We Said Yes",
    location: "From Sydney",
    image: "https://i.postimg.cc/ZYjNcGfb/image.png",
    description: "When Apple couldn't help, we successfully repaired Sarah's water-damaged iPhone.",
    rating: 5
  }
]

export default function CustomerStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
            Customer Success Stories
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real stories from our satisfied customers
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {stories.map((story, index) => (
                <motion.div
                  key={index}
                  className="min-w-full px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <div className="relative h-64 md:h-96">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-white/60">{story.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
                      <p className="text-white/80">{story.description}</p>
                    </div>
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
            onClick={() => setCurrentIndex(Math.min(stories.length - 1, currentIndex + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

