'use client'

import { motion } from 'framer-motion'
import { Smartphone, DiscIcon as Display, Battery, Cpu } from 'lucide-react'

const servicesData = [
  {
    icon: Smartphone,
    title: "Screen Repair",
    description: "Fast and reliable screen replacements for all phone models.",
  },
  {
    icon: Display,
    title: "LCD Repair",
    description: "Professional LCD repair and replacement services.",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description: "Get your phone's battery replaced quickly and efficiently.",
  },
  {
    icon: Cpu,
    title: "Logic Board Repair",
    description: "Expert diagnosis and repair of logic board issues.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

