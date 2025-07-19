"use client"

import { Waves, Zap, Activity, RotateCcw, Brain, Clock, Eye, Wrench, AlertTriangle, TrendingDown, Target, Star, TrendingUp, Users, Lightbulb, CheckCircle, X, Shield, User, Lock } from "lucide-react"
import { AnimatedHeader } from "@/components/layout/animated-header"
import { HeroSection } from "@/components/sections/hero-section"
import { FocusAreas } from "@/components/focus-areas"
import { ScheduleTimeline } from "@/components/schedule-timeline"
import { PricingCard } from "@/components/pricing-card"
import { ContactInfo } from "@/components/contact-info"
import type { FocusArea, ScheduleItem, ContactDetails, RegistrationData, PricingInfo } from "@/types"
import { SwipeablePersuasionCarousel } from "@/components/swipeable-persuasion-carousel"
import { SkinInGame } from "@/components/skin-in-game"

const focusAreas: FocusArea[] = [
  { icon: Brain, color: "purple-600", borderColor: "purple-200", title: "Championship", subtitle: "Mindset" },
  { icon: Zap, color: "blue-600", borderColor: "blue-200", title: "Racing", subtitle: "Starts" },
  { icon: Activity, color: "green-600", borderColor: "green-200", title: "Transitions", subtitle: "Underwater" },
  // { icon: Waves, color: "teal-600", borderColor: "teal-200", title: "Freestyle", subtitle: "Stroke" },
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
      // "Pre-race mental preparation strategies",
      // "Visualization techniques for optimal performance",
      "Building confidence and focus",
      // "Managing competition nerves",
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
      // "Reaction time improvement",
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
    time: "9:45 - 11 AM",
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
  current: 3,
  total: 30,
  progressValue: 10,
}

  // Pricing - Investment
 const pricing:any = {
    duration: "Freestyle Developmental Intensive",
    price: "$100",
    description: "",
  }

  // Payment Information
 const payment: any = {
    venmoUsername: "Caryle-Blondell",
    venmoLink: "https://venmo.com/u/Caryle-Blondell", // Optional: direct Venmo link
    qrCodeUrl: "/venmo.jpg", // Replace with actual QR code
  }

const contactDetails: ContactDetails = {
  name: "The Fishbowl",
  email: "caryleblondell@gmail.com",
  phone: "(502) 295-9402",
}


const offering: any = [
  // Freestyle Intensive
  {

    statusTipOff: {
      icon: Waves,
      message: 'Your catch is slipping at the 12-yard mark',
      subtitle: 'Every elite swimmer knows this feeling',
      badgeText: 'You know',
      badgeIcon: Clock
    },
    // Flash Roll - Credibility
    flashRoll: {
      badge: {
        text: 'Instant Diagnosis',
        icon: Eye
      },
      subtitle: 'What you see vs. reality',
      problem: {
        title: 'What You Feel:',
        description:
          "My stroke feels slow and I'm working harder but going nowhere."
      },
      solution: {
        title: 'What We See:',
        description:
          "Your catch phase is collapsing at the elbow flexion point where your forearm rotation meets the water column. You've got excessive shoulder roll creating drag vectors, so your propulsive phase is bleeding energy every time your hand exits past the hip drive zone."
      },
      bottomText: "We see what you can't feel.",
      diagnosticIcon: Wrench
    },

    // Flip the Script Components - Persuasion Sequence
    flipTheScript: {
      winterIsComing: {
        id: 'winter-is-coming',
        title: 'The Reality Check',
        color: 'from-orange-500 to-red-500',
        component: 'WinterIsComing',
        data: {
          badge: {
            text: 'Reality Check',
            icon: AlertTriangle
          },
          title: 'The Plateau is Real',
          description:
            "Most swimmers hit a wall after 6-12 months. Without proper technique refinement, you'll spend years making the same mistakes.",
          stats: [
            {
              icon: TrendingDown,
              text: 'Motivation drops 73%',
              color: 'text-red-500'
            },
            {
              icon: Clock,
              text: 'Progress stalls',
              color: 'text-orange-500'
            }
          ]
        }
      },

      twoXMultiplier: {
        id: 'two-x-multiplier',
        title: 'Exponential Results',
        color: 'from-green-500 to-emerald-500',
        component: 'TwoXMultiplier',
        data: {
          badge: {
            text: 'Exponential Results',
            icon: Zap
          },
          comparison: {
            before: {
              value: '2 years',
              label: 'Self-teaching'
            },
            after: {
              value: '3 hours',
              label: 'Our intensive'
            }
          },
          highlight: {
            icon: Target,
            title: '2X Faster Breakthrough',
            description:
              'Skip the trial-and-error phase. Get the same results in a fraction the time.'
          }
        }
      },
      newNormal: {
        id: 'new-normal',
        title: 'Industry Standard',
        color: 'from-purple-500 to-indigo-500',
        component: 'NewNormal',
        data: {
          badge: {
            text: 'Industry Standard',
            icon: Star
          },
          title: 'This is How Elite Swimmers Train',
          description:
            "Intensive technique sessions aren't optional anymore. They're the baseline for serious competitive swimmers.",
          stats: [
            {
              icon: TrendingUp,
              value: '89%',
              label: 'D1 recruits use intensives'
            },
            {
              icon: Users,
              value: 'Top 10%',
              label: 'All train this way'
            }
          ]
        }
      },
      plainVanilla: {
        id: 'plain-vanilla',
        title: 'Simple Truth',
        color: 'from-yellow-500 to-orange-500',
        component: 'PlainVanilla',
        data: {
          badge: {
            text: 'Simple Truth',
            icon: Lightbulb
          },
          title: "It's Actually Pretty Obvious",
          subtitle: "Fast swimming isn't mysterious. It's just 4 simple steps:",
          steps: [
            'Identify your biggest technique flaw',
            'Apply the correct biomechanical fix',
            'Practice with immediate feedback',
            'Lock in the new muscle memory'
          ],
          footer:
            'The hard part? Knowing exactly what to fix and how to fix it.'
        }
      }
    },

    // Qualification - Who This Is For
    qualification: {
      badge: {
        text: 'Qualification Required',
        icon: Lock
      },
      title: "This Isn't for Everyone",
      subtitle: 'We only work with swimmers who meet these criteria:',
      requirements: [
        {
          text: 'Currently swimming 3+ times per week',
          met: true,
          icon: CheckCircle
        },
        {
          text: 'Serious about competitive improvement',
          met: true,
          icon: CheckCircle
        },
        {
          text: 'Willing to change current technique',
          met: true,
          icon: CheckCircle
        },
        {
          text: 'Looking for quick fixes or shortcuts',
          met: false,
          icon: X
        }
      ],
      bottomText: "If this describes you, you're exactly who we're looking for."
    },

    // Guarantee - Risk Reversal
    guarantee: {
      icon: Shield,
      badge: {
        text: 'Our Guarantee'
      },
      title: "Coach's Personal Promise",
      description:
        "If you don't see measurable technique improvement within 30 days, I'll personally coach you for free until you do.",
      coach: {
        icon: User,
        name: 'Coach Martinez, Head Instructor'
      },
      guarantee: {
        icon: CheckCircle,
        text: 'Zero risk, maximum results'
      }
    },


  },
];

const flipTheScriptArray = [
  offering?.[0].flipTheScript?.winterIsComing,
  offering?.[0].flipTheScript?.twoXMultiplier,
  offering?.[0].flipTheScript?.newNormal,
  offering?.[0].flipTheScript?.plainVanilla
];

export default function FreestyleIntensivePage() {


  // console.log(flipTheScriptArray)


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
          subtitle="3-Hour Development Session"
          registration={registrationData}
        />
        <SwipeablePersuasionCarousel
          data={flipTheScriptArray}
          delay={0.7}
          title="Why This Works"
          subtitle="Swipe or tap to explore"
          autoPlayInterval={5000}
        />

        <FocusAreas areas={focusAreas} />

        <ScheduleTimeline date="Wednesday, July 23, 2025" items={scheduleData} />

          <SkinInGame delay={2.1} />

              {/* Pricing */}
      {pricing && (
        <PricingCard
          duration={pricing.duration}
          price={pricing.price}
          description={pricing.description}
          buttonText="Secure Your Spot"
          onRegister={handleRegister}
          delay={2.3}
          // Venmo payment props
          venmoUsername={payment?.venmoUsername || "elite-swim-academy"}
          venmoLink={payment?.venmoLink}
          qrCodeUrl={payment?.qrCodeUrl}
          programTitle={"Freestyle Developmental Intensive"}
        />
      )}
        <br />
        <br />
        <br />
        <br />
        <ContactInfo name={contactDetails.name} email={contactDetails.email} phone={contactDetails.phone} />


      </main>
    </div>
  )
}
