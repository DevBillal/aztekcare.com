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
  ArrowRight,
  Navigation
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical repair take?",
    answer: "Screen, battery, and charging port replacements take 30 to 45 minutes. Complex motherboard micro-soldering and IC reballing are usually completed on the same day."
  },
  {
    question: "Do you repair both Android phones and iPhones?",
    answer: "Yes, our certified hardware technicians specialize in Apple iPhone, Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, Vivo, Oppo, and other flagship brands."
  },
  {
    question: "Will my personal data remain safe?",
    answer: "Yes. Unless an operating system wipe is specifically required and approved by you, all personal photos, chats, and apps remain 100% untouched."
  },
  {
    question: "Do I need an appointment before coming?",
    answer: "Walk-ins are always welcome at Shop No. 20, Alia Madrasha Market, Feni. Messaging on WhatsApp beforehand helps us prepare parts for instant turnaround."
  }
]

export default function ContactPage() {
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
    <div className="w-full pt-28 pb-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold border border-border">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Consultation & Store Directions · Feni</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground">
            Contact our lab.
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Have a question about your device or want to check part availability? Message our technicians directly or visit our Feni workshop.
          </p>
        </div>

        {/* Form and Direct Contact Cards */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Email Inquiry Form */}
          <div className="lg:col-span-7 bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/60">
              <div>
                <h3 className="text-lg font-bold text-foreground">Direct Technical Inquiry</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Send details directly to our senior hardware engineers</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground">
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
                    Your inquiry has been formatted for <strong className="text-foreground">{officialEmail}</strong>.
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground">Your Name *</label>
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

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">Hardware Issue *</label>
                    <input
                      type="text"
                      required
                      placeholder="Display broken, Dead / Won't turn on, Face ID..."
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-foreground focus:bg-background outline-none text-xs sm:text-sm text-foreground transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">Extra Notes / Details</label>
                    <textarea
                      rows={3}
                      placeholder="Describe what happened with your phone..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-foreground focus:bg-background outline-none text-xs sm:text-sm text-foreground transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-2xl text-xs sm:text-sm shadow-xs transition-all mt-1 flex items-center justify-center gap-1.5"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Direct Hotlines & Location Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Official Email Card */}
            <div className="bg-card border border-border/80 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center text-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Official Mail</h4>
                  <p className="text-xs text-muted-foreground">General inquiries & feedback</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-secondary/60 border border-border/60">
                <span className="font-mono text-xs font-medium text-foreground select-all truncate">
                  {officialEmail}
                </span>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-card border border-border hover:border-foreground/30 text-foreground text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
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

            {/* Instant Hotlines */}
            <div className="bg-card border border-border/80 rounded-3xl p-6 space-y-3">
              <h4 className="font-bold text-foreground text-sm">Immediate Hotline</h4>

              <div className="space-y-2">
                <a
                  href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/50 hover:bg-secondary border border-border/60 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">WhatsApp Instant Chat</div>
                      <p className="text-[11px] text-muted-foreground">+880 1571-423908</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary">Chat ↗</span>
                </a>

                <a
                  href="tel:+8801571423908"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/50 hover:bg-secondary border border-border/60 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-secondary text-foreground flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Direct Telephone Call</div>
                      <p className="text-[11px] text-muted-foreground">+880 1571-423908</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary">Call ↗</span>
                </a>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="bg-card border border-border/80 rounded-3xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary text-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xs sm:text-sm">Lab Address</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Alia Madrasha Market, Ground Floor, Shop No. 20, Mijan Road, Feni, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                <div className="w-9 h-9 rounded-xl bg-secondary text-muted-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xs sm:text-sm">Store Hours</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Saturday – Thursday: 10:00 AM – 9:30 PM <br />
                    Friday: 3:00 PM – 9:30 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Google Map Embed */}
        <div className="space-y-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-foreground">Find Us in Feni</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Located conveniently at Alia Madrasha Market on Mijan Road.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border/80 h-[380px] sm:h-[420px] shadow-xs">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14713.82998638318!2d91.3931652!3d23.0189914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753683a3f5b721b%3A0xc47efc464ef24483!2sFeni!5e0!3m2!1sen!2sbd!4v1714152567990!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for AZTEK CARE"
            />
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-8 max-w-4xl mx-auto text-left pt-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Common Inquiries</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Quick answers about repair timelines, parts, and warranties.
            </p>
          </div>

          <Accordion className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/80 rounded-2xl px-5 sm:px-6 py-1 transition-all shadow-xs"
              >
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base hover:text-foreground hover:no-underline py-4 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-xs sm:text-sm pb-4 pt-1 border-t border-border/40 mt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </div>
  )
}
