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

    window.addEventListener("scroll", handleScroll)
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
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 26,
            mass: 0.8
          }}
          className={`mx-auto transition-all duration-300 ${
            isScrolled
              ? "max-w-3xl pt-3 px-4"
              : "max-w-6xl pt-6 px-4 sm:px-8"
          }`}
        >
          <div
            className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "py-1.5 px-3 rounded-full bg-card/85 dark:bg-black/75 backdrop-blur-2xl border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                : "py-2 px-1 bg-transparent"
            }`}
          >
            {/* Brand Logo & Monogram */}
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer select-none pl-1"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs tracking-tight transition-transform group-hover:scale-95 shadow-xs shadow-blue-500/25">
                az
              </div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-foreground">
                aztek<span className="text-blue-600 dark:text-blue-400 font-semibold ml-0.5">care</span>
              </span>
            </Link>

            {/* Desktop Navigation Links Pill (Matching Screenshot) */}
            <div className="hidden md:flex items-center gap-2">
              <nav className="p-1 rounded-full bg-secondary/80 dark:bg-white/[0.05] backdrop-blur-xl border border-border/70 flex items-center gap-0.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none ${
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavPill"
                          transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          className="absolute inset-0 rounded-full bg-background dark:bg-white/10 shadow-xs border border-border/50"
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  )
                })}
              </nav>

              {/* Theme Switcher */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-secondary/50 dark:bg-white/[0.03] hover:bg-secondary border border-border/50"
              >
                <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>

              {/* Instant WhatsApp Quote CTA */}
              <a
                href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <button className="h-8 px-4 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-xs shadow-xs shadow-blue-500/25 transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer">
                  <MessageCircle className="w-3 h-3 text-white" />
                  <span>Get Quote</span>
                </button>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-1.5 pr-1">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
              </button>
            </div>

          </div>
        </motion.div>
      </header>

      {/* Floating Minimal Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 inset-x-4 z-40 md:hidden bg-card/95 dark:bg-black/90 backdrop-blur-2xl border border-border/80 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-3"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`py-2 px-3.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-secondary text-foreground font-semibold"
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
                <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold h-10 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-blue-500/25">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
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
