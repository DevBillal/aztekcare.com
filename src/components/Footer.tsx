import { Link } from "react-router-dom"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/40 text-foreground border-t border-border/60 py-16 pb-24 md:pb-16 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border/50">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-foreground text-background flex items-center justify-center font-black text-xs">
                az
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                aztek<span className="text-muted-foreground font-medium ml-0.5">care</span>
              </span>
            </Link>
            <p className="text-xs font-medium text-muted-foreground italic">
              "Problems Today. Fixed Today."
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Certified smartphone and iPhone repair lab in Feni, Bangladesh. Specializing in component-level motherboard micro-soldering, Face ID recovery, and precision servicing.
            </p>
          </div>

          {/* Directory Column 1: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Motherboard & IC Micro-Soldering</li>
              <li>iPhone Screen & OLED Replacement</li>
              <li>Face ID & TrueDepth Repair</li>
              <li>Battery Health Replacement</li>
              <li>Dead Boot CPU Reballing</li>
              <li>Water Damage Ultrasonic Cleaning</li>
            </ul>
          </div>

          {/* Directory Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Pages
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Lab', path: '/about' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Videos', path: '/videos' },
                { name: 'Contact & Map', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3 text-xs text-muted-foreground">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Direct Contact
            </h4>
            <p className="leading-relaxed">
              Alia Madrasha Market, Ground Floor, Shop No. 20, Mijan Road, Feni
            </p>
            <p className="font-mono text-foreground">support@aztekcare.com</p>
            <p className="font-mono text-foreground">+880 1571-423908</p>
          </div>

        </div>

        {/* Bottom Minimal Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {currentYear} AZTEK CARE. All rights reserved.</p>
          <p className="text-[11px]">Designed with precision in Feni, Bangladesh.</p>
        </div>

      </div>
    </footer>
  )
}
