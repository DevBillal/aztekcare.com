import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Moon, Sun, MessageCircle, X, ArrowRight, ArrowUpRight, Wrench } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-scroll to top on route navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Videos", href: "/videos" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center">
        {/* Buttery Smooth Metamorphosis Bar (Pure GPU-accelerated cubic-bezier transition) */}
        <div
          className={`pointer-events-auto flex items-center justify-between border-0 border-none outline-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "mt-3 sm:mt-4 mx-4 sm:mx-auto max-w-5xl w-full px-5 sm:px-7 py-2.5 sm:py-3 rounded-2xl apple-liquid-glass"
              : "mt-0 w-full max-w-6xl pt-6 sm:pt-8 px-6 sm:px-10 bg-transparent shadow-none"
          }`}
        >
          {/* Left: Brand Icon Box + Text (Exact Match to Screenshot) */}
          <Link
            to="/"
            className="flex items-center gap-3 group cursor-pointer select-none shrink-0"
          >
            {/* Square rounded icon box with clapper / hardware icon (like screenshot) */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-white/[0.08] border border-blue-500/20 dark:border-white/[0.14] text-blue-600 dark:text-white flex items-center justify-center font-bold text-sm shadow-xs transition-transform"
            >
              <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.div>

            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
              aztek<span className="text-blue-600 dark:text-blue-400">care</span>
            </span>
          </Link>

          {/* Right: Clean Minimalist Nav Links (Exact Match to Screenshot) */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative cursor-pointer select-none"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm transition-colors duration-200 ${
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground font-normal"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavTabPill"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute inset-0 rounded-full bg-white/85 dark:bg-white/[0.14] shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] border border-white/60 dark:border-white/[0.15] -z-10"
                        />
                      )}
                      <span>{link.name}</span>
                    </motion.div>
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2.5 ml-2">
              {/* Theme Switcher (Rounded-full, matching button height) */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer hover:bg-black/5 dark:hover:bg-white/10"
              >
                <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>

              {/* Apple Cupertino Royal Blue "Get Quote" Pill */}
              <motion.a
                href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center select-none"
              >
                <div className="h-8 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-xs tracking-normal transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_2px_8px_rgba(0,113,227,0.3),inset_0_1px_1px_rgba(255,255,255,0.35)] border border-white/20">
                  <MessageCircle className="w-3.5 h-3.5 text-white/95" />
                  <span>Get Quote</span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-secondary/60 border border-border/50"
            >
              <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors cursor-pointer border border-border/60"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Floating Minimal Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed top-20 inset-x-4 z-40 md:hidden bg-card/95 dark:bg-[#0c1021]/95 backdrop-blur-2xl border border-border/80 dark:border-white/10 rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col gap-3"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-white font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </Link>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-border/60 dark:border-white/10">
              <a
                href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="block"
              >
                <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold h-11 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/25">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Instant WhatsApp Quote</span>
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
