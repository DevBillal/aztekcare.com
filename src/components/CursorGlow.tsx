import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

type BotEmotion = "normal" | "nod" | "shake" | "wink" | "curious"

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [emotion, setEmotion] = useState<BotEmotion>("normal")
  const [speech, setSpeech] = useState<string | null>("Hello! 👋")
  const [isBlinking, setIsBlinking] = useState(false)

  const isVisibleRef = useRef(false)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const lastScrollY = useRef(0)
  const speechTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  // Real-time eye pupil gaze tracking
  const gazeX = useMotionValue(0)
  const gazeY = useMotionValue(0)
  const springGazeX = useSpring(gazeX, { damping: 16, stiffness: 280 })
  const springGazeY = useSpring(gazeY, { damping: 16, stiffness: 280 })

  // 3D Head rotation & tilt
  const headTilt = useMotionValue(-28)
  const springHeadTilt = useSpring(headTilt, { damping: 18, stiffness: 220 })

  // Ambient Blue Spotlight
  const ambientSpring = { damping: 32, stiffness: 170, mass: 0.6 }
  const glowX = useSpring(mouseX, ambientSpring)
  const glowY = useSpring(mouseY, ambientSpring)

  // Robot Head Follower Physics (Smooth floating companion)
  const droneSpring = { damping: 22, stiffness: 280, mass: 0.28 }
  const droneX = useSpring(mouseX, droneSpring)
  const droneY = useSpring(mouseY, droneSpring)

  // Show a speech bubble for duration ms
  const showSpeech = (text: string, duration = 2400) => {
    setSpeech(text)
    if (speechTimer.current) clearTimeout(speechTimer.current)
    speechTimer.current = setTimeout(() => {
      setSpeech(null)
    }, duration)
  }

  // Initial welcome greeting
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      showSpeech("Hi there! 👋", 2800)
    }, 800)
    return () => clearTimeout(welcomeTimer)
  }, [])

  // Periodic organic eye blinking
  useEffect(() => {
    const triggerBlink = () => {
      if (emotion === "normal") {
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), 130)
      }
    }
    const interval = setInterval(triggerBlink, 3500)
    return () => clearInterval(interval)
  }, [emotion])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) return
    setIsSupported(true)

    let mouseStopTimer: ReturnType<typeof setTimeout>

    const resetIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        // When user is idle for 8s, bot gets curious
        setEmotion("curious")
        showSpeech("Need a fix? 🛠️", 2600)
        setTimeout(() => setEmotion("normal"), 2600)
      }, 8500)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }

      resetIdle()

      const dx = e.clientX - lastMousePos.current.x
      const dy = e.clientY - lastMousePos.current.y
      lastMousePos.current = { x: e.clientX, y: e.clientY }

      // Eye gaze follows mouse velocity
      const targetGazeX = Math.max(-4.5, Math.min(4.5, dx * 0.4))
      const targetGazeY = Math.max(-3.5, Math.min(3.5, dy * 0.4))
      gazeX.set(targetGazeX)
      gazeY.set(targetGazeY)

      // Dynamic head tilt
      const targetTilt = -28 + Math.max(-12, Math.min(12, dx * 0.6))
      headTilt.set(targetTilt)

      clearTimeout(mouseStopTimer)
      mouseStopTimer = setTimeout(() => {
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

    // Click Interaction: Playful wink & bounce
    const handleMouseDown = () => {
      setEmotion("wink")
      showSpeech("Awesome! ✨", 1500)
      setTimeout(() => {
        setEmotion("normal")
      }, 400)
    }

    // Scroll Interaction: Eyes look up/down
    const handleScroll = () => {
      resetIdle()
      const currentScroll = window.scrollY
      const deltaScroll = currentScroll - lastScrollY.current
      lastScrollY.current = currentScroll
      
      const scrollGazeY = Math.max(-4.5, Math.min(4.5, deltaScroll * 0.35))
      gazeY.set(scrollGazeY)
      clearTimeout(mouseStopTimer)
      mouseStopTimer = setTimeout(() => {
        gazeY.set(0)
      }, 160)
    }

    // Intelligent Action Perception:
    // 1. Hover on Close / Delete / Reject / X buttons -> Negative Head Shake (NO)
    // 2. Hover on CTAs, Links, Cards, Buttons -> Affirmative Head Nod (YES)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // Check if hovering a Close/Dismiss/X button
      const isCloseAction = Boolean(
        target.closest('button[aria-label*="close" i]') ||
        target.closest('button[aria-label*="Close" i]') ||
        target.closest(".close-btn") ||
        target.closest('[data-dismiss]') ||
        target.closest('button:has(.lucide-x)') ||
        target.classList.contains("lucide-x")
      )

      if (isCloseAction) {
        setEmotion("shake")
        showSpeech("Don't leave! 🥺", 2000)
        return
      }

      // Check if hovering interactive positive elements (Buttons, CTAs, Cards, WhatsApp, Track)
      const isPositiveAction = Boolean(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        target.closest(".card")
      )

      if (isPositiveAction) {
        setEmotion("nod")
        // Context-aware speech phrases
        if (target.closest('button:has(span:contains("Track"))') || target.textContent?.includes("Track")) {
          showSpeech("Track device! 🔍", 1800)
        } else if (target.closest('a[href*="wa.me"]')) {
          showSpeech("Fast WhatsApp! 💬", 1800)
        } else {
          showSpeech("Click it! ⚡", 1600)
        }
      } else {
        if (emotion !== "curious" && emotion !== "wink") {
          setEmotion("normal")
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      clearTimeout(mouseStopTimer)
      if (speechTimer.current) clearTimeout(speechTimer.current)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY, gazeX, gazeY, headTilt, emotion])

  if (!isSupported) return null

  // Head Nodding Animation (Yes - Up & Down)
  const nodAnimation = emotion === "nod" ? { y: [0, -8, 2, -6, 1, 0] } : { y: 0 }

  // Head Shaking Animation (No - Left & Right)
  const shakeAnimation = emotion === "shake" ? { rotate: [-28, -44, -12, -42, -16, -28] } : {}

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Ethereal Blue Ambient Spotlight */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: emotion === "nod" ? 1.35 : 1,
        }}
        transition={{ opacity: { duration: 0.35, ease: "easeOut" } }}
        className="w-[460px] h-[460px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(37,99,235,0.30)_0%,rgba(2,132,199,0.15)_45%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.28)_0%,rgba(14,165,233,0.14)_45%,transparent_70%)] will-change-transform mix-blend-multiply dark:mix-blend-screen"
      />

      {/* 2. Grok xAI Emotional Robot Companion (1:1 Exact Match to Reference Image) */}
      <motion.div
        style={{
          x: droneX,
          y: droneY,
          translateX: "16px",
          translateY: "16px",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: emotion === "wink" ? 0.9 : emotion === "nod" ? 1.2 : emotion === "shake" ? 1.15 : 1,
          ...nodAnimation,
        }}
        transition={{
          y: { duration: 0.5, repeat: emotion === "nod" ? Infinity : 0, repeatDelay: 0.4 },
          scale: { type: "spring", stiffness: 400, damping: 20 },
        }}
        className="relative will-change-transform select-none"
      >
        {/* Floating Mini Emotion Speech Bubble */}
        <AnimatePresence>
          {speech && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.8 }}
              animate={{ opacity: 1, y: -12, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.8 }}
              transition={{ duration: 0.22 }}
              className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-900/95 dark:bg-black/95 text-white text-[10px] font-bold tracking-tight shadow-[0_4px_12px_rgba(0,0,0,0.3),0_0_12px_rgba(37,99,235,0.4)] border border-blue-400/40 whitespace-nowrap flex items-center gap-1 z-20 pointer-events-none"
            >
              <span>{speech}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Pearl-White Spherical Robot Head */}
        <motion.div
          animate={shakeAnimation}
          transition={{ duration: 0.45, repeat: emotion === "shake" ? Infinity : 0, repeatDelay: 0.3 }}
          className={`relative w-[50px] h-[50px] rounded-full bg-gradient-to-b from-[#ffffff] via-[#f2f4f8] to-[#d4dce7] flex items-center justify-center overflow-hidden transition-all duration-300 ${
            emotion === "nod"
              ? "shadow-[0_0_25px_rgba(37,99,235,0.6),0_10px_25px_rgba(0,0,0,0.25),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] ring-2 ring-blue-500/60"
              : emotion === "shake"
              ? "shadow-[0_0_25px_rgba(239,68,68,0.5),0_10px_25px_rgba(0,0,0,0.25),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] ring-2 ring-rose-500/50"
              : "shadow-[0_8px_20px_rgba(0,0,0,0.18),0_2px_5px_rgba(0,0,0,0.08),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.12)] border border-black/5 dark:border-white/20"
          }`}
        >
          {/* 3D Curved Specular Dome Light Highlight */}
          <div className="absolute top-1.5 left-2.5 w-5 h-3 rounded-full bg-white/95 blur-[0.6px] pointer-events-none" />

          {/* Eye Rig Container - Dynamically tilts and looks */}
          <motion.div
            style={{
              x: springGazeX,
              y: springGazeY,
              rotate: springHeadTilt,
            }}
            className="flex items-center gap-[7px] will-change-transform"
          >
            {/* Left Eye */}
            {emotion === "nod" ? (
              // Happy Smiling Arc Eye ^ on Nod
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-[12px] h-[12px] border-t-[3.5px] border-black rounded-t-full will-change-transform"
              />
            ) : emotion === "wink" ? (
              // Playful Winking Smile on Click
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-[12px] h-[12px] border-t-[3.5px] border-black rounded-t-full will-change-transform"
              />
            ) : (
              // Iconic Black Capsule Pill Eye (Normal & Curious)
              <motion.div
                animate={{
                  scaleY: isBlinking ? 0.08 : 1,
                  scaleX: emotion === "shake" ? 1.25 : 1,
                }}
                transition={{ duration: 0.12 }}
                className="w-[11px] h-[24px] rounded-full bg-[#090b0e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_1px_2px_rgba(0,0,0,0.4)] flex items-start justify-end p-[1.5px] will-change-transform"
              >
                <div className="w-[2.5px] h-[2.5px] rounded-full bg-white/85" />
              </motion.div>
            )}

            {/* Right Eye */}
            {emotion === "nod" ? (
              // Happy Smiling Arc Eye ^ on Nod
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-[12px] h-[12px] border-t-[3.5px] border-black rounded-t-full will-change-transform"
              />
            ) : emotion === "wink" ? (
              // Closed Winking Pill Eye on Click
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scaleY: 0.15 }}
                className="w-[11px] h-[24px] rounded-full bg-[#090b0e] will-change-transform"
              />
            ) : (
              // Iconic Black Capsule Pill Eye (Normal & Curious)
              <motion.div
                animate={{
                  scaleY: isBlinking ? 0.08 : 1,
                  scaleX: emotion === "shake" ? 1.25 : 1,
                }}
                transition={{ duration: 0.12 }}
                className="w-[11px] h-[24px] rounded-full bg-[#090b0e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_1px_2px_rgba(0,0,0,0.4)] flex items-start justify-end p-[1.5px] will-change-transform"
              >
                <div className="w-[2.5px] h-[2.5px] rounded-full bg-white/85" />
              </motion.div>
            )}
          </motion.div>

          {/* Bottom Ambient Occlusion Shadow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/[0.08] to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* 3. Center Precision Micro-Dot Pointer */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: emotion === "nod" || emotion === "wink" ? 0.5 : 1,
        }}
        className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 ring-2 ring-white dark:ring-black shadow-[0_0_8px_rgba(37,99,235,1)] will-change-transform"
      />
    </div>
  )
}
