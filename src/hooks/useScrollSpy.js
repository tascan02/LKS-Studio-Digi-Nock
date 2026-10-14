import { useEffect, useState } from 'react'
import { navigation } from '../config/siteConfig'
export function useScrollSpy() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    let frame = 0
    const update = () => {
      let current = 'home'
      for (const { id } of navigation) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= window.scrollY + 160) current = id
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      )
        current = 'contact'
      setActive(current)
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
  return active
}
