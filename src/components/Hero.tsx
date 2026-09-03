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
  Sparkles
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
    <section id="home" className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Apple-style Confident Headline & Values */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Minimal Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Professional Smartphone & IC Repair Lab · Feni</span>
            </div>

            {/* Apple Editorial Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.05] text-foreground">
                Problems Today. <br />
                <span className="text-foreground/90 font-light">Fixed Today.</span>
              </h1>
            </div>

            {/* Crisp Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-normal">
              Specialized mobile phone repair center in Feni. We handle precision screen replacements, battery servicing, and advanced <span className="text-foreground font-medium">motherboard-level micro-soldering, Face ID restoration,</span> and <span className="text-foreground font-medium">IC programming</span>.
            </p>

            {/* Minimal Value Points */}
            <div className="grid grid-cols-2 gap-3 pt-1 max-w-lg text-xs sm:text-sm text-foreground/85 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Same-Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>100% Free Diagnosis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Motherboard Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Genuine Grade Parts</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-full text-sm shadow-sm transition-all hover:scale-[1.02]">
                  <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
                  <span>WhatsApp (+880 1571-423908)</span>
                </Button>
              </a>
              <a href="tel:+8801571423908" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-border hover:bg-secondary text-foreground font-medium px-5 py-5 rounded-full text-sm">
                  <Phone className="w-4 h-4 mr-2 opacity-70 shrink-0" />
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
                <ArrowRight className="w-3 h-3 opacity-50" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Apple-style Minimal Interactive Diagnosis Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="rounded-2xl bg-card border border-border/80 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] text-left space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div>
                  <h3 className="text-base font-bold text-foreground">Instant Repair Estimator</h3>
                  <p className="text-xs text-muted-foreground">Select device & issue for estimated time</p>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Ready in Feni
                </span>
              </div>

              {/* Step 1: iOS-style Segmented Brand Control */}
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
                      className={`text-xs font-medium py-1.5 px-2 rounded-lg transition-all text-center truncate ${
                        selectedBrand === brand.name
                          ? "bg-background text-foreground shadow-sm font-semibold"
                          : "text-muted-foreground hover:text-foreground"
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
                      className={`text-xs p-2 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        selectedIssue.id === issue.id
                          ? "bg-primary/5 border-primary text-foreground font-semibold shadow-xs"
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

              {/* Action Button */}
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-5 text-xs sm:text-sm rounded-xl transition-all shadow-sm">
                  <span>Get Live Quote on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </a>

              {/* Minimal Trust Line */}
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
