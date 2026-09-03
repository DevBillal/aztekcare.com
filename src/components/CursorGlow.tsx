import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  const isHoveredRef = useRef(false)
  const isVisibleRef = useRef(false)

  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  // Liquid spring physics for ultra-smooth fluid trailing (60-120 FPS)
  const ambientSpringConfig = { damping: 30, stiffness: 180, mass: 0.55 }
  const glowX = useSpring(mouseX, ambientSpringConfig)
  const glowY = useSpring(mouseY, ambientSpringConfig)

  // Silky responsive follower spring
  const followerSpringConfig = { damping: 25, stiffness: 290, mass: 0.25 }
  const ringX = useSpring(mouseX, followerSpringConfig)
  const ringY = useSpring(mouseY, followerSpringConfig)

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) return
    setIsSupported(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }

    // Only trigger React state change when hover status actually flips
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const shouldHover = Boolean(
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("input") ||
        target?.closest("select") ||
        target?.closest('[role="button"]') ||
        target?.closest(".cursor-pointer")
      )
      if (shouldHover !== isHoveredRef.current) {
        isHoveredRef.current = shouldHover
        setIsHovered(shouldHover)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (!isSupported) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. High-Contrast Ambient Spotlight Orb (Clear & Vibrant in Both White & Dark Mode) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ opacity: { duration: 0.35, ease: "easeOut" } }}
        className="w-[480px] h-[480px] rounded-full blur-[75px] bg-[radial-gradient(circle,rgba(37,99,235,0.32)_0%,rgba(2,132,199,0.18)_40%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.26)_0%,rgba(14,165,233,0.14)_40%,transparent_70%)] will-change-transform mix-blend-multiply dark:mix-blend-screen"
      />

      {/* 2. Interactive Magnetic Follower Ring (High-Contrast in White Mode) */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered 
            ? "rgba(37, 99, 235, 0.18)" 
            : "rgba(37, 99, 235, 0.05)",
          borderColor: isHovered 
            ? "rgba(29, 78, 216, 0.95)" 
            : "rgba(37, 99, 235, 0.55)",
          boxShadow: isHovered
            ? "0 0 25px rgba(37, 99, 235, 0.55)"
            : "0 0 12px rgba(37, 99, 235, 0.25)",
        }}
        transition={{ 
          opacity: { duration: 0.2 }, 
          scale: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
          boxShadow: { duration: 0.2 }
        }}
        className="w-9 h-9 rounded-full border-[1.5px] backdrop-blur-[0.5px] will-change-transform dark:border-cyan-400/70 dark:shadow-[0_0_18px_rgba(34,211,238,0.4)]"
      />

      {/* 3. Center Precision Glow Dot (Crisp High-Definition Point) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 0.6 : 1,
        }}
        className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 ring-2 ring-white dark:ring-black shadow-[0_0_10px_rgba(37,99,235,0.9)] will-change-transform"
      />
    </div>
  )
}
