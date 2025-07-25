import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "90 mins Deep Endurance Session (Triathletes only)",
  description:
    "4-hour developmental intensive focusing on championship mindset, racing starts, transitions, freestyle stroke, and turns & finishes.",
  keywords: ["swimming", "freestyle", "training", "intensive", "coaching"],
  authors: [{ name: "Elite Swim Academy" }],
  openGraph: {
    title: "90 mins Deep Endurance Session (Triathletes only)",
    description: "4-hour developmental intensive for competitive swimmers",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
