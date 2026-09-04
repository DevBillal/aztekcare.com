import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Moon, Sun, MessageCircle, X, ArrowRight, Wrench, Search } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { motion, AnimatePresence } from "framer-motion"
import RepairTrackerModal from "./RepairTrackerModal"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isTrackerOpen, setIsTrackerOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-scroll to top on route navigation & close mobile menu
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileOpen(false)
  }, [location.pathname])

  // Lock background body scroll while mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

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
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center px-3 sm:px-6"
      >
        {/* Metamorphosis Floating App Bar with zero layout jump */}
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled || isMobileOpen
              ? "mt-2 sm:mt-3 max-w-5xl w-full px-3.5 sm:px-6 h-14 sm:h-16 rounded-2xl apple-liquid-glass shadow-lg"
              : "mt-0 max-w-6xl w-full px-3 sm:px-6 h-16 sm:h-20 bg-transparent shadow-none"
          }`}
        >
          {/* Left: Brand Icon Box + Text */}
          <Link
            to="/"
            onClick={() => setIsMobileOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none shrink-0 min-h-[44px]"
          >
            {/* Square rounded icon box with wrench hardware icon in new electric palette */}
            <div 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 dark:bg-primary/15 border border-primary/20 text-primary flex items-center justify-center font-bold text-sm shadow-xs transition-transform group-hover:scale-105"
            >
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>

            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
              aztek<span className="text-primary">care</span>
            </span>
          </Link>

          {/* Right: Clean Minimalist Nav Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative cursor-pointer select-none min-h-[44px] flex items-center"
                  >
                    <div
                      className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm transition-colors duration-200 ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground font-normal"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavTabPill"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/25 -z-10 shadow-xs"
                        />
                      )}
                      <span>{link.name}</span>
                    </div>
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2.5 ml-2">
              {/* Theme Switcher (Accessible 44px touch-target) */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                className="w-9 h-9 sm:w-9 sm:h-9 min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer hover:bg-secondary"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>

              {/* High-Conversion "Track Repair" Capsule Pill with Energetic Amber Accent */}
              <button
                onClick={() => setIsTrackerOpen(true)}
                className="h-9 px-4 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs tracking-tight transition-all flex items-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(245,158,11,0.35)] select-none border border-amber-400/40 min-h-[44px] active:scale-95"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <Search className="w-3.5 h-3.5 text-slate-950" />
                <span>Track Repair</span>
              </button>
            </div>
          </div>

          {/* Mobile Controls (Fully accessible touch targets with active indicators) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-secondary/80 border border-border/60 active:scale-95"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer border active:scale-95 ${
                isMobileOpen 
                  ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/25" 
                  : "bg-secondary text-foreground hover:bg-secondary/80 border-border/70"
              }`}
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* World-Class Full-Screen iOS-style Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 md:hidden bg-background/98 dark:bg-[#070b14]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Unified Top Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20 border-b border-border/40 shrink-0">
              <Link
                to="/"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-2.5 select-none min-h-[44px]"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold text-sm shadow-xs">
                  <Wrench className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base font-bold tracking-tight text-foreground">
                  aztek<span className="text-primary">care</span>
                </span>
              </Link>

              <div className="flex items-center gap-2">
                {/* Theme Switcher */}
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  aria-label="Toggle theme"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-foreground hover:bg-secondary transition-colors cursor-pointer bg-secondary/80 border border-border/60 active:scale-95"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center cursor-pointer shadow-sm shadow-primary/25 active:scale-95 transition-transform"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Menu Links with Staggered Elegance & High Contrast */}
            <div className="px-5 py-6 flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.href
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`group px-4 py-3 rounded-2xl flex items-center justify-between transition-all ${
                          isActive
                            ? "bg-primary/10 border border-primary/25 text-primary"
                            : "hover:bg-secondary/70 text-foreground active:bg-secondary"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span className="text-xs font-mono font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                            0{idx + 1}
                          </span>
                          <span className={`text-lg tracking-tight transition-colors ${
                            isActive ? "font-bold text-primary" : "font-semibold text-foreground group-hover:text-primary"
                          }`}>
                            {link.name}
                          </span>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-40 group-hover:opacity-100"
                        }`} />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-border/50 flex flex-col gap-3">
                {/* High-Impact Amber "Track Repair Status" */}
                <button
                  onClick={() => {
                    setIsMobileOpen(false)
                    setIsTrackerOpen(true)
                  }}
                  className="w-full h-12 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-98 text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-md shadow-amber-500/20 cursor-pointer transition-all"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <Search className="w-4 h-4 text-slate-950" />
                  <span>Track Repair Status</span>
                </button>

                {/* WhatsApp Support */}
                <a
                  href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full h-12 rounded-2xl bg-secondary/80 hover:bg-secondary active:scale-98 text-foreground font-semibold text-sm flex items-center justify-center gap-2 border border-border/70 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Support</span>
                </a>
              </div>
            </div>

            {/* Bottom Lab Quick Info Strip */}
            <div className="px-5 py-4 border-t border-border/40 bg-secondary/30 text-center shrink-0">
              <p className="text-xs font-medium text-muted-foreground">
                📍 SSK Road, Feni · ⚡ 10:00 AM – 9:30 PM (Everyday Open)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Customer Repair Tracker & Instant Booking Portal */}
      <RepairTrackerModal 
        isOpen={isTrackerOpen} 
        onClose={() => setIsTrackerOpen(false)} 
      />
    </>
  )
}
