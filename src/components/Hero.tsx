import { useState } from "react"
import { Button } from "./ui/button"
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  Smartphone,
  Star,
  Zap,
  ArrowRight
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
  { id: "screen", label: "Display / Touch", est: "30-45 mins" },
  { id: "dead", label: "Dead / No Power", est: "Same Day" },
  { id: "battery", label: "Battery / Heating", est: "20-30 mins" },
  { id: "faceid", label: "Face ID / Camera", est: "Same Day" },
  { id: "motherboard", label: "Motherboard / IC", est: "Same Day" },
  { id: "water", label: "Water / Network", est: "Same Day" },
]

export default function Hero() {
  const [selectedBrand, setSelectedBrand] = useState(deviceBrands[0].name)
  const [selectedIssue, setSelectedIssue] = useState(issueTypes[0])

  // Dynamic WhatsApp Link with prefilled diagnosis
  const waMessage = encodeURIComponent(
    `Hello AZTEK CARE! I would like to get a repair quote for my ${selectedBrand} with ${selectedIssue.label} issue. Is a technician available today?`
  )
  const waLink = `https://wa.me/8801571423908?text=${waMessage}`

  return (
    <section id="home" className="relative pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16 overflow-hidden min-h-[88vh] flex items-center bg-background">
      {/* Background Image with Dark Gradient & Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_aztek.jpg"
          alt="AZTEK CARE High Tech Lab"
          className="w-full h-full object-cover object-center opacity-25 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/95 to-background" />
      </div>

      {/* Decorative ambient color spots */}
      <div className="absolute top-10 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-primary/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start lg:items-center max-w-7xl mx-auto">
          
          {/* LEFT COLUMN: Powerful Brand Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide shadow-sm max-w-full truncate">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping shrink-0" />
              <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">Premier Mobile & Motherboard Repair Lab in Feni</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1]">
              Problems Today. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
                Fixed Today.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              Professional mobile phone servicing center in Feni. From precision screen and battery replacements to complex <span className="text-foreground font-semibold">motherboard-level micro-soldering, Face ID restoration,</span> and <span className="text-foreground font-semibold">IC repairs</span>.
            </p>

            {/* Core Value Props Checklist */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-2.5 pt-1 max-w-lg">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Same-Day Fast Repairs</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>100% Free Diagnostics</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Motherboard & IC Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Warranty on Eligible Fixes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white text-sm sm:text-base shadow-[0_0_20px_rgba(37,211,102,0.3)] px-5 sm:px-6 py-5 rounded-xl font-bold">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span>WhatsApp (+880 1571-423908)</span>
                </Button>
              </a>
              <a href="tel:+8801571423908" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-primary/50 text-primary hover:bg-primary/10 text-sm sm:text-base px-5 py-5 rounded-xl font-bold">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span>Call Now</span>
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
                className="inline-flex items-center gap-1.5 sm:gap-2 text-xs text-muted-foreground hover:text-primary transition-colors bg-secondary/40 hover:bg-secondary/70 border border-border/60 rounded-lg px-2.5 sm:px-3 py-1.5 max-w-full"
              >
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="truncate">Alia Madrasha Market, Shop No. 20, Mijan Road, Feni</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Elevated Instant Diagnostic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Top Mini Trust Badges */}
            <div className="flex items-center justify-between mb-2 px-1 gap-2">
              <div className="inline-flex items-center gap-1.5 bg-card/90 backdrop-blur-md border border-amber-500/30 rounded-lg px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs shadow-sm">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
                <span className="font-bold text-foreground">4.9 / 5.0</span>
                <span className="text-[10px] text-muted-foreground hidden xs:inline">(350+ Reviews)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-card/90 backdrop-blur-md border border-emerald-500/30 rounded-lg px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs shadow-sm">
                <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Same-Day Fix</span>
              </div>
            </div>

            {/* Interactive Calculator / Booking Card */}
            <div className="relative rounded-2xl bg-card/95 dark:bg-card/85 backdrop-blur-xl border border-primary/30 p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_40px_rgba(33,150,243,0.12)] text-left space-y-3.5 sm:space-y-4">
              {/* Card Header */}
              <div className="border-b border-border/60 pb-2.5 sm:pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-primary font-bold text-[11px] sm:text-xs tracking-wider uppercase">
                    <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Instant Repair Estimator</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Technician Ready
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
                  Get Same-Day Fix Estimate
                </h3>
              </div>

              {/* Step 1: Select Brand */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  <Smartphone className="w-3 h-3 text-primary" />
                  1. Select Device Brand
                </label>
                <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
                  {deviceBrands.map((brand) => (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => setSelectedBrand(brand.name)}
                      className={`text-[11px] sm:text-xs font-medium py-1.5 px-1.5 sm:px-2 rounded-lg border transition-all duration-150 text-center truncate ${
                        selectedBrand === brand.name
                          ? "bg-primary text-primary-foreground border-primary shadow-sm font-bold scale-[1.02]"
                          : "bg-secondary/40 hover:bg-secondary border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      {brand.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Issue */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  <Zap className="w-3 h-3 text-primary" />
                  2. Select Problem / Issue
                </label>
                <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
                  {issueTypes.map((issue) => (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => setSelectedIssue(issue)}
                      className={`text-[11px] sm:text-xs font-medium p-1.5 sm:p-2 rounded-lg border text-left transition-all duration-150 flex flex-col justify-between ${
                        selectedIssue.id === issue.id
                          ? "bg-primary/10 border-primary text-foreground ring-1 ring-primary shadow-sm font-bold"
                          : "bg-secondary/30 hover:bg-secondary/70 border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="truncate text-foreground font-medium">{issue.label}</span>
                      <span className="text-[9px] sm:text-[10px] text-primary mt-0.5 font-bold">⚡ {issue.est}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Diagnosis Summary Box */}
              <div className="rounded-xl bg-muted/40 border border-border/70 p-2.5 sm:p-3 space-y-1 sm:space-y-1.5">
                <div className="flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-muted-foreground">Initial Inspection:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">100% FREE</span>
                </div>
                <div className="flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-muted-foreground">Estimated Turnaround:</span>
                  <span className="font-bold text-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary" />
                    {selectedIssue.est}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] sm:text-xs pt-1 border-t border-border/40">
                  <span className="text-muted-foreground">Selected Device:</span>
                  <span className="font-semibold text-primary truncate max-w-[150px]">{selectedBrand}</span>
                </div>
              </div>

              {/* 1-Click WhatsApp Booking Button */}
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-4 sm:py-5 text-xs sm:text-sm rounded-xl shadow-[0_4px_15px_rgba(37,211,102,0.3)] group transition-all">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span className="truncate">Get Instant Quote on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </Button>
              </a>

              {/* Safety Micro-Note */}
              <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-primary shrink-0" /> Genuine Parts
                </span>
                <span>•</span>
                <span>Zero Advance</span>
                <span>•</span>
                <span>100% Safe</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
