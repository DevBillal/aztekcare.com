import { MapPin, Navigation } from "lucide-react"
import { Button } from "./ui/button"

export default function Location() {
  return (
    <section id="location" className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Find <span className="text-primary">AZTEK CARE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Visit our professional repair center for a quick diagnosis and reliable fix.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
          {/* Address Details */}
          <div className="p-8 lg:p-12 lg:col-span-1 flex flex-col justify-center bg-muted/20">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Location</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Alia Madrasha Market, <br />
              Ground Floor, Shop No. 20, <br />
              Mijan Road, Feni, <br />
              Bangladesh
            </p>
            <a 
              href="https://maps.google.com/?q=Alia+Madrasha+Market,+Mijan+Road,+Feni,+Bangladesh" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="w-full gap-2">
                <Navigation className="w-4 h-4" />
                Get Directions
              </Button>
            </a>
          </div>

          {/* Google Map Embed */}
          <div className="lg:col-span-2 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14713.82998638318!2d91.3931652!3d23.0189914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753683a3f5b721b%3A0xc47efc464ef24483!2sFeni!5e0!3m2!1sen!2sbd!4v1714152567990!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for AZTEK CARE"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
