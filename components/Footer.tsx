import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {
  companyName: string
  links: { name: string; url: string }[]
  socialMedia: { platform: string; url: string }[]
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "GlamCS"
  const links = [
    { name: 'About Us', url: '/about' },/
    { name: 'Shop', url: '/shop' },/
    { name: 'Contact', url: '/contact' },/
    { name: 'FAQ', url: '/faq' },/
    { name: 'Privacy Policy', url: '/privacy' },/
  ]
  const socialMedia = [
    { platform: 'Instagram', url: 'https://instagram.com/GlamCS' },/
    { platform: 'Facebook', url: 'https://facebook.com/GlamCS' },/
    { platform: 'Twitter', url: 'https://twitter.com/GlamCS' },/
  ]
  return (
    <footer className="bg-white py-8 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to {companyName}
        </motion.h2>/
        <p className="text-gray-600 mb-6">
          Elevate your beauty with our luxurious cosmetics line.
        </p>/
        <div className="flex justify-center mb-6">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="mx-4 text-orange-500 hover:text-orange-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>/
          ))}
        </div>/
        <div className="flex justify-center">
          {socialMedia.map((media) => (
            <motion.a
              key={media.platform}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-orange-500 hover:text-orange-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {media.platform}
            </motion.a>/
          ))}
        </div>/
        <p className="text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>/
      </div>/
    </footer>/
  )
}
export default Footer;