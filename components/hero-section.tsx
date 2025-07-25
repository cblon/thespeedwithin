"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import type { LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
interface HeroSectionProps {
  icon: LucideIcon
  title: string
  subtitle: string
    badges?: { text: string; variant?: "default" | "secondary" | "destructive" | "outline"; className?: string }[]
  registrationCurrent: number
  registrationTotal: number
  progressValue: number
  delay?: number
}

export function HeroSection({
  icon: Icon,
  title,
  subtitle,
  registrationCurrent,
  registrationTotal,
  progressValue,
    badges,
  delay = 0.2,
}: HeroSectionProps) {
  return (
    <motion.div
      className="text-center py-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay }}
    >
      <motion.div
        className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="h-12 w-12 text-white" />
      </motion.div>
      <motion.h2
        className="text-2xl font-medium text-gray-900 mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {subtitle}
      </motion.p>

      
      {badges && badges.length > 0 && (
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.25 }}
        >
          {badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant || "outline"} className={badge.className}>
              {badge.text}
            </Badge>
          ))}
        </motion.div>
      )}

      <motion.div
        className="mt-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Registration</span>
          <span>
            {registrationCurrent}/{registrationTotal} spots
          </span>
        </div>
        <Progress value={progressValue} className="h-2" />
        <p className="text-xs text-gray-500 mt-2">Limited spots available - register today</p>
      </motion.div>
    </motion.div>
  )
}
