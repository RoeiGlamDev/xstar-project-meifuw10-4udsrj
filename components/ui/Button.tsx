import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  children: React.ReactNode
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
}
const GlamCSButton: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseStyles = 'font-semibold rounded-lg px-4 py-2 focus:outline-none transition duration-200 ease-in-out'
  const primaryStyles = 'bg-orange-500 text-white hover:bg-orange-600'
  const secondaryStyles = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100'
  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles
  return (
    <motion.button
      className={${baseStyles} ${variantStyles}}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      aria-label={GlamCS ${variant} button}
    >
      {children}
    </motion.button>/
  )
}
export default GlamCSButton;