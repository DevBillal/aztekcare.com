import { motion } from "framer-motion"

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(12px)",
        scale: 1.02,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground select-none overflow-hidden"
    >
      {/* Soft Ambient Radial Electric Primary Glow */}
      <div className="absolute w-[340px] h-[340px] rounded-full bg-primary/10 blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Sleek Minimal Logo Mark */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 mb-2.5"
        >
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary border border-primary/25 flex items-center justify-center font-bold text-sm shadow-xs">
            AZ
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            aztek<span className="text-primary font-light">care</span>
          </h1>
        </motion.div>

        {/* Warm Simple Welcome One-Liner */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xs font-medium tracking-wide text-muted-foreground"
        >
          Welcome to Feni's Smartphone Lab
        </motion.p>

        {/* Minimal Apple-Style Hairline Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "110px" }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-5 h-[2px] w-[110px] bg-border/60 rounded-full overflow-hidden relative"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 0.85,
              ease: "easeInOut",
            }}
            className="h-full w-14 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          />
        </motion.div>

      </div>
    </motion.div>
  )
}
