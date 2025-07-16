"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, ExternalLink, CheckCircle, Clock, AlertCircle, Smartphone, QrCode, CreditCard } from "lucide-react"
import Image from "next/image"

interface VenmoPaymentModalProps {
  isOpen: boolean
  onClose: () => void
  amount: string
  programTitle: string
  venmoUsername: string
  venmoLink?: string
  qrCodeUrl?: string
}

export function VenmoPaymentModal({
  isOpen,
  onClose,
  amount,
  programTitle,
  venmoUsername,
  venmoLink,
  qrCodeUrl,
}: VenmoPaymentModalProps) {
  const [copied, setCopied] = useState(false)
  const [step, setStep] = useState(1)

  const handleCopyUsername = async () => {
    try {
      await navigator.clipboard.writeText(venmoUsername)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleVenmoLink = () => {
    if (venmoLink) {
      window.open(venmoLink, "_blank")
    }
  }

  const steps = [
    {
      number: 1,
      title: "Open Venmo App",
      description: "Launch the Venmo app on your phone",
      icon: Smartphone,
    },
    {
      number: 2,
      title: "Search or Scan",
      description: `Search for @${venmoUsername} or scan the QR code`,
      icon: QrCode,
    },
    {
      number: 3,
      title: "Send Payment",
      description: `Send exactly ${amount} with note: "${programTitle}"`,
      icon: CreditCard,
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <CreditCard className="h-4 w-4 text-white" />
            </div>
            Complete Your Registration
          </DialogTitle>
          <DialogDescription>Secure your spot with Venmo payment</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Payment Summary */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">{programTitle}</h3>
                <div className="text-3xl font-bold text-blue-600 my-2">{amount}</div>
                <Badge variant="default" className="text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Limited Time Offer
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* QR Code Section */}
          {qrCodeUrl && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-medium text-gray-900 mb-3">Quick Pay with QR Code</h4>
              <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 inline-block">
                <Image
                 width={500}
                 height={500}
                src={qrCodeUrl || "/placeholder.svg"} 
                alt="Venmo QR Code"
                 className="w-44 h-44 mx-auto" 
                 />
              </div>
              <p className="text-xs text-gray-600 mt-2">Scan with your Venmo app camera</p>
            </motion.div>
          )}

          {/* Manual Payment Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">Or Pay Manually</h4>
              <Badge variant="outline" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                2-3 minutes
              </Badge>
            </div>

            {/* Venmo Username */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Venmo Username</p>
                    <p className="text-lg font-mono text-blue-600">@{venmoUsername}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyUsername}
                      className="flex items-center gap-1 bg-transparent"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="h-3 w-3" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy
                        </>
                      )}
                    </Button>
                    {venmoLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleVenmoLink}
                        className="flex items-center gap-1 bg-transparent"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Open
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step-by-Step Instructions */}
            <div className="space-y-3">
              <h5 className="font-medium text-gray-900">Payment Instructions</h5>
              {steps.map((stepItem, index) => {
                const IconComponent = stepItem.icon
                return (
                  <motion.div
                    key={stepItem.number}
                    className={`flex items-start gap-3 p-3 rounded-lg border ${
                      step >= stepItem.number ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step >= stepItem.number ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {step > stepItem.number ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <IconComponent className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h6 className="font-medium text-gray-900">{stepItem.title}</h6>
                      <p className="text-sm text-gray-600">{stepItem.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Important Notes */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-yellow-800 mb-1">Important Notes:</p>
                    <ul className="text-yellow-700 space-y-1 text-xs">
                      <li>• Include "{programTitle}" in your payment note</li>
                      <li>• Send exactly {amount}</li>
                      <li>• Questions? Contact us at (502) 295-9402</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button onClick={() => setStep(Math.min(step + 1, 3))} className="flex-1 bg-blue-600 hover:bg-blue-700">
              {step === 3 ? "Done" : `Step ${step + 1}`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
