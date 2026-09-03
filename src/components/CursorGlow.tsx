import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  const isHoveredRef = useRef(false)
  const isVisibleRef = useRef(false)
  const lastMousePos = useRef({ x: 0, y: 0 })

  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  // Gaze tracking for the two capsule eyes
  const gazeX = useMotionValue(0)
  const gazeY = useMotionValue(0)
  const springGazeX = useSpring(gazeX, { damping: 18, stiffness: 260 })
  const springGazeY = useSpring(gazeY, { damping: 18, stiffness: 260 })

  // Head tilt angle tracking (dynamic head rotation based on movement)
  const headTilt = useMotionValue(0)
  const springHeadTilt = useSpring(headTilt, { damping: 20, stiffness: 220 })

  // Ambient Blue Spotlight Spring
  const ambientSpring = { damping: 32, stiffness: 170, mass: 0.6 }
  const glowX = useSpring(mouseX, ambientSpring)
  const glowY = useSpring(mouseY, ambientSpring)

  // Robot Head Follower Spring (Silky Smooth Floating Companion)
  const droneSpring = { damping: 24, stiffness: 270, mass: 0.3 }
  const droneX = useSpring(mouseX, droneSpring)
  const droneY = useSpring(mouseY, droneSpring)

  // Periodic organic eye blinking (like real AI robot bot)
  useEffect(() => {
    const triggerBlink = () => {
      setIsBlinking(true)
      setTimeout(() => {
        setIsBlinking(false)
      }, 130)
    }

    const interval = setInterval(() => {
      triggerBlink()
    }, 3800)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) return
    setIsSupported(true)

    let timeoutId: ReturnType<typeof setTimeout>

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }

      // Calculate gaze velocity & direction
      const dx = e.clientX - lastMousePos.current.x
      const dy = e.clientY - lastMousePos.current.y
      lastMousePos.current = { x: e.clientX, y: e.clientY }

      // Clamp pupil look displacement
      const targetGazeX = Math.max(-2.5, Math.min(2.5, dx * 0.35))
      const targetGazeY = Math.max(-2, Math.min(2, dy * 0.35))
      gazeX.set(targetGazeX)
      gazeY.set(targetGazeY)

      // Slight head tilt towards movement direction (-12deg to +12deg)
      const targetTilt = Math.max(-10, Math.min(10, dx * 0.5))
      headTilt.set(targetTilt)

      // Re-center pupils and head tilt smoothly when mouse stops moving
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        gazeX.set(0)
        gazeY.set(0)
        headTilt.set(0)
      }, 160)

      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }

    // Detect if hovering over clickable interactive targets
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
      clearTimeout(timeoutId)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY, gazeX, gazeY, headTilt])

  if (!isSupported) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Ambient Luminous Blue Spotlight Orb (Smooth page illumination) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{ opacity: { duration: 0.35, ease: "easeOut" } }}
        className="w-[450px] h-[450px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(37,99,235,0.30)_0%,rgba(2,132,199,0.15)_45%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.28)_0%,rgba(14,165,233,0.14)_45%,transparent_70%)] will-change-transform mix-blend-multiply dark:mix-blend-screen"
      />

      {/* 2. Round Spherical Robot Head Bot (1:1 Exact Match to Reference Image) */}
      <motion.div
        style={{
          x: droneX,
          y: droneY,
          translateX: "14px", // Clean compact trailing position beside pointer
          translateY: "14px",
          rotate: springHeadTilt,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", stiffness: 380, damping: 24 },
        }}
        className="relative will-change-transform select-none"
      >
        {/* Cute Spherical Robot Head (Smooth 3D Pearl-White Ceramic Orb) */}
        <div className={`relative w-10 h-10 rounded-full bg-gradient-to-b from-[#ffffff] via-[#f3f5f8] to-[#d6dde6] flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isHovered
            ? "shadow-[0_0_20px_rgba(37,99,235,0.45),0_8px_20px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.12)] border border-blue-400/50"
            : "shadow-[0_6px_16px_rgba(0,0,0,0.18),0_1px_3px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.1)] border border-black/5 dark:border-white/20"
        }`}>

          {/* 3D Specular Curved Light Reflection on Sphere Surface */}
          <div className="absolute top-1 left-2 w-4 h-2.5 rounded-full bg-white/95 blur-[0.8px] pointer-events-none" />

          {/* Two Diagonal Pill Capsule Eyes (Exact Match to Screenshot) */}
          <motion.div
            style={{
              x: springGazeX,
              y: springGazeY,
            }}
            className="flex items-center gap-1.5 transform -rotate-[28deg]"
          >
            {/* Left Pill Capsule Eye */}
            <motion.div
              animate={{
                scaleY: isBlinking ? 0.08 : isHovered ? 1.25 : 1,
                scaleX: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.12 }}
              className="w-2 h-4.5 rounded-full bg-[#111317] shadow-inner will-change-transform"
            />

            {/* Right Pill Capsule Eye */}
            <motion.div
              animate={{
                scaleY: isBlinking ? 0.08 : isHovered ? 1.25 : 1,
                scaleX: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.12 }}
              className="w-2 h-4.5 rounded-full bg-[#111317] shadow-inner will-change-transform"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 3. Center Precision Point Micro-Dot */}
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
        className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 ring-2 ring-white dark:ring-black shadow-[0_0_8px_rgba(37,99,235,1)] will-change-transform"
      />
    </div>
  )
}
