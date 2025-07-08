"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight } from "lucide-react"

interface PlainVanillaProps {
  delay?: number
  className?: string
}

export function PlainVanilla({ delay = 1.3, className }: PlainVanillaProps) {
  const steps = [
    "Identify your biggest technique flaw",
    "Apply the correct biomechanical fix",
    "Practice with immediate feedback",
    "Lock in the new muscle memory",
  ]

  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <Badge className="bg-yellow-600 text-white mb-2">
              <Lightbulb className="h-3 w-3 mr-1" />
              Simple Truth
            </Badge>
            <h4 className="font-semibold text-gray-900">It's Actually Pretty Obvious</h4>
            <p className="text-sm text-gray-700 mt-1">Fast swimming isn't mysterious. It's just 4 simple steps:</p>
          </div>

          <div className="space-y-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg p-2 border border-yellow-100"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
              >
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-xs font-bold text-yellow-700">
                  {index + 1}
                </div>
                <span className="text-sm text-gray-700 flex-1">{step}</span>
                {index < steps.length - 1 && <ArrowRight className="h-3 w-3 text-yellow-600" />}
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-gray-600 text-center mt-3">
            The hard part? Knowing exactly what to fix and how to fix it.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
