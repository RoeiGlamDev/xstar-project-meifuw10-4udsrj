import React from 'react'
import { motion } from 'framer-motion'
interface StatsData {
    label: string
    count: number
}

const stats: StatsData[] = [
    { label: 'Products Launched', count: 150 },
    { label: 'Happy Customers', count: 12000 },
    { label: 'Awards Won', count: 8 },
    { label: 'Countries Shipped', count: 25 }
]
const StatsSection: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
                    GlamCS Achievements
                </h2>/
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-orange-100 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="text-5xl font-extrabold text-orange-600"
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {stat.count}
                            </motion.div>/
                            <p className="text-xl font-medium text-gray-700 mt-2">
                                {stat.label}
                            </p>/
                        </motion.div>/
                    ))}
                </div>/
            </div>/
        </section>/
    )
}
export default StatsSection;