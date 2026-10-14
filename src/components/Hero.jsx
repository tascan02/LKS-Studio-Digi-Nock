import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { siteImages } from '../config/siteConfig'
import StudioImage from './StudioImage'
import { Reveal, WhatsAppLink } from './UI'
export default function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <Reveal className="hero-copy">
        <p className="eyebrow">
          <span className="line" />
          23+ Years of Manufacturing Excellence
        </p>
        <h1 id="hero-title">
          Your trusted partner in <em>women’s wear</em> manufacturing.
        </h1>
        <p className="hero-description">
          Discover quality-driven apparel manufacturing, contemporary designs,
          and dependable wholesale solutions crafted for businesses worldwide.
        </p>
        <div className="hero-actions">
          <a href="#collections" className="button button-primary">
            Explore Collection
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <WhatsAppLink className="text-link">Enquire on WhatsApp</WhatsAppLink>
        </div>
        <div className="hero-bottom">
          <p>
            Manufacturing <span>·</span> Wholesale <span>·</span> Export
          </p>
          <a
            href="#collections"
            aria-label="Scroll to our collection"
            className="scroll-cue"
          >
            <ArrowDown size={17} />
          </a>
        </div>
      </Reveal>
      <Reveal className="hero-visual" delay={0.12}>
        <div className="image-index">
          <span>Thoughtfully made. Confidently worn.</span>
          <span>01 — LKS</span>
        </div>
        <StudioImage image={siteImages.hero} priority />
        <div className="experience-seal">
          <strong>
            23<span>+</span>
          </strong>
          <span>
            YEARS OF
            <br />
            EXPERIENCE
          </span>
        </div>
        <div className="hero-image-footer">
          <span>Quality in every detail.</span>
          <span>Made for your business.</span>
        </div>
      </Reveal>
    </section>
  )
}
