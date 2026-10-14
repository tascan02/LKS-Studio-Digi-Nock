import { useState } from 'react'
export default function StudioImage({
  image,
  className = '',
  priority = false,
}) {
  const [failed, setFailed] = useState(false)
  const placeholder = image.isPlaceholder || failed
  return (
    <figure className={`studio-image ${className}`}>
      <img
        src={placeholder ? image.fallback : image.src}
        alt={
          placeholder
            ? `${image.alt} — illustrative placeholder, not an LKS Studio product photograph`
            : image.alt
        }
        onError={(event) => {
          if (!failed) setFailed(true)
          else event.currentTarget.style.visibility = 'hidden'
        }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      {placeholder && (
        <figcaption>
          Illustrative placeholder · photography coming soon
        </figcaption>
      )}
    </figure>
  )
}
