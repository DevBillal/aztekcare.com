import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
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
  CheckCircle2, 
  Sparkles,
  ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"

const deviceBrands = [
  { id: "iphone", name: "Apple iPhone" },
  { id: "samsung", name: "Samsung Galaxy" },
  { id: "xiaomi", name: "Xiaomi / Redmi" },
  { id: "pixel", name: "Google Pixel" },
  { id: "oneplus", name: "OnePlus" },
  { id: "others", name: "Vivo / Oppo / Realme" },
]

const issueTypes = [
  { id: "screen", label: "Display / OLED Screen", est: "30 - 45 Mins" },
  { id: "power", label: "Dead / No Power (Shorting)", est: "2 - 4 Hours" },
  { id: "battery", label: "Battery Health / Drain", est: "20 - 30 Mins" },
  { id: "faceid", label: "Face ID / Front Sensor", est: "1 - 2 Hours" },
  { id: "motherboard", label: "Motherboard IC / CPU Reball", est: "Same Day" },
  { id: "water", label: "Water / Liquid Damage", est: "3 - 5 Hours" },
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
      <section className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 text-center overflow-hidden">
        
        {/* Ambient Volumetric Lighting (Electric Blue Marketing Glow) */}
        <div className="absolute inset-0 ambient-cinematic-glow pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-blue-600/15 dark:bg-blue-500/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[380px] h-[220px] bg-sky-500/10 dark:bg-sky-400/15 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8">
          
          {/* Top Pill Badge (High-contrast Blue marketing pill) */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/40 backdrop-blur-xl border border-blue-200/80 dark:border-blue-800/60 text-[11px] sm:text-xs font-semibold tracking-wide text-blue-950 dark:text-blue-200 shadow-xs select-none"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.8)] animate-pulse" />
            <span>AVAILABLE TODAY</span>
            <span className="opacity-40">·</span>
            <span className="text-blue-700 dark:text-blue-300">FENI SMARTPHONE LAB</span>
          </motion.div>

          {/* Grand Welcoming Headline (Ultra-crisp in Light Mode + Vibrant Marketing Blue) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 select-none"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-[-0.03em] leading-[1.05] uppercase">
              <span className="block text-foreground drop-shadow-sm">
                PROBLEMS TODAY.
              </span>
              <span className="block text-blue-gradient drop-shadow-sm">
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

          {/* Two Signature iOS Capsule CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto"
          >
            {/* Vibrant High-Converting Royal Blue Capsule Button */}
            <a
              href={generalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Instant WhatsApp Quote</span>
              </Button>
            </a>

            {/* Translucent Frosted Capsule Button */}
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 px-7 rounded-full bg-secondary/50 dark:bg-white/[0.04] hover:bg-secondary border-border/80 text-foreground font-medium text-xs sm:text-sm transition-all hover:scale-[1.02]"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-60 text-blue-600 dark:text-blue-400" />
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
                <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 stroke-[3]" /> Same-Day Turnaround
              </span>
              <span className="hidden sm:inline text-border">·</span>
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Motherboard Specialist
              </span>
              <span className="hidden sm:inline text-border">·</span>
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> 100% Data Confidential
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
              <span className="text-blue-600 dark:text-blue-400 text-sm">↓</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* 2. INTERACTIVE DIAGNOSIS & REPAIR TIME ESTIMATOR (Elevated Bento) */}
      <section id="estimator" className="py-20 sm:py-28 relative border-t border-border/60 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-[11px] font-semibold tracking-wider uppercase border border-blue-200/60 dark:border-blue-800/60 mb-3">
              Smart Hardware Estimator
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Select device & issue. <br />
              <span className="font-normal text-blue-600 dark:text-blue-400">Get live fix duration.</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mt-2">
              Choose your device brand and hardware fault below to see our typical turnaround time.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Control Box */}
            <div className="lg:col-span-7 rounded-3xl bg-card border border-border/80 p-6 sm:p-8 shadow-xs text-left space-y-6">
              
              {/* Device Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 uppercase tracking-wide">
                  <Smartphone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
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
                          ? "bg-blue-600 text-white shadow-xs font-semibold"
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
                  <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
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
                          ? "bg-blue-50/80 dark:bg-blue-950/30 border-blue-500 text-foreground font-semibold shadow-xs"
                          : "bg-secondary/40 hover:bg-secondary/70 border-border/70 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="text-xs font-medium text-foreground">{issue.label}</span>
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80">
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
                <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
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
                  <span className="font-semibold text-blue-600 dark:text-blue-400 text-right">{selectedIssue.label}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-muted-foreground">Initial Inspection:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Free</span>
                </div>
                <div className="flex items-center justify-between py-1 border-t border-border/50 pt-2">
                  <span className="text-muted-foreground">Est. Fix Duration:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
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
                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-2xl shadow-md shadow-blue-500/25 flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Confirm Booking via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </a>

              <div className="pt-2 flex items-center justify-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Genuine Parts
                </span>
                <span>·</span>
                <span>Zero Advance Payment</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP SPECIALTY PREVIEWS */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
              Microscopic Hardware
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Specialized Laboratory Repairs
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            View all 11 repair services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-blue-500/40 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-2">Micro-Soldering & IC Level</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Repairing damaged motherboards, short circuits, audio ICs, and power anomalies under stereo microscopes.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-blue-500/40 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-2">OLED & Glass Lamination</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dust-free chamber refurbishing with factory OCA lamination preserving original 120Hz ProMotion displays.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:border-blue-500/40 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground mb-2">Face ID & Biometrics</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Precision dot projector alignment and flex re-soldering to fully restore Apple Face ID functionality.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LAB INVITATION FOOTER BANNER */}
      <section className="pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Have a device emergency in Feni?</h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-md">
              Visit our lab directly at Shop No. 20, Alia Madrasha Market or reach out for immediate assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="tel:+8801571423908"
              className="h-11 px-6 rounded-full bg-white text-blue-900 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-xs"
            >
              <span>Call Hotline</span>
            </a>
            <Link
              to="/contact"
              className="h-11 px-6 rounded-full bg-blue-800/60 hover:bg-blue-800 text-white font-medium text-xs flex items-center justify-center border border-white/20 transition-all"
            >
              <span>View Map & Desk</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
