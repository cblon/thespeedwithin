"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import type { LucideIcon } from "lucide-react"
import type { RegistrationData } from "@/types"

interface HeroSectionProps {
  icon: LucideIcon
  title: string
  subtitle: string
  registration: RegistrationData
  delay?: number
  className?: string
}

export function HeroSection({ icon: Icon, title, subtitle, registration, delay = 0.2, className }: HeroSectionProps) {
  return (
    <motion.section
      className={`text-center py-8 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay }}
    >
      <motion.div
        className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="h-12 w-12 text-primary-foreground" />
      </motion.div>

      <motion.h2
        className="text-2xl font-semibold text-foreground mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-muted-foreground mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {subtitle}
      </motion.p>
      

      {/* <motion.p
        className="text-muted-foreground mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
     Clarksville Cove Family Aquatic Center: 800 S Clark Blvd, Clarksville, IN 47129
      </motion.p> */}

      <motion.div
        className="mt-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Registration</span>
          <span>
            {registration.current}/{registration.total} spots
          </span>
        </div>
        <Progress value={registration.progressValue} className="h-2 mb-2" />
        <p className="text-xs text-muted-foreground">Limited spots available - register today</p>
      </motion.div>
    </motion.section>
  )
}
