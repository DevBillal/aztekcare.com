import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const faqs = [
  {
    question: "How long does a typical smartphone repair take?",
    answer: "Regular hardware repairs like screen, battery, or charging port replacements take 30 to 60 minutes. Complex motherboard micro-soldering and IC reballing are typically completed on the same day after comprehensive diagnosis."
  },
  {
    question: "Do you repair both Android phones and iPhones?",
    answer: "Yes, our certified technicians specialize across all major brands including Apple iPhone, Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, Vivo, Oppo, Realme, and others. We handle hardware, motherboard ICs, Face ID, and software flashing."
  },
  {
    question: "Is there any warranty on repair services and replacement parts?",
    answer: "Yes. We provide clear warranty coverage on eligible replacement screens, batteries, and motherboard repairs. Terms depend on the selected part grade and device model."
  },
  {
    question: "Can you fix dead phones or phones damaged by water?",
    answer: "Yes, dead boot repair, shorted power ICs, and water-damaged motherboard recovery are our primary specialties. We utilize ultrasonic cleaning, thermal camera diagnostics, and microscopic soldering."
  },
  {
    question: "Do I need to book an appointment before visiting the shop?",
    answer: "Walk-ins are always welcome at our Alia Madrasha Market shop in Feni. However, sending a quick WhatsApp message beforehand helps us prepare original parts in advance for an even faster turnaround."
  },
  {
    question: "Will my personal photos and data remain safe during repair?",
    answer: "Yes, customer privacy and data security are strictly maintained. Unless a full firmware wipe is explicitly requested, your personal data, photos, and apps remain 100% untouched throughout hardware servicing."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-secondary/30 relative border-t border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 text-left"
        >
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Answers to common <br />
            <span className="font-normal text-muted-foreground">repair inquiries.</span>
          </h2>
        </motion.div>

        {/* Minimal iOS Accordion with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border dark:border-border/80 rounded-2xl px-5 sm:px-6 py-1 transition-all text-left shadow-[0_2px_12px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.04)] hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(2,132,199,0.14)]"
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
        </motion.div>

      </div>
    </section>
  )
}
