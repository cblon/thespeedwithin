"use client"

import { Waves, Zap, Activity, RotateCcw, Brain } from "lucide-react"
import { AnimatedHeader } from "@/components/layout/animated-header"

import { HeroSection } from "@/components/sections/hero-section"
import { FocusAreas } from "@/components/focus-areas"
import { ScheduleTimeline } from "@/components/schedule-timeline"
import { PricingCard } from "@/components/pricing-card"
import { ContactInfo } from "@/components/contact-info"
import type { FocusArea, ScheduleItem, ContactDetails, RegistrationData, PricingInfo } from "@/types"

const focusAreas: FocusArea[] = [
  { icon: Brain, color: "purple-600", borderColor: "purple-200", title: "Championship", subtitle: "Mindset" },
  { icon: Zap, color: "blue-600", borderColor: "blue-200", title: "Racing", subtitle: "Starts" },
  { icon: Activity, color: "green-600", borderColor: "green-200", title: "Transitions", subtitle: "Underwater" },
  { icon: Waves, color: "teal-600", borderColor: "teal-200", title: "Freestyle", subtitle: "Stroke" },
  { icon: RotateCcw, color: "orange-600", borderColor: "orange-200", title: "Turns &", subtitle: "Finishes" },
]

const scheduleData: ScheduleItem[] = [
  {
    time: "8:00 - 8:15 AM",
    title: "Championship Mindset",
    icon: Brain,
    color: "purple",
    description: "Mental preparation and race visualization techniques",
    details: [
      "Pre-race mental preparation strategies",
      "Visualization techniques for optimal performance",
      "Building confidence and focus",
      "Managing competition nerves",
    ],
  },
  {
    time: "8:15 - 9:00 AM",
    title: "Racing Starts",
    icon: Zap,
    color: "blue",
    description: "Explosive block starts and water entry",
    details: [
      "Optimal block positioning and setup",
      "Explosive start technique",
      "Perfect water entry angles",
      "Reaction time improvement",
    ],
  },
  {
    time: "9:00 - 9:45 AM",
    title: "Transitions & Underwater",
    icon: Activity,
    color: "green",
    description: "Streamline and underwater flykick mastery",
    details: [
      "Perfect streamline positioning",
      "Powerful underwater flykick technique",
      "Optimal kick count strategy",
      "Seamless breakout timing",
    ],
  },
  // {
  //   time: "10:15 - 11:00 AM",
  //   title: "Freestyle Stroke",
  //   icon: Waves,
  //   color: "teal",
  //   description: "Efficient freestyle technique development",
  //   details: [
  //     "Optimal stroke mechanics",
  //     "Breathing pattern optimization",
  //     "Body position and rotation",
  //     "Catch and pull technique",
  //   ],
  // },
  {
    time: "9:45 - 10:30 PM",
    title: "Turns & Finishes",
    icon: RotateCcw,
    color: "orange",
    description: "Fast flip turns and winning finishes",
    details: [
      "High-speed flip turn technique",
      "Wall approach optimization",
      "Powerful push-off mechanics",
      "Race-winning finish strategy",
    ],
  },
]

const registrationData: RegistrationData = {
  current: 0,
  total: 30,
  progressValue: 0,
}

const pricingInfo: PricingInfo = {
  duration: "2.5-Hour Intensive",
  price: "$150",
  description: "Includes elite coaching, video analysis, and technique plan",
}

const contactDetails: ContactDetails = {
  name: "The Speed Within",
  email: "info@thespeedwithin.com",
  phone: "(502) 295-9402",
}

export default function FreestyleIntensivePage() {
  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back()
    }
  }

  const handleNotificationClick = () => {
    console.log("Notification clicked")
  }

  const handleRegister = () => {
    console.log("Register clicked")
    // Add registration logic here
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader title="Freestyle Developmental Intensive" onBackClick={handleBackClick} />

      <main className="px-6 py-6 space-y-6 max-w-lg mx-auto">
       

        <HeroSection
          icon={Waves}
          title="Freestyle Developmental Intensive"
          subtitle="2.5-Hour Development Session"
          registration={registrationData}
        />

        <FocusAreas areas={focusAreas} />

        <ScheduleTimeline date="Saturday, July 5, 2025" items={scheduleData} />

        <PricingCard
          duration={pricingInfo.duration}
          price={pricingInfo.price}
          description={pricingInfo.description}
          buttonText="Register Now"
          onRegister={handleRegister}
        />

        <ContactInfo name={contactDetails.name} email={contactDetails.email} phone={contactDetails.phone} />
      </main>
    </div>
  )
}
