"use client"

import { motion } from "framer-motion"

interface ContactInfoProps {
  name: string
  email: string
  phone: string
  delay?: number
}

export function ContactInfo({ name, email, phone, delay = 3.2 }: ContactInfoProps) {
  return (
    <motion.div
      className="text-center text-gray-600 text-sm space-y-1"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: delay + 0.1 }}>
        {name}
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: delay + 0.2 }}>
        {email}
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: delay + 0.3 }}>
        {phone}
      </motion.p>
    </motion.div>
  )
}
