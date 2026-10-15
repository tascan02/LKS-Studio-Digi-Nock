import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import StudioImage from './StudioImage'
import { WhatsAppLink } from './UI'
import { collectionEnquiry } from '../utils/whatsapp'

export default function PhotoViewer({ collection, onClose }) {
  const dialog = useRef(null)
  const thumbnails = useRef(null)
  const [active, setActive] = useState(0)
  const images = collection.gallery?.length
    ? collection.gallery
    : [collection.image]
  const image = images[active]
  const hasGallery = images.length > 1
  const navigate = (direction) =>
    setActive((index) => (index + direction + images.length) % images.length)

  useEffect(() => {
    const rail = thumbnails.current
    const selected = rail?.querySelector('[aria-pressed="true"]')
    if (selected)
      rail.scrollLeft =
        selected.offsetLeft - rail.clientWidth / 2 + selected.offsetWidth / 2
  }, [active])

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
      className={`photo-viewer${hasGallery ? ' has-gallery' : ''}`}
      aria-labelledby="photo-viewer-title"
      onClose={() => {
        // Ignore a queued close event if Strict Mode has already reopened the dialog.
        if (!dialog.current.open) onClose()
      }}
      onKeyDown={(event) => {
        if (
          hasGallery &&
          (event.key === 'ArrowLeft' || event.key === 'ArrowRight')
        ) {
          event.preventDefault()
          navigate(event.key === 'ArrowLeft' ? -1 : 1)
          return
        }
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
        <div className="photo-viewer-stage">
          <StudioImage
            key={image.src}
            image={{ ...image, position: 'center' }}
            priority
          />
          {hasGallery && (
            <>
              <button
                type="button"
                className="photo-viewer-arrow previous"
                onClick={() => navigate(-1)}
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="photo-viewer-arrow next"
                onClick={() => navigate(1)}
                aria-label="Next photo"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        {hasGallery && (
          <div className="photo-viewer-gallery">
            <p
              className="photo-viewer-status"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {active + 1} / {images.length} — {image.alt}
            </p>
            <div
              ref={thumbnails}
              className="photo-viewer-thumbnails"
              aria-label="Collection photos"
            >
              {images.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  aria-label={`View photo ${index + 1}: ${photo.alt}`}
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                >
                  <img
                    src={photo.isPlaceholder ? photo.fallback : photo.src}
                    alt=""
                    loading="lazy"
                    width="56"
                    height="64"
                    onError={(event) => {
                      if (!event.currentTarget.dataset.fallbackUsed) {
                        event.currentTarget.dataset.fallbackUsed = 'true'
                        event.currentTarget.src = photo.fallback
                      }
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
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
