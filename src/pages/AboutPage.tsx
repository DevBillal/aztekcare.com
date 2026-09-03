import { motion } from "framer-motion"
import { Cpu, ShieldCheck, Microscope, Award, CheckCircle2, ArrowRight } from "lucide-react"

const pillars = [
  {
    num: "01",
    title: "Certified Hardware Engineers",
    description: "Trained specialists in multi-layer PCB circuit tracing, thermal imaging, and BGA reballing under microscope."
  },
  {
    num: "02",
    title: "Stereomicroscope Workstations",
    description: "Industrial-grade optical microscopes and micro hot-air stations for pin-point soldering on chips smaller than 1mm."
  },
  {
    num: "03",
    title: "Genuine Quality Grade Parts",
    description: "Original OEM and Grade-A replacement OLEDs, batteries, and genuine PMICs with zero fake counterfeit components."
  },
  {
    num: "04",
    title: "Transparent Fixed Pricing",
    description: "Free diagnosis and fixed upfront quotes before work begins. No hidden costs or surprise fees."
  },
  {
    num: "05",
    title: "Same-Day Turnaround",
    description: "Over 90% of screen replacements, battery repairs, and minor circuit issues fixed in under 2 hours."
  },
  {
    num: "06",
    title: "100% Data Confidentiality",
    description: "Strict privacy safeguards ensuring your personal photos, chats, and banking apps remain completely untouched."
  }
]

const steps = [
  {
    step: "01",
    title: "Microscopic Diagnosis",
    description: "Visual inspection under microscope and multimeter voltage check to locate the root cause."
  },
  {
    step: "02",
    title: "Upfront Cost & Timeline",
    description: "Clear explanation of the fault, required parts, exact price, and completion time."
  },
  {
    step: "03",
    title: "Precision Hardware Repair",
    description: "Controlled temperature micro-soldering and genuine component installation in our clean lab."
  },
  {
    step: "04",
    title: "Comprehensive Testing",
    description: "Full touchscreen, biometric, sensor, and battery charging validation before handover."
  },
]

export default function AboutPage() {
  return (
    <div className="w-full pt-28 pb-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Editorial Section Header & Story */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden border border-border/80 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=1200" 
                alt="AZTEK CARE Smartphone & Motherboard Lab in Feni" 
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-card border border-border/80 rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">IC Micro-Soldering</div>
                <div className="text-[10px] text-muted-foreground">Certified Motherboard Facility</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold border border-border">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>About AZTEK CARE · Feni</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Engineered for precision. <br />
              <span className="font-normal text-muted-foreground">Trusted across Feni.</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At <strong className="text-foreground font-semibold">AZTEK CARE</strong>, we believe modern smartphones should never be declared "unrepairable" without a microscopic diagnosis. Located on Mijan Road, Feni, our facility was created to deliver enterprise-grade component repair directly to consumers.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Where typical mobile shops recommend expensive full-motherboard replacements, we use thermal imaging, multi-layer schematics, and micro-soldering stations to replace only the damaged microchip — saving you significant expense while restoring your device to factory condition.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-border/60">
              <div>
                <h4 className="font-extrabold text-2xl sm:text-3xl text-foreground">Same-Day</h4>
                <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">Average Fix Time</p>
              </div>
              <div>
                <h4 className="font-extrabold text-2xl sm:text-3xl text-foreground">100%</h4>
                <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">Data Privacy Guarantee</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* The 6 Engineering Standards */}
        <div className="space-y-12">
          <div className="max-w-2xl text-left">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              Our Core Standards
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Why customers choose AZTEK CARE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="rounded-3xl bg-card border border-border/80 p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/30 transition-all shadow-xs"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-muted-foreground/60 tracking-wider block mb-4">
                    {pillar.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Repair Workflow */}
        <div className="space-y-12">
          <div className="max-w-2xl text-left">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              The Protocol
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Simple. Transparent. Reliable.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {steps.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-card border border-border/80 p-6 flex flex-col justify-between shadow-xs hover:border-foreground/30 transition-all"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-primary tracking-wider block mb-4">
                    Step {item.step}
                  </span>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
