"use client"

import { useState, useEffect, useRef, Key } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WinterIsComing } from "./winter-is-coming"
import { TwoXMultiplier } from "./two-x-multiplier"
import { NewNormal } from "./new-normal"
import { PlainVanilla } from "./plain-vanilla"


interface SwipeablePersuasionCarouselProps {
  data: any
  delay?: number
  className?: string
  autoPlayInterval?: number
  title?: string
  subtitle?: string
}

export function SwipeablePersuasionCarousel({
  data,
  delay = 0.7,
  className,
  autoPlayInterval = 5000,
  title = "Why This Works",
  subtitle = "Swipe or tap to explore",
}: SwipeablePersuasionCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(null)
const autoPlayRef = useRef<NodeJS.Timeout | null>(null)


//   console.log(data)

  const getCurrentCard = () => {
    if (!data || data.length === 0) return null
    const safeIndex = Math.max(0, Math.min(currentIndex, data.length - 1))
    return data[safeIndex]
  }

  useEffect(() => {
    if (!data || data.length === 0) {
      return
    }

    if (!isAutoPlaying) return

    autoPlayRef.current = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, data, autoPlayInterval])

  const goToNext = () => {
    if (!data || data.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % data.length)
  }

  const goToPrevious = () => {
    if (!data || data.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  const goToSlide = (index: number) => {
    if (!data || data.length === 0 || index < 0 || index >= data.length) return
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    const swipeVelocityThreshold = 500

    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > swipeVelocityThreshold) {
      if (info.offset.x > 0) {
        goToPrevious()
        setDragDirection("right")
      } else {
        goToNext()
        setDragDirection("left")
      }
    }

    setTimeout(() => setDragDirection(null), 300)
  }

  const getSlideVariants = () => ({
    enter: (direction: "left" | "right" | null) => ({
      x: direction === "left" ? 300 : direction === "right" ? -300 : 0,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right" | null) => ({
      zIndex: 0,
      x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
      opacity: 0,
    }),
  })

  const renderCard = (cardData: any) => {
    const componentProps = { delay: 0, data: cardData.data }

    switch (cardData.component) {
      case "WinterIsComing":
        return <WinterIsComing {...componentProps} />
      case "TwoXMultiplier":
        return <TwoXMultiplier {...componentProps} />
      case "NewNormal":
        return <NewNormal {...componentProps} />
      case "PlainVanilla":
        return <PlainVanilla {...componentProps} />
      default:
        return <div>Component not found</div>
    }
  }

  useEffect(() => {
    if (data && data.length > 0 && (currentIndex >= data.length || currentIndex < 0)) {
      setCurrentIndex(0)
    }
  }, [data, currentIndex])

//   console.log(currentIndex)

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Carousel Header */}
      <motion.div
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
      >
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleAutoPlay}
            className="h-8 w-8 bg-transparent"
            aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="h-8 w-8 bg-transparent"
            aria-label="Previous card"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="h-8 w-8 bg-transparent"
            aria-label="Next card"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="w-full h-1 bg-muted rounded-full mb-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <motion.div
          className={`h-full bg-gradient-to-r  from-slate-300 to-slate-800 rounded-full`}
          initial={{ width: "0%" }}
          animate={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg touch-pan-y">
        <AnimatePresence initial={false} custom={dragDirection} mode="wait">
          <motion.div
            key={currentIndex}
            custom={dragDirection}
            variants={getSlideVariants()}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full cursor-grab active:cursor-grabbing"
            whileDrag={{ cursor: "grabbing" }}
          >
            {getCurrentCard() && renderCard(getCurrentCard()!)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Dot Indicators */}
      <motion.div
        className="flex justify-center gap-3 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {data.map((card: any, index: any) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentIndex ? "w-8 h-3" : "w-3 h-3 hover:scale-110"
            }`}
            // aria-label={`Go to ${card.title}`}
          >
            <div
            className='w-full h-full rounded-full transition-all duration-300 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            //   className={`w-full h-full rounded-full transition-all duration-300 ${
            //     index === currentIndex
            //       ? `bg-gradient-to-r ${card.color}`
            //       : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            //   }`}
            />
            {index === currentIndex && isAutoPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Card Title and Counter */}
      <motion.div
        className="text-center mt-4 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        <h4 className="font-medium text-foreground">{getCurrentCard()?.title || "Loading..."}</h4>
        <p className="text-sm text-muted-foreground">
          {currentIndex + 1} of {data.length}
        </p>
      </motion.div>

      {/* Swipe Instructions */}
      <motion.div
        className="text-center mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      >
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
          <span className="hidden sm:inline">Use arrow keys,</span>
          <span>swipe, or tap dots to navigate</span>
        </p>
      </motion.div>

      {/* Keyboard Navigation */}
      <div
        className="sr-only"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") goToPrevious()
          if (e.key === "ArrowRight") goToNext()
          if (e.key === " ") {
            e.preventDefault()
            toggleAutoPlay()
          }
        }}
        aria-label="Carousel navigation. Use arrow keys to navigate, space to toggle autoplay"
      />
    </motion.div>
  )
}
