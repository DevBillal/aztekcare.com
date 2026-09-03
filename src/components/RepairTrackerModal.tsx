import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  Wrench, 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Gamepad2, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from "lucide-react"

interface RepairTrackerModalProps {
  isOpen: boolean
  onClose: () => void
}

interface DemoTicket {
  id: string
  device: string
  issue: string
  status: string
  progress: number
  technician: string
  estimatedTime: string
  steps: { label: string; done: boolean; current?: boolean }[]
}

const DEMO_TICKETS: Record<string, DemoTicket> = {
  "AZ-8924": {
    id: "AZ-8924",
    device: "MacBook Pro 16\" M1 Max (Space Gray)",
    issue: "Liquid Spill & Logic Board Component Repair",
    status: "Testing & Diagnostic",
    progress: 75,
    technician: "Engr. Tanvir Ahmed (Senior Apple Tech)",
    estimatedTime: "Today, 5:30 PM",
    steps: [
      { label: "Device Checked In & 40-Point Inspection", done: true },
      { label: "Component Level Micro-soldering & Ultrasonic Clean", done: true },
      { label: "Thermal & System Stress Diagnostics", done: false, current: true },
      { label: "Final Quality Seal & Ready for Delivery", done: false },
    ]
  },
  "AZ-7102": {
    id: "AZ-7102",
    device: "iPhone 15 Pro Max (Titanium Blue)",
    issue: "OLED Panel Replacement & TrueTone Serialization",
    status: "Ready for Pickup",
    progress: 100,
    technician: "Engr. Rayhan Kabir (Display Specialist)",
    estimatedTime: "Ready Now",
    steps: [
      { label: "Device Checked In & Diagnostic Scan", done: true },
      { label: "Original OLED Display Installation", done: true },
      { label: "TrueTone & FaceID Calibration", done: true },
      { label: "Quality Passed & Packaged with 90-Day Warranty", done: true },
    ]
  }
}

export default function RepairTrackerModal({ isOpen, onClose }: RepairTrackerModalProps) {
  const [activeTab, setActiveTab] = useState<"track" | "book">("track")
  const [ticketInput, setTicketInput] = useState("AZ-8924")
  const [activeTicket, setActiveTicket] = useState<DemoTicket | null>(DEMO_TICKETS["AZ-8924"])
  const [hasSearched, setHasSearched] = useState(true)

  // Booking Form State
  const [selectedDevice, setSelectedDevice] = useState("iPhone")
  const [selectedIssue, setSelectedIssue] = useState("Broken Screen / Glass")
  const [serviceType, setServiceType] = useState("Lab Drop-off")

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const query = ticketInput.trim().toUpperCase()
    if (DEMO_TICKETS[query]) {
      setActiveTicket(DEMO_TICKETS[query])
    } else {
      // Generate a dynamic realistic active ticket for user query
      setActiveTicket({
        id: query || "AZ-5520",
        device: "Customer Registered Device",
        issue: "Hardware Diagnostic & Component Inspection",
        status: "Diagnostic in Progress",
        progress: 45,
        technician: "Aztek Certified Diagnostic Specialist",
        estimatedTime: "Today within 3 hours",
        steps: [
          { label: "Device Checked In & Visual Inspection", done: true },
          { label: "Diagnostic Testing & Board Level Check", done: false, current: true },
          { label: "Component Replacement & Repair", done: false },
          { label: "Quality Certification & Delivery", done: false },
        ]
      })
    }
    setHasSearched(true)
  }

  const handleWhatsAppBooking = () => {
    const text = `Hello AZTEK CARE! I would like to book an express repair.%0A- Device: ${selectedDevice}%0A- Issue: ${selectedIssue}%0A- Preference: ${serviceType}`
    window.open(`https://wa.me/8801571423908?text=${text}`, "_blank")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-[#0d1222] border border-border/80 dark:border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)] overflow-hidden z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-border/60 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Customer Care Portal
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Real-time repair tracking & priority booking
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex p-2 gap-1.5 bg-secondary/50 dark:bg-white/[0.03] border-b border-border/40 dark:border-white/5">
              <button
                onClick={() => setActiveTab("track")}
                className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "track"
                    ? "bg-white dark:bg-white/10 text-blue-600 dark:text-cyan-400 shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Track My Device</span>
              </button>
              <button
                onClick={() => setActiveTab("book")}
                className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "book"
                    ? "bg-white dark:bg-white/10 text-blue-600 dark:text-cyan-400 shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book New Fix</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto">
              {activeTab === "track" ? (
                <div className="space-y-5">
                  {/* Search Bar */}
                  <form onSubmit={handleSearch} className="relative flex items-center">
                    <input
                      type="text"
                      value={ticketInput}
                      onChange={(e) => setTicketInput(e.target.value)}
                      placeholder="Enter Ticket ID (e.g. AZ-8924) or Phone"
                      className="w-full h-11 pl-4 pr-24 rounded-xl bg-secondary/60 dark:bg-white/[0.05] border border-border/60 dark:border-white/10 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-400"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 h-8 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors flex items-center gap-1 shadow-xs"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>Track</span>
                    </button>
                  </form>

                  {/* Demo Quick Select Chips */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">Quick Demo:</span>
                    <button
                      type="button"
                      onClick={() => {
                        setTicketInput("AZ-8924")
                        setActiveTicket(DEMO_TICKETS["AZ-8924"])
                      }}
                      className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-medium hover:underline text-[11px]"
                    >
                      MacBook M1 (AZ-8924)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTicketInput("AZ-7102")
                        setActiveTicket(DEMO_TICKETS["AZ-7102"])
                      }}
                      className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-medium hover:underline text-[11px]"
                    >
                      iPhone 15 Pro (AZ-7102)
                    </button>
                  </div>

                  {/* Active Ticket Details Card */}
                  {hasSearched && activeTicket && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 sm:p-5 rounded-2xl bg-secondary/40 dark:bg-white/[0.04] border border-border/60 dark:border-white/10 space-y-4"
                    >
                      {/* Ticket Header & Status */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-muted-foreground">
                              #{activeTicket.id}
                            </span>
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              activeTicket.progress === 100
                                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                                : "bg-blue-500/15 text-blue-600 dark:text-blue-400"
                            }`}>
                              {activeTicket.status}
                            </span>
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-foreground mt-1">
                            {activeTicket.device}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Issue: {activeTicket.issue}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-[10px] text-muted-foreground block">Estimated</span>
                          <span className="text-xs font-bold text-foreground flex items-center gap-1 justify-end">
                            <Clock className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
                            {activeTicket.estimatedTime}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1.5">
                          <span className="text-muted-foreground">Repair Completion</span>
                          <span className="font-bold text-blue-600 dark:text-cyan-400">
                            {activeTicket.progress}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-secondary dark:bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${activeTicket.progress}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Timeline Steps */}
                      <div className="space-y-2.5 pt-2 border-t border-border/40 dark:border-white/5">
                        {activeTicket.steps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs">
                            {step.done ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            ) : step.current ? (
                              <div className="w-4 h-4 rounded-full border-2 border-blue-600 dark:border-cyan-400 flex items-center justify-center shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-ping" />
                              </div>
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-border/80 dark:border-white/20 shrink-0" />
                            )}
                            <span className={step.done ? "text-foreground font-medium" : step.current ? "text-blue-600 dark:text-cyan-400 font-semibold" : "text-muted-foreground"}>
                              {step.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technician Note & WhatsApp Action */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <span className="text-[11px] text-muted-foreground">
                          Lead: <strong className="text-foreground">{activeTicket.technician}</strong>
                        </span>
                        <a
                          href={`https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20am%20inquiring%20about%20my%20repair%20ticket%20%23${activeTicket.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Chat with Tech</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                /* Instant Booking Tab */
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-foreground block mb-2">
                      1. Select Your Device
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { name: "iPhone", icon: Smartphone },
                        { name: "MacBook", icon: Laptop },
                        { name: "iPad", icon: Tablet },
                        { name: "Watch", icon: Wrench },
                        { name: "Console", icon: Gamepad2 },
                        { name: "Other", icon: ShieldCheck },
                      ].map((item) => {
                        const Icon = item.icon
                        const isSel = selectedDevice === item.name
                        return (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() => setSelectedDevice(item.name)}
                            className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all ${
                              isSel
                                ? "bg-blue-50 dark:bg-blue-950/40 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold"
                                : "border-border/60 dark:border-white/10 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground block mb-2">
                      2. Common Hardware Issue
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Broken Screen / Glass",
                        "Battery Drain / Dead",
                        "Liquid / Water Spill",
                        "Logic Board / Chip-level",
                        "Camera / Lens Issue",
                        "Speaker / Mic / Audio",
                      ].map((issue) => (
                        <button
                          key={issue}
                          type="button"
                          onClick={() => setSelectedIssue(issue)}
                          className={`p-2 rounded-lg border text-[11px] text-left transition-all ${
                            selectedIssue === issue
                              ? "bg-blue-50 dark:bg-blue-950/40 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold"
                              : "border-border/60 dark:border-white/10 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {issue}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground block mb-2">
                      3. Service Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Lab Drop-off (30-Min Fix)", "Free Doorstep Pickup"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setServiceType(type)}
                          className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                            serviceType === type
                              ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 text-emerald-600 dark:text-emerald-400 font-bold"
                              : "border-border/60 dark:border-white/10 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full mt-2 h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Instant Booking Confirmation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
