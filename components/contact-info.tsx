"use client"

import { motion } from "framer-motion"
import { Permanent_Marker } from "next/font/google";
import Image from "next/image"


const marker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});
interface ContactInfoProps {
  name: string
  email: string
  phone: string
  delay?: number
}

export function ContactInfo({ name, email, phone, delay = 3.2 }: ContactInfoProps) {
  return (
    <motion.div
      className="flex flex-col text-center text-gray-600 text-sm justify-center items-center space-y-3 mt-[3rem]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Image src="/fishbowl.svg" alt="The fishbowl" width={100} height={100}  />
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: delay + 0.1 }}>
       <span className={`${marker.className} text-xl`}>
        {name}
       </span>
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
