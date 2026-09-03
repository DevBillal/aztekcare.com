import { Link } from "react-router-dom"
import { MessageCircle, Phone, MapPin } from "lucide-react"

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden">
      <div className="max-w-sm mx-auto p-1.5 rounded-full liquid-glass shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex items-center gap-1.5">
        <a
          href="https://wa.me/8801571423908?text=Hello%20AZTEK%20CARE!%20I%20would%20like%20to%20inquire%20about%20a%20device%20repair.%20Is%20a%20technician%20currently%20available%20today%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-foreground text-background font-semibold h-10 px-3 rounded-full text-xs transition-transform active:scale-98"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0 text-primary" />
          <span>WhatsApp Quote</span>
        </a>

        <a
          href="tel:+8801571423908"
          className="flex-1 flex items-center justify-center gap-1.5 bg-secondary/80 hover:bg-secondary text-foreground font-medium h-10 px-3 rounded-full text-xs transition-transform active:scale-98"
        >
          <Phone className="w-3.5 h-3.5 shrink-0 opacity-70" />
          <span>Call Store</span>
        </a>

        <Link
          to="/contact"
          className="w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary text-foreground flex items-center justify-center shrink-0 transition-colors"
          title="Store Location & Contact"
        >
          <MapPin className="w-4 h-4 text-primary" />
        </Link>
      </div>
    </div>
  )
}
