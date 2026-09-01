import { motion } from "framer-motion"
import { Check, Shield, Zap, Wrench, Microscope, Users, Sparkles } from "lucide-react"

const pillars = [
  {
    num: "01",
    title: "Certified Hardware Engineers",
    description: "Dedicated specialists trained in multi-layer PCB micro-soldering, thermal diagnosis, and BGA reballing."
  },
  {
    num: "02",
    title: "Advanced Microscopic Lab",
    description: "Modern stereomicroscopes, hot air rework stations, and precision oscilloscopes for component-level accuracy."
  },
  {
    num: "03",
    title: "Genuine Quality Parts",
    description: "Original OEM and Grade-A certified screens, batteries, and IC chips with transparent quality options."
  },
  {
    num: "04",
    title: "Warranty & Support",
    description: "Clear warranty coverage on eligible replacement components and hardware fixes for your peace of mind."
  },
  {
    num: "05",
    title: "Same-Day Turnaround",
    description: "Over 90% of screen, battery, and minor circuit issues resolved in under 2 hours without long queues."
  },
  {
    num: "06",
    title: "Complete Data Privacy",
    description: "Your photos, chats, and personal data remain 100% untouched and confidential throughout repair."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-background relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            The AZTEK Standard
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Why customers trust <br />
            <span className="font-normal text-muted-foreground">AZTEK CARE in Feni.</span>
          </h2>
        </div>

        {/* Minimal 3-Column Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl bg-card border border-border/80 p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/30 transition-all text-left"
            >
              <div>
                <span className="text-xs font-mono font-bold text-muted-foreground/60 tracking-wider block mb-4">
                  {pillar.num}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
