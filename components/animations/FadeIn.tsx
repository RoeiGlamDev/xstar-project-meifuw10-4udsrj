import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface FadeInProps {
  children: React.ReactNode
  className?: string
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  return (
    <motion.div
      ref={ref}
      className={transition-opacity duration-700 ${className}}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
    >
      {children}
    </motion.div>/
  )
}
export default FadeIn;