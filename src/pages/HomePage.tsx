import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { 
  MessageCircle, 
  ArrowRight, 
  Check, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Smartphone, 
  Wrench, 
  Sparkles,
  ChevronDown,
  Search,
  Globe,
  Radio
} from "lucide-react"
import { Button } from "@/components/ui/button"

const topBrands = [
  { id: "iphone", name: "Apple iPhone" },
  { id: "samsung", name: "Samsung Galaxy" },
  { id: "xiaomi", name: "Xiaomi / POCO" },
  { id: "pixel", name: "Google Pixel" },
  { id: "oneplus", name: "OnePlus" },
]

// All major global mobile phone brands across the world
const worldBrands = [
  "Vivo",
  "Oppo",
  "Realme",
  "Motorola (Moto)",
  "Nothing Phone / CMF",
  "Huawei",
  "Honor",
  "Infinix",
  "Tecno",
  "iQOO",
  "Sony Xperia",
  "Asus (ROG / Zenfone)",
  "Nokia (HMD)",
  "ZTE (Nubia / RedMagic)",
  "Itel",
  "Symphony",
  "Walton",
  "Lenovo (Legion)",
  "TCL",
  "Meizu",
  "Sharp Aquos",
  "Fairphone",
  "Blackview (Rugged)",
  "Ulefone",
  "Doogee",
  "HTC",
  "LG",
  "Micromax",
  "Lava",
  "Other / Custom Smartphone"
]

const issueTypes = [
  { id: "screen", label: "Display / OLED Screen", est: "30 - 45 Mins" },
  { id: "power", label: "Dead / No Power (Shorting)", est: "2 - 4 Hours" },
  { id: "battery", label: "Battery Health / Drain", est: "20 - 30 Mins" },
  { id: "faceid", label: "Face ID / Front Sensor", est: "1 - 2 Hours" },
  { id: "motherboard", label: "Motherboard IC / CPU Reball", est: "Same Day" },
  { id: "water", label: "Water / Liquid Damage", est: "3 - 5 Hours" },
]

const heroStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const heroStaggerItem: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function HomePage() {
  const [selectedBrand, setSelectedBrand] = useState(topBrands[0].name)
  const [selectedIssue, setSelectedIssue] = useState(issueTypes[0])
  const [isOtherOpen, setIsOtherOpen] = useState(false)
  const [brandSearch, setBrandSearch] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOtherOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isTopBrandSelected = topBrands.some((b) => b.name === selectedBrand)

  // Filtered world brands based on search
  const filteredBrands = worldBrands.filter((b) => 
    b.toLowerCase().includes(brandSearch.toLowerCase())
  )

  // General greeting for Hero CTA (no device or issue specified)
  const generalWaMessage = encodeURIComponent(
    "Hello AZTEK CARE! I would like to inquire about a device repair. Is a technician currently available today?"
  )
  const generalWaLink = `https://wa.me/8801571423908?text=${generalWaMessage}`

  // Dynamic booking link for Estimator section (includes selected brand & issue)
  const estimatorWaMessage = encodeURIComponent(
    `Hello AZTEK CARE! I would like to book a repair for my ${selectedBrand} (${selectedIssue.label}). Estimated duration: ${selectedIssue.est}. Are technicians available today?`
  )
  const estimatorWaLink = `https://wa.me/8801571423908?text=${estimatorWaMessage}`

  return (
    <div className="w-full relative overflow-x-hidden">
      
      {/* 1. EYE-SOOTHING, SIMPLE & INFORMATIVE WELCOMING HERO SECTION */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        
        {/* Eye-Soothing Soft Ambient Glow (No visual clutter, gentle on eyes) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[350px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[120px] rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-[350px] h-[220px] bg-amber-500/5 blur-[100px] rounded-full" />
          
          {/* Subtle Delicate Grid Overlay for Depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,132,199,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.03)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
          
          {/* Top Pill Badge: Real-time Lab Availability & Location */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-semibold text-foreground shadow-xs select-none backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Open Today in Feni</span>
            <span className="text-border">·</span>
            <span className="text-muted-foreground font-medium">Walk-Ins & Free Diagnosis Welcome</span>
          </motion.div>

          {/* Eye-Soothing Welcoming Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 select-none max-w-4xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.12] text-foreground">
              Fast, Trusted Smartphone Repair.
              <br />
              <span className="text-blue-gradient font-semibold">Fixed Today in Feni.</span>
            </h1>
          </motion.div>

          {/* Informative & Reassuring Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground font-normal leading-relaxed px-2"
          >
            From cracked OLED displays and drained batteries to advanced motherboard micro-soldering — we fix <strong className="text-foreground font-semibold">iPhone, Samsung, Pixel, Xiaomi, OnePlus</strong> and <strong className="text-foreground font-semibold">MacBooks</strong> with genuine parts and 100% free inspection.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-1 w-full sm:w-auto"
          >
            <a
              href={generalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto h-12 px-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-[0_4px_20px_rgba(2,132,199,0.3)] transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
                <span>Chat on WhatsApp (+880 1571-423908)</span>
              </Button>
            </a>

            <a
              href="#estimator"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#estimator")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 px-6 rounded-full bg-secondary/70 hover:bg-secondary border-border/80 text-foreground font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Check Repair Time & Cost</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </Button>
            </a>
          </motion.div>

          {/* Supported Devices Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pt-1 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground select-none"
          >
            <span className="font-semibold text-foreground mr-1">Repairs Supported:</span>
            {["Apple iPhone", "Samsung Galaxy", "Xiaomi & POCO", "Google Pixel", "OnePlus", "MacBook / iPad", "All Androids"].map((brand) => (
              <span 
                key={brand}
                className="px-2.5 py-1 rounded-lg bg-secondary/60 dark:bg-white/[0.04] border border-border/60 text-foreground/80 font-medium"
              >
                {brand}
              </span>
            ))}
          </motion.div>

          {/* 4 Reassuring Customer Guarantees - Eye-Soothing Clean Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
          >
            {/* Guarantee 1 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-card border border-border/70 dark:border-white/10 shadow-xs hover:border-primary/30 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-foreground">30-Min Fast Fix</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">Screens & batteries replaced while you wait.</p>
            </div>

            {/* Guarantee 2 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-card border border-border/70 dark:border-white/10 shadow-xs hover:border-primary/30 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-foreground">IC Micro-Soldering</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">Specialized dead phone & logic board recovery.</p>
            </div>

            {/* Guarantee 3 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-card border border-border/70 dark:border-white/10 shadow-xs hover:border-primary/30 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-foreground">Tested Genuine Parts</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">Original grade parts with service warranty.</p>
            </div>

            {/* Guarantee 4 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-card border border-border/70 dark:border-white/10 shadow-xs hover:border-primary/30 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-foreground">100% Free Diagnosis</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">Honest quote before starting. No fix, no fee.</p>
            </div>
          </motion.div>

          {/* Welcoming Store Details & Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500 font-bold flex items-center">
                ★★★★★
              </span>
              <span className="font-semibold text-foreground">4.9/5 Rating</span>
              <span>(500+ Verified Customers in Feni)</span>
            </div>
            <span className="hidden sm:inline text-border">·</span>
            <div className="flex items-center gap-1.5">
              <span>📍 Alia Madrasha Market, Mijan Road, Feni</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. UNIFIED INTERACTIVE DIAGNOSIS CONSOLE */}
      <section id="estimator" className="py-20 sm:py-28 relative border-t border-border/60 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wider uppercase border border-primary/25 mb-3">
              <Radio className="w-3 h-3 text-primary animate-pulse" />
              Smart Hardware Terminal
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Select device & issue. <br />
              <span className="font-normal text-blue-gradient">Get live fix duration.</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mt-2">
              Choose your device brand and hardware fault below to see our typical turnaround time.
            </p>
          </motion.div>

          {/* Diagnostic Console Card with New Palette Border & Glow */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-card border border-border/80 dark:border-primary/25 shadow-xl dark:shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_24px_rgba(14,165,233,0.08)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
              
              {/* Left Column: Interactive Selectors (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                
                {/* 1. Brand Selector */}
                <div className="space-y-2 relative" ref={dropdownRef}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 uppercase tracking-wide">
                      <Smartphone className="w-3.5 h-3.5 text-primary" />
                      1. Choose Your Brand
                    </label>
                    <span className="text-[11px] text-muted-foreground">
                      Selected: <strong className="text-primary font-bold">{selectedBrand}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-1.5 bg-secondary rounded-2xl border border-border/60">
                    {topBrands.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => {
                          setSelectedBrand(b.name)
                          setIsOtherOpen(false)
                        }}
                        className={`py-2 px-2 text-xs font-medium rounded-xl transition-colors text-center truncate cursor-pointer relative ${
                          selectedBrand === b.name
                            ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                        }`}
                      >
                        {selectedBrand === b.name && (
                          <motion.div
                            layoutId="activeBrandPill"
                            className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-md shadow-primary/30"
                            transition={{ type: "spring", stiffness: 450, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{b.name}</span>
                      </button>
                    ))}

                    {/* "Others" Dropdown Button */}
                    <button
                      type="button"
                      onClick={() => setIsOtherOpen(!isOtherOpen)}
                      className={`py-2 px-2 text-xs font-medium rounded-xl transition-all flex items-center justify-center gap-1 text-center truncate cursor-pointer border ${
                        !isTopBrandSelected
                          ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm shadow-primary/30"
                          : isOtherOpen
                          ? "bg-background text-foreground border-primary font-semibold shadow-xs"
                          : "text-muted-foreground hover:text-foreground border-transparent hover:bg-background/50"
                      }`}
                    >
                      <span className="truncate">{!isTopBrandSelected ? selectedBrand : "Others"}</span>
                      <ChevronDown className={`w-3 h-3 shrink-0 transition-transform duration-200 ${isOtherOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {/* World Mobile Brands Dropdown Menu */}
                  <AnimatePresence>
                    {isOtherOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        className="absolute left-0 right-0 top-full mt-2 z-30 p-3.5 rounded-2xl bg-card border border-border/80 shadow-2xl backdrop-blur-2xl space-y-3"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-border/60">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                            <Globe className="w-3.5 h-3.5 text-primary animate-spin" style={{ animationDuration: "10s" }} />
                            <span>Select Any Global Brand ({worldBrands.length} brands)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setIsOtherOpen(false)}
                            className="text-[11px] text-muted-foreground hover:text-foreground cursor-pointer px-1.5 py-0.5 rounded-md hover:bg-secondary"
                          >
                            Close ✕
                          </button>
                        </div>

                        {/* Search Input for Brands */}
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="text"
                            value={brandSearch}
                            onChange={(e) => setBrandSearch(e.target.value)}
                            placeholder="Search (e.g. Vivo, Infinix, Nothing, Tecno, Symphony)..."
                            className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-secondary/80 border border-border/70 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            autoFocus
                          />
                        </div>

                        {/* Brand Chips Grid */}
                        <div className="max-h-52 overflow-y-auto pr-1 grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
                          {filteredBrands.map((brand) => (
                            <button
                              key={brand}
                              type="button"
                              onClick={() => {
                                setSelectedBrand(brand)
                                setIsOtherOpen(false)
                                setBrandSearch("")
                              }}
                              className={`p-2 rounded-xl text-left truncate transition-colors text-[11px] cursor-pointer flex items-center justify-between ${
                                selectedBrand === brand
                                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                                  : "bg-secondary/40 hover:bg-primary/10 text-foreground"
                              }`}
                            >
                              <span className="truncate">{brand}</span>
                              {selectedBrand === brand && (
                                <Check className="w-3 h-3 text-primary-foreground shrink-0 ml-1" />
                              )}
                            </button>
                          ))}

                          {/* Custom Brand If Search has no direct match */}
                          {brandSearch && !filteredBrands.some((b) => b.toLowerCase() === brandSearch.toLowerCase()) && (
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedBrand(brandSearch)
                                setIsOtherOpen(false)
                                setBrandSearch("")
                              }}
                              className="col-span-2 sm:col-span-3 p-2.5 rounded-xl text-left bg-primary/10 border border-primary/30 text-primary font-medium text-[11px] cursor-pointer"
                            >
                              Use custom brand: <strong>"{brandSearch}"</strong>
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2. Issue Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 uppercase tracking-wide">
                    <Cpu className="w-3.5 h-3.5 text-primary" />
                    2. Select Hardware Symptom
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {issueTypes.map((issue) => (
                      <button
                        key={issue.id}
                        type="button"
                        onClick={() => setSelectedIssue(issue)}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          selectedIssue.id === issue.id
                            ? "bg-primary/10 border-primary text-foreground font-semibold shadow-md shadow-primary/10 ring-1 ring-primary/30"
                            : "bg-secondary/40 hover:bg-secondary/70 border-border/70 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {selectedIssue.id === issue.id ? (
                            <div className="w-4 h-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-border/80 shrink-0" />
                          )}
                          <span className="text-xs font-medium text-foreground">{issue.label}</span>
                        </div>
                        <span className="text-[10px] font-semibold text-primary px-2 py-0.5 rounded-full bg-primary/15">
                          {issue.est}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Live Reactive Flight-Board Summary */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-secondary/30 dark:bg-white/[0.02] flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <div>
                      <h3 className="font-bold text-base text-foreground">Live Diagnosis Summary</h3>
                      <p className="text-xs text-muted-foreground">Feni Main Branch · Alia Madrasha Market</p>
                    </div>
                    {/* Amber accent pulse badge */}
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs pt-4">
                    
                    {/* Reactive Animated Brand */}
                    <div className="flex items-center justify-between py-1">
                      <span className="text-muted-foreground">Device Brand:</span>
                      <span className="font-semibold text-foreground px-2 py-0.5 rounded-md bg-background border border-border/60 shadow-xs">
                        {selectedBrand}
                      </span>
                    </div>

                    {/* Reactive Animated Issue */}
                    <div className="flex items-center justify-between py-1">
                      <span className="text-muted-foreground">Component Issue:</span>
                      <span className="font-semibold text-primary text-right">
                        {selectedIssue.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <span className="text-muted-foreground">Initial Inspection:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        100% Free
                      </span>
                    </div>

                    {/* Reactive Animated Est Duration */}
                    <div className="flex items-center justify-between py-1 border-t border-border/50 pt-2.5">
                      <span className="text-muted-foreground">Est. Fix Duration:</span>
                      <span className="font-bold text-primary flex items-center gap-1 text-sm">
                        <Clock className="w-3.5 h-3.5" />
                        {selectedIssue.est}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Confirm Booking Button with High-Conversion CTA */}
                <div className="space-y-3 pt-2">
                  <a
                    href={estimatorWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-primary/25 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2 group">
                      <MessageCircle className="w-4 h-4 text-primary-foreground group-hover:scale-110 transition-transform" />
                      <span>Confirm Booking via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Genuine Parts
                    </span>
                    <span>·</span>
                    <span>Zero Advance Payment</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. FLAGSHIP SPECIALTY PREVIEWS */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-2">
              Microscopic Hardware
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Specialized Laboratory Repairs
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 group"
          >
            <span>View all 11 repair services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 hover:shadow-[0_12px_30px_rgba(2,132,199,0.1)] transition-all">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 shadow-xs">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-2">Micro-Soldering & IC Level</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Repairing damaged motherboards, short circuits, audio ICs, and power anomalies under stereo microscopes.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 hover:shadow-[0_12px_30px_rgba(2,132,199,0.1)] transition-all">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-2">OLED & Glass Lamination</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dust-free chamber refurbishing with factory OCA lamination preserving original 120Hz ProMotion displays.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-primary/40 hover:shadow-[0_12px_30px_rgba(2,132,199,0.1)] transition-all">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 shadow-xs">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-2">Face ID & Biometrics</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Precision dot projector alignment and flex re-soldering to fully restore Apple Face ID functionality.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LAB INVITATION FOOTER BANNER WITH AMBER ACCENT CTA */}
      <section className="pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-primary/20">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Have a device emergency in Feni?</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/90 max-w-md">
              Visit our lab directly at Shop No. 20, Alia Madrasha Market or reach out for immediate assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="tel:+8801571423908"
              className="h-11 px-6 rounded-full bg-white text-slate-900 font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/95 transition-all shadow-xs"
            >
              <span>Call Hotline</span>
            </a>
            <Link
              to="/contact"
              className="h-11 px-6 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 text-primary-foreground font-semibold text-xs flex items-center justify-center border border-white/20 transition-all"
            >
              <span>View Map & Desk</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
