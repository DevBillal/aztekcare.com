import { useState, useEffect } from "react"
import { Menu, Moon, Sun, Phone, MessageCircle, ArrowRight, X } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)

      const sections = ["home", "services", "about", "process", "reviews", "social", "faq", "contact"]
      const scrollPos = window.scrollY + 100

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
    { name: "Process", href: "#process", id: "process" },
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
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-apple border-b border-black/[0.08] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            : "bg-background/80 dark:bg-black/60 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-13 sm:h-14 flex items-center justify-between">
          {/* Apple Minimal Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-foreground text-background flex items-center justify-center font-black text-xs tracking-tighter transition-transform group-hover:scale-95">
              AZ
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
              AZTEK<span className="text-muted-foreground font-medium ml-1">CARE</span>
            </span>
          </a>

          {/* Minimal Desktop Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[13px] tracking-tight transition-colors cursor-pointer ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Minimal Theme Switcher */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            {/* Quick Call Button */}
            <a href="tel:+8801571423908" className="hidden sm:inline-flex">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-medium h-8 px-3 text-muted-foreground hover:text-foreground rounded-full"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                <span>Call Us</span>
              </Button>
            </a>

            {/* Primary Apple-style Pill CTA */}
            <a
              href="https://wa.me/8801571423908"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs h-8 px-3.5 rounded-full shadow-sm transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                <span>Get Quote</span>
              </Button>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Apple-style Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-16 bg-background/95 backdrop-blur-2xl flex flex-col justify-between px-6 pb-8 transition-all animate-in fade-in duration-200">
          <nav className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-3 text-xl font-medium tracking-tight border-b border-border/40 flex items-center justify-between ${
                  activeSection === link.id
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6">
            <a
              href="https://wa.me/8801571423908"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileOpen(false)}
              className="block"
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-2xl text-sm shadow-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Instant WhatsApp Quote</span>
              </Button>
            </a>

            <a href="tel:+8801571423908" onClick={() => setIsMobileOpen(false)} className="block">
              <Button
                variant="outline"
                className="w-full border-border text-foreground font-medium h-12 rounded-2xl text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call +880 1571-423908</span>
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
