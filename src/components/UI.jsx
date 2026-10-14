import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { whatsappUrl } from '../utils/whatsapp'
export function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
export function WhatsAppIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.1 7.4c.4-.2.7-.1.9.3l.9 1.8c.2.3-.5 1-.7 1.2.7 1.4 1.6 2.3 3 3 .3-.3.9-1.1 1.2-.9l1.9.9c.5.3.3.9.1 1.4-.5 1.3-1.7 1.3-2.8 1-3-.8-5.6-3.4-6.4-6.1-.3-1.2.4-2.2 1.9-2.6Z" />
    </svg>
  )
}
export function WhatsAppLink({
  children = 'Enquire on WhatsApp',
  message,
  className = 'button button-primary',
  ...props
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  )
}
export function SectionHeading({ eyebrow, title, description, children }) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </Reveal>
  )
}
