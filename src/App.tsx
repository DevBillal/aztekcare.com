import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import SplashScreen from "./components/SplashScreen"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MobileBottomBar from "./components/MobileBottomBar"
import CursorGlow from "./components/CursorGlow"
import SmoothScroll from "./components/SmoothScroll"

import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import ReviewsPage from "./pages/ReviewsPage"
import VideosPage from "./pages/VideosPage"
import ContactPage from "./pages/ContactPage"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  // Only show splash loading screen on the very first opening of the browser session!
  // Consecutive reloads or navigation will load instantly without showing the splash screen again.
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("aztek_has_loaded")
      // Allow testing/previewing anytime via ?splash=1 query parameter
      const forceSplash = new URLSearchParams(window.location.search).has("splash")
      return forceSplash || !hasLoaded
    }
    return false
  })

  useEffect(() => {
    if (!isLoading) return

    const timer = setTimeout(() => {
      setIsLoading(false)
      sessionStorage.setItem("aztek_has_loaded", "true")
    }, 950)

    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <CursorGlow />
        <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground relative pb-16 lg:pb-0 flex flex-col justify-between">
          <AnimatePresence>
            {isLoading && <SplashScreen key="splash" />}
          </AnimatePresence>

          <Navbar />

          <main className="w-full flex-1">
            <AnimatedRoutes />
          </main>

          <Footer />
          <MobileBottomBar />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
