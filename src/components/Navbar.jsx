import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../config/siteConfig'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { WhatsAppLink } from './UI'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(),
    header = useRef(null),
    toggle = useRef(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return
    const close = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
      if (event.key === 'Tab') {
        const elements = [
          ...header.current.querySelectorAll('a, button'),
        ].filter((el) => el.getClientRects().length)
        const first = elements[0],
          last = elements.at(-1)
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    const outside = (event) => {
      if (!header.current.contains(event.target)) setOpen(false)
    }
    const wide = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', outside)
    window.addEventListener('resize', wide)
    return () => {
      document.removeEventListener('keydown', close)
      document.removeEventListener('pointerdown', outside)
      window.removeEventListener('resize', wide)
    }
  }, [open])
  const links = navigation.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className={active === item.id ? 'active' : ''}
      aria-current={active === item.id ? 'location' : undefined}
      onClick={() => setOpen(false)}
    >
      {item.label}
    </a>
  ))
  return (
    <header
      ref={header}
      className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
    >
      <div className="container nav-inner">
        <a
          href="#home"
          className="wordmark"
          aria-label="LKS Studio home"
          onClick={() => setOpen(false)}
        >
          LKS<span>STUDIO</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links}
        </nav>
        <WhatsAppLink className="button button-primary nav-cta">
          Enquire Now
        </WhatsAppLink>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.22 }}
          >
            <div>
              {links}
              <WhatsAppLink>Enquire Now</WhatsAppLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
