import { BadgeCheck, Sparkles, Package, Layers3, Globe2 } from 'lucide-react'
import { Reveal, SectionHeading } from './UI'
const benefits = [
  [
    BadgeCheck,
    'Quality Focused Manufacturing',
    'Dedicated to delivering apparel with attention to comfort, durability, and quality.',
  ],
  [
    Sparkles,
    'Trend-led Designs',
    'Contemporary designs that reflect evolving apparel and fashion preferences.',
  ],
  [
    Package,
    'Wholesale & Bulk Orders',
    'Apparel solutions designed for retailers, distributors, organizations, and fashion businesses.',
  ],
  [
    Layers3,
    'Multiple Product Categories',
    'A diverse product portfolio covering women’s apparel and additional clothing categories.',
  ],
  [
    Globe2,
    'Worldwide Shipping',
    'Supporting apparel enquiries and shipping requirements for customers worldwide.',
  ],
]
export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-section section">
      <div className="container">
        <SectionHeading
          eyebrow="The LKS difference"
          title="Why Choose LKS Studio?"
          description="A dependable apparel manufacturing partner committed to quality, design, and long-term business relationships."
        />
        <div className="benefits-grid">
          {benefits.map(([Icon, title, text], i) => (
            <Reveal className="benefit" key={title} delay={i * 0.05}>
              <div className="benefit-top">
                <Icon size={28} strokeWidth={1.3} aria-hidden="true" />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
