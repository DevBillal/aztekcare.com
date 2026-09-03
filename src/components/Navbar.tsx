import { useState, useEffect } from "react"
import { Menu, Moon, Sun, Phone, MessageCircle, X, Wrench, ArrowRight } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      // Transition threshold for shrinking the navbar
      setIsScrolled(window.scrollY > 30)

      const sections = ["home", "services", "about", "process", "reviews", "social", "faq", "contact"]
      const scrollPos = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Media", href: "#social", id: "social" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileOpen(false)
    if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-500">
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 28,
            mass: 0.8
          }}
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? "max-w-4xl pt-3 px-3 sm:px-6"
              : "max-w-7xl pt-5 sm:pt-7 px-4 sm:px-8 lg:px-12"
          }`}
        >
          {/* Main Morphing Appbar Bar */}
          <div
            className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ${
              isScrolled
                ? "rounded-full py-1.5 px-3 sm:px-4 bg-card/85 dark:bg-card/80 backdrop-blur-2xl border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                : "rounded-2xl py-2 px-1 bg-transparent border border-transparent"
            }`}
          >
            {/* Left: Brand Identity (Morphs smoothly) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 group cursor-pointer select-none"
            >
              <motion.div 
                layout
                className={`rounded-xl bg-foreground text-background flex items-center justify-center font-bold shadow-xs transition-all duration-300 group-hover:scale-95 ${
                  isScrolled ? "w-7 h-7" : "w-8 h-8 sm:w-9 sm:h-9"
                }`}
              >
                <Wrench className={`${isScrolled ? "w-3.5 h-3.5" : "w-4 h-4"} stroke-[2.2]`} />
              </motion.div>

              <div className="flex items-center gap-2">
                <span className={`font-bold tracking-tight text-foreground transition-all duration-300 ${
                  isScrolled ? "text-sm sm:text-base" : "text-base sm:text-lg"
                }`}>
                  aztek<span className="text-muted-foreground font-light ml-0.5">care</span>
                </span>

                {/* Subtle indicator tag shown when opening long space */}
                {!isScrolled && (
                  <span className="hidden lg:inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Feni Lab Open</span>
                  </span>
                )}
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5 sm:gap-2">
              <nav
                className={`flex items-center transition-all duration-500 ${
                  isScrolled
                    ? "gap-0.5"
                    : "p-1.5 rounded-full bg-card/80 dark:bg-card/70 backdrop-blur-xl border border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] gap-1"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative font-medium transition-all duration-200 cursor-pointer select-none rounded-full ${
                        isScrolled
                          ? "text-[11px] sm:text-xs px-2.5 sm:px-3 py-1"
                          : "text-xs px-3.5 sm:px-4 py-1.5"
                      } ${
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavPill"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute inset-0 rounded-full bg-secondary dark:bg-muted/80 border border-border/80 shadow-xs"
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
                  )
                })}
              </nav>

              {/* Theme Toggle */}
              <div
                className={`flex items-center transition-all duration-500 ${
                  isScrolled
                    ? "pl-1"
                    : "p-1.5 rounded-full bg-card/80 dark:bg-card/70 backdrop-blur-xl border border-border/80 shadow-xs"
                }`}
              >
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  aria-label="Toggle theme"
                  className={`rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer ${
                    isScrolled ? "w-6 h-6" : "w-7 h-7"
                  }`}
                >
                  <Sun className={`${isScrolled ? "h-3 w-3" : "h-3.5 w-3.5"} rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`} />
                  <Moon className={`absolute ${isScrolled ? "h-3 w-3" : "h-3.5 w-3.5"} rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`} />
                </button>
              </div>

              {/* Call Hotline (Only on wide initial open) */}
              {!isScrolled && (
                <a href="tel:+8801571423908" className="hidden lg:inline-flex">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs font-medium h-9 px-3 text-muted-foreground hover:text-foreground rounded-full"
                  >
                    <Phone className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                    <span>01571-423908</span>
                  </Button>
                </a>
              )}

              {/* WhatsApp Quote CTA */}
              <a
                href="https://wa.me/8801571423908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  size="sm"
                  className={`bg-foreground text-background hover:bg-foreground/90 font-medium rounded-full shadow-xs transition-all hover:scale-[1.02] ${
                    isScrolled
                      ? "text-[11px] h-7 sm:h-8 px-3"
                      : "text-xs h-9 px-4"
                  }`}
                >
                  <MessageCircle className={`${isScrolled ? "h-3 w-3 mr-1" : "h-3.5 w-3.5 mr-1.5"} text-primary`} />
                  <span>Get Quote</span>
                </Button>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-1.5">
              <div className="p-1 rounded-full bg-card/80 dark:bg-card/70 backdrop-blur-xl border border-border/80 shadow-xs flex items-center gap-1">
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
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {isMobileOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
                </button>
              </div>
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
            transition={{ duration: 0.2 }}
            className="fixed top-16 sm:top-20 inset-x-4 z-40 md:hidden bg-card/95 dark:bg-card/90 backdrop-blur-2xl border border-border/80 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-3"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-secondary text-foreground font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </a>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-border/60 flex flex-col gap-2">
              <a
                href="https://wa.me/8801571423908"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="block"
              >
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold h-11 rounded-xl text-xs shadow-xs">
                  <MessageCircle className="w-3.5 h-3.5 mr-2 text-primary" />
                  <span>Instant WhatsApp Quote</span>
                </Button>
              </a>

              <a href="tel:+8801571423908" onClick={() => setIsMobileOpen(false)} className="block">
                <Button
                  variant="outline"
                  className="w-full border-border/80 text-foreground font-medium h-11 rounded-xl text-xs"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 opacity-70" />
                  <span>Call +880 1571-423908</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
