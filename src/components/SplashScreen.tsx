import { motion } from "framer-motion"
import { Cpu, Zap } from "lucide-react"

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.03,
        filter: "blur(10px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground select-none overflow-hidden"
    >
      {/* Background Animated Neon Glows */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[450px] h-[450px] bg-primary/25 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[90px] pointer-events-none"
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Brand Icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
        >
          {/* Glowing pulse ring */}
          <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl animate-pulse" />
          
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-card border-2 border-primary/40 flex items-center justify-center shadow-[0_0_40px_rgba(33,150,243,0.35)]">
            <Cpu className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center"
            >
              <Zap className="w-3.5 h-3.5 text-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Logo Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="space-y-2"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
              AZTEK
            </span>{" "}
            <span className="text-foreground">CARE</span>
          </h1>

          <p className="text-xs sm:text-sm font-medium tracking-widest text-muted-foreground uppercase">
            "Problems Today. Fixed Today."
          </p>
        </motion.div>

        {/* High-Tech Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "160px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 h-1 bg-muted rounded-full overflow-hidden relative"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 0.9,
              ease: "easeInOut",
            }}
            className="h-full w-24 bg-gradient-to-r from-transparent via-primary to-cyan-400 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
