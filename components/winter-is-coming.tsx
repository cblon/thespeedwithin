"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, TrendingDown } from "lucide-react"

interface WinterIsComingProps {
  delay?: number
  className?: string
}

export function WinterIsComing({ delay = 0.5, className }: WinterIsComingProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-orange-100 rounded-full">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  Reality Check
                </Badge>
                <Clock className="h-4 w-4 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">The Plateau is Real</h4>
              <p className="text-sm text-gray-700 mb-3">
                Most swimmers hit a wall after 6-12 months. Without proper technique refinement, you'll spend years
                making the same mistakes.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <TrendingDown className="h-3 w-3 text-red-500" />
                  <span>Motivation drops 73%</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-orange-500" />
                  <span>Progress stalls</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
