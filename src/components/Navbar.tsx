import { useState, useEffect } from "react"
import { Menu, Moon, Sun, MessageCircle, X, ArrowRight } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25)

      const sections = ["home", "services", "about", "reviews", "social", "faq", "contact"]
      const scrollPos = window.scrollY + 140

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
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Videos", href: "#social", id: "social" },
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
                ? "py-1.5 px-3 rounded-full bg-card/85 dark:bg-black/70 backdrop-blur-2xl border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                : "py-2 px-1 bg-transparent"
            }`}
          >
            {/* Left: Serene Minimal Monogram & Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group cursor-pointer select-none pl-1"
            >
              <div className="w-7 h-7 rounded-lg bg-foreground text-background flex items-center justify-center font-bold text-xs tracking-tight transition-transform group-hover:scale-95 shadow-xs">
                az
              </div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-foreground">
                aztek<span className="text-muted-foreground font-light ml-0.5">care</span>
              </span>
            </a>

            {/* Right: Soothing Floating Pill Menu (Matching Screenshot) */}
            <div className="hidden md:flex items-center gap-2">
              <nav className="p-1 rounded-full bg-secondary/80 dark:bg-white/[0.05] backdrop-blur-xl border border-border/70 flex items-center gap-0.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
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
                    </a>
                  )
                })}
              </nav>

              {/* Soothing Theme Switcher */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-secondary/50 dark:bg-white/[0.03] hover:bg-secondary border border-border/50"
              >
                <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>

              {/* Minimal Get Quote CTA */}
              <a
                href="https://wa.me/8801571423908"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <button className="h-8 px-4 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium text-xs shadow-xs transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer">
                  <MessageCircle className="w-3 h-3 text-primary" />
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
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-2 px-3.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-secondary text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </a>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-border/60">
              <a
                href="https://wa.me/8801571423908"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="block"
              >
                <button className="w-full bg-foreground text-background font-semibold h-10 rounded-xl text-xs flex items-center justify-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-primary" />
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
