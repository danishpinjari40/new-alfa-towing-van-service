import { useLang } from '../App'

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)

const WAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <img 
          src="/Asset/brand logo.png" 
          alt="" 
          className="hero-bg-logo" 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70vw',
            maxWidth: '450px',
            opacity: '0.06',
            pointerEvents: 'none',
            zIndex: 1,
            userSelect: 'none'
          }}
        />
      </div>
      <div className="road-stripe" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" aria-hidden="true" />
          {t.heroBadge}
        </div>

        <h1 className="hero-title" id="hero-heading">
          <span className="brand-red">{t.heroTitle1}</span>
          <br />
          <span>{t.heroTitle2}</span>
          <br />
          <span className="brand-yellow">{t.heroTitle3}</span>
        </h1>

        <p className="hero-subtitle">{t.heroSubtitle}</p>

        <div className="hero-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--secondary)" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {t.heroLocation}
        </div>

        <div className="hero-cta-group">
          <a
            className="btn btn-primary"
            href="tel:+917399997789"
            id="hero-call-btn"
            aria-label="Call Now for Towing Service"
          >
            <PhoneIcon />
            {t.callNow}
          </a>
          <a
            className="btn btn-whatsapp"
            href="https://wa.me/917399997789?text=Hello%20Aslam%20Bhai%2C%20I%20need%20towing%20help!"
            id="hero-wa-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Aslam Pinjari for towing"
          >
            <WAIcon />
            {t.whatsapp}
          </a>
        </div>
      </div>

      <img
        className="hero-van-img"
        src="/Asset/brand logo.png"
        alt="New Alfa Towing Van Service logo"
        width="500"
        height="500"
        loading="eager"
        fetchPriority="high"
        style={{ objectFit: 'contain', filter: 'drop-shadow(0 10px 30px rgba(200,16,46,0.3))' }}
      />
    </section>
  )
}
