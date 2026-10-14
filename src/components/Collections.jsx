import { ArrowDownRight } from 'lucide-react'
import { collections } from '../config/collectionData'
import { collectionEnquiry } from '../utils/whatsapp'
import StudioImage from './StudioImage'
import { Reveal, SectionHeading, WhatsAppLink } from './UI'
export default function Collections() {
  return (
    <section id="collections" className="section container">
      <SectionHeading
        eyebrow="Considered style. Consistent quality."
        title="Our Collection"
        description="Explore our versatile apparel collections, thoughtfully designed to combine style, comfort, and quality."
      >
        <span className="section-aside">
          Made for the everyday.
          <br />
          Crafted for your business.
          <ArrowDownRight size={28} strokeWidth={1} />
        </span>
      </SectionHeading>
      <div className="collection-grid">
        {collections.map((item, index) => (
          <Reveal
            key={item.id}
            delay={index * 0.07}
            className="collection-card"
          >
            <div className="collection-image">
              <StudioImage image={item.image} />
              <span className="collection-number">0{index + 1}</span>
              {item.comingSoon && (
                <span className="coming-soon">Coming Soon</span>
              )}
            </div>
            <div className="collection-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.comingSoon ? (
                <span className="upcoming-note">
                  A little something to look forward to.
                </span>
              ) : (
                <WhatsAppLink
                  message={collectionEnquiry(item.name)}
                  className="text-link"
                >
                  Enquire Now
                </WhatsAppLink>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
