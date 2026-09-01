import { motion } from "framer-motion"
import { Star, CheckCircle2 } from "lucide-react"

interface Review {
  name: string
  role: string
  device: string
  image: string
  rating: number
  date: string
  text: string
  highlight?: string
}

const reviews: Review[] = [
  {
    name: "Tanvir Ahmed",
    role: "Feni Sadar",
    device: "iPhone 13 Pro Max · Motherboard IC",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "3 days ago",
    text: "Other shops in Feni told me my iPhone's motherboard was dead and unfixable. AZTEK CARE diagnosed the shorted IC under microscope and resolved it on the same day. Truly lives up to 'Problems Today. Fixed Today.'",
    highlight: "Fixed Dead Motherboard"
  },
  {
    name: "Sajjad Hossain",
    role: "Mijan Road, Feni",
    device: "Samsung S22 Ultra · 120Hz Display",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 week ago",
    text: "Original quality screen replacement with 100% touch calibration restored. Fast, transparent pricing, and very professional technician behavior.",
    highlight: "100% Original Screen"
  },
  {
    name: "Nusrat Jahan",
    role: "Grand Trunk Road, Feni",
    device: "iPhone 12 · Face ID TrueDepth",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "2 weeks ago",
    text: "Face ID failed after light moisture contact. AZTEK CARE repaired the dot projector without replacing the original sensor, preserving TrueTone and biometrics.",
    highlight: "Face ID Restored"
  },
  {
    name: "Rakibul Islam",
    role: "Chhagalnaiya, Feni",
    device: "Xiaomi Note 10 Pro · CPU Reballing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "3 weeks ago",
    text: "Phone was completely bricked. Brother at AZTEK CARE performed CPU reballing with high precision. All my personal data was 100% preserved.",
    highlight: "Data Safe Recovery"
  },
  {
    name: "Mahmudul Hasan",
    role: "Sonagazi, Feni",
    device: "Google Pixel 7 · Battery & Power IC",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 month ago",
    text: "Heating and severe battery drain issue fixed with an original battery replacement and power IC calibration. Battery backup is like brand new.",
    highlight: "Power IC Fixed"
  },
  {
    name: "Farhana Akter",
    role: "Alia Madrasha Area, Feni",
    device: "iPhone 11 · Baseband Network",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 month ago",
    text: "Searching for network issue fixed in 2 hours. Very honest technicians who clearly explained what was damaged before beginning the repair.",
    highlight: "Fixed in 2 Hours"
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-secondary/30 relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            Verified Experiences
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Trusted by clients <br />
            <span className="font-normal text-muted-foreground">across Feni.</span>
          </h2>
        </div>

        {/* Minimal Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl bg-card border border-border/80 p-6 flex flex-col justify-between hover:border-foreground/30 transition-all text-left"
            >
              <div className="space-y-3">
                {/* Rating & Highlight */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {review.highlight && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-foreground border border-border/60">
                      {review.highlight}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-border/50 flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-border"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-xs sm:text-sm text-foreground truncate">
                      {review.name}
                    </h4>
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {review.device} · {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
