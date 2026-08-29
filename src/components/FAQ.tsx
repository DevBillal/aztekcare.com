import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { HelpCircle, Sparkles } from "lucide-react"

const faqs = [
  {
    question: "How long does a typical smartphone repair take?",
    answer: "Most regular hardware fixes like Display/Touch replacement, Battery replacement, or Charging Port repairs are completed in 30 to 60 minutes. Complex motherboard micro-soldering and IC reballing are usually completed on the same day after comprehensive microscopic diagnosis."
  },
  {
    question: "Do you repair both Android phones and iPhones?",
    answer: "Yes, our engineers specialize across all major brands including Apple iPhone, Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, Vivo, Oppo, Realme, and others. We handle hardware, motherboard ICs, Face ID, and software flashing."
  },
  {
    question: "Is there any warranty on repair services and replacement parts?",
    answer: "Yes! We provide warranty coverage on eligible replacement screens, batteries, and motherboard repairs. The exact duration and terms depend on the part grade selected and the specific device model."
  },
  {
    question: "Can you fix dead phones or phones damaged by water?",
    answer: "Absolutely. Dead boot repair, shorted power ICs, and water-damaged motherboard recovery are our primary specialties. We use ultrasonic cleaning, thermal camera diagnostics, and precision micro-soldering to revive dead devices without losing your personal data."
  },
  {
    question: "Do I need to book an appointment before visiting the shop?",
    answer: "Walk-ins are always welcome at our Alia Madrasha Market shop in Feni! However, sending a quick WhatsApp message or submitting an online repair inquiry beforehand helps us prepare original parts in advance for an even faster same-day turnaround."
  },
  {
    question: "Will my personal photos and data remain safe during repair?",
    answer: "Yes, customer privacy and data security are our highest priorities. Unless you are requesting a full software reflash or firmware wipe, your data, photos, and apps remain 100% untouched and safe throughout the hardware repair process."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/20 relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions? We Have Answers</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
                Questions
              </span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Everything you need to know about our repair turnaround, warranty, motherboard micro-soldering, and data privacy.
            </p>
          </div>

          {/* Minimal Visitor-Friendly Accordion */}
          <Accordion className="w-full space-y-3.5">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/70 hover:border-primary/40 rounded-2xl px-5 sm:px-6 py-1 transition-all duration-200 shadow-sm"
              >
                <AccordionTrigger className="text-left font-bold text-base sm:text-lg hover:text-primary hover:no-underline transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-4 pt-1 border-t border-border/40 mt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Quick Help Footer Pill */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-3 sm:px-6 rounded-2xl bg-card border border-border/70 text-xs sm:text-sm text-muted-foreground shadow-sm">
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
              <span>Still have questions about your specific device?</span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="font-bold text-primary hover:underline ml-1"
              >
                Send Us an Email ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
