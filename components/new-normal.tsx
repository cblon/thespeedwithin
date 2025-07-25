"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Star } from "lucide-react"

interface NewNormalProps {
  delay?: number
  className?: string
}

export function NewNormal({ delay = 1.1, className }: NewNormalProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
        <CardContent className="p-4">
          <div className="text-center">
            <Badge className="bg-purple-600 text-white mb-3">
              <Star className="h-3 w-3 mr-1" />
             The Standard
            </Badge>

            <h4 className="font-semibold text-gray-900 mb-2">This is How Swimmers Train</h4>
            <p className="text-sm text-gray-700 mb-4">
              Swim efficiency sessions aren't optional anymore. They're the baseline for long distance swimming.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-purple-100">
                <TrendingUp className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">92%</div>
                <div className="text-xs text-gray-600">Distance swimmers use swim intensives</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-100">
                <Users className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">Top 10%</div>
                <div className="text-xs text-gray-600">All prioritize efficiency</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
