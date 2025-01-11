'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  { name: 'David', role: 'Lead Technician', image: '/david.jpg' },
  { name: 'Sarah', role: 'Customer Service Manager', image: '/sarah.jpg' },
  { name: 'Michael', role: 'Repair Specialist', image: '/michael.jpg' },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Expert Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

