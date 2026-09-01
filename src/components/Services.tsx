import { motion } from "framer-motion"
import { 
  Cpu, 
  Smartphone, 
  BatteryCharging, 
  Droplets, 
  Wifi, 
  Volume2, 
  RotateCcw, 
  Zap, 
  ShieldCheck, 
  Camera, 
  ScanFace, 
  Lock, 
  Layers,
  ArrowUpRight
} from "lucide-react"

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  tag?: string
}

const flagshipServices: ServiceItem[] = [
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Motherboard & IC Micro-Soldering",
    description: "Component-level diagnostics and micro-soldering under microscope. Repairing shorted power ICs, charging ICs, audio ICs, and baseband issues.",
    tag: "Core Specialty"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Screen & OLED Replacement",
    description: "Original and premium OLED/LCD replacement with 120Hz refresh rate, TrueTone transfer, and touch calibration across iPhone and flagship Android devices.",
    tag: "Same-Day Fix"
  },
  {
    icon: <ScanFace className="w-6 h-6 text-primary" />,
    title: "Face ID & TrueDepth Repair",
    description: "Micro-soldering repair for iPhone Face ID dot projectors and infrared sensors without losing original biometric security.",
    tag: "iPhone Lab"
  }
]

const standardServices: ServiceItem[] = [
  {
    icon: <BatteryCharging className="w-5 h-5 text-foreground" />,
    title: "Battery Health Replacement",
    description: "Safe 100% battery capacity replacement with genuine grade cells."
  },
  {
    icon: <Droplets className="w-5 h-5 text-foreground" />,
    title: "Water Damage Ultrasonic Cleaning",
    description: "Corrosion removal, thermal diagnosis, and PCB moisture treatment."
  },
  {
    icon: <Layers className="w-5 h-5 text-foreground" />,
    title: "CPU Reballing & eMMC Data Fix",
    description: "Restoring dead boot smartphones while keeping 100% user data safe."
  },
  {
    icon: <Camera className="w-5 h-5 text-foreground" />,
    title: "Camera & Optical Stabilization",
    description: "Fixing shaking cameras, lens damage, and sensor focus errors."
  },
  {
    icon: <Wifi className="w-5 h-5 text-foreground" />,
    title: "Network & Baseband IC Repair",
    description: "Fixing searching for service, no SIM detected, and Wi-Fi grayed out."
  },
  {
    icon: <Zap className="w-5 h-5 text-foreground" />,
    title: "Charging Port & Flex Cable",
    description: "Fast-charging restoration, Type-C and Lightning port replacement."
  },
  {
    icon: <Volume2 className="w-5 h-5 text-foreground" />,
    title: "Speaker, Mic & Audio IC",
    description: "Crystal clear call audio restoration and earpiece replacement."
  },
  {
    icon: <Lock className="w-5 h-5 text-foreground" />,
    title: "Firmware Flashing & OS Recovery",
    description: "Unbricking bootlooped phones, official stock ROM restoration."
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary/30 relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            Engineered Capabilities
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Precision Servicing. <br />
            <span className="font-normal text-muted-foreground">Every Major Brand.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
            From everyday screen and battery swaps to complex microscopic micro-soldering, our certified technicians provide transparent same-day solutions.
          </p>
        </div>

        {/* Flagship Bento Cards (Top Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {flagshipServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-card border border-border/80 p-6 flex flex-col justify-between hover:border-foreground/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)] group text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                    {service.icon}
                  </div>
                  {service.tag && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {service.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Same-day diagnosis</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standard Clean Grid (Bottom Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {standardServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-xl bg-card/60 border border-border/70 p-4 sm:p-5 hover:bg-card hover:border-foreground/20 transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.icon}
              </div>
              <h4 className="font-bold text-sm text-foreground mb-1">
                {service.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
