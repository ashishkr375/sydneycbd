'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "iPhone Repair", href: "#" },
      { name: "Samsung Repair", href: "#" },
      { name: "Google Pixel Repair", href: "#" },
      { name: "Screen Replacement", href: "#" },
      { name: "Battery Replacement", href: "#" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Book Appointment", href: "#" },
      { name: "Track Repair", href: "#" },
      { name: "Warranty Info", href: "#" },
      { name: "Price List", href: "#" },
      { name: "FAQs", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Reviews", href: "#" },
      { name: "Contact", href: "#" },
    ]
  }
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="Sydney CBD Repair Centre"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Sydney CBD Repair</h3>
                <p className="text-white/60 text-sm">Expert Phone Repairs</p>
              </div>
            </Link>
            
            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Suite 201, Level 2, 661 George St, Haymarket</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(02) 8011 4119</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>ask@SydneyCBDrepairCentre.com.au</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Mon-Fri: 10am – 6pm, Sat: 10am – 2pm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
            <div className="text-white/60 text-sm">
              © 2024 Sydney CBD Repair Centre. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

