import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { motion } from "framer-motion"
import { 
  Smartphone, 
  Cpu, 
  Battery, 
  MonitorSmartphone, 
  CircuitBoard, 
  Microchip, 
  HardDrive, 
  Settings, 
  Unlock, 
  Zap, 
  Wifi, 
  Camera, 
  Volume2, 
  PowerOff, 
  Droplets, 
  Bug, 
  PlusCircle,
  ScanFace
} from "lucide-react"

const services = [
  {
    title: "Android Repair",
    description: "Hardware and software repair for Android smartphones.",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
  },
  {
    title: "iPhone Repair",
    description: "Professional iPhone hardware and software servicing.",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
  },
  {
    title: "Face ID Repair",
    description: "Advanced Face ID diagnostics and repair.",
    icon: <ScanFace className="h-6 w-6 text-primary" />,
  },
  {
    title: "Battery Replacement",
    description: "Android and iPhone battery replacement.",
    icon: <Battery className="h-6 w-6 text-primary" />,
  },
  {
    title: "Display Replacement",
    description: "Including flagship-level devices.",
    icon: <MonitorSmartphone className="h-6 w-6 text-primary" />,
  },
  {
    title: "Motherboard Repair",
    description: "Advanced motherboard-level troubleshooting and repair.",
    icon: <CircuitBoard className="h-6 w-6 text-primary" />,
  },
  {
    title: "IC-Level Repair",
    description: "Microsoldering and IC-level repair services.",
    icon: <Microchip className="h-6 w-6 text-primary" />,
  },
  {
    title: "eMMC Programming",
    description: "eMMC programming, servicing, related software solutions.",
    icon: <HardDrive className="h-6 w-6 text-primary" />,
  },
  {
    title: "Flashing & Software",
    description: "Firmware flashing and system repair.",
    icon: <Settings className="h-6 w-6 text-primary" />,
  },
  {
    title: "Bootloader Unlock",
    description: "Where supported on specific devices.",
    icon: <Unlock className="h-6 w-6 text-primary" />,
  },
  {
    title: "Charging Problem",
    description: "Charging port and related troubleshooting.",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    title: "Network Repair",
    description: "Diagnosis and repair of network/signal hardware issues.",
    icon: <Wifi className="h-6 w-6 text-primary" />,
  },
  {
    title: "Camera Repair",
    description: "Hardware troubleshooting and replacement.",
    icon: <Camera className="h-6 w-6 text-primary" />,
  },
  {
    title: "Speaker & Mic",
    description: "Audio-related repairs and replacements.",
    icon: <Volume2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Dead Phone Repair",
    description: "For phones that don't power on.",
    icon: <PowerOff className="h-6 w-6 text-primary" />,
  },
  {
    title: "Water Damage",
    description: "Inspection and repair assessment.",
    icon: <Droplets className="h-6 w-6 text-primary" />,
  },
  {
    title: "Software Issues",
    description: "Boot loops, crashes, system errors.",
    icon: <Bug className="h-6 w-6 text-primary" />,
  },
  {
    title: "And More...",
    description: "Additional in-store professional services.",
    icon: <PlusCircle className="h-6 w-6 text-primary" />,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Professional <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive mobile repair solutions using advanced equipment and original quality parts.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(33,150,243,0.15)] overflow-hidden group">
                <CardHeader className="pb-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-150" />
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
