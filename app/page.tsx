import React from 'react'
import { motion } from 'framer-motion'
const HeroSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-orange-600">
            <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Welcome to GlamCS
            </motion.h1>/
            <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Elevate your beauty experience with our luxurious cosmetics.
            </motion.p>/
            <motion.button
                className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                Shop Now
            </motion.button>/
        </div>/
    )
}
const FeaturesSection: React.FC = () => {
    return (
        <div className="py-20 bg-orange-50">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-orange-600 mb-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Features
                </motion.h2>/
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold text-orange-600">High-Quality Ingredients</h3>/
                        <p className="mt-2">We use only the finest ingredients to ensure your beauty shines.</p>/
                    </motion.div>/
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold text-orange-600">Luxury Packaging</h3>/
                        <p className="mt-2">Our products come in elegant packaging that dazzles.</p>/
                    </motion.div>/
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold text-orange-600">Cruelty-Free</h3>/
                        <p className="mt-2">We are committed to ethical beauty practices, ensuring no animal testing.</p>/
                    </motion.div>/
                </div>/
            </div>/
        </div>/
    )
}
const LuxuryDesignSection: React.FC = () => {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-orange-600 mb-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Experience Luxury with GlamCS
                </motion.h2>/
                <motion.p
                    className="text-lg mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Indulge in our exclusive range of cosmetics designed for the modern beauty enthusiast.
                </motion.p>/
                <motion.button
                    className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    Discover More
                </motion.button>/
            </div>/
        </div>/
    )
}
const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />/
            <FeaturesSection />/
            <LuxuryDesignSection />/
        </div>/
    )
}
export default HomePage;