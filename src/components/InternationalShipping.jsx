import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
  Check,
  Globe2,
  MapPin,
  Package,
  Plane,
  MessageCircle,
} from 'lucide-react'
import { shippingDestinations } from '../config/shippingData'
import { shippingEnquiry } from '../utils/whatsapp'
import { Reveal, WhatsAppLink } from './UI'

export default function InternationalShipping() {
  const [selectedId, setSelectedId] = useState(shippingDestinations[0].id)
  const selected = shippingDestinations.find(
    (country) => country.id === selectedId,
  )
  const reduced = useReducedMotion()

  return (
    <section
      id="international-shipping"
      className="section shipping-section"
      aria-labelledby="shipping-title"
    >
      <div className="container">
        <Reveal className="shipping-heading">
          <div>
            <p className="eyebrow">International shipping</p>
            <h2 id="shipping-title">
              From India.
              <br />
              <em>To your world.</em>
            </h2>
          </div>
          <div className="shipping-intro">
            <span className="shipping-worldwide">
              <Globe2 size={18} aria-hidden="true" />
              Worldwide delivery
            </span>
            <p>
              Yes, we ship beyond India. Connect with LKS Studio for wholesale
              and bulk apparel requirements, wherever your business takes you.
            </p>
            <p className="shipping-instruction">
              Choose a destination to start a conversation.
              <ArrowUpRight size={17} aria-hidden="true" />
            </p>
          </div>
        </Reveal>

        <Reveal className="destination-grid">
          {shippingDestinations.map((country) => {
            const active = country.id === selectedId
            return (
              <button
                key={country.id}
                type="button"
                className={`destination-card${active ? ' is-selected' : ''}`}
                aria-pressed={active}
                aria-controls="shipping-destination-details"
                aria-label={`Explore shipping to ${country.name}`}
                onClick={() => setSelectedId(country.id)}
              >
                <img
                  src={country.image}
                  alt={country.alt}
                  width="600"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: country.position }}
                  onError={(event) => {
                    if (!event.currentTarget.dataset.fallbackUsed) {
                      event.currentTarget.dataset.fallbackUsed = 'true'
                      event.currentTarget.src =
                        '/images/destinations/fallback.svg'
                      event.currentTarget.alt = `Global shipping illustration for ${country.name}`
                    }
                  }}
                />
                <span className="destination-topline">
                  <span>{country.region}</span>
                  <span className="destination-select-icon">
                    {active ? (
                      <Check size={19} aria-hidden="true" />
                    ) : (
                      <ArrowUpRight size={19} aria-hidden="true" />
                    )}
                  </span>
                </span>
                <span className="destination-caption">
                  <span className="destination-city">{country.landmark}</span>
                  <span className="destination-name">{country.name}</span>
                  <span className="destination-action">
                    {active ? 'Selected destination' : 'Explore shipping'}
                    <span aria-hidden="true">→</span>
                  </span>
                </span>
              </button>
            )
          })}
        </Reveal>

        <Reveal>
          <div
            id="shipping-destination-details"
            className="shipping-details"
            role="region"
            aria-labelledby="destination-title"
          >
            <motion.div
              key={selected.id}
              className="shipping-details-copy"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="eyebrow">Your selected destination</p>
              <h3 id="destination-title" aria-live="polite" aria-atomic="true">
                Shipping to {selected.name}
              </h3>
              <p>
                Tell us your city, collection, and order quantity. Our team will
                help you discuss shipping options for your business.
              </p>
            </motion.div>
            <div className="shipping-details-action">
              <div
                className="shipping-route"
                aria-label={`From Delhi, India to ${selected.name}`}
              >
                <span>
                  <MapPin size={16} aria-hidden="true" />
                  Delhi, India
                </span>
                <span className="shipping-route-line" aria-hidden="true">
                  <Plane size={21} />
                </span>
                <span className="shipping-route-code">{selected.code}</span>
              </div>
              <WhatsAppLink message={shippingEnquiry(selected.name)}>
                Enquire about shipping
              </WhatsAppLink>
            </div>
          </div>
          <p className="shipping-note">
            Availability, shipping charges, and estimated delivery timelines are
            confirmed for each order.
          </p>
        </Reveal>

        <Reveal className="shipping-next-steps">
          <div>
            <Package size={22} strokeWidth={1.4} aria-hidden="true" />
            <p>
              <strong>Share your requirement</strong>
              <span>Collection, quantity, and destination.</span>
            </p>
          </div>
          <div>
            <MessageCircle size={22} strokeWidth={1.4} aria-hidden="true" />
            <p>
              <strong>Discuss the details</strong>
              <span>Connect directly with our team.</span>
            </p>
          </div>
          <div className="shipping-other">
            <Globe2 size={22} strokeWidth={1.4} aria-hidden="true" />
            <p>
              <strong>A different destination?</strong>
              <WhatsAppLink
                message="Hello LKS Studio, I have an international wholesale enquiry. Please help me confirm shipping options for my country."
                className="text-link"
              >
                Let’s talk about your country
              </WhatsAppLink>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
