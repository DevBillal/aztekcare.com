import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  // Spring physics for smooth liquid motion lag
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  // Faster spring for the cursor ring
  const ringConfig = { damping: 22, stiffness: 350, mass: 0.2 }
  const ringX = useSpring(mouseX, ringConfig)
  const ringY = useSpring(mouseY, ringConfig)

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) return
    setIsSupported(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true)
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Check if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("input") ||
        target?.closest("select") ||
        target?.closest('[role="button"]') ||
        target?.closest(".cursor-pointer")
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
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
  }, [isVisible, mouseX, mouseY])

  if (!isSupported) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* 1. Ethereal Bluish Ambient Spotlight Orb (Follows Mouse with Spring Physics) */}
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
        transition={{ opacity: { duration: 0.3 } }}
        className="w-[420px] h-[420px] rounded-full blur-[70px] bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,rgba(56,189,248,0.1)_45%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.22)_0%,rgba(14,165,233,0.12)_45%,transparent_70%)]"
      />

      {/* 2. Interactive Magnetic Bluish Follower Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.7 : 1,
          borderColor: isHovered ? "rgba(37, 99, 235, 0.7)" : "rgba(59, 130, 246, 0.35)",
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
        className="w-9 h-9 rounded-full border border-blue-500/40 bg-blue-500/[0.04] shadow-[0_0_15px_rgba(37,99,235,0.3)] backdrop-blur-[1px]"
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
          scale: isHovered ? 0.6 : 1,
        }}
        className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.9)]"
      />
    </div>
  )
}
