import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Moon, Sun, MessageCircle, X, ArrowRight } from "lucide-react"
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
        {/* Generous Floating Top Margins & Smooth Metamorphosis Capsule */}
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 24,
            mass: 0.85
          }}
          className={`w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "max-w-4xl pt-3 sm:pt-4 px-4 sm:px-6"
              : "max-w-6xl pt-5 sm:pt-7 px-4 sm:px-8"
          }`}
        >
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 24,
              mass: 0.85
            }}
            className={`pointer-events-auto w-full flex items-center justify-between rounded-full border transition-all duration-500 ${
              isScrolled
                ? "h-14 sm:h-15 px-4 sm:px-6 liquid-glass shadow-[0_16px_45px_rgba(0,0,0,0.16)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.7)] border-border/80"
                : "h-16 sm:h-18 px-5 sm:px-8 bg-card/85 dark:bg-black/70 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] border-border/70"
            }`}
          >
            {/* Left: Brand Logo & Tagline with Generous Spacing */}
            <Link
              to="/"
              className="flex items-center gap-3 group cursor-pointer select-none shrink-0"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  isScrolled ? "w-8.5 h-8.5" : "w-10 h-10"
                } rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xs sm:text-sm tracking-tight shadow-md shadow-blue-500/30 transition-all duration-300 shrink-0`}
              >
                az
              </motion.div>
              <div className="flex flex-col text-left">
                <span className={`${
                  isScrolled ? "text-sm sm:text-base" : "text-base sm:text-lg"
                } font-bold tracking-tight text-foreground transition-all duration-300`}>
                  aztek<span className="text-blue-600 dark:text-blue-400 font-semibold ml-0.5">care</span>
                </span>
                {!isScrolled && (
                  <span className="hidden sm:block text-[10px] text-muted-foreground -mt-0.5 font-medium tracking-wide">
                    Smartphone Lab · Feni
                  </span>
                )}
              </div>
            </Link>

            {/* Center: Desktop Navigation Links Pill with Generous Padding */}
            <div className="hidden md:flex items-center">
              <nav className="p-1 sm:p-1.5 rounded-full bg-secondary/80 dark:bg-white/[0.06] backdrop-blur-xl border border-border/70 flex items-center gap-1 shadow-xs">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="relative cursor-pointer select-none"
                    >
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className={`relative ${
                          isScrolled ? "text-xs px-3.5 py-1.5" : "text-xs sm:text-sm font-medium px-4 sm:px-4.5 py-2"
                        } rounded-full transition-colors duration-200 ${
                          isActive
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeNavPill"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            className="absolute inset-0 rounded-full bg-background dark:bg-white/10 shadow-sm border border-border/60"
                          />
                        )}
                        <span className="relative z-10">{link.name}</span>
                      </motion.div>
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Right: Actions with Generous Breathing Space */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Theme Switcher */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                className={`${
                  isScrolled ? "w-9 h-9" : "w-10 h-10"
                } rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-secondary/70 dark:bg-white/[0.05] hover:bg-secondary border border-border/60 shadow-xs`}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </motion.button>

              {/* Instant WhatsApp Quote CTA Button */}
              <motion.a
                href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden sm:inline-flex"
              >
                <button className={`${
                  isScrolled ? "h-9 px-4 text-xs" : "h-11 px-5 sm:px-6 text-xs sm:text-sm"
                } rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold shadow-md shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer`}>
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                  <span>Get Quote</span>
                </button>
              </motion.a>

              {/* Mobile Controls */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-8.5 h-8.5 md:hidden rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors cursor-pointer border border-border/60"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>

          </motion.div>
        </motion.div>
      </header>

      {/* Floating Minimal Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed top-20 inset-x-4 z-40 md:hidden bg-card/95 dark:bg-black/90 backdrop-blur-2xl border border-border/80 rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex flex-col gap-3"
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
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </Link>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-border/60">
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
