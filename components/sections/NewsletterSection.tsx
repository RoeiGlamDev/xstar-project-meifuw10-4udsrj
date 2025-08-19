import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterSectionProps {
  onSubmit: (email: string) => void
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    // Simulate an API call/
    setTimeout(() => {
      if (email) {
        onSubmit(email)
        setEmail('')
      } else {
        setError('Please enter a valid email address.')
      }
      setIsSubmitting(false)
    }, 1000)
  }
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <motion.h2
        className="text-3xl font-bold text-center text-orange-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join the GlamCS Family
      </motion.h2>/
      <motion.p
        className="text-center text-gray-700 mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sign up for exclusive offers and the latest trends in cosmetics.
      </motion.p>/
      <form onSubmit={handleSubmit} className="flex flex-col mt-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />/
        {error && <p className="text-red-500 text-sm">{error}</p>}/
        <motion.button
          type="submit"
          className="bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition duration-300"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
        >
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </motion.button>/
      </form>/
      <motion.p
        className="text-center text-gray-600 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Stay beautiful with GlamCS!
      </motion.p>/
    </div>/
  )
}
export default NewsletterSection;