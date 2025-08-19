import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
  error?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  required = false,
  placeholder,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="flex flex-col mb-4">
      <label className="text-orange-600 text-lg font-semibold mb-2">
        {label}
      </label>/
      <motion.input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border-2 border-orange-300 rounded-lg p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
          error ? 'border-red-500' : 'border-orange-300'
        } ${isFocused ? 'shadow-lg' : 'shadow-md'}}
        whileHover={{ scale: 1.02 }}
      />/
      {error && <span className="text-red-500 text-sm">{error}</span>}/
    </div>/
  )
}
export default Input;