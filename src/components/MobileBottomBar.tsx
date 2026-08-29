import { MessageCircle, Phone, MapPin } from "lucide-react"
import { Button } from "./ui/button"

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-2.5 bg-background/90 backdrop-blur-xl border-t border-border/80 shadow-[0_-8px_30px_rgba(0,0,0,0.15)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="https://wa.me/8801571423908"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold h-11 rounded-xl shadow-sm text-sm">
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>WhatsApp Us</span>
          </Button>
        </a>

        <a href="tel:+8801571423908" className="flex-1">
          <Button
            variant="outline"
            className="w-full gap-2 border-primary/60 text-primary hover:bg-primary/10 font-bold h-11 rounded-xl text-sm"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Call Now</span>
          </Button>
        </a>

        <a
          href="#location"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="shrink-0"
          title="View Location"
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-xl border border-border/60 text-muted-foreground hover:text-primary hover:bg-muted"
          >
            <MapPin className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </div>
  )
}
