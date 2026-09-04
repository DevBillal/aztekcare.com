import { useEffect } from "react"
import Lenis from "lenis"
import { motion, useScroll, useSpring } from "framer-motion"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll()
  
  // Spring-smoothed scroll progress for ultra-fluid top progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    // Check if device uses touch/coarse pointer (phones, tablets)
    // Lenis hijacking native touch scrolling causes stuttering/lag on mobile.
    // Native momentum scrolling provides butter-smooth 120Hz/60Hz on mobile.
    const isTouchDevice = 
      typeof window !== "undefined" && (
        window.matchMedia("(pointer: coarse)").matches ||
        navigator.maxTouchPoints > 0 ||
        "ontouchstart" in window
      )

    if (isTouchDevice) {
      return
    }

    // Keep Lenis exclusively for desktop/mouse users
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      infinite: false,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {/* Top Gradient Scroll Progress Bar (Uses CSS variable primary for theme harmony) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-cyan-400 to-primary origin-left z-[90] pointer-events-none shadow-[0_1px_6px_rgba(2,132,199,0.5)]"
      />
      {children}
    </>
  )
}
