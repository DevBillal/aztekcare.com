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

  // Gaze direction motion values (xAI eye pupil look direction)
  const gazeX = useMotionValue(0)
  const gazeY = useMotionValue(0)
  const springGazeX = useSpring(gazeX, { damping: 18, stiffness: 240 })
  const springGazeY = useSpring(gazeY, { damping: 18, stiffness: 240 })

  // Ambient Blue Spotlight Spring
  const ambientSpring = { damping: 32, stiffness: 170, mass: 0.6 }
  const glowX = useSpring(mouseX, ambientSpring)
  const glowY = useSpring(mouseY, ambientSpring)

  // Robot Drone Follower Spring (Silky Smooth Floating Companion)
  const droneSpring = { damping: 24, stiffness: 260, mass: 0.35 }
  const droneX = useSpring(mouseX, droneSpring)
  const droneY = useSpring(mouseY, droneSpring)

  // Periodic organic robotic blink (like xAI / Grok robot companion)
  useEffect(() => {
    const triggerBlink = () => {
      setIsBlinking(true)
      setTimeout(() => {
        setIsBlinking(false)
      }, 140)
    }

    const interval = setInterval(() => {
      triggerBlink()
    }, 3600)

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

      // Clamp pupil look displacement between -3.5px and +3.5px
      const targetGazeX = Math.max(-3.5, Math.min(3.5, dx * 0.45))
      const targetGazeY = Math.max(-2.5, Math.min(2.5, dy * 0.45))
      gazeX.set(targetGazeX)
      gazeY.set(targetGazeY)

      // Re-center pupils smoothly when mouse stops moving
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        gazeX.set(0)
        gazeY.set(0)
      }, 180)

      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }

    // Check if hovering clickable interactive targets
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
  }, [mouseX, mouseY, gazeX, gazeY])

  if (!isSupported) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Ambient Luminous Blue Spotlight Orb (Illuminates entire page underneath) */}
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
        className="w-[460px] h-[460px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(37,99,235,0.32)_0%,rgba(2,132,199,0.16)_45%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.28)_0%,rgba(14,165,233,0.14)_45%,transparent_70%)] will-change-transform mix-blend-multiply dark:mix-blend-screen"
      />

      {/* 2. xAI Robotic Cybernetic Eyes Pod (Floating Mouse Drone Companion) */}
      <motion.div
        style={{
          x: droneX,
          y: droneY,
          translateX: "18px", // Clean ergonomic trailing offset next to pointer
          translateY: "18px",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", stiffness: 350, damping: 22 },
        }}
        className="relative will-change-transform select-none"
      >
        {/* Robotic Visor Capsule Shell */}
        <div className={`relative px-2.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-300 ${
          isHovered
            ? "bg-slate-950 dark:bg-black border-[1.5px] border-cyan-400 shadow-[0_0_22px_rgba(34,211,238,0.7),0_0_45px_rgba(37,99,235,0.5)]"
            : "bg-slate-900/95 dark:bg-[#080d1a]/95 backdrop-blur-xl border border-blue-500/40 dark:border-cyan-400/35 shadow-[0_4px_16px_rgba(0,0,0,0.35),0_0_15px_rgba(37,99,235,0.35)]"
        }`}>

          {/* Micro Status Radar Antenna Dot */}
          <span className="absolute -top-1 right-2 flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300" />
          </span>

          {/* Left Robotic Eye */}
          <div className="relative w-3.5 h-4.5 rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border border-cyan-500/30">
            <motion.div
              animate={{
                scaleY: isBlinking ? 0.1 : isHovered ? 1.2 : 1,
                height: isHovered ? "14px" : "12px",
              }}
              transition={{ duration: 0.12 }}
              className="w-2.5 rounded-full bg-gradient-to-b from-cyan-300 via-blue-400 to-blue-600 shadow-[0_0_8px_#38bdf8] flex items-center justify-center"
            >
              {/* Dynamic Pupil (Glances in cursor movement direction) */}
              <motion.div
                style={{
                  x: springGazeX,
                  y: springGazeY,
                }}
                className="w-1.5 h-2 rounded-full bg-slate-950 shadow-inner flex items-center justify-center"
              >
                {/* Specular White Eye Glint */}
                <div className="w-0.5 h-0.5 rounded-full bg-white self-start ml-0.5 mt-0.5 opacity-90" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Robotic Eye */}
          <div className="relative w-3.5 h-4.5 rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border border-cyan-500/30">
            <motion.div
              animate={{
                scaleY: isBlinking ? 0.1 : isHovered ? 1.2 : 1,
                height: isHovered ? "14px" : "12px",
              }}
              transition={{ duration: 0.12 }}
              className="w-2.5 rounded-full bg-gradient-to-b from-cyan-300 via-blue-400 to-blue-600 shadow-[0_0_8px_#38bdf8] flex items-center justify-center"
            >
              {/* Dynamic Pupil (Glances in cursor movement direction) */}
              <motion.div
                style={{
                  x: springGazeX,
                  y: springGazeY,
                }}
                className="w-1.5 h-2 rounded-full bg-slate-950 shadow-inner flex items-center justify-center"
              >
                {/* Specular White Eye Glint */}
                <div className="w-0.5 h-0.5 rounded-full bg-white self-start ml-0.5 mt-0.5 opacity-90" />
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Hover Micro Badge Tag "AZTEK AI" */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 2 : -2,
          }}
          transition={{ duration: 0.15 }}
          className="text-[9px] font-black tracking-widest text-cyan-500 dark:text-cyan-300 text-center uppercase drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
        >
          SCAN
        </motion.div>
      </motion.div>

      {/* 3. Sleek Precision Center Micro-Dot */}
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
