import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, MapPin, CheckCircle2, HeartHandshake } from "lucide-react"

export default function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState("Welcoming you to AZTEK CARE...")

  // Fluid 0% -> 100% warm hospitable onboarding sequence
  useEffect(() => {
    const startTime = Date.now()
    const duration = 1600 // 1.6s welcoming sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100))
      
      setProgress(rawProgress)

      if (rawProgress < 25) {
        setStatusText("Welcome to Feni's Premier Smartphone Lab...")
      } else if (rawProgress < 60) {
        setStatusText("Master Technicians Ready on Duty Today...")
      } else if (rawProgress < 90) {
        setStatusText("100% Genuine Parts & Care on Standby...")
      } else {
        setStatusText("Welcome to AZTEK CARE ✨")
      }

      if (rawProgress >= 100) {
        clearInterval(interval)
      }
    }, 25)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: "blur(18px)",
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07090e] text-white select-none overflow-hidden"
    >
      {/* 1. Luminous Warm Aurora Mesh (Deep Sapphire + Soft Cyan + Warm Amber Glow) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute w-[540px] h-[540px] rounded-full bg-gradient-to-tr from-blue-600/35 via-cyan-500/30 to-amber-400/10 blur-[140px] pointer-events-none"
      />
      
      {/* Subtle Digital Circuit Dots Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md w-full">
        
        {/* 2. Welcoming Floating Badge with Waving Hand & Grok Mascot Pulse */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-5"
        >
          {/* Pulsing Outer Glow Aura */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/30 to-blue-500/20 blur-lg animate-pulse" />

          {/* Welcoming 3D Hologram Orb */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-[#151c2e] to-[#0a0d16] border border-blue-400/40 p-1 shadow-[0_0_35px_rgba(37,99,235,0.45),inset_0_2px_4px_rgba(255,255,255,0.25)] flex items-center justify-center">
            {/* Friendly Animated Waving Hand */}
            <motion.span 
              animate={{ rotate: [0, 16, -10, 16, -4, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            >
              👋
            </motion.span>
          </div>
        </motion.div>

        {/* 3. Hospitable Greeting Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-[11px] font-semibold tracking-wider text-blue-300 uppercase mb-3 shadow-xs"
        >
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Warm Welcome To Feni's Tech Hub</span>
        </motion.div>

        {/* 4. Grand Brand Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-1 mb-2"
        >
          <p className="text-sm font-medium text-slate-400 tracking-wide">
            Hello & Welcome to
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center justify-center gap-2">
            <span>AZTEK</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 font-light">
              CARE
            </span>
          </h1>
          <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed pt-1">
            Your smartphone is in safe, expert hands. Transparent same-day repairs with genuine care.
          </p>
        </motion.div>

        {/* 5. Welcoming Dynamic Island Progress Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-5 w-full bg-slate-900/85 border border-blue-500/30 rounded-2xl p-3.5 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.6)] flex flex-col gap-2.5"
        >
          {/* Status Label & Percentage Counter */}
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-300 truncate flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {statusText}
            </span>
            <span className="text-cyan-400 font-bold tracking-wider shrink-0 ml-2">
              {progress}%
            </span>
          </div>

          {/* Smooth Gradient Neon Progress Track */}
          <div className="h-1.5 w-full bg-slate-800/90 rounded-full overflow-hidden relative border border-white/5">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.9)] transition-all duration-75 ease-out"
            />
          </div>
        </motion.div>

        {/* 6. Welcoming Trust Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-5 flex items-center gap-2 text-[11px] font-medium text-slate-400 tracking-wide"
        >
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Open Today
          </span>
          <span className="text-slate-600">·</span>
          <span className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-blue-400" /> Mijan Road, Feni
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">Walk-ins Welcome</span>
        </motion.div>

      </div>
    </motion.div>
  )
}
