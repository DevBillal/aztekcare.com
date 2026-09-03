import { Star, CheckCircle2, ThumbsUp, ShieldCheck } from "lucide-react"

interface Review {
  name: string
  location: string
  device: string
  image: string
  rating: number
  date: string
  text: string
  highlight: string
}

const reviews: Review[] = [
  {
    name: "Tanvir Ahmed",
    location: "Feni Sadar",
    device: "iPhone 13 Pro Max · Motherboard IC",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "3 days ago",
    text: "Other shops in Feni told me my iPhone's motherboard was dead and completely unfixable. AZTEK CARE diagnosed the shorted IC under microscope and resolved it on the same day. Truly lives up to 'Problems Today. Fixed Today.'",
    highlight: "Fixed Dead Motherboard"
  },
  {
    name: "Sajjad Hossain",
    location: "Mijan Road, Feni",
    device: "Samsung S22 Ultra · 120Hz Display",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 week ago",
    text: "Original quality screen replacement with 100% touch calibration restored. Fast, transparent pricing, and very professional technician behavior.",
    highlight: "100% Original Screen"
  },
  {
    name: "Nusrat Jahan",
    location: "Grand Trunk Road, Feni",
    device: "iPhone 12 · Face ID TrueDepth",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "2 weeks ago",
    text: "Face ID failed after light moisture contact. AZTEK CARE repaired the dot projector without replacing the original sensor, preserving TrueTone and biometrics.",
    highlight: "Face ID Restored"
  },
  {
    name: "Rakibul Islam",
    location: "Chhagalnaiya, Feni",
    device: "Xiaomi Note 10 Pro · CPU Reballing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "3 weeks ago",
    text: "Phone was completely bricked in bootloop. Brother at AZTEK CARE performed CPU reballing with high precision. All my personal photos and data were 100% safe.",
    highlight: "Data Safe Recovery"
  },
  {
    name: "Mahmudul Hasan",
    location: "Sonagazi, Feni",
    device: "Google Pixel 7 · Battery & Power IC",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 month ago",
    text: "Severe battery drain and heating issue resolved with an original battery swap and power IC recalibration. Backup feels brand new again.",
    highlight: "Power IC Fixed"
  },
  {
    name: "Farhana Akter",
    location: "Alia Madrasha Area, Feni",
    device: "iPhone 11 · Baseband Network",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 month ago",
    text: "Searching for network issue fixed in 2 hours. Very honest technicians who clearly explained what was damaged before beginning the repair.",
    highlight: "Fixed in 2 Hours"
  }
]

export default function ReviewsPage() {
  return (
    <div className="w-full pt-36 sm:pt-40 pb-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Page Header & Trust Ticker */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold border border-border">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Verified Customer Stories · Feni</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground">
            Trusted by clients <br />
            <span className="font-normal text-muted-foreground">across all of Feni.</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Real feedback from verified mobile phone users who trusted us with screen, battery, and motherboard-level repairs.
          </p>

          <div className="pt-3 inline-flex items-center gap-3 px-5 py-2.5 rounded-full liquid-glass text-xs font-semibold text-foreground">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>4.9 / 5.0 Rating</span>
            <span className="text-border">·</span>
            <span className="text-muted-foreground font-normal">350+ Verified Repairs</span>
          </div>
        </div>

        {/* Testimonials 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl bg-card border border-border/80 p-7 flex flex-col justify-between hover:border-foreground/30 transition-all shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-secondary text-foreground border border-border/60">
                    {review.highlight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-border/50 flex items-center gap-3">
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {review.device} · {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
