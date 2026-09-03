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
    // Apple Inertial Momentum Smooth Scroll Architecture
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple exponential ease-out curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
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
      {/* Sleek Apple-style Gradient Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 origin-left z-[90] pointer-events-none shadow-[0_1px_6px_rgba(37,99,235,0.6)]"
      />
      {children}
    </>
  )
}
