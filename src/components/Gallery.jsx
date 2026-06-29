import { useState } from 'react'
import { useLang } from '../App'
import useScrollReveal from '../hooks/useScrollReveal'

const GALLERY_IMAGES = [
  { src: '/Asset/towing van front.jpg', alt: 'New Alfa Towing Van front view — Jalgaon towing service' },
  { src: '/Asset/front side 2.jpg', alt: 'New Alfa Towing Van front side — 24x7 towing Jalgaon' },
  { src: '/Asset/side view.jpg', alt: 'New Alfa Towing Van side view — breakdown service' },
  { src: '/Asset/back side.jpg', alt: 'New Alfa Towing Van back equipment — accident recovery' },
  { src: '/Asset/back side 2.jpg', alt: 'Towing van crane equipment — vehicle recovery service' },
  { src: '/Asset/bisness card.png', alt: 'New Alfa Towing Business Card Front' },
  { src: '/Asset/business card main.jpg', alt: 'New Alfa Towing Business Card Main' },
  { src: '/Asset/brand logo.png', alt: 'New Alfa Towing Van Service logo', style: { objectFit: 'contain', background: '#fff', padding: '10px' } },
]

function GalleryItem({ src, alt, style, delay, index, onOpen }) {
  const ref = useScrollReveal()
  return (
    <div
      className={`gallery-item reveal${delay ? ` reveal-delay-${delay}` : ''}`}
      ref={ref}
      onClick={() => onOpen(index)}
    >
      <img src={src} alt={alt} loading="lazy" width="400" height="300" style={style} />
    </div>
  )
}

export default function Gallery() {
  const { t } = useLang()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = (e) => {
    if (!e || e.target.tagName !== 'IMG' && !e.target.classList.contains('lb-arrow')) {
      setLightboxIndex(null)
      document.body.style.overflow = ''
    }
  }

  const showPrev = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))
  }

  const showNext = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1))
  }

  // Handle arrow keys
  const handleKeyDown = (e) => {
    if (lightboxIndex === null) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') showPrev(e)
    if (e.key === 'ArrowRight') showNext(e)
  }

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t.galleryTag}</div>
          <h2 className="section-title" id="gallery-heading">
            {t.galleryTitle1}
            <span className="accent">{t.galleryTitle2}</span>
          </h2>
          <div className="divider" />
        </div>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <GalleryItem
              key={i}
              index={i}
              src={img.src}
              alt={img.alt}
              style={img.style}
              delay={i % 4 || null}
              onOpen={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          id="lightbox"
          className="open"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex="-1"
          style={{ outline: 'none' }}
          ref={(el) => el && el.focus()}
        >
          <button className="lb-close" onClick={() => setLightboxIndex(null)} aria-label="Close image viewer">✕</button>
          
          <button className="lb-arrow lb-prev" onClick={showPrev} aria-label="Previous image">‹</button>
          <img src={GALLERY_IMAGES[lightboxIndex].src} alt={GALLERY_IMAGES[lightboxIndex].alt} />
          <button className="lb-arrow lb-next" onClick={showNext} aria-label="Next image">›</button>
        </div>
      )}
    </section>
  )
}
