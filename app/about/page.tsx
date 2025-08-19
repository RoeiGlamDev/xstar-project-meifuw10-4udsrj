import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Johnson',
    role: 'Founder & CEO',
    image: '/images/team/sophia.jpg',/
  },
  {
    name: 'Liam Smith',
    role: 'Head of Marketing',
    image: '/images/team/liam.jpg',/
  },
  {
    name: 'Emma Brown',
    role: 'Lead Product Developer',
    image: '/images/team/emma.jpg',/
  },
]
const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <motion.h1
        className="text-4xl font-bold mb-6 text-orange-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About GlamCS
      </motion.h1>/
      <motion.p
        className="text-lg max-w-2xl text-center text-gray-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        At GlamCS, we believe in the transformative power of cosmetics. Founded with passion and a vision for luxury, GlamCS is dedicated to bringing you high-quality, innovative beauty products that enhance your natural beauty. Our journey began with a simple idea: to create a line of cosmetics that not only looks good but also feels good on your skin.
      </motion.p>/

      <motion.h2
        className="text-3xl font-semibold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our Values
      </motion.h2>/
      <motion.p
        className="text-lg max-w-2xl text-center text-gray-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        GlamCS stands for quality, innovation, and empowerment. We craft our products with the finest ingredients, ensuring that every item meets our high standards. Our commitment to sustainability and ethical practices drives us to use eco-friendly packaging and cruelty-free formulations. We empower individuals to express themselves through beauty, fostering confidence and self-love.
      </motion.p>/

      <motion.h2
        className="text-3xl font-semibold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Meet Our Team
      </motion.h2>/
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4"
            />/
            <h3 className="text-xl font-semibold text-orange-500">{member.name}</h3>/
            <p className="text-gray-600">{member.role}</p>/
          </motion.div>/
        ))}
      </div>/
    </div>/
  )
}
export default About;