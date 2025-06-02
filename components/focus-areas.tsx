"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FocusArea {
  icon: LucideIcon
  color: string
  borderColor: string
  title: string
  subtitle: string
}

interface FocusAreasProps {
  areas: FocusArea[]
  delay?: number
}

export function FocusAreas({ areas, delay = 0.7 }: FocusAreasProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
      <motion.h3
        className="text-lg font-medium text-gray-900 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
      >
        Focus Areas
      </motion.h3>
      <div className="flex justify-between space-x-2">
        {areas.map((area, index) => {
          const IconComponent = area.icon
          return (
            <motion.div
              key={index}
              className="text-center flex-shrink-0 w-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`w-14 h-14 border-4 border-${area.borderColor} rounded-full flex items-center justify-center mx-auto mb-2`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent className={`h-6 w-6 text-${area.color}`} />
              </motion.div>
              <p className="text-xs font-medium text-gray-900">{area.title}</p>
              <p className="text-xs text-gray-600">{area.subtitle}</p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
