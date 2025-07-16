"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { VenmoPaymentModal } from "./venmo-payment-modal"

interface PricingCardProps {
  duration: string
  price: string
  description: string
  buttonText: string
  delay?: number
  onRegister?: () => void
  // Venmo payment props
  venmoUsername?: string
  venmoLink?: string
  qrCodeUrl?: string
  programTitle?: string
}

export function PricingCard({
  duration,
  price,
  description,
  buttonText,
  delay = 2.5,
  onRegister,
  venmoUsername = "elite-swim-academy",
  venmoLink,
  qrCodeUrl = "/placeholder.svg?height=128&width=128&text=Venmo+QR+Code",
  programTitle = "Elite Freestyle Intensive",
}: PricingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRegisterClick = () => {
    // Open the Venmo payment modal instead of calling onRegister directly
    setIsModalOpen(true)

    // Still call the original onRegister if provided (for analytics, etc.)
    if (onRegister) {
      onRegister()
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -5 }}
      >
        <Card className="bg-blue-600 border-0 text-white">
          <CardContent className="p-6 text-center">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
            >
              <p className="text-blue-100 text-sm">{duration}</p>
              <motion.p
                className="text-3xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: delay + 0.3,
                }}
              >
                {price}
              </motion.p>
              <p className="text-blue-100 text-sm">Per swimmer</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="w-full bg-white text-blue-600 hover:bg-gray-100 font-medium"
                onClick={handleRegisterClick}
              >
                {buttonText}
              </Button>
            </motion.div>
            <motion.p
              className="text-blue-100 text-xs mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.5 }}
            >
              {description}
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Venmo Payment Modal */}
      <VenmoPaymentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        amount={price}
        programTitle={programTitle}
        venmoUsername={venmoUsername}
        venmoLink={venmoLink}
        qrCodeUrl={qrCodeUrl}
      />
    </>
  )
}
