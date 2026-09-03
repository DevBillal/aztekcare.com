import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  const isHoveredRef = useRef(false)
  const isVisibleRef = useRef(false)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const lastScrollY = useRef(0)

  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  // Real-time eye gaze position
  const gazeX = useMotionValue(0)
  const gazeY = useMotionValue(0)
  const springGazeX = useSpring(gazeX, { damping: 16, stiffness: 280 })
  const springGazeY = useSpring(gazeY, { damping: 16, stiffness: 280 })

  // 3D Head rotation & tilt
  const headTilt = useMotionValue(-28) // Base tilt matching user's reference photo (-28deg)
  const springHeadTilt = useSpring(headTilt, { damping: 18, stiffness: 220 })

  // Ambient Blue Spotlight
  const ambientSpring = { damping: 32, stiffness: 170, mass: 0.6 }
  const glowX = useSpring(mouseX, ambientSpring)
  const glowY = useSpring(mouseY, ambientSpring)

  // Robot Head Follower Physics (Smooth floating companion)
  const droneSpring = { damping: 22, stiffness: 280, mass: 0.28 }
  const droneX = useSpring(mouseX, droneSpring)
  const droneY = useSpring(mouseY, droneSpring)

  // Organic idle eye blinking (every 3.6s)
  useEffect(() => {
    const triggerBlink = () => {
      setIsBlinking(true)
      setTimeout(() => {
        setIsBlinking(false)
      }, 140)
    }

    const interval = setInterval(triggerBlink, 3600)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) return
    setIsSupported(true)

    let idleTimeout: ReturnType<typeof setTimeout>

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }

      // Calculate gaze velocity & direction
      const dx = e.clientX - lastMousePos.current.x
      const dy = e.clientY - lastMousePos.current.y
      lastMousePos.current = { x: e.clientX, y: e.clientY }

      // Gaze shift in movement direction (clamped)
      const targetGazeX = Math.max(-4.5, Math.min(4.5, dx * 0.4))
      const targetGazeY = Math.max(-3.5, Math.min(3.5, dy * 0.4))
      gazeX.set(targetGazeX)
      gazeY.set(targetGazeY)

      // Dynamic head tilt based on horizontal speed
      const targetTilt = -28 + Math.max(-12, Math.min(12, dx * 0.6))
      headTilt.set(targetTilt)

      // Re-center pupils smoothly when mouse stops
      clearTimeout(idleTimeout)
      idleTimeout = setTimeout(() => {
        gazeX.set(0)
        gazeY.set(0)
        headTilt.set(-28)
      }, 150)

      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }

    // Interaction 1: Click Reaction (Playful bounce & wink)
    const handleMouseDown = () => {
      setIsClicked(true)
      setIsBlinking(true)
      setTimeout(() => {
        setIsClicked(false)
        setIsBlinking(false)
      }, 180)
    }

    // Interaction 2: Scroll Tracking (Eyes glance up/down when scrolling)
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const deltaScroll = currentScroll - lastScrollY.current
      lastScrollY.current = currentScroll
      
      const scrollGazeY = Math.max(-4, Math.min(4, deltaScroll * 0.3))
      gazeY.set(scrollGazeY)
      clearTimeout(idleTimeout)
      idleTimeout = setTimeout(() => {
        gazeY.set(0)
      }, 160)
    }

    // Interaction 3: Hover Tracking (Perks up on buttons, links, inputs, cards)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const shouldHover = Boolean(
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("input") ||
        target?.closest("select") ||
        target?.closest('[role="button"]') ||
        target?.closest(".cursor-pointer") ||
        target?.closest(".card")
      )
      if (shouldHover !== isHoveredRef.current) {
        isHoveredRef.current = shouldHover
        setIsHovered(shouldHover)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      clearTimeout(idleTimeout)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY, gazeX, gazeY, headTilt])

  if (!isSupported) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Ethereal Blue Ambient Spotlight (Illuminates entire website softly) */}
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

      {/* 2. Grok xAI 3D Spherical Mascot Bot (1:1 Exact Match to User's Uploaded Photo) */}
      <motion.div
        style={{
          x: droneX,
          y: droneY,
          translateX: "15px", // Ergonomic floating offset next to pointer
          translateY: "15px",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 0.88 : isHovered ? 1.2 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", stiffness: 420, damping: 22 },
        }}
        className="relative will-change-transform select-none"
      >
        {/* 3D Pearl-White Spherical Robot Head (Explicit 50px Diameter) */}
        <div className={`relative w-[50px] h-[50px] rounded-full bg-gradient-to-b from-[#ffffff] via-[#f1f4f8] to-[#d6dfea] flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isHovered
            ? "shadow-[0_0_25px_rgba(37,99,235,0.55),0_10px_25px_rgba(0,0,0,0.25),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] ring-2 ring-blue-500/50"
            : "shadow-[0_8px_20px_rgba(0,0,0,0.18),0_2px_5px_rgba(0,0,0,0.08),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.12)] border border-black/5 dark:border-white/20"
        }`}>

          {/* 3D Curved Specular Dome Light Highlight */}
          <div className="absolute top-1.5 left-2.5 w-5 h-3 rounded-full bg-white/95 blur-[0.6px] pointer-events-none" />

          {/* Eye Rig Container - Tilted like the user's reference photo */}
          <motion.div
            style={{
              x: springGazeX,
              y: springGazeY,
              rotate: springHeadTilt,
            }}
            className="flex items-center gap-[7px] will-change-transform"
          >
            {/* Left Eye: Thick Black Rounded Capsule Pill (Explicit w-[11px] h-[24px]) */}
            <motion.div
              animate={{
                scaleY: isBlinking ? 0.08 : isHovered ? 1.2 : 1,
                scaleX: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.12 }}
              className="w-[11px] h-[24px] rounded-full bg-[#090b0e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_1px_2px_rgba(0,0,0,0.4)] flex items-start justify-end p-[1.5px] will-change-transform"
            >
              {/* Subtle specular glint inside eye */}
              <div className="w-[2.5px] h-[2.5px] rounded-full bg-white/80" />
            </motion.div>

            {/* Right Eye: Thick Black Rounded Capsule Pill (Explicit w-[11px] h-[24px]) */}
            <motion.div
              animate={{
                scaleY: isBlinking ? 0.08 : isHovered ? 1.2 : 1,
                scaleX: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.12 }}
              className="w-[11px] h-[24px] rounded-full bg-[#090b0e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_1px_2px_rgba(0,0,0,0.4)] flex items-start justify-end p-[1.5px] will-change-transform"
            >
              {/* Subtle specular glint inside eye */}
              <div className="w-[2.5px] h-[2.5px] rounded-full bg-white/80" />
            </motion.div>
          </motion.div>

          {/* Ambient Inner Bottom Shadow on the Sphere */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/[0.08] to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* 3. Center Precision Cursor Pointer Dot */}
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
