import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { Reveal, SectionHeading, WhatsAppIcon } from './UI'
import { whatsappUrl } from '../utils/whatsapp'
import EnquiryForm from './EnquiryForm'
export default function ContactUs() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address)}`
  return (
    <section id="contact" className="section container contact-section">
      <SectionHeading
        eyebrow="Good partnerships begin with a conversation"
        title="Let’s Connect"
        description="Have a wholesale requirement or business enquiry? We’d love to hear from you."
      />
      <div className="contact-grid">
        <Reveal className="contact-details">
          <p className="contact-intro">
            Let’s make something
            <br />
            <em>great, together.</em>
          </p>
          <div className="contact-item">
            <MapPin aria-hidden="true" />
            <div>
              <h3>Delhi Head Office</h3>
              <p>{siteConfig.address}</p>
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Get directions
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="contact-item">
            <Phone aria-hidden="true" />
            <div>
              <h3>Give us a call</h3>
              <a href={`tel:${siteConfig.phoneInternational}`}>
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="contact-item">
            <Mail aria-hidden="true" />
            <div>
              <h3>Write to us</h3>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>
          <div className="contact-item">
            <WhatsAppIcon width={24} height={24} />
            <div>
              <h3>A conversation, one message away</h3>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Chat on WhatsApp
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  )
}
