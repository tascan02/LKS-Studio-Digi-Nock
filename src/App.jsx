import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustHighlights from './components/TrustHighlights'
import Collections from './components/Collections'
import WhyChooseUs from './components/WhyChooseUs'
import AboutUs from './components/AboutUs'
import WholesaleCTA from './components/WholesaleCTA'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustHighlights />
        <Collections />
        <WhyChooseUs />
        <AboutUs />
        <WholesaleCTA />
        <ContactUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionConfig>
  )
}
