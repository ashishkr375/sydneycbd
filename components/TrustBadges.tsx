'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const badges = [
  {
    image: "https://sydneycbd.repair/wp-content/uploads/2016/04/SydneyCBDrepairCentre-Team-Front-Smile.jpg",
    title: "4.9★ on Google",
    rating: "4.9",
    reviews: "1,745+ Reviews"
  },
  {
    image: "https://sydneycbd.repair/wp-content/uploads/2024/09/Where-to-get-your-Galaxy-S22-Ultra-screen-repaired.png",
    title: "4.8★ on Facebook",
    rating: "4.8",
    reviews: "800+ Reviews"
  },
  {
    image: "https://sydneycbd.repair/wp-content/uploads/2024/09/Conveniently-Located-in-Sydney-CBD-red.png",
    title: "4.7★ on Yelp",
    rating: "4.7",
    reviews: "500+ Reviews"
  },
  {
    image: "https://sydneycbd.repair/wp-content/uploads/2024/09/Challenging-the-Replace-Not-Repair-Culture.png",
    title: "Certified Repair",
    text: "Authorized Service"
  }
]

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={badge.image}
                  alt={badge.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {badge.title}
              </h3>
              {badge.rating && (
                <div className="text-yellow-400 font-bold text-2xl mb-1">
                  {badge.rating}★
                </div>
              )}
              <p className="text-white/60 text-sm">
                {badge.reviews || badge.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 