import { Award, Layers3, PackageCheck, Globe2 } from 'lucide-react'
const highlights = [
  [Award, '23+ Years', 'of Experience'],
  [Layers3, 'Quality-Focused', 'Manufacturing'],
  [PackageCheck, 'Wholesale', '& Bulk Orders'],
  [Globe2, 'Worldwide', 'Shipping'],
]
export default function TrustHighlights() {
  return (
    <div className="trust-strip">
      <div className="container trust-grid">
        {highlights.map(([Icon, title, subtitle]) => (
          <div className="trust-item" key={title}>
            <Icon size={25} strokeWidth={1.25} aria-hidden="true" />
            <p>
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
