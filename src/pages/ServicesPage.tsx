import { motion } from "framer-motion"
import { 
  Cpu, 
  Smartphone, 
  BatteryCharging, 
  Droplets, 
  Wifi, 
  Volume2, 
  Zap, 
  Camera, 
  ScanFace, 
  Lock, 
  Layers,
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"

const flagshipServices = [
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Motherboard & IC Micro-Soldering",
    description: "Component-level micro-soldering under high-magnification stereomicroscope. Restoring shorted power ICs, charging ICs, audio ICs, and baseband issues.",
    tag: "Core Specialty",
    turnaround: "Same-Day Fix"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Screen & OLED Replacement",
    description: "Original OEM and Grade-A OLED/LCD replacement with 120Hz refresh rate, TrueTone programming transfer, and precision touch calibration.",
    tag: "Fast Turnaround",
    turnaround: "30-45 mins"
  },
  {
    icon: <ScanFace className="w-6 h-6 text-primary" />,
    title: "Face ID & TrueDepth Repair",
    description: "Micro-soldering repair for iPhone Face ID dot projectors and infrared sensors without losing original biometric encryption security.",
    tag: "iPhone Lab",
    turnaround: "Same-Day Fix"
  }
]

const standardServices = [
  {
    icon: <BatteryCharging className="w-5 h-5 text-foreground" />,
    title: "Battery Health Replacement",
    description: "100% genuine grade cell replacement with zero risk of swelling and restored battery health reporting.",
    turnaround: "20-30 mins"
  },
  {
    icon: <Droplets className="w-5 h-5 text-foreground" />,
    title: "Water Damage Ultrasonic Cleaning",
    description: "Multi-stage PCB corrosion removal, thermal short diagnosis, and moisture dehydration protocol.",
    turnaround: "Same-Day"
  },
  {
    icon: <Layers className="w-5 h-5 text-foreground" />,
    title: "CPU Reballing & eMMC Data Recovery",
    description: "Restoring dead bootlooping smartphones while keeping 100% of personal photos and chat data safe.",
    turnaround: "2-4 Hours"
  },
  {
    icon: <Camera className="w-5 h-5 text-foreground" />,
    title: "Camera & Optical Stabilization Fix",
    description: "Resolving shaking cameras, autofocus failures, cracked sapphire lenses, and sensor jitter.",
    turnaround: "45 mins"
  },
  {
    icon: <Wifi className="w-5 h-5 text-foreground" />,
    title: "Network, 5G & Baseband IC",
    description: "Fixing 'Searching for Service', 'No SIM Detected', and disabled Wi-Fi/Bluetooth on iPhone and Android.",
    turnaround: "Same-Day"
  },
  {
    icon: <Zap className="w-5 h-5 text-foreground" />,
    title: "Charging Port & Flex Cable Repair",
    description: "Fast-charging restoration, loose Type-C/Lightning socket replacement, and charging thermal fixes.",
    turnaround: "30 mins"
  },
  {
    icon: <Volume2 className="w-5 h-5 text-foreground" />,
    title: "Speaker, Mic & Audio IC",
    description: "Fixing muffled earpieces, silent loudspeakers, mic cutting out, and greyed-out voice memo buttons.",
    turnaround: "30-45 mins"
  },
  {
    icon: <Lock className="w-5 h-5 text-foreground" />,
    title: "Firmware Flashing & OS Recovery",
    description: "Unbricking bootlooped phones, official stock firmware flashing, and bootloader error remediation.",
    turnaround: "45 mins"
  },
]

export default function ServicesPage() {
  return (
    <div className="w-full pt-28 pb-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold border border-border">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Full Hardware Catalog · AZTEK CARE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground">
            Precision Servicing. <br />
            <span className="font-normal text-muted-foreground">Every Component Mastered.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We provide transparent component-level repairs in Feni for Apple iPhone, Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, and all major Android flagships.
          </p>
        </div>

        {/* Flagship Bento Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
          {flagshipServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl bg-card border border-border/80 p-7 flex flex-col justify-between hover:border-foreground/30 transition-all shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {service.turnaround}
                </span>
                <span>Inquire Now ↗</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standard Services 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-16">
          {standardServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="rounded-2xl bg-card/60 border border-border/70 p-5 hover:bg-card hover:border-foreground/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.icon}
                </div>
                <h4 className="font-bold text-sm text-foreground mb-1.5">
                  {service.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <div className="text-[11px] font-medium text-muted-foreground pt-3 border-t border-border/40 flex items-center gap-1">
                <Clock className="w-3 h-3 text-primary" />
                <span>{service.turnaround}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Callout Banner */}
        <div className="rounded-3xl bg-secondary/60 border border-border/80 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Don't see your specific device issue listed?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Our microscopic diagnostics lab handles complex motherboard anomalies and rare hardware faults every day. Send us a message for a free diagnosis.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button className="h-12 px-7 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold text-xs sm:text-sm shadow-xs flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>Ask a Senior Technician on WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
