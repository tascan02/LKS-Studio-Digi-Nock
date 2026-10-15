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
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M12 2.75a9.25 9.25 0 0 0-8.05 13.8l-1.2 4.7 4.83-1.27A9.25 9.25 0 1 0 12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        transform="translate(3.2 3.2) scale(1.1)"
        fill="currentColor"
        d="M11.676 9.929c-.2-.1-1.177-.58-1.359-.646-.182-.067-.315-.1-.448.1-.133.199-.514.646-.63.779-.116.133-.232.149-.431.05-.2-.1-.84-.31-1.6-.988-.592-.528-.992-1.18-1.108-1.38-.116-.199-.013-.307.087-.406.09-.089.2-.232.298-.348.1-.116.133-.199.2-.332.066-.133.033-.249-.017-.348-.05-.1-.448-1.078-.614-1.476-.161-.388-.325-.335-.448-.341-.116-.006-.249-.007-.382-.007-.133 0-.348.05-.53.249-.183.2-.697.68-.697 1.658 0 .979.713 1.924.812 2.057.1.133 1.404 2.143 3.4 3.005.475.205.846.328 1.135.42.477.151.911.13 1.254.079.383-.057 1.177-.481 1.343-.945.166-.465.166-.863.116-.946-.05-.083-.183-.133-.381-.232Z"
      />
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
