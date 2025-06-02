"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AnimatedHeaderProps {
  title: string
  onBackClick?: () => void
  className?: string
}

export function AnimatedHeader({ title, onBackClick, className }: AnimatedHeaderProps) {
  return (
    <motion.header
      className={`bg-white border-b border-border px-4 py-3 sticky top-0 z-50 backdrop-blur-sm bg-background/95 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center max-w-lg mx-auto">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" size="icon" onClick={onBackClick} className="mr-4" aria-label="Go back">
            {/* <ArrowLeft className="h-6 w-6" /> */}
          </Button>
        </motion.div>
        <h1 className="text-lg font-medium text-foreground flex-1 text-center mr-14">{title}</h1>
      </div>
    </motion.header>
  )
}
