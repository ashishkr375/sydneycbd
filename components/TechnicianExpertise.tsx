'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Smartphone, Cpu, Battery, PenToolIcon as Tool } from 'lucide-react'

const expertiseAreas = [
  { icon: Smartphone, title: 'Screen Repair' },
  { icon: Cpu, title: 'Logic Board Repair' },
  { icon: Battery, title: 'Battery Replacement' },
  { icon: Tool, title: 'General Maintenance' },
]

export default function TechnicianExpertise() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-purple-100 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Expert Technicians</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <Image 
              src="/david-technician.jpg" 
              alt="David - Lead Technician" 
              width={300} 
              height={300} 
              className="rounded-full shadow-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-center">David</h3>
            <p className="text-lg text-center">Lead Technician with 10+ years of experience</p>
          </motion.div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <area.icon className="w-12 h-12 mb-4 text-blue-600" />
                <h4 className="text-xl font-semibold mb-2">{area.title}</h4>
                <p>Expert-level proficiency in diagnosing and repairing complex issues.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

