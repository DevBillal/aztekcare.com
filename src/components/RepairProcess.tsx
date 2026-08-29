import { motion } from "framer-motion"
import { Search, ClipboardCheck, Wrench, ShieldCheck } from "lucide-react"

const steps = [
  {
    title: "1. Diagnosis",
    description: "We carefully inspect your device using professional tools to identify the exact hardware or software problem.",
    icon: <Search className="w-8 h-8 text-primary" />,
  },
  {
    title: "2. Approval",
    description: "We explain the root cause, propose the best solution, and provide a clear cost estimate for your approval before proceeding.",
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "3. Repair",
    description: "Our engineers perform the repair using advanced equipment, micro-soldering techniques, and high-quality replacement parts.",
    icon: <Wrench className="w-8 h-8 text-primary" />,
  },
  {
    title: "4. Quality Check",
    description: "We run a final, comprehensive quality control check to ensure your device is fully functional before handing it back.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
]

export default function RepairProcess() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Transparent <span className="text-primary">Repair Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, four-step journey to get your device back in perfect working condition.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border/50 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors shadow-sm group"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
