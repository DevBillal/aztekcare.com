import { MapPin, Navigation } from "lucide-react"
import { Button } from "./ui/button"

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-secondary/30 relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            Store Directions
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Visit AZTEK CARE.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Alia Madrasha Market, Ground Floor, Shop No. 20, Mijan Road, Feni, Bangladesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 bg-card rounded-2xl overflow-hidden border border-border/80 shadow-xs">
          
          {/* Address Details */}
          <div className="p-6 sm:p-8 lg:col-span-4 flex flex-col justify-between text-left space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Feni Central Branch</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Alia Madrasha Market <br />
                Ground Floor, Shop No. 20 <br />
                Mijan Road, Feni, Bangladesh
              </p>
            </div>

            <a 
              href="https://maps.google.com/?q=Alia+Madrasha+Market,+Mijan+Road,+Feni,+Bangladesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-5 rounded-xl text-xs sm:text-sm">
                <Navigation className="w-4 h-4 mr-2" />
                <span>Get Google Maps Directions</span>
              </Button>
            </a>
          </div>

          {/* Google Map Embed */}
          <div className="lg:col-span-8 min-h-[350px] sm:min-h-[400px] border-t lg:border-t-0 lg:border-l border-border/60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14713.82998638318!2d91.3931652!3d23.0189914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753683a3f5b721b%3A0xc47efc464ef24483!2sFeni!5e0!3m2!1sen!2sbd!4v1714152567990!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for AZTEK CARE"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
