import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import StudioImage from './StudioImage'
import { WhatsAppLink } from './UI'
import { collectionEnquiry } from '../utils/whatsapp'

export default function PhotoViewer({ collection, onClose }) {
  const dialog = useRef(null)

  useEffect(() => {
    const element = dialog.current
    const previousOverflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const close = () => dialog.current.close()

  return createPortal(
    <dialog
      ref={dialog}
      className="photo-viewer"
      aria-labelledby="photo-viewer-title"
      onClose={() => {
        // Ignore a queued close event if Strict Mode has already reopened the dialog.
        if (!dialog.current.open) onClose()
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const controls = [
          ...event.currentTarget.querySelectorAll('button, a[href]'),
        ]
        const first = controls[0]
        const last = controls.at(-1)
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div className="photo-viewer-panel">
        <header className="photo-viewer-header">
          <div>
            <p className="eyebrow">Collection preview</p>
            <h2 id="photo-viewer-title">{collection.name}</h2>
          </div>
          <button
            type="button"
            className="photo-viewer-close"
            onClick={close}
            aria-label="Close photo viewer"
            autoFocus
          >
            <X size={22} aria-hidden="true" />
          </button>
        </header>
        <StudioImage image={collection.image} priority />
        <div className="photo-viewer-footer">
          <p>{collection.description}</p>
          {collection.comingSoon ? (
            <span className="photo-viewer-upcoming">Coming Soon</span>
          ) : (
            <WhatsAppLink message={collectionEnquiry(collection.name)}>
              Enquire Now
            </WhatsAppLink>
          )}
        </div>
      </div>
    </dialog>,
    document.body,
  )
}
