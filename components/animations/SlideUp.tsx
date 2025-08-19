import React from 'react'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      {children}
    </motion.div>/
  )
}
const GlamCSHeader: React.FC = () => {
  return (
    <header className="bg-orange-500 text-white py-4 text-center">
      <h1 className="text-4xl font-bold">Welcome to GlamCS</h1>/
      <p className="mt-2 text-lg">Elevate Your Beauty Experience</p>/
    </header>/
  )
}
const ProductHighlight: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Featured Products</h2>/
      <div className="flex flex-wrap justify-center">
        <SlideUp>
          <div className="max-w-xs mx-4 my-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="path/to/product-image.jpg" alt="Luxury Lipstick" className="rounded-t-lg" />/
            <div className="p-4">
              <h3 className="text-xl font-bold text-orange-500">Luxury Lipstick</h3>/
              <p className="text-gray-700">Experience the richness of our premium lipstick line.</p>/
              <button className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300">
                Shop Now
              </button>/
            </div>/
          </div>/
        </SlideUp>/
        {/ Additional Products can be added here following the same structure /}/
      </div>/
    </section>/
  )
}
const GlamCSFooter: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white py-4 text-center">
      <p>&copy; 2023 GlamCS. All rights reserved.</p>/
      <p>Contact us: support@glamcs.com</p>/
    </footer>/
  )
}
const GlamCSWebsite: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <GlamCSHeader />/
      <main className="flex-grow">
        <ProductHighlight />/
      </main>/
      <GlamCSFooter />/
    </div>/
  )
}
export default GlamCSWebsite;