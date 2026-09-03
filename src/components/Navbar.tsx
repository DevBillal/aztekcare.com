import { useState, useEffect } from "react"
import { Menu, Moon, Sun, Phone, MessageCircle, X, Wrench, Smartphone, ArrowRight } from "lucide-react"
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
      setIsScrolled(window.scrollY > 20)

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
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 flex items-center justify-between">
          
          {/* Left: Brand Icon Box + Typography (like screenshot 'itsNiloy') */}
          <div className="pointer-events-auto">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              {/* Minimalist Box Icon */}
              <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-bold text-xs shadow-sm transition-transform group-hover:scale-95">
                <Wrench className="w-4 h-4 stroke-[2.2]" />
              </div>

              {/* Clean Typography */}
              <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                aztek<span className="text-muted-foreground font-light ml-0.5">care</span>
              </span>
            </a>
          </div>

          {/* Right: Floating Capsule Navigation (Exactly like screenshot) */}
          <div className="pointer-events-auto hidden md:flex items-center gap-2">
            <nav className="p-1.5 rounded-full bg-card/80 dark:bg-card/70 backdrop-blur-xl border border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none ${
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

            {/* Theme Toggle Pill */}
            <div className="p-1.5 rounded-full bg-card/80 dark:bg-card/70 backdrop-blur-xl border border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>
            </div>

            {/* Direct WhatsApp Pill CTA */}
            <a
              href="https://wa.me/8801571423908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                size="sm"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium text-xs h-9 px-4 rounded-full shadow-sm transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-3.5 w-3.5 mr-1.5 text-primary" />
                <span>Get Quote</span>
              </Button>
            </a>
          </div>

          {/* Mobile Actions Capsule */}
          <div className="pointer-events-auto flex md:hidden items-center gap-1.5">
            <div className="p-1 rounded-full bg-card/80 dark:bg-card/70 backdrop-blur-xl border border-border/80 shadow-sm flex items-center gap-1">
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
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Floating Minimal Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-40 md:hidden bg-card/95 dark:bg-card/90 backdrop-blur-2xl border border-border/80 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-3"
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
