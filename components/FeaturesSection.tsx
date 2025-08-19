import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'Experience the elegance of high-end cosmetics crafted with the finest ingredients to enhance your beauty.',
    icon: <i className="fas fa-star text-orange-500"></i>,/
  },
  {
    title: 'Luxurious Packaging',
    description: 'Our products come in exquisite packaging that reflects the sophistication of GlamCS. Perfect for gifting!',
    icon: <i className="fas fa-gift text-orange-500"></i>,/
  },
  {
    title: 'Innovative Formulas',
    description: 'Utilizing cutting-edge technology, our formulas are designed to provide long-lasting wear and unmatched performance.',
    icon: <i className="fas fa-flask text-orange-500"></i>,/
  },
  {
    title: 'Sustainability Focus',
    description: 'GlamCS is committed to eco-friendly practices, using sustainable materials and cruelty-free ingredients.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,/
  },
]
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover GlamCS Features
        </motion.h2>/
        <p className="text-lg mb-12 text-gray-600">
          At GlamCS, we pride ourselves on delivering a luxurious cosmetics experience that speaks to your beauty.
        </p>/
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>/
              <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>/
              <p className="text-gray-500">{feature.description}</p>/
            </motion.div>/
          ))}
        </div>/
      </div>/
    </section>/
  )
}
export default FeaturesSection;