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
  const botRef = useRef<HTMLDivElement | null>(null)
  const speechTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  // Real-time eye pupil gaze tracking towards mouse position
  const gazeX = useMotionValue(0)
  const gazeY = useMotionValue(0)
  const springGazeX = useSpring(gazeX, { damping: 18, stiffness: 260 })
  const springGazeY = useSpring(gazeY, { damping: 18, stiffness: 260 })

  // Dynamic 3D Head rotation facing the mouse cursor on screen
  const headTilt = useMotionValue(-24)
  const springHeadTilt = useSpring(headTilt, { damping: 20, stiffness: 220 })

  // Ambient Blue Spotlight following cursor
  const ambientSpring = { damping: 32, stiffness: 170, mass: 0.6 }
  const glowX = useSpring(mouseX, ambientSpring)
  const glowY = useSpring(mouseY, ambientSpring)

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
      showSpeech("Hi there! 👋", 3000)
    }, 1000)
    return () => clearTimeout(welcomeTimer)
  }, [])

  // Periodic organic eye blinking
  useEffect(() => {
    const triggerBlink = () => {
      if (emotion === "normal") {
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), 140)
      }
    }
    const interval = setInterval(triggerBlink, 3800)
    return () => clearInterval(interval)
  }, [emotion])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) return
    setIsSupported(true)

    const resetIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        setEmotion("curious")
        showSpeech("Need a fix? 🛠️", 2800)
        setTimeout(() => setEmotion("normal"), 2800)
      }, 9000)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }

      resetIdle()
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Calculate gaze angle & vector from bottom-left bot to mouse position
      if (botRef.current) {
        const rect = botRef.current.getBoundingClientRect()
        const botCenterX = rect.left + rect.width / 2
        const botCenterY = rect.top + rect.height / 2

        const dx = e.clientX - botCenterX
        const dy = e.clientY - botCenterY
        const distance = Math.hypot(dx, dy)
        const angle = Math.atan2(dy, dx)

        // Eyes look directly towards the cursor across the screen
        const maxDisplacement = 5
        const intensity = Math.min(1, distance / 250)
        const targetGazeX = Math.cos(angle) * maxDisplacement * intensity
        const targetGazeY = Math.sin(angle) * maxDisplacement * intensity
        gazeX.set(targetGazeX)
        gazeY.set(targetGazeY)

        // Head smoothly rotates towards cursor
        const angleDeg = angle * (180 / Math.PI)
        const targetTilt = Math.max(-45, Math.min(10, angleDeg * 0.4 - 15))
        headTilt.set(targetTilt)
      }
    }

    const handleMouseLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }

    // Click anywhere on screen: Bot winks and reacts playfully
    const handleMouseDown = () => {
      setEmotion("wink")
      showSpeech("Awesome! ✨", 1500)
      setTimeout(() => {
        setEmotion("normal")
      }, 450)
    }

    // Scroll Interaction: Eyes adjust gaze to scrolling
    const handleScroll = () => {
      resetIdle()
    }

    // Emotional Action Perception:
    // 1. Hover on Close / Dismiss / X buttons -> Negative Head Shake (NO)
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
        showSpeech("Don't leave! 🥺", 2200)
        return
      }

      // Check if hovering interactive positive elements
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
        if (target.textContent?.includes("Track")) {
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
  const shakeAnimation = emotion === "shake" ? { rotate: [-24, -40, -10, -38, -14, -24] } : {}

  return (
    <>
      {/* 1. Ambient Luminous Blue Spotlight (Fluidly follows cursor on screen) */}
      <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
        <motion.div
          style={{
            x: glowX,
            y: glowY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: emotion === "nod" ? 1.3 : 1,
          }}
          transition={{ opacity: { duration: 0.35, ease: "easeOut" } }}
          className="w-[450px] h-[450px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(37,99,235,0.28)_0%,rgba(2,132,199,0.14)_45%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.26)_0%,rgba(14,165,233,0.13)_45%,transparent_70%)] will-change-transform mix-blend-multiply dark:mix-blend-screen"
        />

        {/* Precision Cursor Pointer Dot */}
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: emotion === "nod" || emotion === "wink" ? 0.6 : 1,
          }}
          className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 ring-2 ring-white dark:ring-black shadow-[0_0_8px_rgba(37,99,235,1)] will-change-transform"
        />
      </div>

      {/* 2. Grok AI Mascot Companion Docked in Bottom-Left Corner */}
      <div 
        ref={botRef}
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 flex flex-col items-center pointer-events-auto select-none"
      >
        {/* Floating Mini Speech Bubble */}
        <AnimatePresence>
          {speech && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.8 }}
              animate={{ opacity: 1, y: -4, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.8 }}
              transition={{ duration: 0.22 }}
              className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/95 dark:bg-black/95 text-white text-[11px] font-bold tracking-tight shadow-[0_6px_16px_rgba(0,0,0,0.35),0_0_15px_rgba(37,99,235,0.45)] border border-blue-400/40 whitespace-nowrap flex items-center gap-1 z-20 pointer-events-none"
            >
              <span>{speech}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Bot Head Container */}
        <motion.div
          onClick={() => {
            setEmotion("wink")
            showSpeech("At your service! 🚀", 2000)
            setTimeout(() => setEmotion("normal"), 800)
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: emotion === "wink" ? 0.92 : emotion === "nod" ? 1.18 : emotion === "shake" ? 1.12 : 1,
            ...nodAnimation,
          }}
          transition={{
            y: { duration: 0.48, repeat: emotion === "nod" ? Infinity : 0, repeatDelay: 0.35 },
            scale: { type: "spring", stiffness: 400, damping: 22 },
          }}
          className="relative cursor-pointer group will-change-transform"
        >
          {/* 3D Pearl-White Spherical Robot Head (54px Diameter) */}
          <motion.div
            animate={shakeAnimation}
            transition={{ duration: 0.45, repeat: emotion === "shake" ? Infinity : 0, repeatDelay: 0.3 }}
            className={`relative w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#ffffff] via-[#f1f4f8] to-[#d6dfea] flex items-center justify-center overflow-hidden transition-all duration-300 ${
              emotion === "nod"
                ? "shadow-[0_0_28px_rgba(37,99,235,0.65),0_12px_28px_rgba(0,0,0,0.25),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] ring-2 ring-blue-500/70"
                : emotion === "shake"
                ? "shadow-[0_0_28px_rgba(239,68,68,0.55),0_12px_28px_rgba(0,0,0,0.25),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.15)] ring-2 ring-rose-500/60"
                : "shadow-[0_10px_24px_rgba(0,0,0,0.2),0_2px_6px_rgba(0,0,0,0.08),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.12)] border border-black/5 dark:border-white/20 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            }`}
          >
            {/* 3D Curved Specular Dome Light Highlight */}
            <div className="absolute top-1.5 left-2.5 w-5 h-3 rounded-full bg-white/95 blur-[0.6px] pointer-events-none" />

            {/* Eye Rig Container - Dynamically tilts and tracks the mouse cursor on screen */}
            <motion.div
              style={{
                x: springGazeX,
                y: springGazeY,
                rotate: springHeadTilt,
              }}
              className="flex items-center gap-[7.5px] will-change-transform"
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
                // Iconic Black Capsule Pill Eye (Normal & Tracking)
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
                // Iconic Black Capsule Pill Eye (Normal & Tracking)
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

          {/* Glowing Base Platform Shadow under Bot */}
          <div className="w-10 h-2 rounded-full bg-black/15 dark:bg-black/40 blur-[3px] mx-auto mt-1 -z-10" />
        </motion.div>
      </div>
    </>
  )
}
