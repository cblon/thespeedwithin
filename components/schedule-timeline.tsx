"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calendar, Plus, Minus } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ScheduleItem {
  time: string
  title: string
  icon: LucideIcon
  color: string
  description: string
  details: string[]
}

interface ScheduleTimelineProps {
  date: string
  items: ScheduleItem[]
  delay?: number
}

export function ScheduleTimeline({ date, items, delay = 1.4 }: ScheduleTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "border-purple-200 bg-purple-600 text-purple-600",
      blue: "border-blue-200 bg-blue-600 text-blue-600",
      green: "border-green-200 bg-green-600 text-green-600",
      teal: "border-teal-200 bg-teal-600 text-teal-600",
      orange: "border-orange-200 bg-orange-600 text-orange-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
      <motion.div
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
      >
        <h3 className="text-lg font-medium text-gray-900">Training Schedule</h3>
        <motion.div
          className="flex items-center gap-2 text-sm text-gray-600"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </motion.div>
      </motion.div>

      <div className="relative">
        {items.map((item, index) => {
          const colorClasses = getColorClasses(item.color)
          const IconComponent = item.icon

          return (
            <motion.div
              key={index}
              className="relative flex items-start gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.3 + index * 0.1 }}
            >
              {/* Timeline dot and line with time */}
              <div className="flex flex-col items-center relative">
                {/* Time label */}
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: delay + 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.time}
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className={`w-4 h-4 rounded-full ${colorClasses.split(" ")[1]} border-2 border-white shadow-md mt-6`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: delay + 0.5 + index * 0.1,
                  }}
                  whileHover={{ scale: 1.3 }}
                />

                {/* Timeline line */}
                {index < items.length - 1 && (
                  <motion.div
                    className={`w-0.5 h-20 ${colorClasses.split(" ")[1]} opacity-30 mt-2`}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: delay + 0.6 + index * 0.1 }}
                    style={{ transformOrigin: "top" }}
                  />
                )}
              </div>

              {/* Content card */}
              <motion.div
                className="flex-1 mt-6"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white border-0 shadow-sm">
                  <motion.button
                    className="w-full p-4 text-left"
                    onClick={() => toggleExpand(index)}
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`w-10 h-10 rounded-full border-2 ${colorClasses.split(" ")[0]} flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className={`h-5 w-5 ${colorClasses.split(" ")[2]}`} />
                        </motion.div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        {expandedIndex === index ? (
                          <Minus className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Plus className="h-5 w-5 text-gray-400" />
                        )}
                      </motion.div>
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4">
                          <ul className="space-y-2">
                            {item.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-700"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                whileHover={{ x: 5 }}
                              >
                                <span className={`w-2 h-2 mt-1.5 rounded-full ${colorClasses.split(" ")[1]}`} />
                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
