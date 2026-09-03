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
  const ambientSpringConfig = { damping: 32, stiffness: 180, mass: 0.55 }
  const glowX = useSpring(mouseX, ambientSpringConfig)
  const glowY = useSpring(mouseY, ambientSpringConfig)

  // Silky responsive follower spring
  const followerSpringConfig = { damping: 26, stiffness: 280, mass: 0.25 }
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
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (!isSupported) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* 1. Ethereal Bluish Ambient Spotlight Orb (Silky Liquid Motion Lag) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ opacity: { duration: 0.35, ease: "easeOut" } }}
        className="w-[450px] h-[450px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,rgba(56,189,248,0.08)_45%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.22)_0%,rgba(14,165,233,0.1)_45%,transparent_70%)] will-change-transform"
      />

      {/* 2. Interactive Magnetic Follower Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.65 : 1,
          borderColor: isHovered ? "rgba(37, 99, 235, 0.7)" : "rgba(59, 130, 246, 0.35)",
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
        className="w-9 h-9 rounded-full border border-blue-500/40 bg-blue-500/[0.04] shadow-[0_0_15px_rgba(37,99,235,0.25)] backdrop-blur-[1px] will-change-transform"
      />

      {/* 3. Center Precision Glow Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 0.5 : 1,
        }}
        className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.9)] will-change-transform"
      />
    </div>
  )
}
