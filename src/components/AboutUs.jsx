import { siteImages } from '../config/siteConfig'
import StudioImage from './StudioImage'
import { Reveal, WhatsAppLink } from './UI'
export default function AboutUs() {
  return (
    <section id="about" className="section container about-grid">
      <Reveal className="about-visual">
        <StudioImage image={siteImages.about} />
        <div className="about-badge">
          <strong>23+</strong>
          <span>Years of Experience</span>
        </div>
        <span className="vertical-caption">
          Rooted in experience. Inspired by possibility.
        </span>
      </Reveal>
      <Reveal className="about-copy">
        <p className="eyebrow">Our Story</p>
        <h2>About LKS Studio</h2>
        <p className="about-intro">
          Thoughtful apparel.
          <br />
          <em>Dependable partnerships.</em>
        </p>
        <p>
          LKS Studio is a trusted manufacturer, wholesaler, and exporter of
          quality apparel for women, kids, and corporate clients. With 23+ years
          of experience, we bring together quality, comfort, and contemporary
          style.
        </p>
        <p>
          Our broader portfolio spans T-shirts, shorts, plazo, corporate
          T-shirts and shirts, with our dedicated Kids Wear collection coming
          soon. We cater to bulk and wholesale requirements for retailers,
          distributors, businesses, and fashion brands.
        </p>
        <p>
          Customer satisfaction is at the heart of our approach. We aim to
          deliver reliable apparel solutions that evolve with the needs of your
          business.
        </p>
        <blockquote>
          “Our vision is simple: long-term relationships, built on consistent
          quality and dependable service.”
        </blockquote>
        <WhatsAppLink>Let’s talk about your business</WhatsAppLink>
      </Reveal>
    </section>
  )
}
