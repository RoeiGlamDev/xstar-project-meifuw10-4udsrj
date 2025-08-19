import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-20 backdrop-blur-md border border-orange-400 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />/
      <div className="p-6">
        <h2 className="text-2xl font-bold text-orange-600">{title}</h2>/
        <p className="mt-2 text-gray-700">{description}</p>/
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded transition duration-300 hover:bg-orange-600">
          Shop Now
        </button>/
      </div>/
    </motion.div>/
  )
}
export default Card;