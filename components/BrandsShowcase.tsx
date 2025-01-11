'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
  { name: 'Apple', logo: 'https://i.postimg.cc/LXpyzcxk/image.png', models: ['iPhone 15 Pro Max', 'iPhone 14', 'iPhone 13'] },
  { name: 'Samsung', logo: 'https://i.postimg.cc/FKZSBw9V/image.png', models: ['Galaxy S24 Ultra', 'Z Fold 5', 'S23'] },
  { name: 'Google', logo: 'https://i.postimg.cc/KYqPYCdv/image.png', models: ['Pixel 8 Pro', 'Pixel 7', 'Pixel 6'] },
  { name: 'Huawei', logo: 'https://i.postimg.cc/wTXDN1Sr/image.png', models: ['P60 Pro', 'Mate 50 Pro', 'P40'] },
  { name: 'OnePlus', logo: 'https://i.postimg.cc/Z5DnvZKg/image.png', models: ['12', '11', '10 Pro'] },
  { name: 'ROG', logo: 'https://i.postimg.cc/qMD4jwV6/image.png', models: ['Phone 7', 'Phone 6', 'Phone 5'] },
]

export default function BrandsShowcase() {
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
            Brands We Repair
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Expert repair services for all major smartphone brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center group hover:bg-white/10 transition-colors"
            >
              <div className="relative h-16 mb-4">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  priority={index < 6}
                />
              </div>
              <h3 className="text-white font-medium mb-2">{brand.name}</h3>
              <div className="space-y-1">
                {brand.models.map((model, i) => (
                  <p key={i} className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                    {model}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 