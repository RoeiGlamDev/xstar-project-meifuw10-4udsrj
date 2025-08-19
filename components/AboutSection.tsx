import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',/
  },
  {
    name: 'Liam Johnson',
    role: 'Head of Product Development',
    image: '/images/liam.jpg',/
  },
  {
    name: 'Emma Wilson',
    role: 'Marketing Director',
    image: '/images/emma.jpg',/
  },
]
const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">About GlamCS</h2>/
        <p className="mb-4">
          At GlamCS, we believe that beauty is a powerful form of self-expression. Our journey began with a passion for crafting 
          high-quality cosmetics that empower individuals to embrace their unique beauty. With a commitment to innovation and luxury, 
          we have developed a line of products that not only enhance appearance but also nourish and protect the skin.
        </p>/
        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>/
        <p className="mb-4">
          Our mission at GlamCS is to redefine the cosmetics industry by providing luxurious, cruelty-free products that inspire confidence 
          and creativity. We strive to create an inclusive environment where everyone can feel beautiful and empowered, 
          using our products as tools for self-expression.
        </p>/
        <h3 className="text-2xl font-semibold mb-2">Meet Our Team</h3>/
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 rounded-lg p-4 text-center shadow-md transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-2"
              />/
              <h4 className="text-xl font-bold">{member.name}</h4>/
              <p className="text-orange-500">{member.role}</p>/
            </motion.div>/
          ))}
        </div>/
        <h3 className="text-2xl font-semibold mb-2 mt-8">Our Values</h3>/
        <p>
          At GlamCS, we are dedicated to sustainability, inclusivity, and quality. 
          Our products are developed with the highest standards in mind, ensuring that 
          each item not only meets but exceeds customer expectations. We celebrate diversity 
          and strive to create a community where everyone can find their perfect glam.
        </p>/
      </motion.div>/
    </section>/
  )
}
export default AboutSection;