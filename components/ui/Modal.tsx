import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">{title}</h2>/
        <p className="text-gray-700 text-center mb-6">{content}</p>/
        <button
          className="absolute top-2 right-2 text-orange-500 hover:text-orange-700 transition-colors"
          onClick={onClose}
        >
          &times
        </button>/
        <button
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors"
          onClick={onClose}
        >
          Close
        </button>/
      </motion.div>/
    </div>/
  )
}
export default Modal;