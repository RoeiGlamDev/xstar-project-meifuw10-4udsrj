import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  title: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Glam Package',
    price: '$49',
    features: [
      'Skin Consultation',
      'Makeup Application',
      'Basic Skincare Set',
      'GlamCS Exclusive Samples',
    ],
  },
  {
    title: 'Premium Glam Package',
    price: '$99',
    features: [
      'Full Skin Assessment',
      'Advanced Makeup Application',
      'Luxury Skincare Set',
      'GlamCS Exclusive Samples',
      'Personalized Makeup Guide',
    ],
  },
  {
    title: 'Ultimate Glam Experience',
    price: '$149',
    features: [
      'In-depth Skin Analysis',
      'Custom Makeup Application',
      'Complete Skincare Set',
      'GlamCS Exclusive Samples',
      'One-on-One Consultation',
      'Follow-up Consultation',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">GlamCS Pricing Plans</h2>/
        <p className="text-gray-700 text-lg">Choose the perfect GlamCS package for your beauty journey.</p>/
      </div>/
      <div className="flex flex-wrap justify-center">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 m-4 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">{tier.title}</h3>/
            <p className="text-xl font-bold text-gray-800 my-4">{tier.price}</p>/
            <ul className="list-disc list-inside text-left mb-6">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">{feature}</li>/
              ))}
            </ul>/
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400">
              Choose This Package
            </button>/
          </motion.div>/
        ))}
      </div>/
    </section>/
  )
}
export default PricingSection;