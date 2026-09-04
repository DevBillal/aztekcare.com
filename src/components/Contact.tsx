import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Check, 
  ArrowRight
} from "lucide-react"
import { Button } from "./ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    issue: "",
    message: ""
  })

  const [isCopied, setIsCopied] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const officialEmail = "support@aztekcare.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    setTimeout(() => {
      setIsSending(false)
      setIsSubmitted(true)

      const subject = encodeURIComponent(`Repair Inquiry: ${formData.device || "Smartphone"} - ${formData.name}`)
      const body = encodeURIComponent(
        `Customer Name: ${formData.name}\n` +
        `Phone/WhatsApp: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Device Model: ${formData.device}\n` +
        `Issue Description: ${formData.issue}\n\n` +
        `Message: ${formData.message}`
      )
      
      window.location.href = `mailto:${officialEmail}?subject=${subject}&body=${body}`
    }, 500)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Contact our lab.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Have a device question, custom inquiry, or urgent repair request? Reach out to our technicians directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Minimal Apple-Style Inquiry Form */}
          <div className="lg:col-span-7 bg-card border border-border dark:border-border/80 rounded-2xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.04)] text-left">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/60">
              <div>
                <h3 className="text-lg font-bold text-foreground">Send an Email Inquiry</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Direct message to our technical team</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground">
                <Send className="w-4 h-4" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Inquiry Ready to Send</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm max-w-sm mx-auto">
                    Your message has been formatted for <strong className="text-foreground">{officialEmail}</strong>. Our team will review and reply promptly.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", device: "", issue: "", message: "" })
                    }}
                    className="mt-2 rounded-full text-xs"
                  >
                    Send Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-foreground focus:bg-background outline-none text-xs sm:text-sm text-foreground transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1571-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-foreground focus:bg-background outline-none text-xs sm:text-sm text-foreground transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Device */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-foreground focus:bg-background outline-none text-xs sm:text-sm text-foreground transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground">Device Model</label>
                      <input
                        type="text"
                        placeholder="iPhone 14 Pro, Samsung S23..."
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-foreground focus:bg-background outline-none text-xs sm:text-sm text-foreground transition-all"
                      />
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">Issue / Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Display damaged, Power IC short, Face ID..."
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-foreground focus:bg-background outline-none text-xs sm:text-sm text-foreground transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">Details</label>
                    <textarea
                      rows={3}
                      placeholder="Describe what happened with your device..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-foreground focus:bg-background outline-none text-xs sm:text-sm text-foreground transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-5 rounded-xl text-xs sm:text-sm shadow-xs transition-all mt-1"
                  >
                    {isSending ? (
                      <span>Composing...</span>
                    ) : (
                      <>
                        <span>Submit Email Inquiry</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Direct Contact & Shop Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Direct Email Card */}
            <div className="bg-card border border-border dark:border-border/80 rounded-2xl p-5 sm:p-6 space-y-3 shadow-[0_2px_12px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Official Mail</h4>
                  <p className="text-xs text-muted-foreground">General & technical inquiries</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/60 border border-border/60">
                <span className="font-mono text-xs font-medium text-foreground select-all truncate">
                  {officialEmail}
                </span>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-card border border-border hover:border-foreground/30 text-foreground text-xs font-medium flex items-center gap-1 transition-colors"
                  >
                    {isCopied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </button>

                  <a 
                    href={`mailto:${officialEmail}?subject=AZTEK CARE Repair Inquiry`}
                    className="p-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                  >
                    <span>Compose</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp & Phone Card */}
            <div className="bg-card border border-border dark:border-border/80 rounded-2xl p-5 sm:p-6 space-y-3 shadow-[0_2px_12px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.04)]">
              <h4 className="font-bold text-foreground text-sm">Immediate Hotline</h4>

              <div className="space-y-2">
                <a
                  href="https://wa.me/8801571423908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/60 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">WhatsApp Chat</div>
                      <p className="text-[11px] text-muted-foreground">+880 1571-423908</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary">Chat ↗</span>
                </a>

                <a
                  href="tel:+8801571423908"
                  className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/60 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary text-foreground flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Direct Call</div>
                      <p className="text-[11px] text-muted-foreground">+880 1571-423908</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary">Call ↗</span>
                </a>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-card border border-border dark:border-border/80 rounded-2xl p-5 sm:p-6 space-y-3 shadow-[0_2px_12px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.04)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary text-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xs sm:text-sm">Lab Address</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Alia Madrasha Market, Ground Floor, Shop No. 20, Mijan Road, Feni
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                <div className="w-8 h-8 rounded-lg bg-secondary text-muted-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xs sm:text-sm">Hours</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Sat – Thu: 10:00 AM – 9:30 PM <br />
                    Friday: 3:00 PM – 9:30 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
