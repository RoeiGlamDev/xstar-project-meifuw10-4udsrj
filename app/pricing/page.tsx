import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  title: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Glam',
    price: '$29.99',
    features: [
      'Skin Care Essentials',
      '1 GlamCS Product Sample',
      'Free Shipping on Orders Over $50',
      'Email Support',
    ],
  },
  {
    title: 'Premium Glam',
    price: '$59.99',
    features: [
      'All Basic Glam Features',
      'Exclusive Access to New Products',
      '2 GlamCS Product Samples',
      'Priority Customer Support',
    ],
  },
  {
    title: 'Luxury Glam',
    price: '$99.99',
    features: [
      'All Premium Glam Features',
      'Personalized GlamCS Consultation',
      '3 GlamCS Product Samples',
      'Early Access to Sales',
    ],
  },
]
const FAQ = [
  {
    question: 'What is GlamCS?',
    answer: 'GlamCS is your destination for high-end cosmetics, providing quality products that enhance your beauty.',
  },
  {
    question: 'How do I order?',
    answer: 'Simply select your desired package, add to cart, and checkout securely through our website.',
  },
  {
    question: 'Is shipping free?',
    answer: 'Yes, we offer free shipping on all orders over $50.',
  },
  {
    question: 'Can I return products?',
    answer: 'Yes, we have a 30-day return policy on unopened products.',
  },
]
const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold text-center text-orange-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          GlamCS Pricing Plans
        </motion.h1>/
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-orange-100 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-orange-600">{tier.title}</h2>/
              <p className="text-xl font-bold text-orange-500 mt-2">{tier.price}</p>/
              <ul className="mt-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 list-disc list-inside">
                    {feature}
                  </li>/
                ))}
              </ul>/
              <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                Select Plan
              </button>/
            </div>/
          ))}
        </motion.div>/
        <motion.h2
          className="text-3xl font-bold text-center text-orange-500 mt-12 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>/
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {FAQ.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-orange-600">{item.question}</h3>/
              <p className="text-gray-700">{item.answer}</p>/
            </div>/
          ))}
        </div>/
      </div>/
    </div>/
  )
}
export default PricingPage;