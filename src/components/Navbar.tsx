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

      {/* Floating Minimal Mobile Drawer with proper backdrop and non-overlapping clearance */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Floating Mobile Menu Card: Positioned strictly below the 64px header with 8px clearance */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[70px] sm:top-[78px] inset-x-3 sm:inset-x-6 z-50 md:hidden bg-card/98 dark:bg-[#0c1222]/98 backdrop-blur-xl border border-border/80 dark:border-white/10 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col gap-3 max-h-[calc(100vh-86px)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`min-h-[46px] px-4 rounded-2xl text-sm font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-primary/10 text-primary font-bold border border-primary/25"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 active:bg-secondary/70"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-primary" : "bg-muted-foreground/30"}`} />
                        <span>{link.name}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 ${isActive ? "text-primary opacity-100" : "opacity-35"}`} />
                    </Link>
                  )
                })}
              </nav>

              <div className="pt-3 border-t border-border/60 dark:border-white/10 flex flex-col gap-2.5">
                {/* High-Impact Amber "Track Repair Status" */}
                <button
                  onClick={() => {
                    setIsMobileOpen(false)
                    setIsTrackerOpen(true)
                  }}
                  className="w-full min-h-[46px] bg-amber-500 hover:bg-amber-600 active:scale-98 text-slate-950 font-bold rounded-2xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-transform"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <Search className="w-4 h-4 text-slate-950" />
                  <span>Track Repair Status</span>
                </button>

                <a
                  href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="block"
                >
                  <button className="w-full min-h-[46px] bg-secondary/80 hover:bg-secondary active:scale-98 text-foreground font-semibold rounded-2xl text-sm flex items-center justify-center gap-2 cursor-pointer border border-border/70 transition-transform">
                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                    <span>WhatsApp Support</span>
                  </button>
                </a>
              </div>
            </motion.div>
          </>
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
