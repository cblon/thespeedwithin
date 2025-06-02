"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface NotificationCardProps {
  title: string
  subtitle: string
  delay?: number
  onClick?: () => void
}

export function NotificationCard({ title, subtitle, delay = 0.1, onClick }: NotificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="bg-white border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900 font-medium">{title}</p>
              <p className="text-gray-600 text-sm">{subtitle}</p>
            </div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
