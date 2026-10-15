import { motion, useReducedMotion } from 'motion/react'
import { whatsappUrl } from '../utils/whatsapp'
import { WhatsAppIcon } from './UI'
export default function FloatingWhatsApp() {
  const reduced = useReducedMotion()
  return (
    <motion.a
      className="floating-whatsapp"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire with LKS Studio on WhatsApp (opens a new tab)"
      initial={reduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <WhatsAppIcon width={26} height={26} />
      <span>Let’s talk</span>
    </motion.a>
  )
}
