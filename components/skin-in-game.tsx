"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, User } from "lucide-react"

interface SkinInGameProps {
  delay?: number
  className?: string
}

export function SkinInGame({ delay = 0.9, className }: SkinInGameProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <Badge className="bg-blue-600 text-white mb-2">Our Guarantee</Badge>
              <h4 className="font-semibold text-gray-900 mb-2">Coach's Personal Promise</h4>
              <p className="text-sm text-gray-700 mb-3">
                If you don't see technique improvement within 30 days, I'll personally coach you for free
                until you do.
              </p>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-medium text-gray-700">— Coach Blondell, Head Instructor</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span className="text-xs text-gray-600">Zero risk, maximum results</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
