import { MapPin, Phone, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-primary">
                AZTEK <span className="text-foreground">CARE</span>
              </span>
            </a>
            <p className="text-sm font-semibold italic text-muted-foreground">"Problems Today. Fixed Today."</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Professional mobile phone repair and servicing center. Specializing in advanced diagnostics, motherboard repair, and comprehensive solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Repair Process', 'Reviews', 'Videos', 'FAQ', 'Contact', 'Location'].map((link) => (
                <li key={link}>
                  <a 
                    href={link === 'Home' ? '#' : `#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Android Repair', 
                'iPhone Repair', 
                'Display Replacement', 
                'Battery Replacement', 
                'Face ID Repair', 
                'Motherboard Repair', 
                'IC-Level Repair', 
                'Software & Flashing', 
                'eMMC Programming'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">Alia Madrasha Market, Ground Floor, Shop No. 20, Mijan Road, Feni</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+8801571423908" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +880 1571-423908
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href="https://wa.me/8801571423908" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-[#25D366] transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} AZTEK CARE. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
