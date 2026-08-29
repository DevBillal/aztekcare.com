import { motion } from "framer-motion"
import { Cpu, Smartphone, ShieldCheck, Wrench } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image with Floating Lab Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Top Floating Badge */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-4 -left-2 sm:-left-4 z-20 bg-card/95 backdrop-blur-md border border-primary/30 rounded-2xl p-3 sm:px-4 sm:py-2.5 shadow-xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-foreground">IC & Motherboard Certified</div>
                <p className="text-[10px] text-primary font-medium">Precision Micro-Soldering</p>
              </div>
            </motion.div>

            {/* Bottom Floating Badge */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-2 sm:-right-4 z-20 bg-card/95 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-3 sm:px-4 sm:py-2.5 shadow-xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-foreground">Advanced Diagnostics</div>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">100% Transparent Servicing</p>
              </div>
            </motion.div>

            {/* Main Smartphone Repair Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-default border border-border/60">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=1200" 
                alt="Smartphone and iPhone repair workstation at AZTEK CARE" 
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl z-0 group-hover:bg-primary/40 transition-colors duration-500 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl z-0 group-hover:bg-cyan-500/40 transition-colors duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <Wrench className="w-3.5 h-3.5" />
              <span>About AZTEK CARE</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Reliable, Efficient, & <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
                Technically Advanced.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At <strong className="text-foreground font-semibold">AZTEK CARE</strong>, we understand how vital your mobile phone is to your daily life. That's why we've built a dedicated professional smartphone servicing center right here on Mijan Road, Feni.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our engineers specialize across all major <strong className="text-foreground font-semibold">iPhone & Android</strong> brands. Beyond basic screen or battery replacements, our true strength lies in complex micro-soldering: restoring shorted motherboards, power ICs, network basebands, Face ID projectors, and eMMC programming.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              When other shops say a phone is unfixable, our advanced diagnostic tools and microscope repair bench provide the real solution — fast, transparent, and same-day.
            </p>
            
            {/* Stats / Highlights Grid */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xl sm:text-2xl text-primary">100%</h4>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Smartphone Focus</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xl sm:text-2xl text-primary">Advanced</h4>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Micro-Soldering Lab</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
