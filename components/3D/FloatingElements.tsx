import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';/
import { OrbitControls } from '@react-three/drei';/
import { motion } from 'framer-motion'
const FloatingElement = () => {
  return (
    <motion.mesh 
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, ease: 'easeInOut', loop: Infinity }}
    >
      <sphereBufferGeometry args={[1, 32, 32]} />/
      <meshStandardMaterial color="orange" />/
    </motion.mesh>/
  )
}
const FloatingElements: React.FC = () => {
  useEffect(() => {
    document.title = "GlamCS - Elevate Your Beauty"
  }, [])
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />/
        <pointLight position={[10, 10, 10]} />/
        <FloatingElement />/
        <OrbitControls />/
      </Canvas>/
      <div className="absolute text-center">
        <h1 className="text-5xl font-bold text-orange-600">Welcome to GlamCS</h1>/
        <p className="mt-4 text-lg text-gray-800">
          Discover our luxurious range of cosmetics designed to elevate your beauty and confidence.
        </p>/
      </div>/
    </div>/
  )
}
export default FloatingElements;