import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ArrowUpRight } from "lucide-react"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

interface SocialPost {
  id: string
  title: string
  category: "all" | "motherboard" | "screen" | "reels"
  platform: "facebook" | "instagram" | "youtube"
  platformName: string
  thumbnail: string
  link: string
  views: string
}

const socialPosts: SocialPost[] = [
  {
    id: "1",
    title: "iPhone 13 Pro Max Shorted Motherboard & Power IC Fix",
    category: "motherboard",
    platform: "facebook",
    platformName: "Facebook Video",
    thumbnail: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=600",
    link: "https://facebook.com",
    views: "12.4K views"
  },
  {
    id: "2",
    title: "Samsung S22 Ultra 120Hz Screen Calibration & Replacement",
    category: "screen",
    platform: "youtube",
    platformName: "YouTube Shorts",
    thumbnail: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=600",
    link: "https://youtube.com",
    views: "8.9K views"
  },
  {
    id: "3",
    title: "Dead Xiaomi Redmi Note 10 CPU Reballing with 100% Data Safe",
    category: "reels",
    platform: "instagram",
    platformName: "Instagram Reel",
    thumbnail: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=600",
    link: "https://instagram.com",
    views: "15.2K views"
  },
  {
    id: "4",
    title: "iPhone 12 TrueDepth Dot Projector Micro-Soldering Fix",
    category: "motherboard",
    platform: "facebook",
    platformName: "Facebook Watch",
    thumbnail: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600",
    link: "https://facebook.com",
    views: "22.1K views"
  },
  {
    id: "5",
    title: "Ultrasonic Cleaning & Water Damage Recovery Protocol",
    category: "reels",
    platform: "youtube",
    platformName: "YouTube Video",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
    link: "https://youtube.com",
    views: "10.5K views"
  },
  {
    id: "6",
    title: "Fast 20-Min Battery Replacement & TrueTone Transfer",
    category: "screen",
    platform: "instagram",
    platformName: "Instagram Reel",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    link: "https://instagram.com",
    views: "6.8K views"
  }
]

const categories = [
  { id: "all", label: "All Media" },
  { id: "motherboard", label: "Motherboard & IC" },
  { id: "screen", label: "Screen & Battery" },
  { id: "reels", label: "Short Reels" },
]

export default function SocialShowcase() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredPosts = activeTab === "all" 
    ? socialPosts 
    : socialPosts.filter(p => p.category === activeTab)

  return (
    <section id="social" className="py-20 sm:py-28 bg-background relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple-style Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left"
        >
          <div>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
              Media & Live Demonstrations
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Watch real repairs.
            </h2>
          </div>

          {/* Clean Segmented Control Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-secondary rounded-xl border border-border/60">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Video Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl bg-card border border-border/80 overflow-hidden hover:border-foreground/30 transition-all flex flex-col justify-between text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Top Minimal Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-md">
                      {post.platform === "facebook" && <FacebookIcon className="w-3 h-3 text-[#1877F2]" />}
                      {post.platform === "instagram" && <InstagramIcon className="w-3 h-3 text-[#E4405F]" />}
                      {post.platform === "youtube" && <YouTubeIcon className="w-3 h-3 text-[#FF0000]" />}
                      <span>{post.platformName}</span>
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </a>

                  {/* Views */}
                  <div className="absolute bottom-2.5 left-3 z-10 text-[10px] font-medium text-white/80">
                    {post.views}
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="pt-3 mt-3 border-t border-border/40 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground text-[11px]">AZTEK CARE Official</span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium flex items-center gap-0.5 hover:underline"
                    >
                      <span>Watch</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimal Social Links Pill */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium border border-border/70 transition-colors"
          >
            <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
            <span>Facebook Page</span>
            <ArrowUpRight className="w-3 h-3 opacity-50" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium border border-border/70 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#E4405F]" />
            <span>Instagram Reels</span>
            <ArrowUpRight className="w-3 h-3 opacity-50" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium border border-border/70 transition-colors"
          >
            <YouTubeIcon className="w-3.5 h-3.5 text-[#FF0000]" />
            <span>YouTube Channel</span>
            <ArrowUpRight className="w-3 h-3 opacity-50" />
          </a>
        </div>

      </div>
    </section>
  )
}
