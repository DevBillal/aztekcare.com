import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Professional Engineers",
    description: "Experienced, skilled technicians dedicated to quality repairs.",
  },
  {
    title: "Advanced Equipment",
    description: "Modern tools for accurate diagnosis and precision repair.",
  },
  {
    title: "Original / Quality Parts",
    description: "Based on availability and device requirements.",
  },
  {
    title: "Warranty Support",
    description: "On eligible repairs and parts for your peace of mind.",
  },
  {
    title: "Fast Service",
    description: "Efficient diagnosis and reduced waiting time.",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent and competitive pricing without hidden fees.",
  },
  {
    title: "Advanced Repair Capability",
    description: "From basic to motherboard/IC-level work.",
  },
  {
    title: "Customer Trust",
    description: "Transparent communication and an unwavering quality focus.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background border-y border-border/40 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Why Choose <span className="text-primary">AZTEK CARE?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just fix phones; we provide lasting solutions. Our commitment to advanced technology, skilled engineering, and customer transparency sets us apart as the premier mobile repair center in Feni.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {reasons.slice(0, 4).map((reason, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616077168079-7e09a1ba1f1b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/20" />
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <div className="grid gap-6 relative z-10">
              {reasons.slice(4).map((reason, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-4 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-default"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{reason.title}</h4>
                    <p className="text-muted-foreground mt-1">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
