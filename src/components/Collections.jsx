import { useState } from 'react'
import { ArrowDownRight, ZoomIn } from 'lucide-react'
import PhotoViewer from './PhotoViewer'
import { collections } from '../config/collectionData'
import { collectionEnquiry } from '../utils/whatsapp'
import StudioImage from './StudioImage'
import { Reveal, SectionHeading, WhatsAppLink } from './UI'
export default function Collections() {
  const [selected, setSelected] = useState(null)
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
            <div
              className="collection-image"
              data-placeholder={item.image.isPlaceholder}
            >
              <StudioImage image={item.image} />
              <button
                type="button"
                className="collection-image-trigger"
                onClick={() => setSelected(item)}
                aria-label={`Enlarge ${item.name} image${item.comingSoon ? ' (coming soon)' : ''}`}
                aria-haspopup="dialog"
                title="Enlarge photo"
              >
                {item.gallery?.length > 1 && (
                  <span className="collection-photo-count" aria-hidden="true">
                    {item.gallery.length} photos
                  </span>
                )}
                <span className="collection-zoom-hint">
                  <ZoomIn size={19} aria-hidden="true" />
                </span>
              </button>
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
      {selected && (
        <PhotoViewer collection={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
