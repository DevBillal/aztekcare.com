import { motion } from "framer-motion"
import { Star, CheckCircle2, Quote, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "./ui/card"

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
    device: "iPhone 13 Pro Max — Motherboard IC Repair",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "3 days ago",
    text: "Other shops in Feni told me my iPhone's motherboard was dead and couldn't be repaired. AZTEK CARE diagnosed the shorted IC under microscope and fixed it on the same day! Truly living up to 'Problems Today. Fixed Today.'",
    highlight: "Fixed dead motherboard same-day"
  },
  {
    name: "Sajjad Hossain",
    role: "Mijan Road, Feni",
    device: "Samsung Galaxy S22 Ultra — Display & Glass",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 week ago",
    text: "Original quality screen replacement with 100% touch sensitivity restored. Fast, transparent pricing, and very professional behavior. Best mobile repair shop in Feni without any doubt.",
    highlight: "100% Original Screen Quality"
  },
  {
    name: "Nusrat Jahan",
    role: "Grand Trunk Road, Feni",
    device: "iPhone 12 — Face ID & TrueTone Repair",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "2 weeks ago",
    text: "My Face ID stopped working after water exposure. They carefully repaired the dot projector without replacing the original sensor. Saved me thousands of taka!",
    highlight: "Face ID restored perfectly"
  },
  {
    name: "Rakibul Islam",
    role: "Chhagalnaiya, Feni",
    device: "Xiaomi Note 10 Pro — Dead Boot / CPU Reballing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "3 weeks ago",
    text: "Phone suddenly went black and wouldn't power on. Brother at AZTEK CARE did CPU reballing and eMMC programming with extreme precision. Data was 100% safe. Highly recommended!",
    highlight: "100% Data Preserved"
  },
  {
    name: "Mahmudul Hasan",
    role: "Sonagazi, Feni",
    device: "Google Pixel 7 — Battery & Charging IC",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 month ago",
    text: "Rapid battery draining and heating issue completely resolved with an original replacement and power IC tuning. Battery backup is now like brand new. Outstanding customer care.",
    highlight: "Like-New Battery Backup"
  },
  {
    name: "Farhana Akter",
    role: "Alia Madrasha Area, Feni",
    device: "iPhone 11 — Network & Baseband Repair",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    rating: 5,
    date: "1 month ago",
    text: "Searching for network issue fixed within 2 hours. Very honest technicians who clearly explained what was damaged before starting the repair. Top-notch service!",
    highlight: "Repaired in 2 hours"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background relative overflow-hidden border-t border-border/40">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            <ThumbsUp className="w-3.5 h-3.5" />
            Customer Feedback & Reviews
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by Hundreds of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
              Satisfied Customers in Feni
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real experiences from real clients who had their smartphones expertly repaired by AZTEK CARE technicians.
          </p>

          {/* Social Proof Stats Banner */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 bg-card border border-border/60 rounded-2xl px-6 py-3 shadow-sm">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1.5 font-bold text-foreground">4.9 / 5.0</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">350+</span> Successful Repairs
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold text-foreground">100%</span> Verified Reviews
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="h-full bg-card/70 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_12px_35px_rgba(33,150,243,0.12)] dark:hover:shadow-[0_12px_35px_rgba(33,150,243,0.2)] rounded-2xl overflow-hidden group flex flex-col justify-between">
                <CardContent className="p-6 sm:p-7 flex flex-col h-full justify-between gap-6">
                  {/* Top: Quote Icon & Rating & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Quote className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Middle: Highlight Badge & Testimonial Text */}
                  <div className="space-y-3 flex-1">
                    {review.highlight && (
                      <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        ✓ {review.highlight}
                      </span>
                    )}
                    <p className="text-foreground/90 text-sm sm:text-base leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Bottom: Customer Info with Photo */}
                  <div className="pt-4 border-t border-border/50 flex items-center gap-3.5">
                    <div className="relative">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary transition-all duration-300"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm" title="Verified Customer">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                          {review.name}
                        </h4>
                        <span className="text-xs text-muted-foreground shrink-0">({review.role})</span>
                      </div>
                      <p className="text-xs text-primary/90 font-medium truncate mt-0.5">
                        {review.device}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
