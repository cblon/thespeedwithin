"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight, Target } from "lucide-react"

interface TwoXMultiplierProps {
  delay?: number
  className?: string
}

export function TwoXMultiplier({ delay = 0.7, className }: TwoXMultiplierProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-4">
          <div className="text-center">
            <Badge className="bg-green-600 text-white mb-3">
              <Zap className="h-3 w-3 mr-1" />
              Exponential Results
            </Badge>

            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">6 months</div>
                <div className="text-xs text-gray-600">Self-teaching</div>
              </div>

              <ArrowRight className="h-5 w-5 text-green-600" />

              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4 hours</div>
                <div className="text-xs text-gray-600">Our intensive</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border border-green-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-gray-900">2X Faster Breakthrough</span>
              </div>
              <p className="text-xs text-gray-600">
                Skip the trial-and-error phase. Get the same results in 1/40th the time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
