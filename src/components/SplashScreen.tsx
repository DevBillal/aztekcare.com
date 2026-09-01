import { motion } from "framer-motion"

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(6px)",
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground select-none overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Minimal Typographic Mark */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 mb-3"
        >
          <div className="w-8 h-8 rounded-xl bg-foreground text-background flex items-center justify-center font-black text-sm tracking-tighter shadow-sm">
            AZ
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            AZTEK<span className="text-muted-foreground font-medium ml-1">CARE</span>
          </h1>
        </motion.div>

        {/* Minimal Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xs font-medium tracking-wide text-muted-foreground"
        >
          Problems Today. Fixed Today.
        </motion.p>

        {/* Apple-style Hairline Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "120px" }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-6 h-[2px] bg-border rounded-full overflow-hidden relative"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="h-full w-16 bg-primary rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
