import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
  id: number
  name: string
  content: string
  rating: number
  photo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Samantha R.',
    content: 'GlamCS transformed my skin! The luminous foundation blends perfectly and lasts all day. Highly recommend!',
    rating: 5,
    photo: '/images/testimonial1.jpg',/
  },
  {
    id: 2,
    name: 'Jessica L.',
    content: 'The GlamCS eyeshadow palette is a game-changer. The colors are vibrant and long-lasting. Love it!',
    rating: 4.5,
    photo: '/images/testimonial2.jpg',/
  },
  {
    id: 3,
    name: 'Rachel M.',
    content: 'I've never felt more confident! GlamCS lipsticks are rich, creamy, and oh-so-luxurious.',
    rating: 5,
    photo: '/images/testimonial3.jpg',/
  },
]
const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-8">
        What Our Customers Say About GlamCS
      </h2>/
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonial.photo}
              alt={Testimonial from ${testimonial.name}}
              className="w-16 h-16 rounded-full mb-4 mx-auto"
            />/
            <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>/
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  className={w-5 h-5 ${idx < testimonial.rating ? 'text-orange-500' : 'text-gray-300'}}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"/
                >
                  <path d="M10 15l-5.878 3.09 1.127-6.563L0 6.18l6.546-.955L10 0l3.454 5.225L20 6.18l-5.249 5.347 1.127 6.563z" />/
                </svg>/
              ))}
            </div>/
            <h3 className="text-center font-semibold text-lg text-orange-600">{testimonial.name}</h3>/
          </motion.div>/
        ))}
      </div>/
    </section>/
  )
}
export default TestimonialsSection;'