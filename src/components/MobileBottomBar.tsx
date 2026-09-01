import { MessageCircle, Phone, MapPin } from "lucide-react"

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden">
      <div className="max-w-sm mx-auto p-1.5 rounded-full glass-apple border border-black/[0.08] dark:border-white/[0.12] shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-1.5">
        <a
          href="https://wa.me/8801571423908"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10 px-3 rounded-full text-xs transition-transform active:scale-98"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp Quote</span>
        </a>

        <a
          href="tel:+8801571423908"
          className="flex-1 flex items-center justify-center gap-1.5 bg-secondary hover:bg-secondary/80 text-foreground font-medium h-10 px-3 rounded-full text-xs transition-transform active:scale-98"
        >
          <Phone className="w-3.5 h-3.5 shrink-0 opacity-70" />
          <span>Call Store</span>
        </a>

        <a
          href="#location"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 text-foreground flex items-center justify-center shrink-0 transition-colors"
          title="Store Location"
        >
          <MapPin className="w-4 h-4 text-primary" />
        </a>
      </div>
    </div>
  )
}
