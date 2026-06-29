import { useLang } from '../App'
import useScrollReveal from '../hooks/useScrollReveal'

const PhoneIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)
const WAIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

export default function Contact() {
  const { t } = useLang()
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t.contactTag}</div>
          <h2 className="section-title" id="contact-heading">
            {t.contactTitle1}
            <span className="accent">{t.contactTitle2}</span>
          </h2>
          <div className="divider" />
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-card reveal" ref={ref1}>
            <h3>{t.contactInfoTitle}</h3>

            <div className="contact-item">
              <div className="contact-icon" style={{ color: 'var(--primary)' }}>
                <UserIcon />
              </div>
              <div className="contact-info">
                <div className="contact-label">{t.contactOwner}</div>
                <div className="contact-value">Aslam Pinjari</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" style={{ color: 'var(--primary)' }}>
                <PhoneIcon />
              </div>
              <div className="contact-info">
                <div className="contact-label">{t.contactPhone}</div>
                <div className="contact-value phone-big">
                  <a href="tel:+917399997789">7399997789</a>
                </div>
                <div className="contact-value" style={{ fontSize: '0.9rem', marginTop: '2px' }}>
                  <a href="tel:+919623777732">9623777732</a>&nbsp;|&nbsp;
                  <a href="tel:+919823017864">9823017864</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" style={{ color: 'var(--green)', background: 'rgba(37,211,102,0.12)', borderColor: 'rgba(37,211,102,0.25)' }}>
                <WAIcon />
              </div>
              <div className="contact-info">
                <div className="contact-label">WhatsApp</div>
                <div className="contact-value phone-big" style={{ color: 'var(--green)' }}>
                  <a href="https://wa.me/917399997789" target="_blank" rel="noopener">7399997789</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" style={{ color: 'var(--primary)' }}>
                <LocationIcon />
              </div>
              <div className="contact-info">
                <div className="contact-label">{t.contactAddress}</div>
                <div className="contact-value" style={{ fontSize: '0.88rem', lineHeight: '1.5' }}>
                  Sureshdada Jain Complex, Shop No.87,<br />
                  Dhule Road, Laddha Form, Ajanta Chowfully,<br />
                  <strong>Jalgaon, Maharashtra</strong>
                </div>
              </div>
            </div>
          </div>

          {/* CTA + Map */}
          <div className="reveal reveal-delay-1" ref={ref2}>
            <div className="contact-card" style={{ marginBottom: '16px' }}>
              <h3>{t.emergencyTitle}</h3>
              <div className="contact-cta-stack">
                <a
                  className="btn btn-primary"
                  href="tel:+917399997789"
                  id="contact-call-btn"
                  style={{ justifyContent: 'center', fontSize: '1.05rem', padding: '16px' }}
                  aria-label="Emergency towing call"
                >
                  <PhoneIcon />
                  {t.callNow} — 7399997789
                </a>
                <a
                  className="btn btn-whatsapp"
                  href="https://wa.me/917399997789?text=Hello%20Aslam%20Bhai%2C%20I%20need%20towing%20help!"
                  id="contact-wa-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ justifyContent: 'center', fontSize: '1.05rem', padding: '16px' }}
                  aria-label="WhatsApp for towing help"
                >
                  <WAIcon />
                  {t.whatsapp} — 7399997789
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="map-container">
              <iframe
                title="New Alfa Towing Van Service location — Jalgaon"
                src="https://maps.google.com/maps?q=20.999639,75.575111&z=15&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing New Alfa Towing Van Service location in Jalgaon"
                style={{ width: '100%', height: '100%', border: 0 }}
              />
            </div>
            <a
              className="btn btn-outline"
              href="https://www.google.com/maps/dir/?api=1&destination=20.999639,75.575111"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '12px',
                width: '100%',
                justifyContent: 'center',
                border: '1.5px solid var(--primary)',
                background: 'rgba(200, 16, 46, 0.04)',
                color: 'var(--text)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.95rem',
                fontWeight: '700'
              }}
            >
              {t.getDirections}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
