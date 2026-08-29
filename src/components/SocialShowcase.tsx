import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Play, 
  ExternalLink, 
  Eye, 
  Video, 
  Sparkles, 
  ArrowUpRight,
  Share2
} from "lucide-react"
import { Button } from "./ui/button"

// Custom SVG Icons for authentic brand feel
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

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}

interface SocialPost {
  id: string
  title: string
  category: "reels" | "motherboard" | "screen" | "customer"
  platform: "facebook" | "instagram" | "youtube" | "tiktok"
  platformName: string
  platformColor: string
  badgeBg: string
  thumbnail: string
  link: string
  views: string
  tag: string
}

const socialPosts: SocialPost[] = [
  {
    id: "1",
    title: "iPhone 13 Pro Max Motherboard Short & Power IC Micro-Soldering Live Fix",
    category: "motherboard",
    platform: "facebook",
    platformName: "Facebook Video",
    platformColor: "text-[#1877F2]",
    badgeBg: "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/30",
    thumbnail: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=600",
    link: "https://facebook.com",
    views: "12.4K views",
    tag: "Micro-Soldering"
  },
  {
    id: "2",
    title: "Samsung S22 Ultra Original 120Hz Display Replacement in Under 35 Mins!",
    category: "screen",
    platform: "youtube",
    platformName: "YouTube Shorts",
    platformColor: "text-[#FF0000]",
    badgeBg: "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/30",
    thumbnail: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=600",
    link: "https://youtube.com",
    views: "8.9K views",
    tag: "Display Fix"
  },
  {
    id: "3",
    title: "Dead Xiaomi Redmi Note 10 CPU Reballing & eMMC Data Recovery",
    category: "reels",
    platform: "instagram",
    platformName: "Instagram Reel",
    platformColor: "text-[#E4405F]",
    badgeBg: "bg-[#E4405F]/10 text-[#E4405F] border-[#E4405F]/30",
    thumbnail: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=600",
    link: "https://instagram.com",
    views: "15.2K views",
    tag: "CPU Reball"
  },
  {
    id: "4",
    title: "iPhone 12 Face ID TrueDepth Dot Projector Repair without Replacing Sensor",
    category: "motherboard",
    platform: "tiktok",
    platformName: "TikTok Reel",
    platformColor: "text-foreground",
    badgeBg: "bg-muted text-foreground border-border",
    thumbnail: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600",
    link: "https://tiktok.com",
    views: "22.1K views",
    tag: "Face ID"
  },
  {
    id: "5",
    title: "Happy Customer Reaction after Dead Phone Data Restored Successfully",
    category: "customer",
    platform: "facebook",
    platformName: "Facebook Watch",
    platformColor: "text-[#1877F2]",
    badgeBg: "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/30",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    link: "https://facebook.com",
    views: "6.8K views",
    tag: "Customer Review"
  },
  {
    id: "6",
    title: "Step-by-Step Water Damage Treatment & Ultrasonic Cleaning Lab Process",
    category: "reels",
    platform: "youtube",
    platformName: "YouTube Video",
    platformColor: "text-[#FF0000]",
    badgeBg: "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/30",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
    link: "https://youtube.com",
    views: "10.5K views",
    tag: "Lab Process"
  },
]

const categories = [
  { id: "all", label: "All Posts & Videos" },
  { id: "motherboard", label: "Motherboard & IC 🔬" },
  { id: "reels", label: "Fast Repair Reels ⚡" },
  { id: "screen", label: "Screen & Battery 📱" },
  { id: "customer", label: "Customer Stories ⭐" },
]

export default function SocialShowcase() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredPosts = activeTab === "all" 
    ? socialPosts 
    : socialPosts.filter(p => p.category === activeTab)

  return (
    <section id="social" className="py-24 bg-background relative overflow-hidden border-t border-border/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            <Video className="w-3.5 h-3.5" />
            Social Media & Video Hub
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Watch Real Repairs on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
              Our Social Media Channels
            </span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Follow AZTEK CARE on Facebook, Instagram, YouTube & TikTok to see live micro-soldering videos, same-day repair reels, and customer feedback.
          </p>

          {/* Social Platform Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/30 text-xs sm:text-sm font-bold transition-all hover:scale-105"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook Page</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E4405F]/10 hover:bg-[#E4405F]/20 text-[#E4405F] border border-[#E4405F]/30 text-xs sm:text-sm font-bold transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram Reels</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000] border border-[#FF0000]/30 text-xs sm:text-sm font-bold transition-all hover:scale-105"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>YouTube Channel</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground border border-border text-xs sm:text-sm font-bold transition-all hover:scale-105"
            >
              <TikTokIcon className="w-4 h-4" />
              <span>TikTok</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                  : "bg-card/70 hover:bg-muted border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video / Post Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-card border border-border/70 overflow-hidden shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_15px_35px_rgba(33,150,243,0.15)] flex flex-col justify-between"
              >
                {/* Thumbnail with Play & Platform Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg border backdrop-blur-md ${post.badgeBg}`}>
                      {post.platform === "facebook" && <FacebookIcon className="w-3.5 h-3.5" />}
                      {post.platform === "instagram" && <InstagramIcon className="w-3.5 h-3.5" />}
                      {post.platform === "youtube" && <YouTubeIcon className="w-3.5 h-3.5" />}
                      {post.platform === "tiktok" && <TikTokIcon className="w-3.5 h-3.5" />}
                      <span>{post.platformName}</span>
                    </span>

                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-sm border border-white/10">
                      {post.tag}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    </div>
                  </a>

                  {/* Bottom View Count */}
                  <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1 text-[11px] font-medium text-white/90">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{post.views}</span>
                  </div>
                </div>

                {/* Content Details & Direct Link */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <h3 className="font-bold text-sm sm:text-base text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="pt-2 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Share2 className="w-3.5 h-3.5 text-primary" /> AZTEK CARE Official
                    </span>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      <span>Watch Post</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Banner to Follow */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-card border border-primary/30 p-6 sm:p-8 text-center relative overflow-hidden shadow-lg">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Want to see daily mobile repair tips & discounts?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            Follow our official social pages to get regular updates on smartphone maintenance, micro-soldering demonstrations, and exclusive servicing offers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold rounded-xl text-xs sm:text-sm">
                <FacebookIcon className="w-4 h-4" />
                <span>Follow on Facebook</span>
              </Button>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-[#E4405F] hover:bg-[#d63351] text-white font-bold rounded-xl text-xs sm:text-sm">
                <InstagramIcon className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </Button>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white font-bold rounded-xl text-xs sm:text-sm">
                <YouTubeIcon className="w-4 h-4" />
                <span>Subscribe on YouTube</span>
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
