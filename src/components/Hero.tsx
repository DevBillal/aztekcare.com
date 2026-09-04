import { useState } from "react"
import { Button } from "./ui/button"
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Check, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  Smartphone,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react"
import { motion } from "framer-motion"

const deviceBrands = [
  { id: "iphone", name: "iPhone" },
  { id: "samsung", name: "Samsung" },
  { id: "xiaomi", name: "Xiaomi" },
  { id: "pixel", name: "Pixel" },
  { id: "oneplus", name: "OnePlus" },
  { id: "other", name: "Others" },
]

const issueTypes = [
  { id: "screen", label: "Display / Screen", est: "30-45 mins" },
  { id: "dead", label: "Dead / No Power", est: "Same-Day IC Fix" },
  { id: "battery", label: "Battery Replacement", est: "20-30 mins" },
  { id: "faceid", label: "Face ID / TrueDepth", est: "Same-Day Fix" },
  { id: "motherboard", label: "Motherboard Short", est: "Same-Day Fix" },
  { id: "water", label: "Water Damage / Network", est: "Same-Day Fix" },
]

export default function Hero() {
  const [selectedBrand, setSelectedBrand] = useState(deviceBrands[0].name)
  const [selectedIssue, setSelectedIssue] = useState(issueTypes[0])

  const waMessage = encodeURIComponent(
    `Hello AZTEK CARE! I would like to get a repair estimate for my ${selectedBrand} (${selectedIssue.label}). Are technicians available today?`
  )
  const waLink = `https://wa.me/8801571423908?text=${waMessage}`

  return (
    <section id="home" className="relative pt-28 pb-14 sm:pt-32 sm:pb-18 lg:pt-36 lg:pb-24 overflow-hidden bg-background">
      
      {/* Visual Anchor: Precision Circuit Board & Motherboard Schematic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Ambient Radial Tech Mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-primary/10 dark:bg-primary/15 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[420px] h-[320px] bg-amber-500/5 dark:bg-amber-500/10 blur-[110px] rounded-full" />

        {/* Animated Motherboard Circuit Graphic (Visible on tablet & desktop) */}
        <svg 
          className="hidden sm:block absolute top-12 left-1/2 -translate-x-1/2 w-[1280px] h-[720px] opacity-[0.22] dark:opacity-[0.32]"
          viewBox="0 0 1280 720"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Smartphone Chassis Wireframe */}
          <rect x="520" y="40" width="340" height="640" rx="44" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
          <rect x="540" y="60" width="300" height="600" rx="32" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-foreground/20" />
          <path d="M640 50 H740" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/60" />

          {/* Central CPU / SoC Microchip */}
          <rect x="620" y="240" width="140" height="140" rx="16" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="2" />
          <rect x="635" y="255" width="110" height="110" rx="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-amber-500/50" />
          <text x="690" y="315" textAnchor="middle" fill="currentColor" className="text-primary font-mono text-[10px] font-bold tracking-widest uppercase">
            BGA REBALL LAB
          </text>

          {/* Circuit Traces Radiating from Chip */}
          <g stroke="currentColor" strokeWidth="1.5" className="text-primary/50">
            {/* Left Traces */}
            <path d="M620 270 H480 L440 230 H260" strokeDasharray="6 4" />
            <path d="M620 310 H450 L400 360 H220" />
            <path d="M620 350 H470 L420 410 H280" strokeDasharray="8 6" />

            {/* Right Traces */}
            <path d="M760 270 H900 L950 220 H1120" />
            <path d="M760 310 H920 L970 360 H1140" strokeDasharray="6 4" />
            <path d="M760 350 H890 L940 420 H1080" />

            {/* Top / Bottom Traces */}
            <path d="M660 240 V160 L620 120 V80" />
            <path d="M720 240 V170 L760 130 V80" strokeDasharray="4 4" />
            <path d="M660 380 V480 L620 520 V620" />
            <path d="M720 380 V470 L780 530 V620" strokeDasharray="6 4" />
          </g>

          {/* Glowing IC Node Pulse Dots */}
          <circle cx="260" cy="230" r="4" fill="currentColor" className="text-primary animate-ping" style={{ animationDuration: "3s" }} />
          <circle cx="260" cy="230" r="3" fill="currentColor" className="text-primary" />
          
          <circle cx="1120" cy="220" r="4" fill="currentColor" className="text-amber-500 animate-ping" style={{ animationDuration: "2.5s" }} />
          <circle cx="1120" cy="220" r="3" fill="currentColor" className="text-amber-500" />

          <circle cx="400" cy="360" r="3" fill="currentColor" className="text-primary" />
          <circle cx="970" cy="360" r="3" fill="currentColor" className="text-primary" />
          <circle cx="780" cy="530" r="3" fill="currentColor" className="text-amber-500" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Confident Headline & Repair-Tech Identity */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Minimal Pill Badge with Electric Primary Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/25 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span>Professional Smartphone & IC Repair Lab · Feni</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-extrabold tracking-tight leading-[1.05] text-foreground">
                Problems Today. <br />
                <span className="text-blue-gradient font-light">Fixed Today.</span>
              </h1>
            </div>

            {/* Crisp Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-normal">
              Specialized mobile phone repair center in Feni. We handle precision screen replacements, battery servicing, and advanced <span className="text-foreground font-semibold">motherboard-level micro-soldering, Face ID restoration,</span> and <span className="text-foreground font-semibold">IC programming</span>.
            </p>

            {/* Value Points with New Primary Checks */}
            <div className="grid grid-cols-2 gap-3 pt-1 max-w-lg text-xs sm:text-sm text-foreground/90 font-medium">
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 border border-primary/25">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Same-Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 border border-primary/25">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>100% Free Diagnosis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 border border-primary/25">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Motherboard Specialist</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 border border-primary/25">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Genuine Grade Parts</span>
              </div>
            </div>

            {/* Action Buttons: Primary WhatsApp + Amber CTA accent */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-7 py-5 rounded-full text-sm shadow-[0_4px_18px_rgba(2,132,199,0.35)] transition-all hover:scale-[1.02] active:scale-98">
                  <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
                  <span>WhatsApp (+880 1571-423908)</span>
                </Button>
              </a>
              <a href="tel:+8801571423908" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-border hover:bg-secondary text-foreground font-semibold px-5 py-5 rounded-full text-sm">
                  <Phone className="w-4 h-4 mr-2 opacity-70 shrink-0 text-primary" />
                  <span>Call Store</span>
                </Button>
              </a>
            </div>

            {/* Location Pill */}
            <div className="pt-1">
              <a 
                href="#location"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Alia Madrasha Market, Shop No. 20, Mijan Road, Feni</span>
                <ArrowRight className="w-3 h-3 opacity-50 text-primary" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: High-Conversion Instant Repair Estimator Card with New Palette Border & Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="rounded-2xl bg-card border border-border dark:border-primary/25 p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.06),0_12px_32px_rgba(2,132,199,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_24px_rgba(14,165,233,0.08)] text-left space-y-4 relative">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div>
                  <h3 className="text-base font-bold text-foreground flex items-center gap-1.5">
                    <span>Instant Repair Estimator</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  </h3>
                  <p className="text-xs text-muted-foreground">Select device & issue for turnaround time</p>
                </div>
                {/* Amber Ready In Feni Badge */}
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                  Ready in Feni
                </span>
              </div>

              {/* Step 1: Segmented Brand Control */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold tracking-tight text-muted-foreground flex items-center gap-1">
                  <Smartphone className="w-3 h-3 text-primary" />
                  Select Brand
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-secondary rounded-xl border border-border/60">
                  {deviceBrands.map((brand) => (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => setSelectedBrand(brand.name)}
                      className={`text-xs font-medium py-1.5 px-2 rounded-lg transition-all text-center truncate cursor-pointer ${
                        selectedBrand === brand.name
                          ? "bg-background text-foreground shadow-sm font-semibold border border-primary/25"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                      }`}
                    >
                      {brand.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Issue Type Grid */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold tracking-tight text-muted-foreground flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-primary" />
                  Select Issue
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {issueTypes.map((issue) => (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => setSelectedIssue(issue)}
                      className={`text-xs p-2 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                        selectedIssue.id === issue.id
                          ? "bg-primary/10 border-primary text-foreground font-semibold shadow-xs"
                          : "bg-secondary/40 hover:bg-secondary/80 border-border/70 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="truncate text-foreground font-medium text-xs">{issue.label}</span>
                      <span className="text-[10px] text-primary mt-1 font-semibold">{issue.est}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Pill Box */}
              <div className="rounded-xl bg-secondary/60 border border-border/60 p-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Diagnosis & Inspection:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Free</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Estimated Turnaround:</span>
                  <span className="font-semibold text-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary" />
                    {selectedIssue.est}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-border/40">
                  <span className="text-muted-foreground">Device Selected:</span>
                  <span className="font-medium text-foreground truncate">{selectedBrand}</span>
                </div>
              </div>

              {/* Action Button in New Electric Primary */}
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-98">
                  <span>Get Live Quote on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </a>

              {/* Trust Line */}
              <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-primary" /> Genuine Parts
                </span>
                <span>·</span>
                <span>Zero Advance</span>
                <span>·</span>
                <span>100% Data Safe</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
