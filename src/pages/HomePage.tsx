import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  MessageCircle, 
  ArrowRight, 
  ChevronDown, 
  Cpu, 
  Smartphone, 
  ScanFace, 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"

const deviceBrands = [
  { id: "iphone", name: "iPhone" },
  { id: "samsung", name: "Samsung" },
  { id: "xiaomi", name: "Xiaomi" },
  { id: "pixel", name: "Pixel" },
  { id: "oneplus", name: "OnePlus" },
  { id: "other", name: "Others" },
]

const issueTypes = [
  { id: "screen", label: "Display / OLED Screen", est: "30-45 mins" },
  { id: "dead", label: "Dead / No Power (IC Short)", est: "Same-Day Fix" },
  { id: "battery", label: "Battery Replacement", est: "20-30 mins" },
  { id: "faceid", label: "Face ID / TrueDepth", est: "Same-Day Fix" },
  { id: "motherboard", label: "Motherboard Micro-Soldering", est: "Same-Day Fix" },
  { id: "water", label: "Water Damage Recovery", est: "Same-Day Fix" },
]

export default function HomePage() {
  const [selectedBrand, setSelectedBrand] = useState(deviceBrands[0].name)
  const [selectedIssue, setSelectedIssue] = useState(issueTypes[0])

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
      
      {/* 1. CINEMATIC WELCOMING HERO SECTION (Matching Reference Screenshot Atmosphere) */}
      <section className="relative min-h-[92vh] sm:min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 text-center overflow-hidden">
        
        {/* Ambient Volumetric Lighting (Soft Indigo/Cyan Spotlight) */}
        <div className="absolute inset-0 ambient-cinematic-glow pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[200px] bg-sky-500/10 dark:bg-sky-400/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8">
          
          {/* Top Pill Badge (Like '• AVAILABLE FOR HIRE' in screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 dark:bg-white/[0.06] backdrop-blur-xl border border-border/80 text-[11px] sm:text-xs font-medium tracking-wide text-foreground shadow-xs select-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
            <span className="text-muted-foreground">AVAILABLE TODAY</span>
            <span className="text-foreground/40">·</span>
            <span className="font-semibold text-foreground">FENI SMARTPHONE LAB</span>
          </motion.div>

          {/* Grand Welcoming Headline (Like 'CINEMATIC EDITOR' in screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 select-none"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-[-0.03em] leading-[1.05] uppercase">
              <span className="block text-metallic-cinematic drop-shadow-sm">
                PROBLEMS TODAY.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50">
                FIXED TODAY.
              </span>
            </h1>
          </motion.div>

          {/* Welcoming Narrative Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground font-normal leading-relaxed px-2"
          >
            Turning broken displays, shorted circuits, and dead smartphones into precision engineering — with microscopic mastery, genuine parts, and same-day care.
          </motion.p>

          {/* Two Signature iOS Capsule CTAs (Matching Screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto"
          >
            {/* Luminous Solid Capsule Button (like 'View Work' in screenshot) */}
            <a
              href={generalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto h-12 px-7 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>Instant WhatsApp Quote</span>
              </Button>
            </a>

            {/* Translucent Frosted Capsule Button (like 'Contact Me' in screenshot) */}
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 px-7 rounded-full bg-secondary/50 dark:bg-white/[0.04] hover:bg-secondary border-border/80 text-foreground font-medium text-xs sm:text-sm transition-all hover:scale-[1.02]"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-60" />
              </Button>
            </Link>
          </motion.div>

          {/* iOS 26 Dynamic Island Live Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2.5 rounded-full liquid-glass text-xs text-muted-foreground select-none">
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" /> Same-Day Turnaround
              </span>
              <span className="hidden sm:inline text-border">·</span>
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <Cpu className="w-3.5 h-3.5 text-primary" /> Motherboard Specialist
              </span>
              <span className="hidden sm:inline text-border">·</span>
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> 100% Data Confidential
              </span>
            </div>
          </motion.div>

          {/* Scroll Down Indicator (Matching Screenshot 'SCROLL ↓') */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="pt-6 select-none"
          >
            <a
              href="#estimator"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#estimator")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer"
            >
              <span>SCROLL</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.div>
            </a>
          </motion.div>

        </div>
      </section>

      {/* 2. INTERACTIVE DIAGNOSIS & REPAIR TIME ESTIMATOR (Elevated Bento) */}
      <section id="estimator" className="py-20 sm:py-28 relative border-t border-border/60 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              Smart Hardware Estimator
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Select device & issue. <br />
              <span className="font-normal text-muted-foreground">Get live fix duration.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Control Box */}
            <div className="lg:col-span-7 rounded-3xl bg-card border border-border/80 p-6 sm:p-8 shadow-xs text-left space-y-6">
              
              {/* Device Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 uppercase tracking-wide">
                  <Smartphone className="w-3.5 h-3.5 text-primary" />
                  1. Choose Your Brand
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-1 bg-secondary rounded-2xl border border-border/60">
                  {deviceBrands.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBrand(b.name)}
                      className={`py-2 px-2 text-xs font-medium rounded-xl transition-all text-center truncate cursor-pointer ${
                        selectedBrand === b.name
                          ? "bg-background text-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Issue Selector */}
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
                          ? "bg-primary/5 border-primary text-foreground font-semibold shadow-xs"
                          : "bg-secondary/40 hover:bg-secondary/70 border-border/70 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="text-xs font-medium text-foreground">{issue.label}</span>
                      <span className="text-[10px] font-semibold text-primary px-2 py-0.5 rounded-full bg-primary/10">
                        {issue.est}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Live Quote Summary Card */}
            <div className="lg:col-span-5 rounded-3xl bg-card border border-border/80 p-6 sm:p-8 shadow-xs text-left space-y-5">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <h3 className="font-bold text-base text-foreground">Live Diagnosis Summary</h3>
                  <p className="text-xs text-muted-foreground">Feni Main Branch · Alia Madrasha Market</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1">
                  <span className="text-muted-foreground">Device Brand:</span>
                  <span className="font-semibold text-foreground">{selectedBrand}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-muted-foreground">Component Issue:</span>
                  <span className="font-semibold text-foreground text-right">{selectedIssue.label}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-muted-foreground">Initial Inspection:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Free</span>
                </div>
                <div className="flex items-center justify-between py-1 border-t border-border/50 pt-2">
                  <span className="text-muted-foreground">Est. Fix Duration:</span>
                  <span className="font-bold text-primary flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedIssue.est}
                  </span>
                </div>
              </div>

              <a
                href={estimatorWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block pt-2"
              >
                <Button className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold text-xs sm:text-sm rounded-2xl shadow-xs">
                  <span>Confirm Booking via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </a>

              <div className="pt-2 flex items-center justify-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Genuine Parts
                </span>
                <span>·</span>
                <span>Zero Advance Payment</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FLAGSHIP SERVICES PREVIEW (Bento Teaser linking to /services) */}
      <section className="py-20 sm:py-28 relative border-t border-border/60 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 text-left">
            <div>
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                Core Lab Specialties
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Engineered Capabilities.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center text-xs font-semibold text-primary hover:underline gap-1">
              <span>View full service catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Card 1 */}
            <div className="rounded-3xl bg-card border border-border/80 p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/30 transition-all shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-5">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Motherboard Micro-Soldering
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Power IC shorts, charging IC replacements, audio IC restoration, and multi-layer PCB traces repaired under stereomicroscope.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-border/50 flex items-center justify-between text-xs font-medium text-primary">
                <span>IC-level diagnostics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-card border border-border/80 p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/30 transition-all shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-5">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  OLED & 120Hz Screen Calibration
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Original grade OLED/AMOLED displays with TrueTone data transfer and 120Hz touch sampling restored on the same day.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-border/50 flex items-center justify-between text-xs font-medium text-primary">
                <span>30-45 mins turnaround</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-card border border-border/80 p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/30 transition-all shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-5">
                  <ScanFace className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Face ID & Biometrics Recovery
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Infrared sensor and TrueDepth dot projector micro-soldering without losing your original Apple biometric encryption.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-border/50 flex items-center justify-between text-xs font-medium text-primary">
                <span>Zero security loss</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
