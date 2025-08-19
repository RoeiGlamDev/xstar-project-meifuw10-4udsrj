import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  onButtonClick: () => void
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Elevate Your Beauty with GlamCS",
  description = "Experience the luxurious feel of our high-end cosmetics. Join the GlamCS community and redefine your beauty routine with our elegant and innovative products.",
  buttonText = "Shop Now",
  onButtonClick,
}) => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white">
      <motion.h2
        className="text-4xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>/
      <motion.p
        className="text-lg text-gray-700 mb-8 text-center max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>/
      <motion.button
        className="bg-orange-500 text-white py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        onClick={onButtonClick}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {buttonText}
      </motion.button>/
    </section>/
  )
}
export default CTASection;