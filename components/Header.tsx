import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  logoUrl: string
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  const navItems = [
    { name: 'Home', href: '/' },/
    { name: 'Products', href: '/products' },/
    { name: 'About Us', href: '/about' },/
    { name: 'Contact', href: '/contact' },/
  ]
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img src={logoUrl} alt="GlamCS Logo" className="h-8 w-auto" />/
          <h1 className="text-2xl font-bold text-orange-500 ml-2">GlamCS</h1>/
        </motion.div>/
        <nav className={hidden md:flex space-x-8}>
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>/
          ))}
        </nav>/
        <button
          className="md:hidden p-2 text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>/
      </div>/
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-800 py-2 hover:text-orange-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>/
            ))}
          </nav>/
        </motion.div>/
      )}
    </header>/
  )
}
export default Header;