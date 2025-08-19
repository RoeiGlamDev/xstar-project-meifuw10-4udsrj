import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormInputs {
  name: string
  email: string
  subject: string
  message: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInputs>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<string[]>([])
  const [successMessage, setSuccessMessage] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const validateForm = (): boolean => {
    const newErrors: string[] = []
    if (!formData.name) newErrors.push('Name is required')
    if (!formData.email) newErrors.push('Email is required')
    if (!formData.subject) newErrors.push('Subject is required')
    if (!formData.message) newErrors.push('Message is required')
    setErrors(newErrors)
    return newErrors.length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Simulate form submission/
      setSuccessMessage('Thank you for contacting GlamCS! We will get back to you shortly.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors([])
    }
  }
  return (
    <section className="bg-white text-gray-800 py-10 px-5">
      <motion.h2 
        className="text-3xl font-bold text-center mb-5 text-orange-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h2>/
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>/
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-orange-500 rounded focus:outline-none focus:ring focus:ring-orange-200"
              required
            />/
          </div>/
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>/
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-orange-500 rounded focus:outline-none focus:ring focus:ring-orange-200"
              required
            />/
          </div>/
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="subject">Subject</label>/
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border border-orange-500 rounded focus:outline-none focus:ring focus:ring-orange-200"
              required
            >
              <option value="">Select a reason</option>/
              <option value="Product Inquiry">Product Inquiry</option>/
              <option value="Order Status">Order Status</option>/
              <option value="Feedback">Feedback</option>/
              <option value="Other">Other</option>/
            </select>/
          </div>/
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>/
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-orange-500 rounded focus:outline-none focus:ring focus:ring-orange-200"
              required
            />/
          </div>/
          {errors.length > 0 && (
            <div className="mb-4 text-red-600">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>/
              ))}
            </div>/
          )}
          {successMessage && (
            <div className="mb-4 text-green-600">
              {successMessage}
            </div>/
          )}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition duration-300"
          >
            Send Message
          </button>/
        </form>/
      </div>/
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-orange-600">Business Information</h3>/
        <p className="mt-2">GlamCS Cosmetics</p>/
        <p>Email: support@glamcs.com</p>/
        <p>Phone: (123) 456-7890</p>/
        <p>Location: 123 Glam Street, Beauty City, BC 12345</p>/
        <p>Business Hours: Mon-Fri, 9 AM - 6 PM</p>/
      </div>/
    </section>/
  )
}
export default ContactSection;