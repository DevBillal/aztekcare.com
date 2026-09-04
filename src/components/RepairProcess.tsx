import { motion } from "framer-motion"
import { Search, ClipboardCheck, Wrench, ShieldCheck } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Diagnosis",
    description: "Component inspection under microscope to detect exact hardware or IC fault."
  },
  {
    step: "02",
    title: "Transparent Quote",
    description: "Clear explanation of the problem, fix timeline, and upfront price approval."
  },
  {
    step: "03",
    title: "Precision Repair",
    description: "Micro-soldering and part replacement with precision temperature control."
  },
  {
    step: "04",
    title: "Quality Testing",
    description: "Multimeter testing and comprehensive functionality check before handover."
  },
]

export default function RepairProcess() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-background relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            The Repair Workflow
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Simple. Transparent. Fast.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3">
            A 4-step streamlined process from diagnosis to handover.
          </p>
        </motion.div>

        {/* 4-Step Minimal Grid with Staggered Scroll-In */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="rounded-2xl bg-card border border-border dark:border-border/80 p-6 flex flex-col justify-between text-left hover:border-primary/40 shadow-[0_2px_12px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.14)] transition-all cursor-default group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-primary group-hover:scale-105 inline-block tracking-wider mb-4 transition-transform">
                  Step {item.step}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
