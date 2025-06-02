"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

interface AnimatedHeaderProps {
  title: string
  onBackClick?: () => void
}

export function AnimatedHeader({ title, onBackClick }: AnimatedHeaderProps) {
  return (
    <motion.header
      className="bg-white border-b border-gray-200 px-4 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={onBackClick} className="mr-4">
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </motion.button>
        <h1 className="text-lg font-medium text-gray-900 flex-1 text-center mr-10">{title}</h1>
      </div>
    </motion.header>
  )
}
