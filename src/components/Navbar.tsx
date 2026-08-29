import { useState, useEffect } from "react"
import { Menu, Moon, Sun, Phone, MessageCircle, Cpu, ChevronRight } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ["home", "services", "about", "process", "reviews", "social", "faq", "location"]
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
    { name: "Repair Process", href: "#process", id: "process" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Videos", href: "#social", id: "social" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Location", href: "#location", id: "location" },
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
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-2 sm:px-4 md:px-6 pt-2 sm:pt-3">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-card/90 dark:bg-card/85 backdrop-blur-xl border border-border/80 shadow-[0_10px_35px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_35px_rgba(33,150,243,0.1)] px-3 sm:px-6 py-2 sm:py-2.5"
            : "bg-card/60 dark:bg-card/40 backdrop-blur-md border border-border/40 px-3 sm:px-6 py-2.5 sm:py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo with Glowing Microchip */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(33,150,243,0.4)] transition-all duration-300">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-black tracking-tighter leading-none text-foreground">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  AZTEK
                </span>{" "}
                CARE
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-muted-foreground uppercase mt-0.5 hidden xs:block">
                Phone & IC Repair Lab
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-muted/40 p-1.5 rounded-xl border border-border/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl hover:bg-muted border border-border/50 text-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Quick Call Button */}
            <a href="tel:+8801571423908" className="hidden sm:inline-flex">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 border-primary/50 text-primary hover:bg-primary/10 rounded-xl font-semibold h-8 sm:h-9 px-3"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call Now</span>
              </Button>
            </a>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/8801571423908"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              <Button
                size="sm"
                className="gap-1.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-bold shadow-[0_0_15px_rgba(37,211,102,0.3)] h-8 sm:h-9 px-3.5"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </Button>
            </a>

            {/* Mobile Hamburger Drawer Menu */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-border/50"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[320px] bg-card p-6">
                <SheetTitle className="text-left font-extrabold text-xl mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  <span>AZTEK CARE</span>
                </SheetTitle>
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between p-3 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                        activeSection === link.id
                          ? "bg-primary text-primary-foreground font-bold shadow-sm"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    </a>
                  ))}
                  
                  <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-border">
                    <a
                      href="https://wa.me/8801571423908"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-4 rounded-xl text-sm">
                        <MessageCircle className="h-4 w-4" />
                        <span>Chat on WhatsApp</span>
                      </Button>
                    </a>
                    <a href="tel:+8801571423908" onClick={() => setIsMobileOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full gap-2 border-primary text-primary font-bold py-4 rounded-xl text-sm"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call +880 1571-423908</span>
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
