import { motion } from "framer-motion"
import { Smartphone, Cpu, ShieldCheck } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary/30 relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Smartphone Repair Image with Hairline Border */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <img 
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=1200" 
                alt="Smartphone and iPhone repair workstation at AZTEK CARE" 
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            
            {/* Minimal Stat Badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-card border border-border/80 rounded-xl px-4 py-2.5 shadow-md flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">IC Micro-Soldering</div>
                <div className="text-[10px] text-muted-foreground">Certified Motherboard Lab</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
                About AZTEK CARE
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Engineered for quality. <br />
                <span className="font-normal text-muted-foreground">Trusted across Feni.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At <strong className="text-foreground font-semibold">AZTEK CARE</strong>, we believe every smartphone deserves master-level care. Located on Mijan Road, Feni, our dedicated servicing facility brings enterprise-grade diagnostic equipment and micro-soldering precision to everyday mobile users.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether your iPhone suffers from water damage, a shorted power IC, or Face ID failure, or your Android phone has an unbootable CPU, our technicians diagnose the microscopic root cause rather than recommending unnecessary motherboard replacements.
            </p>

            {/* Apple-style Metric Columns */}
            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-border/60">
              <div>
                <h4 className="font-extrabold text-2xl sm:text-3xl text-foreground">100%</h4>
                <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">Smartphone Focus</p>
              </div>
              <div>
                <h4 className="font-extrabold text-2xl sm:text-3xl text-foreground">Same-Day</h4>
                <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">Turnaround Time</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
