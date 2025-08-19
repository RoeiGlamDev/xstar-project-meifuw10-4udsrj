import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {
  headline: string
  subheading: string
  ctaText: string
  trustIndicator: string
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0 bg-opacity-50"></div>/
      <div className="relative z-10 text-center p-8">
        <motion.h1 
          className="text-5xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to GlamCS
        </motion.h1>/
        <motion.p 
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover luxury cosmetics crafted for your unique beauty. Indulge in our premium range of products designed to elevate your style.
        </motion.p>/
        <motion.button 
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-orange-400 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>/
        <motion.p 
          className="mt-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Trusted by thousands of beauty enthusiasts - GlamCS, your go-to for exquisite cosmetics.
        </motion.p>/
      </div>/
    </section>/
  )
}

export default HeroSection;