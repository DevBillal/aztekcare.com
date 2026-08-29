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
  Sparkles,
  Smartphone,
  HelpCircle
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

    // Simulate clean submission & fallback to mailto
    setTimeout(() => {
      setIsSending(false)
      setIsSubmitted(true)

      // Open mailto fallback with structured info
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
    }, 600)
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden border-t border-border/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            <Mail className="w-3.5 h-3.5" />
            Official Contact & Direct Email
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Send Us a Message or <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
              Direct Official Email
            </span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Have a question, device repair inquiry, or business proposal? Fill out the quick form below or reach our team directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* LEFT: Minimal Direct Email Form */}
          <div className="lg:col-span-7 bg-card border border-border/70 rounded-3xl p-6 sm:p-8 shadow-sm relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/60">
              <div>
                <h3 className="text-xl font-bold text-foreground">Send an Email to AZTEK CARE</h3>
                <p className="text-xs text-muted-foreground mt-0.5">We reply within 1-2 hours on business days.</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Send className="w-5 h-5" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Message Ready to Send!</h4>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    Your email client has been prepared with your inquiry. Our support team at <strong className="text-foreground">{officialEmail}</strong> will review your details promptly.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", device: "", issue: "", message: "" })
                    }}
                    className="mt-4 rounded-xl"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-foreground transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +880 1571-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-foreground transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Device */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Your Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-foreground transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Device Model</label>
                      <input
                        type="text"
                        placeholder="e.g. iPhone 13 Pro Max, Samsung S22"
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-foreground transition-all"
                      />
                    </div>
                  </div>

                  {/* Problem / Issue */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Repair Problem / Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Display broken, Motherboard short, Face ID not working"
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-foreground transition-all"
                    />
                  </div>

                  {/* Message Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Additional Details / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Describe what happened or any specific questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-foreground transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 rounded-xl text-sm shadow-md transition-all mt-2"
                  >
                    {isSending ? (
                      <span>Sending Email...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Official Mail</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Direct Contact Info & Store Details */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Direct Official Mail Card */}
            <div className="bg-card border border-primary/30 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base">Direct Official Email</h4>
                  <p className="text-xs text-muted-foreground">Click to copy or compose direct email</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-muted/50 border border-border/80">
                <span className="font-mono text-sm font-semibold text-foreground select-all truncate">
                  {officialEmail}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground text-xs font-semibold flex items-center gap-1"
                    title="Copy Email Address"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden xs:inline">{isCopied ? "Copied" : "Copy"}</span>
                  </button>

                  <a 
                    href={`mailto:${officialEmail}?subject=AZTEK CARE Repair Inquiry`}
                    className="p-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center gap-1"
                  >
                    <span>Mail</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp & Call Info */}
            <div className="bg-card border border-border/70 rounded-3xl p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-foreground text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Instant Phone Support</span>
              </h4>

              <div className="space-y-3">
                <a
                  href="https://wa.me/8801571423908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">WhatsApp Hotline</div>
                      <p className="text-xs text-[#25D366] font-semibold">+880 1571-423908</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#25D366] group-hover:translate-x-1 transition-transform">
                    Chat ↗
                  </span>
                </a>

                <a
                  href="tel:+8801571423908"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/50 hover:bg-secondary border border-border/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Direct Phone Call</div>
                      <p className="text-xs text-muted-foreground">+880 1571-423908</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                    Call ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Store Address & Hours Card */}
            <div className="bg-card border border-border/70 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Shop Location</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Alia Madrasha Market, Ground Floor, Shop No. 20, Mijan Road, Feni, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-border/50">
                <div className="w-9 h-9 rounded-xl bg-muted text-muted-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Working Hours</h4>
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
