import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import SplashScreen from "./components/SplashScreen"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import About from "./components/About"
import RepairProcess from "./components/RepairProcess"
import Reviews from "./components/Reviews"
import SocialShowcase from "./components/SocialShowcase"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Location from "./components/Location"
import Footer from "./components/Footer"
import MobileBottomBar from "./components/MobileBottomBar"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground relative pb-16 lg:pb-0">
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <RepairProcess />
        <Reviews />
        <SocialShowcase />
        <FAQ />
        <Contact />
        <Location />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  )
}

export default App
