import type { LucideIcon } from "lucide-react"

export interface FocusArea {
  icon: LucideIcon
  color: string
  borderColor: string
  title: string
  subtitle: string
}

export interface ScheduleItem {
  time: string
  title: string
  icon: LucideIcon
  color: string
  description: string
  details: string[]
}

export interface ContactDetails {
  name: string
  email: string
  phone: string
  website?: string
}

export interface RegistrationData {
  current: number
  total: number
  progressValue: number
}

export interface PricingInfo {
  duration: string
  price: string
  currency?: string
  description: string
  features?: string[]
}
