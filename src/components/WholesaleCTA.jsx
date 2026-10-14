import { ArrowUpRight } from 'lucide-react'
import { Reveal, WhatsAppLink } from './UI'
export default function WholesaleCTA() {
  return (
    <section className="wholesale-section">
      <Reveal className="container wholesale-inner">
        <div>
          <p className="eyebrow">Your next chapter starts here</p>
          <h2>
            Looking for a reliable apparel <em>manufacturing partner?</em>
          </h2>
        </div>
        <div>
          <p>
            Whether you’re a retailer, distributor, fashion brand, or business
            looking for bulk apparel solutions, connect with LKS Studio to
            discuss your requirements.
          </p>
          <div className="cta-actions">
            <WhatsAppLink className="button button-light">
              Enquire on WhatsApp
            </WhatsAppLink>
            <a href="#contact" className="text-link">
              Contact Us
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
