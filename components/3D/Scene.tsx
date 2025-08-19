import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';/
import { OrbitControls } from '@react-three/drei';/
import { motion } from 'framer-motion'
const Scene: React.FC = () => {
  useEffect(() => {
    // Additional setup can go here (e.g., animations, audio, etc.)/
  }, [])
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.h1
        className="text-5xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to GlamCS
      </motion.h1>/
      <motion.p
        className="text-lg text-gray-700 mb-10 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover our luxurious range of cosmetics designed to enhance your beauty with elegance and sophistication.
      </motion.p>/
      <div className="w-full h-96">
        <Canvas>
          <OrbitControls enableZoom={false} />/
          {/ 3D models can be added here /}/
          <ambientLight intensity={0.5} />/
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />/
          {/ Example 3D object /}/
          <mesh>
            <boxGeometry args={[1, 1, 1]} />/
            <meshStandardMaterial color={'#FFA500'} />/
          </mesh>/
        </Canvas>/
      </div>/
      <motion.button
        className="mt-8 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>/
    </div>/
  )
}
export default Scene;